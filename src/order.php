<?php 
if($_POST) 
{ 
$to = "example@example.ru"; //куда отправлять письмо 
$subject = "Заявка на ремонт"; //тема 
$message = '<span style="font-weight:bold;color:#ff6600;font-size:18px;"><i>Ремонт!</i> </span><br><br> 
Услуга: <span style="font-weight:bold;color:#000;">'.$_POST['usluga'].'</br>
Имя: <span style="font-weight:bold;color:#000;">'.$_POST['name'].'</br>
Телефон: <span style="font-weight:bold;color:#000;">'.$_POST['tel'].'</br>
Комментарий: <span style="font-weight:bold;color:#000;">'.$_POST['comment'];
$headers = "Content-type: text/html; charset=UTF-8 \r\n"; 
$headers .= "From: info@my-site.ru\r\n"; // от кого, придумайте ящик или укажите почту своего сайта. 
$result = mail($to, $subject, $message, $headers); 

if ($result){ 
echo "<p style='text-transform: uppercase; 
text-transform: uppercase;
font-size: 1em;
background-color: #ffffff;
font-weight: 700;
padding: .4em;
box-shadow: 0 19px 49px 0px rgba(81,74,48,0.3);
text-align: center;
margin-top: 10px;
'>Сообщение успешно отправлено.</br> 
Скоро Вам перезвонят</p>"; 
} 
} 
?>