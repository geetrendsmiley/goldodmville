<?php
$recipient = 'info@odmvilleagency.com';

function posted_string($key, $max_length)
{
    $value = isset($_POST[$key]) ? $_POST[$key] : '';
    if (!is_string($value)) {
        return null;
    }

    $value = trim($value);
    if (strlen($value) > $max_length) {
        return null;
    }

    return $value;
}

function redirect_to_form($type, $status, $return_to)
{
    $allowed_pages = array(
        'index.html',
        'about-us.html',
        'meet-the-ceo.html',
        'services.html',
        'contact-us.html',
        'appointment.html',
    );
    if (!in_array($return_to, $allowed_pages, true)) {
        $return_to = 'index.html';
    }

    header('Cache-Control: no-store');

    header(
        'Location: ' . $return_to . '?form_type=' . rawurlencode($type) .
        '&form_status=' . rawurlencode($status),
        true,
        303
    );
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST');
    http_response_code(405);
    exit('Method not allowed.');
}

$type = posted_string('form_type', 20);
$return_to = posted_string('return_to', 40);
$return_to = $return_to === null ? '' : $return_to;
$form_config = array(
    'newsletter' => array(
        'return_to' => 'index.html',
        'subject' => 'Website newsletter request',
    ),
    'contact' => array(
        'return_to' => 'contact-us.html',
        'subject' => 'Website contact message',
    ),
    'appointment' => array(
        'return_to' => 'appointment.html',
        'subject' => 'Website appointment request',
    ),
);

if (!isset($form_config[$type])) {
    http_response_code(400);
    exit('Invalid form submission.');
}

if ($return_to === '') {
    $return_to = $form_config[$type]['return_to'];
}

$website = posted_string('website', 200);
if ($website === null || $website !== '') {
    http_response_code(400);
    exit('Invalid form submission.');
}

$email = posted_string('email', 254);
if (
    $email === null ||
    $email === '' ||
    filter_var($email, FILTER_VALIDATE_EMAIL) === false ||
    preg_match('/[\r\n]/', $email)
) {
    redirect_to_form($type, 'invalid', $return_to);
}

$message = "Form type: " . $type . "\nEmail: " . $email . "\n";
if ($type === 'newsletter') {
    $message .= "\nNewsletter subscription request.";
} else {
    $name = posted_string('name', 150);
    $phone = posted_string('phone', 60);
    if ($name === null || $name === '' || $phone === null) {
        redirect_to_form($type, 'invalid', $return_to);
    }

    $message .= "Name: " . $name . "\n";
    if ($phone !== '') {
        $message .= "Phone: " . $phone . "\n";
    }

    if ($type === 'contact') {
        $form_message = posted_string('message', 5000);
        if ($form_message === null || $form_message === '') {
            redirect_to_form($type, 'invalid', $return_to);
        }
        $message .= "\nMessage:\n" . $form_message;
    } else {
        $service = posted_string('service', 150);
        $date = posted_string('date', 30);
        $time = posted_string('time', 30);
        $project = posted_string('project', 5000);
        $allowed_services = array(
            'Artist Management',
            'A&R and Talent Discovery',
            'Artist Development / Bookings',
            'Events and Shows',
            'Club Tours',
            'Entertainment Project Management',
            'Branding and Promotions',
        );
        if (
            $service === null ||
            !in_array($service, $allowed_services, true) ||
            $date === null ||
            $time === null ||
            $project === null
        ) {
            redirect_to_form($type, 'invalid', $return_to);
        }
        $message .= "Service: " . $service . "\n";
        $message .= "Preferred date: " . $date . "\n";
        $message .= "Preferred time: " . $time . "\n";
        if ($project !== '') {
            $message .= "\nProject details:\n" . $project;
        }
    }
}

$headers = "From: ODM Ville Int <info@odmvilleagency.com>\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

if (
    !function_exists('mail') ||
    !mail($recipient, $form_config[$type]['subject'], $message, $headers)
) {
    error_log('Unable to hand off website form email. Form type: ' . $type);
    redirect_to_form($type, 'failed', $return_to);
}

redirect_to_form($type, 'submitted', $return_to);
