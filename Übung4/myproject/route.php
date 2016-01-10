<!DOCTYPE html>
<html lang="de">
	<head>
		<title></title>
		<meta charset="utf-8">
		<script src="js/jquery-2.1.4.min.js"></script>
		<script src="js/funktionen.js"></script>
	</head>
	<body>
		<form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']);?>" method="post">
			<table border='1'>
				<?php
					require_once "db_daten.php"; // Verbindungsdaten zur Datenbank
					$abfrage = $mysqli->query("Select etappe, region, kommentar FROM route;"); // SQL-Abfrage
					echo "<tr><th></th><th>Etappe:</th><th>Region:</th><th>Kommentar:</th></tr>";
					while($datensatz = $abfrage->fetch_array()) {
						echo	"<tr><td><input type='radio' name='auswahl'></td>"
								. "<td>"	. htmlspecialchars($datensatz['etappe'])	. "</td>"
								. "<td>"	. htmlspecialchars($datensatz['region'])	. "</td>"
								. "<td>"	. htmlspecialchars($datensatz['kommentar'])	. "</td></tr>\n";
					}
					$abfrage->close();
					$mysqli->close();
				?>
			</table>
			<a href="bearbeiten.php"><button id="bearbeiten">Bearbeiten</button></a>
			
			
			
			<button id="löschen">Löschen</button><button id="hinzufügen">Hinzufügen</button>
		</form>
	</body>
</html>