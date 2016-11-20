<?php
class Hash{
	private static $algo = '$6';
	private static $cost = '$rounds=10000';

	public static function uniqueSalt(){
		return substr(sha1(mt_rand()),0,30);
	}

	public static function hashFunction($password){
		return crypt($password,self::$algo.self::$cost.'$'.self::uniqueSalt());
	}
	public static function hashFunctionWithSalt($password,$SALT){
		return crypt($password,self::$algo.self::$cost.'$'.$SALT);
	}


}

?>