import java.util.Scanner;
import java.io.FileOutputStream;
import java.io.FileInputStream;
import java.io.File;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.io.FileNotFoundException;
import java.io.Console;
import java.util.Arrays;

import java.security.InvalidKeyException;
import java.security.SecureRandom;
import java.security.Key;
import java.security.InvalidAlgorithmParameterException;
import java.security.KeyStore;
import java.security.NoSuchAlgorithmException;

import javax.crypto.BadPaddingException;
import javax.crypto.Cipher;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
import javax.crypto.spec.GCMParameterSpec;
import javax.crypto.spec.IvParameterSpec;

import org.apache.commons.codec.binary.Base64;

public class SymmetricKeyWithKeyTool {
        private static String[] modes = {"CBC", "CTR","GCM" };
        private static String keystore_path;
        private static String key_id;
        private static String file_path;
        private static String output_file_path;
        private static int mode;
        private static int what;
        private static File inputFile;
        private static File outputFile;
        private static char passwordArray[];
        private static KeyStore keyStore;
        private static Key key;
        private static FileInputStream stream;
        private static Console console;
        private static Scanner reader;

        public static void main(String[] args) {
        try {
                keyStore = KeyStore.getInstance("JCEKS");
                stream = new FileInputStream("mykeystore.jks");
                reader = new Scanner( System.in );
                console = System.console();

                System.out.println("Jeżeli chcesz zaszyfrować plik, wpisz 1. W przeciwnym wypadku 2");
                what = reader.nextInt();

                System.out.println("Witaj, wybierz tryb szyfrowania( podaj numer ): ");
                        for( int i = 0 ; i < modes.length ; ++i ){
                                System.out.println( "\t" + (i+1) + ". " + modes[ i ] );
                        }
                        mode = reader.nextInt();
                        mode--;

                System.out.println("Podaj ścieżkę do keystore przechowującego klucz:");
                        keystore_path = reader.next();  
                        stream = new FileInputStream(keystore_path);


                System.out.println("Podaj ścieżkę pliku:");
                        file_path = reader.next();
                        inputFile = new File(file_path);
                        if( what == 1 )
                          output_file_path = file_path + ".enc";
                        else
                          output_file_path = file_path + ".dec";
                        outputFile = new File( output_file_path );
                        System.out.println(output_file_path);

                System.out.println("Podaj hasło do keystore: ");
                        passwordArray = console.readPassword();
                        keyStore.load(stream, passwordArray);

                System.out.println("Podaj id klucza: ");
                        key_id = reader.next();
                        key = keyStore.getKey(key_id, passwordArray);


                if( what == 1 )
                        encryptWithAESKey( key.getEncoded(), inputFile, outputFile, modes[ mode ]);
                else
                        decryptWithAESKey( key.getEncoded(), inputFile, outputFile , modes[ mode ]);
        } catch (Exception e) {
                e.printStackTrace();
        }

        }

        public static void encryptWithAESKey(byte[] key, File inputFile, File outputFil , String mode ) throws NoSuchAlgorithmException, NoSuchPaddingException,
        InvalidKeyException, IllegalBlockSizeException, BadPaddingException, UnsupportedEncodingException,
        FileNotFoundException, IOException, InvalidAlgorithmParameterException {
                String type = "AES/" + mode + "/PKCS5Padding";
                SecretKey secKey = new SecretKeySpec(key, "AES");
                System.out.println("Szyfrowanie...");

                Cipher cipher = Cipher.getInstance(type);

                FileInputStream inputStream = new FileInputStream( inputFile );
                byte[] inputBytes = new byte[(int) inputFile.length() ];
                inputStream.read( inputBytes );

                byte[] outputBytes;
                if( mode == "CBC" || mode == "CTR" ){
                        SecureRandom randomSecureRandom = SecureRandom.getInstance("SHA1PRNG");
                        byte[] iv = new byte[ cipher.getBlockSize() ];
                        System.out.println( cipher.getBlockSize() );
                        randomSecureRandom.nextBytes(iv);
                        IvParameterSpec ivParams = new IvParameterSpec(iv);
                        cipher.init(Cipher.ENCRYPT_MODE, secKey, ivParams);

                        outputBytes = cipher.doFinal( inputBytes );
                        FileOutputStream outputStream = new FileOutputStream( outputFile );

                        outputStream.write(  (Base64.encodeBase64String( outputBytes )).getBytes() );
                        String temp = new String( iv );
                        outputStream.write( (Base64.encodeBase64String( iv )).getBytes() );
                        inputStream.close();
                        outputStream.close();
                }
                else if( mode == "GCM" ){
                        SecureRandom random = SecureRandom.getInstanceStrong();
                        byte[] nonce = new byte[12];
                        random.nextBytes(nonce);
                        GCMParameterSpec spec = new GCMParameterSpec(128, nonce );
                        cipher.init(Cipher.ENCRYPT_MODE, secKey ,spec);

                        System.out.println("Podaj tag: ");
                        Scanner reader = new Scanner( System.in );
                        String tag = reader.next();
                        byte[] aad = tag.getBytes();
                        cipher.updateAAD(aad);

                        outputBytes = cipher.doFinal( inputBytes );
                        FileOutputStream outputStream = new FileOutputStream( outputFile );

                        outputStream.write(  (Base64.encodeBase64String( outputBytes )).getBytes() );
                        outputStream.write( (Base64.encodeBase64String( nonce )).getBytes() );
                        inputStream.close();
                        outputStream.close();
                }

        }

        public static void decryptWithAESKey(byte[] key, File inputFile, File outputFile, String mode) throws NoSuchAlgorithmException,
        NoSuchPaddingException, InvalidKeyException, IllegalBlockSizeException, BadPaddingException, 
        FileNotFoundException, IOException,InvalidAlgorithmParameterException  {
                String type = "AES/" + mode + "/PKCS5Padding";
                SecretKey secKey = new SecretKeySpec(key, "AES");

                Cipher cipher = Cipher.getInstance(type);

                FileInputStream inputStream = new FileInputStream( inputFile );
                byte[] inputBytes = new byte[(int) inputFile.length() ];
                inputStream.read( inputBytes );

                byte[] outputBytes;
                if( mode == "CBC" || mode =="CTR" ){

                        byte[] ciphertext = new byte[ (int) inputBytes.length - 24 ];
                        byte[] iv_temp = new byte[ (int) 24 ];

                        ciphertext = Arrays.copyOfRange( inputBytes, 0, inputBytes.length - 24 );
                        iv_temp = Arrays.copyOfRange( inputBytes, inputBytes.length-24, inputBytes.length-1);

                        IvParameterSpec ivParams = new IvParameterSpec(Base64.decodeBase64( iv_temp ));
                        cipher.init(Cipher.DECRYPT_MODE, secKey, ivParams); 
                        outputBytes = cipher.doFinal( Base64.decodeBase64( ciphertext ) );
                }
                else{
                        byte[] ciphertext = new byte[ (int) inputBytes.length - 16 ];
                        byte[] iv_temp = new byte[ (int) 16 ];

                        ciphertext = Arrays.copyOfRange( inputBytes, 0, inputBytes.length - 16 );
                        iv_temp = Arrays.copyOfRange( inputBytes, inputBytes.length-16, inputBytes.length);

                        GCMParameterSpec spec = new GCMParameterSpec( 128, Base64.decodeBase64( iv_temp ));

                        System.out.println("Podaj tag: ");
                        Scanner reader = new Scanner( System.in );
                        String tag = reader.next();
                        byte[] aad = tag.getBytes();

                        cipher.init(Cipher.DECRYPT_MODE, secKey, spec);
                        cipher.updateAAD(aad);

                        outputBytes = cipher.doFinal( Base64.decodeBase64( ciphertext ) );
                }



                FileOutputStream outputStream = new FileOutputStream( outputFile );
                outputStream.write( outputBytes );

                inputStream.close();
                outputStream.close();

        }
}