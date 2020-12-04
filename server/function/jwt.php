<?php
class JWT  {
    public static function decode($jwt , $key = null , $verify = true){
        $tks = explode('.' , $jwt);
        if(count($tks) != 3){
            throw new UnexpectedValueException('Wrong number of segments');
        }
        list($headb64 , $bodyb64 , $cryptob64) = $tks;
        if(null === ($header = JWT::jsonDecode(JWT::urlsafeB64Decode($headb64)))){
            throw new UnexpectedValueException('Invalid segments encoding');
        }
        if(null === ($payload = JWT::jsonDecode(JWT::urlsafeB64Decode($bodyb64)))){
            throw new UnexpectedValueException('Invalid segments encoding');
        }
        $sig = JWT::urlsafeB64Decode($cryptob64);
        if($verify){
            if(empty($header->alg)){
                throw new DomainException('empty algor');
            }
            if($sig != JWT::sign("$headb64.$bodyb64" , $key , $header->alg)){
                throw new UnexpectedValueException('Signatue veifacation failed');
            }
        }
        return $payload;

    }
    public static function encode ($payload , $key , $algo = 'HS256'){
        $header = ['typ' => 'JWT', 'alg' => $algo];
        $segments = [];
        $segments[] = JWT::urlsafeB64Encode(JWT::jsonEncode($header));
        $segments[] = JWT::urlsafeB64Encode(JWT::jsonEncode($payload));
        $signingInput = implode('.' , $segments);
        $signature = JWT::sign($signingInput , $key , $algo);
        $segments[] = JWT::urlsafeB64Encode($signature);
        return implode('.' , $segments);
    }
    public static function sign($msg , $key , $method = 'HS256'){
        $methods = [
            'HS256' => 'sha256',
            'HS384' => 'sha383',
            'HS512' => 'sha512',
        ];
        if(empty($methods[$method])){
            throw new DomainException('not support');
        }
        return hash_hmac($methods[$method] , $msg , $key , true);
    }
    public static function jsonDecode($input){
        $obj = json_decode($input);
        if(function_exists('json_last_error') && $error = json_last_error()){
            JWT::_handleJsonError($error);
        }
        else if($obj === 'null' && $input !== null) {
            throw new DomainException('Null result width not null input');
        }
        return $obj;
    }
    public static function jsonEncode($input){
        $json = json_encode($input);
        if(function_exists('json_last_error') && $error = json_last_error()){
            JWT::_handleJsonError($error);
        } else if($json === 'null' && $input !== null) {
            throw new DomainException('Null result width not null input');
        }
        return $json;
    }
    public static function urlsafeB64Decode($input){
        $remainder = strlen($input) % 4;
        if($remainder){
            $padlen = 4 - $remainder;
            $input .= str_repeat('=' , $padlen);

        }
        return base64_decode(strtr($input , '-' , '+/'));
    }
    public static function urlsafeB64Encode($input){
        return str_replace('=' , '' , strtr(base64_encode($input) , '+/' , '-'));

    }
    public static function _handleJsonError($err){
        $messages = [
            JSON_ERROR_DEPTH => 'Max stack depth exceeded',
            JSON_ERROR_CTRL_CHAR => 'Unexpected control chareacter found',
            JSON_ERROR_SYNTAX => 'Syntax error',
        ];
        throw new DomainException(
            isset($messages[$err])
            ? $messages[$err]
            : 'Unknow json error:' . $err
        );
    }
}
class JsonHelper {
    public static function getJson($key , $value){
        $out = [$key => $value];
        return json_encode($out);
    }
}