<?php
	require_once "db_daten.php";
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
			$sql_abfrage = $mysqli->query("SELECT id, etappe, region, datum, kommentar FROM route;"); 							// SQL-Abfrage
					while($datensatz = $sql_abfrage->fetch_array()) {
						$id			= htmlspecialchars($datensatz['id']);
						$etappe		= htmlspecialchars($datensatz['etappe']);
						$region		= htmlspecialchars($datensatz['region']);
						$datum		= htmlspecialchars($datensatz['datum']);
						$kommentar	= htmlspecialchars($datensatz['kommentar']);
						echo "<tr>"
							 . "<td>" . $etappe		. "</td>"
							 . "<td>" . $region		. "</td>"
							 . "<td>" . $datum		. "</td>"
							 . "<td>" . $kommentar	. "</td>"
							 . "<td>" . "<a href='tmp_bearbeiten.php?id="	. (int)$id . "&action=edit"		. "'>Bearbeiten</a>"	. "</td>"
							 . "<td>" . "<a href='tmp_delete.php?id="		. (int)$id . "&action=delete"	. "'>Löschen</a>"	. "</td>"
							 . "</tr>\n";

					}
					$sql_abfrage->close();
					$mysqli->close();
			?>
		</table>
		<!--action="<?php// echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>"-->
		<form method="post" action="tmp_submit.php">
			<table border='1'>
				<tr>
					<td><input name="etappe" type='text'></td>
					<td><input name="region" type='text'></td>
					<td><input name="datum" type='text'></td>
					<td><input name="kommentar" type='text'></td>
					<td><input name="action" type='hidden' value="add"></td>
					<td><input type='submit' value='Okay'></td>
				</tr>
			</table>
		</form>
	</body>
</html>