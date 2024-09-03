<?php
    
    $username = $_POST['username']
    $email = $_POST['email']
    $password = $_POST['password']
    $repeat-password = $_POST['repeat-password']
    $conn = new mysqli('localhost, 'root', 'dbconn');
    if($conn->connect_error){
        die('Connection Failed : '$conn->connect_error');
    }else{
        $stmt = $conn->prepare("insert into registration(username, email, password, repeat-password) values(?,?,?,?)");
        $stmt->bind_param("ssss",$username, $email, $password, $repeat-password)
        $stmt->execute();
        echo "Registration Successful";
        $stmt->close()
        $conn->close()
    }


?>