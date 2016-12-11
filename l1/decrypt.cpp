#include <iostream>
#include <cstdlib>
#include <pthread.h>
#include <cmath>

#include <openssl/conf.h>
#include <openssl/evp.h>
#include <openssl/err.h>

#include <cryptopp/aes.h>
#include <cryptopp/modes.h>
#include <cryptopp/base64.h>
#include <cryptopp/hex.h>

#define NUM_THREADS 5
#define ulong unsigned long 
using namespace std;
using namespace CryptoPP;

struct data{
	int nrOfThread;
	string suffix;
	string iv;
	string str_in;
	int mode; // nr of bits to decrypt
	int constant; //
	ulong start; 
};

int nrOfThreads = 1; 
unsigned long int nrOfKeys;
unsigned long int scope;

void * PrintHello( void *threadid );
void handleErrors(){}
void transformFromHex( string& source, string& destination );
void  transformFromBase64( string& source, string& destination);

string encrypt(const string& str_in, const string& key, const string& iv);
string decrypt(const string& str_in, const string& key, const string& iv);

int hexToNum( char temp );
int decrypt(unsigned char *ciphertext, int ciphertext_len, unsigned char *key,
	unsigned char *iv, unsigned char *plaintext);

ulong convert(ulong start, int  mode , int constant );

double alnum( unsigned char * tab , int length );

int main(int argc, char *argv[]){

	int rc;
	ulong start = 0;
	pthread_t threads[ NUM_THREADS ];

	if( argc == 2 ){
		sscanf(argv[1], "%lu", &start);
	}

	string hexkey;// = "5fa7c3d988dabe490864aa61abf4932d45812033899869582f21d79";
	string hexiv;// = "b274e0d58150710c3f3dc06eb8eba10f";
	string str_in;// = "CHdbC59Jr2I8oRKHu3ejvgAH8kOOt972XCrcNqbbkWLuVz20adeYq9AduH0Y954WstFetNzt7CfzZ/nDGWLOrw==";
	string key;
	string iv;
	string in;
	char temp;
	int mode ;

	cin >> hexkey;
	cin >> hexiv;
	cin >> str_in;
	cin >> mode;
	if( mode % 8 != 0 ){
		temp = hexkey[ 0 ];
		hexkey = hexkey.substr( 1, hexkey.length() -1 );
		cout << hexkey <<" "<< hexkey.length()<< endl;
	}

	transformFromHex( hexiv, iv );
	transformFromHex( hexkey, key );
	transformFromBase64( in, str_in );


	nrOfKeys = 0 ;
	for( int i = 0 ; i < mode ; ++i )		
		nrOfKeys = nrOfKeys*2 + 1 ;
		

	scope = nrOfKeys / nrOfThreads ;

	for( int i = 0; i < nrOfThreads ; ++i ){
		cout << "main() : creating thread, " << i << endl;
		data *input = new data;

		input->suffix = key;
		input->iv = iv;
		input->str_in = in;
		input->nrOfThread = i;
		input->mode = mode;
		input->start = start;
		if( mode % 8 != 0) input->constant = hexToNum( temp );
		else input->constant = 0;
		rc = pthread_create(&threads[i], NULL , PrintHello, (void *)input );
		if(  rc ){
			cout << "Error: unable to create  thread, " << rc << endl;
			exit( - 1 );
		}
	}
	pthread_exit( NULL );
}




//*****************************************************************************
void * PrintHello( void *threadid ){
	data * input = (data*) threadid;
	long tid = input->nrOfThread;
	ulong *start = new ulong; 
	ulong *stop = new ulong; 
	int decryptedtext_len;
	int constant = input->constant; 
	int mode = input->mode;
	int bits = (mode + 4)/8;
	ulong *help = new ulong;

	double x = 0;

	unsigned char temp[8];
	unsigned char decryptedtext[ 256 ];
	unsigned char * iv = new unsigned char[ 16 ];
	unsigned char * key = new unsigned char[ 32 ];
	unsigned char * ciphertext = new unsigned char[ 1024];

	for( int i = 0 ; i < (int)input->iv.length() ; ++i )iv[ i ]=input->iv[ i ];
	for( int i = 0 ; i < (int)input->suffix.length() ; ++i )key[ i + bits  ]=input->suffix[ i ];
	for( int i = 0 ; i < (int)input->str_in.length() ; ++i ) ciphertext[ i ] = input->str_in[ i ];

	*start = input->start;
	*stop = (tid + 1 )*scope;


	cout << "Wątek " << tid << " wystartował!" << endl;
	cout << "Mój zakres: " << *start << " do " << *stop << endl;
	for( ;  *start <= *stop ; (*start)++ ){
		if( mode % 8 != 0 ){
			*help = convert((*start), mode , constant );
			memcpy( temp, help, 8);
			memcpy( key ,temp, bits);
		}
		else{
			memcpy( temp, start, 8);
			memcpy( key ,temp, bits);
		}

		decryptedtext_len = decrypt(ciphertext, input->str_in.length(), key, iv,
			decryptedtext);

		if( decryptedtext_len  != -1 ){
			decryptedtext [ decryptedtext_len ] = '\0';
		}

	    if( decryptedtext_len != -1  
	    	and (x = alnum(decryptedtext,decryptedtext_len )) > 0.5 ){

	    	cout << endl;
	    	cout << "Znalazłem coś. To wygląda podejrzanie! " << endl;
	    	for( int i = 0 ; i < decryptedtext_len ; ++i ){
	    		cout << decryptedtext[ i ] ;
	    	}
	    	cout << endl;
	    	cout << "Liczba: " <<*start << endl;
	    	cout << "Długość: " << decryptedtext_len << endl;
 	    	cout << "alnum: " << x<< endl;;
 	    	cout << endl;

 	    	string out( (char*)key );
 	    	string result;
 	    	StringSource dec( out, true, 
 	    		new HexEncoder(
 	    			new StringSink( result )
 	    		));

 	    	cout << result<< endl;

	    }

		if( tid == 0  and (*start) % 10000000 == 0 ){
			cout << "Wątek 0 wykonał " << (double(*start)/double( scope ))*100.0 << "% swojej pracy. Obecna liczba: "<<(*start)<<"\n";
		}
	}
	pthread_exit(NULL);
}
//*****************************************************************************




//*****************************************************************************
int decrypt(unsigned char *ciphertext, int ciphertext_len, unsigned char *key,
unsigned char *iv, unsigned char *plaintext)
{
	EVP_CIPHER_CTX *ctx;
	bool cond = true;

	int len;

	int plaintext_len;

	if(!(ctx = EVP_CIPHER_CTX_new())){
		cond = false;
	}

	if(1 != EVP_DecryptInit_ex(ctx, EVP_aes_256_cbc(), NULL, key, iv)){
		cond = false;
	}

	if(1 != EVP_DecryptUpdate(ctx, plaintext, &len, ciphertext, ciphertext_len)){
		cond = false;
	}
	plaintext_len = len;

	if(1 != EVP_DecryptFinal_ex(ctx, plaintext + len, &len)){
		cond = false;
	}

	EVP_CIPHER_CTX_free(ctx);

	if ( cond == false ) return - 1;
	return plaintext_len;
}
//*****************************************************************************


//*****************************************************************************
double alnum( unsigned char * tab , int length ){
	int counter = 0; 
	for( int i = 0 ; i < length ; ++i ){
		if( isalnum ( tab[ i ] ) ) counter++;
	}
	return double( counter )/ double ( length );
}
//*****************************************************************************



//*****************************************************************************
ulong convert(ulong start, int  mode , int constant ){
	ulong help = 0;
	for( int i = 0 ; i < mode - 4 ; ++i ) help = (help<<1) + 1;

	ulong sth = (ulong)(constant*pow(2,mode-4) );
 	ulong result = sth + (ulong)((start>>(mode-4))<<(mode)) + (help&start);

 	
	return result;
}
//*****************************************************************************



//*****************************************************************************
int hexToNum( char temp ){
	int result = int(temp);
	if( result <= 57 ){
		result = int( temp ) - 48;
	}
	else if( 65 <= result and result <= 70 ) {
		result -= 55;
	}
	else if( 97 <= result and result <= 102 ){
		result -= 87;
	}
	else{
		cout << "Wystąpił błąd podczas konwersji znaku heksydecymalnego do liczby\n"; 
	}
	return result;
}
//*****************************************************************************



//*****************************************************************************
void transformFromHex( string& source, string& destination ){
   	StringSource x1( source, true,
        	new HexDecoder(
        		new StringSink( destination )
        	)
    	);	
}
//*****************************************************************************



//*****************************************************************************
void  transformFromBase64( string& source, string& destination){
	StringSource x3 ( source, true,
    		new Base64Decoder(
    			new StringSink( destination )
    		)
    	);
}
//*****************************************************************************

