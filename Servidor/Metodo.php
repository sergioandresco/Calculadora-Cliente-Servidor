<?php

if($_POST){
    if(isset($_POST['operacion'])){
        $operador = $_POST['operacion'];
        if($operador == '+'){
            $num1 = $_POST['parte1'];
            $num2 = $_POST['parte2'];
            $rta = $num1 + $num2;
            echo $rta;
        }
        
    }
}

//$dato1 = $_POST['enviar'];
//$dato2 = $_POST['campo2'];

/*
if(isset($_POST['enviar'])){
    echo json_encode('Enviado correctamente');
}else{
    echo json_encode('Ingresa numeros');
}

/*
if($_POST){
    if(isset($_POST['igual'])){
        echo 'SI LLEGO LA INFORMACION';
    }else{
        echo 'no llego nada';
    }
}
*/


?>
