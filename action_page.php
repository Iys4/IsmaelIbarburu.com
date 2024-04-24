<?php

$name = $_POST["name"];
$email = $_POST["email"];
$razon = $_POST["razon"];
$subject = $_POST["subject"];

require "vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;