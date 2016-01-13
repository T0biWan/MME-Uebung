<?php
	require_once "db_daten.php";
	$host = htmlspecialchars($_SERVER["HTTP_HOST"]);
	$uri  = rtrim(dirname(htmlspecialchars($_SERVER["PHP_SELF"])), "/\\");
	$extra = "route.php";
	
	if(isset($_POST['action'])) {
		$action		= htmlspecialchars($_POST['action']);
		$id			= htmlspecialchars($_POST['id']);
		$etappe		= htmlspecialchars($_POST['etappe']);
		$region		= htmlspecialchars($_POST['region']);
		$datum		= htmlspecialchars($_POST['datum']);
		$kommentar	= htmlspecialchars($_POST['kommentar']);
	}
	elseif(isset($_GET['action'])) {
		$action		= htmlspecialchars($_GET['action']);
	}

	switch($action) {
		case "edit":
			$mysqli->query("UPDATE route SET etappe='$etappe', region='$region', datum='$datum', kommentar='$kommentar' WHERE id='$id'");
			break;
			
		case "delete":
			$id				= htmlspecialchars($_GET['id']);
			$sql_abfrage	= $mysqli->query("DELETE FROM route WHERE id = $id;");
			break;
			
		case "add": echo $action;
//			$sql_abfrage = $mysqli->query("SELECT etappe, region, datum, kommentar FROM route WHERE id='$id';");
//			$datensatz = $sql_abfrage->fetch_array();
//			$etappe		= htmlspecialchars($datensatz['etappe']);
//			$region		= htmlspecialchars($datensatz['region']);
//			$datum		= htmlspecialchars($datensatz['datum']);
//			$kommentar	= htmlspecialchars($datensatz['kommentar']);
			break;
		
		default:
			break;
	}
	$mysqli->close();
	header("Location: http://$host$uri/$extra");
?>
