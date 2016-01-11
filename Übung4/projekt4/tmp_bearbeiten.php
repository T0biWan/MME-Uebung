<?php
	require_once "db_daten.php";
	if(isset($_GET["id"]) && isset($_GET["action"])) {
?>
<!DOCTYPE html>
<html lang="de">
	<head>
		<title>Tolle Tabelle</title>
		<meta charset="utf-8">
		<meta id="#" content="#">
		<link rel="stylesheet" href="css/merge.css">
		<script src=""></script>
	</head>
	<body>
		<table border='1'>
			<tr><th>Etappe:</th><th>Region:</th><th>Datum:</th><th>Kommentar:</th><th></th><th></th></tr>
			<?php
				require_once "db_daten.php"; 																						// Verbindungsdaten zur Datenbank
				$sql_abfrage = $mysqli->query("Select id, etappe, region, datum, kommentar FROM route;"); 							// SQL-Abfrage
						while($datensatz = $sql_abfrage->fetch_array()) {
							$id = htmlspecialchars($datensatz['id']);
							$etappe = htmlspecialchars($datensatz['etappe']);
							$region = htmlspecialchars($datensatz['region']);
							$datum = htmlspecialchars($datensatz['datum']);
							$kommentar = htmlspecialchars($datensatz['kommentar']);
							if($_GET["id"] == $id) {
								echo "<tr>"
									 . "<td>"?><input type='text' value="<?php echo $etappe; ?>")><?php echo "</td>"
									 . "<td>"?><input type='text' value="<?php echo $region; ?>")><?php echo "</td>"
									 . "<td>"?><input type='text' value="<?php echo $datum; ?>")><?php echo "</td>"
									 . "<td>"?><input type='text' value="<?php echo $kommentar; ?>")><?php echo "</td>"
									 . "<td>Ok" . "</td>"
									 . "<td>Löschen" . "</td>"
									 . "</tr>\n";
							} else {
								echo "<tr>"
									 . "<td>" . $etappe		. "</td>"
									 . "<td>" . $region		. "</td>"
									 . "<td>" . $datum		. "</td>"
									 . "<td>" . $kommentar	. "</td>"
									 . "<td>" . "<a href='tmp_bearbeiten.php?id="	. (int)$id . "&action=edit" . "'>Bearbeiten</a>"	. "</td>"
									 . "<td>" . "<a href='tmp_delete.php?id="		. (int)$id . "&action=delete" . "'>Löschen</a>"	. "</td>"
									 . "</tr>\n";
							}
						}
						$sql_abfrage->close();
						$mysqli->close();
			?>
		</table>
	</body>
</html>
<?php
	} // Schließende Klammer der if-Bedingung (Sicherheitsabfrage)
?>