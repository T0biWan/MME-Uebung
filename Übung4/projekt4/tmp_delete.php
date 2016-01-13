<?php
	require_once "db_daten.php";
	if(isset($_GET["id"])) 		echo "ID: "		. $_GET["id"];
	if(isset($_GET["action"]))	echo "<br>Action: "	. $_GET["action"];
?>