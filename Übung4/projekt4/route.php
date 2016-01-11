<!--================================================================================================
    BESCHREIBUNG

    Datei: route.php
    Datum: 11.01.2016
    Autor: Tobi Wan
=================================================================================================-->

<!DOCTYPE html>
<html lang="de">

<!--================================================================================================
    Head    
=================================================================================================-->

	<head>
		<title>Tolle Tabelle</title>
		<meta charset="utf-8">
		<meta id="#" content="#">
		<link rel="stylesheet" href="css/merge.css">
		<script src=""></script>
	</head>
	
<!--================================================================================================
    Body   
=================================================================================================-->

	<body>
		<table border='1'>
			<tr><th>Etappe:</th><th>Region:</th><th>Datum:</th><th>Kommentar:</th><th></th><th></th></tr>
			<?php
				require_once "db_daten.php"; 																						// Verbindungsdaten zur Datenbank
				$sql_abfrage = $mysqli->query("Select id, etappe, region, datum, kommentar FROM route;"); 							// SQL-Abfrage
						while($datensatz = $sql_abfrage->fetch_array()) {
							echo	"<tr>"
									. "<td>" . htmlspecialchars($datensatz['etappe'])		. "</td>"
									. "<td>" . htmlspecialchars($datensatz['region'])		. "</td>"
									. "<td>" . htmlspecialchars($datensatz['datum'])		. "</td>"
									. "<td>" . htmlspecialchars($datensatz['kommentar'])	. "</td>"
									. "<td>" . "<a href='tmp_bearbeiten.php?id="	. (int)htmlspecialchars($datensatz['id']) . "&action=edit" . "'>Bearbeiten</a>"	. "</td>"
									. "<td>" . "<a href='tmp_delete.php?id="		. (int)htmlspecialchars($datensatz['id']) . "&action=delete" . "'>Löschen</a>"	. "</td>"
									. "</tr>\n";
						}
						$sql_abfrage->close();
						$mysqli->close();
			?>
		</table>
	</body>
</html>

<!--================================================================================================
    
    E N D E
    
=================================================================================================-->