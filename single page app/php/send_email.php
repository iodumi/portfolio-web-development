<?php

if (isset($_POST['submit'])) {
	
  $name=$_POST["name"];
  $email=$_POST["email"];
  $message=$_POST["message"];

  $mailTo = "ioana.dumitrache2010@gmail.com";
  
  $subject = "From webpage";
  
  mail($mailTo, $subject, $message);

}

/*use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'path/to/PHPMailer/src/Exception.php';
require 'path/to/PHPMailer/src/PHPMailer.php';
require 'path/to/PHPMailer/src/SMTP.php';

$mail=new PHPMailer(true);

$mail->isSMTP();
$mail->SMTPAuth=true;

$mail->Host="smtp.example.com";
$mail->SMTPSecure=PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port=587;

$mail->Username="you@example.com";
$mail->Password="password";

$mail->setForm($email, $name);
$mail->addAddress("ioana.dumitrache2010@gmail.com");

$mail->Body=$message;

$mail->send();

echo "email sent";*/

?>