<?php

        header('Access-Control-Allow-Origin: *');
        $conn = mysqli_connect('localhost', 'root', '', 'user');

        if(mysqli_connect_error()){
            echo mysqli_connect_error();
            exit();
        }

        else{
           
           $name = $_POST['name'];
           $email = $_POST['email'];
           $mobile = $_POST['mobile'];
           $location = $_POST['location'];
           $mode = $_POST['mode'];

           $sql = "INSERT INTO details(name,email,mobile,location,mode) VALUES ('$name','$email','$mobile','$location','$mode')";
           $res = mysqli_query($conn,$sql);

           if($res){
            echo "true";
           }

           else{
            echo "false";
           }

        }
        $conn->close();
?>