
<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require_once __DIR__ . '/../config/mail.php';

function sendEmail($recipient, $subject, $message)
{
    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();

        $mail->Host = $_ENV['MAIL_HOST'];
        $mail->SMTPAuth = true;

        $mail->Username = $_ENV['MAIL_USERNAME'];
        $mail->Password = $_ENV['MAIL_PASSWORD'];

        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port = (int) $_ENV['MAIL_PORT'];

        $mail->setFrom(
            $_ENV['MAIL_FROM'],
            $_ENV['MAIL_FROM_NAME']
        );

        $mail->addAddress($recipient);

        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body = $message;
        $mail->AltBody = strip_tags($message);

        $mail->send();

        return true;

    } catch (Exception $e) {

        error_log('Email error: ' . $mail->ErrorInfo);

        return false;
    }
}
