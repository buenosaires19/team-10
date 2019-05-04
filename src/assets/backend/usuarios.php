<?php

class Alumno{
    public $nombre;
    public $apellido;
    public $dni;
    public $mail;
    public $provincia;
    public $localidad;
    public $nivelEstudio;
    public $contrasena;
    public $nacimiento;
    public $telefono;
    public $sexo;
    public $id;

    public function __construct($id,$nombre,$apellido,$dni,$mail,$provincia,$localidad,$nivelestudio,$contrasena,$nacimiento,$telefono,$sexo){
        $this->id = $id;
        $this->nombre = $nombre;
        $this->apellido = $apellido;
        $this->dni = $dni;
        $this->mail = $mail;
        $this->provincia = $provincia;
        $this->localidad = $localidad;
        $this->nivelEstudios = $nivelestudio;
        $this->contrasena = $contrasena;
        $this->nacimiento = $nacimiento;
        $this->telefono = $telefono;
        $this->sexo = $sexo;
    }

    public static function TraerJson($alumno){
        $retorno = null;
        $path = "../mock_data/alumnos.json";
        $archivo = fopen($path,"r");

        $leido = fread($archivo,filesize($path));

        $json = json_decode($leido);

        foreach ($json as $clave => $aux) {
            if($alumno->id == $aux->id){
                $retorno = $aux;
                break;
            }
        }

        return $retorno;
    }

    public static function AgregarJson($empledo){
        $retorno = false;

        $path = "../mock_data/alumnos.json";
        $archivo = fopen($path,"w");

        $retorno = fwrite($archivo,",".json_encode($empledo));

        return $retorno;
    }

    /*public static function Eliminar($id){
        $retorno = false;
            $conexion = new PDO('mysql:host=localhost;dbname=;', "", "")
            if($conexion != null){
                $sql = "DELETE FROM  WHERE id= :id";
                $recupero = $conexion->RetornarConsulta($sql);
                $recupero->bindValue(":id",$id,PDO::PARAM_INT);
                $retorno = $recupero->execute();
            }
            else {
                echo "no se pudo establecer conexion con la base";
            }
       return $retorno; 
    }*/
    /*public static function Agregar($obj){
        $retorno = false;
            $conexion = AccesoDatos::DameUnObjetoAcceso();
            if($conexion != null){
                $sql = "INSERT INTO usuarios (correo,clave,nombre,apellido,perfil) VALUES (:correo,:clave,:nombre,:apellido,:perfil)";
                $recupero = $conexion->RetornarConsulta($sql);
                $recupero->bindValue(':correo', $obj->correo, PDO::PARAM_STR);
                $recupero->bindValue(':clave', $obj->clave, PDO::PARAM_STR);
                $recupero->bindValue(':nombre', $obj->nombre, PDO::PARAM_STR);
                $recupero->bindValue(':apellido', $obj->apellido, PDO::PARAM_STR);
                $recupero->bindValue(':perfil', $obj->perfil, PDO::PARAM_INT);
                $retorno = $recupero->execute();
 
            }
            else {
                echo "no se pudo establecer conexion con la base";
            }
       return $retorno; 
    }*/


}
