<?php

class Profesional{
    public $nombre;
    public $apellido;
    public $dni;
    public $mail;
    public $provincia;
    public $localidad;
    public $categoria;
    public $contrasena;
    public $nacimiento;
    public $telefono;
    public $sexo;
    public $id;
    public $videoChat;
    public $presencial;
    public $chat;

    public function __construct($id,$nombre,$apellido,$dni,$mail,$provincia,$localidad,$categoria,$contrasena,$nacimiento,$telefono,$sexo,$videoChat,$chat,$presencial){
        $this->id = $id;
        $this->nombre = $nombre;
        $this->apellido = $apellido;
        $this->dni = $dni;
        $this->mail = $mail;
        $this->provincia = $provincia;
        $this->localidad = $localidad;
        $this->categoria = $categoria;
        $this->contrasena = $contrasena;
        $this->nacimiento = $nacimiento;
        $this->telefono = $telefono;
        $this->sexo = $sexo;
        $this->videoChat = $videoChat;
        $this->presencial = $presencial;
        $this->chat = $chat;

    }

    public static function TraerJson($profesional){
        $retorno = null;
        $path = "../mock_data/profesional.json";
        $archivo = fopen($path,"r");

        $leido = fread($archivo,filesize($path));

        $json = json_decode($leido);

        foreach ($json as $clave => $aux) {
            if($profesional->id == $aux->id){
                $retorno = $aux;
                break;
            }
        }

        return $retorno;
    }

    public static function AgregarJson($profesional){
        $retorno = false;

        $path = "../mock_data/profesional.json";
        $archivo = fopen($path,"w");

        $retorno = fwrite($archivo,json_encode($profesional));

        return $retorno;
    }

    

}
