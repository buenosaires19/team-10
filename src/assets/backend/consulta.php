<?php

class Pregunta{
    public $id;
    public $pregunta;
    public $idAlumno;
    public $idProfesional;
    public $publico;
    public $respuesta;
    public $positivo;
    public $fecha;

    public function __construct($id,$pregunta,$idalum,$idprofe,$fecha,$positivo,$respuesta){
        $this->id = $id;
        $this->pregunta = $pregunta;
        $this->idAlumno = $idalum;
        $this->idProfesional = $idprofe;
        $this->publico = $publico;
        $this->respuesta = $respuesta;
        $this->positivo = $positivo;
        $this->fecha = $fecha;
    }

    public static function TraerJson($pregunta){
        $retorno = null;
        $path = "../mock_data/preguntas.json";
        $archivo = fopen($path,"r");

        $leido = fread($archivo,filesize($path));

        $json = json_decode($leido);

        foreach ($json as $clave => $aux) {
            if($pregunta->id == $aux->id){
                $retorno = $aux;
                break;
            }
        }

        return $retorno;
    }

    public static function AgregarJson($pregunta){
        $retorno = false;

        $path = "../mock_data/pregunta.json";
        $archivo = fopen($path,"w");

        $retorno = fwrite($archivo,json_encode($pregunta));

        return $retorno;
    }


    public static function EliminarBD($id){
        $retorno = false;
            $conexion = new PDO('mysql:host=localhost;dbname=base_bd;', "root", "")

            $sql = "DELETE FROM chat WHERE id= :id";
                $recupero = $conexion->prepare($sql);
                $recupero->bindValue(":id",$id,PDO::PARAM_INT);
                $retorno = $recupero->execute();

       return $retorno; 
    }
    public static function AgregarBD($obj){
        $retorno = false;
            $conexion = new PDO('mysql:host=localhost;dbname=base_bd;', "root", "");

            $sql = "INSERT INTO chat (tipo,idAlumno,idProfesional,pregRes,fin,fecha) VALUES (:tipo,:idAlumno,:idProfesional,:pregRes,:fin,:fecha)";
                $recupero = $conexion->RetornarConsulta($sql);
                
                $recupero->bindValue(':tipo', $obj->correo, PDO::PARAM_INT);
                $recupero->bindValue(':idAlumno', $obj->clave, PDO::PARAM_INT);
                $recupero->bindValue(':idProfesional', $obj->nombre, PDO::PARAM_INT);
                $recupero->bindValue(':pregRes', $obj->apellido, PDO::PARAM_STR);
                $recupero->bindValue(':fin', $obj->perfil, PDO::PARAM_INT);
                $recupero->bindValue(':fecha', $obj->perfil, PDO::PARAM_DATE);

                $retorno = $recupero->execute();

       return $retorno; 
    }
}
