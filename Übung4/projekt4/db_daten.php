<!--Dieses Skript stellt die Verbindungsdaten zur Datenbank bereit-->
<?php
	$mysqli = new mysqli("localhost", "root", "", "mme");
	if($mysqli->connect_error) {
		echo "<script>alert('Verbindung zur Datenbank konnte nicht hergestellt werden.')</script>";
	}
?>