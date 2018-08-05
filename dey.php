<?php
$servername = "localhost";
$username = "coursojy_cdwide";
$password = "Mohsin78^";
$dbname = "coursojy_cd-wide";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
// date_default_timezone_set('Asia/Kolkata');
// $today = date("F j, Y, g:i a T");
if (function_exists('date_default_timezone_set'))
{
  date_default_timezone_set('Asia/Kolkata');
}

$today = date('Y-m-d h-i-s');
// $date = date('Y-m-d H:i:s');
$sql = "INSERT INTO dey (first, last, github, email, wno, gender, batch, college, city, dt)
VALUES ('$_POST[fname]','$_POST[lname]','$_POST[gurl]','$_POST[pemail]','$_POST[whatsapp]','$_POST[gender]','$_POST[batch]','$_POST[coll]','$_POST[city]','$today')";

if ($conn->query($sql) === TRUE) {
    // echo "New record created successfully";
    $message = "PAYMENT SUCCESSFULL";
echo "<script type='text/javascript'>alert('$message');</script>";
    
}
else
{
    echo ''.mysql_error();
}

$conn->close();
?>
