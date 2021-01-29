<?php
/*
require("phpmailer/PHPMailer.php");
require("phpmailer/SMTP.php");
require("phpmailer/Exception.php");

  
// Instantiation and passing `true` enables exceptions
// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$email = $_POST['phone'];
$text = $_POST['text'];
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    //Server settings
    $mail->SMTPDebug = 0;                                       // Enable verbose debug output
    $mail->isSMTP();                                            // Set mailer to use SMTP
    $mail->Host       = 'ssl://smtp.gmail.com';  // Specify main and backup SMTP servers
    $mail->SMTPAuth   = false;                                   // Enable SMTP authentication
    $mail->Username   = 'makarovt_t@mail.ru';                     // SMTP username
    $mail->Password   = '19941994exelent';                               // SMTP password
    $mail->SMTPSecure = 'ssl';                                  // Enable TLS encryption, `ssl` also accepted
    $mail->Port       = 465;                                    // TCP port to connect to

    //Recipients
    $mail->addAddress('makarovt_t@mail.ru');     // Add a recipient
    $mail->setFrom('info@bzcekh.ru', 'Admin');

    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Here is the subject';
    $mail->Body    = 'This is the HTML message body <b>in bold!</b>';
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
*/

$name = $_POST['name'];
$phone = $_POST['phone'];
$type_build = $_POST['type_build'];
$target_build = $_POST['target_build'];

// Сообщение
$message = "Имя: ".$name."\r\nТелефон: ".$phone."\r\nТип строения: ".$type_build."\r\nНазначение: ".$target_build;

// На случай если какая-то строка письма длиннее 70 символов мы используем wordwrap()
$message = wordwrap($message, 70, "\r\n");

// Отправляем

// mail('rop@fabricant.ru, makarovt_t@mail.ru', 'My Subject', $message);
mail('mr.offlain@mail.ru', 'My Subject', $message);
function goback()
{
    header("Location: {$_SERVER['HTTP_REFERER']}");
    exit;
}
  
goback();
?>
