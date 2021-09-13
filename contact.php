<?php
$var = mysqli_connect('localhost','root','','ebpaintDB');
mysqli_select_db($var, 'ebpaintDB');

$name= $_POST['name'];
$email= $_POST['email'];
$subject= $_POST['subject'];
$message= $_POST['message'];

$query = "INSERT INTO `contact` (`name`, `email`, `subject`, `message`) VALUES ('$name', '$email', '$subject', '$message')";
$result = mysqli_query($var, $query);

?>