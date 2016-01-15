<!--================================================================================================
    BESCHREIBUNG

    Datei: route_OnePage.php
    Datum: 11.01.2016
    Autor: Tobi Wan
=================================================================================================-->



<!--================================================================================================

    Start

=================================================================================================-->
<!--fold-->
<!DOCTYPE html>
<html lang="de">


<!--end-->
<!--================================================================================================

    Head

=================================================================================================-->
<!--fold-->
	<head>
		<title>Tolle Tabelle</title>
		<meta charset="utf-8">
		<meta id="#" content="#">
		<link rel="stylesheet" href="css/merge.css">
		<script src=""></script>
	</head>


<!--end-->
<!--================================================================================================

    Body

=================================================================================================-->
<!--fold-->
	<body>
		<?php
			require_once "db_daten.php";
			if(isset($_GET["action"])) {
				if($_GET["action"] == "add") {
		?>
					<table border='1'>
						<tr><th>Etappe:</th><th>Region:</th><th>Datum:</th><th>Kommentar:</th><th></th><th></th></tr>
						<?php
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
											 . "<td>" . "<a href='route_OnePage.php?id="	. (int)$id . "&action=edit"		. "'>Bearbeiten</a>"	. "</td>"
											 . "<td>" . "<a href='tmp_submit.php?id="	. (int)$id . "&action=delete"	. "'>Löschen</a>"	. "</td>"
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
						<td><input name="etappe" type='text' placeholder="Etappe"></td>
	<!--					<td><input name="region" type='text'></td>-->
						<td>
							<select name="region">
								<?php
									$nordinsel	= array("Auckland", "Northland", "Coromandel Peninsula", "Waikato und King Country", "Bay Of Plenty", "East Coast", "Zentrale Hochebene",
													  "Taranaki", "Whanganui und Palmerston North", "Wellington");
									$suedinsel	= array("Marlborough und Nelson", "Christchurch und Canterbury", "Otago", "Fjordland und Southland",
													  "Queenstown", "West Coast");

									echo "<option value='' disabled selected hidden>Region</option>";	//Platzhalter
									echo "<optgroup label='Nordinsel'>";								// Unterteilung
									foreach($nordinsel as $element) {
										echo "<option value='$element'>$element</option>\n";
									}
									echo "</optgroup>";
									echo "<optgroup label='Südinsel'>";									// Unterteilung
									foreach($suedinsel as $element) {
										echo "<option value='$element'>$element</option>\n";
									}
									echo "</optgroup>";
								?>
							</select>
						</td>
						<td><input name="datum" type='text' placeholder="Datum"></td>
						<td><input name="kommentar" type='text' placeholder="Kommentar"></td>
						<td><input name="action" type='hidden' value="add"></td>
						<td><input type='submit' value='Okay'></td>
						<td><a href="route_OnePage.php">Abbrechen</a></td>
					</tr>
				</table>
			</form>
		<?php
			}
				if($_GET["action"] == "edit") {
		?>
					<form method="post" action="tmp_submit.php">
						<table border='1'>
							<tr><th>Etappe:</th><th>Region:</th><th>Datum:</th><th>Kommentar:</th><th></th><th></th></tr>
							<?php
								$sql_abfrage = $mysqli->query("SELECT id, etappe, region, datum, kommentar FROM route;"); 							// SQL-Abfrage
										while($datensatz = $sql_abfrage->fetch_array()) {
											$id			= htmlspecialchars($datensatz['id']);
											$etappe		= htmlspecialchars($datensatz['etappe']);
											$region		= htmlspecialchars($datensatz['region']);
											$datum		= htmlspecialchars($datensatz['datum']);
											$kommentar	= htmlspecialchars($datensatz['kommentar']);
											if($_GET["id"] == $id) {
												echo "<tr>"
													   ?> <input name="id" type='hidden' value="<?php echo $id;		?>")> <?php echo 
													   "<td>" ?> <input name="etappe" type='text' value="<?php echo $etappe;		?>")> <?php echo "</td>"
													 . "<td>" ?>	<select name="region">
																		<?php
																			$nordinsel	= array("Auckland", "Northland", "Coromandel Peninsula", "Waikato und King Country", "Bay Of Plenty", "East Coast", "Zentrale Hochebene",
																							  "Taranaki", "Whanganui und Palmerston North", "Wellington");
																			$suedinsel	= array("Marlborough und Nelson", "Christchurch und Canterbury", "Otago", "Fjordland und Southland",
																							  "Queenstown", "West Coast");

																			//echo "<option selected>$region</option>";							//Platzhalter
																			echo "<optgroup label='Nordinsel'>";								// Unterteilung
																			foreach($nordinsel as $element) {
																				if($element == $region) echo "<option value='$element' selected>$element</option>\n";
																				else 					echo "<option value='$element'>			$element</option>\n";
																			}
																			echo "</optgroup>";
																			echo "<optgroup label='Südinsel'>";									// Unterteilung
																			foreach($suedinsel as $element) {
																				if($element == $region) echo "<option value='$element' selected>$element</option>\n";
																				else 					echo "<option value='$element'>			$element</option>\n";
																			}
																			echo "</optgroup>";
																		?>
																	</select> <?php echo "</td>"
													 . "<td>" ?> <input name="datum" type='text' value="<?php echo $datum;		?>")> <?php echo "</td>"
													 . "<td>" ?> <input name="kommentar" type='text' value="<?php echo $kommentar;	?>")> <?php echo "</td>"
													   ?> <input name="action" type='hidden' value="edit"> <?php echo 
													  "<td>" . "<input type='submit' value='Okay'>" . "</td>"
													 . "<td>" . "<a href='route_OnePage.php'>Abbrechen</a>"	. "</td>"
													 . "</tr>\n";
											} else {
												echo "<tr>"
													 . "<td>" . $etappe		. "</td>"
													 . "<td>" . $region		. "</td>"
													 . "<td>" . $datum		. "</td>"
													 . "<td>" . $kommentar	. "</td>"
													 . "<td>" . "<a href='route_OnePage.php?id="	. (int)$id . "&action=edit"		. "'>Bearbeiten</a>"	. "</td>"
													 . "<td>" . "<a href='tmp_submit.php?id="		. (int)$id . "&action=delete"	. "'>Löschen</a>"	. "</td>"
													 . "</tr>\n";
											}
										}
										$sql_abfrage->close();
										$mysqli->close();
							?>
						</table>
					</form>
		<?php
				}
				//if($_GET["action"] == "delete") 
			} else {
		?>
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
												. "<td>" . "<a href='route_OnePage.php?id="	. (int)htmlspecialchars($datensatz['id']) . "&action=edit" . "'>Bearbeiten</a>"	. "</td>"
												. "<td>" . "<a href='tmp_submit.php?id="	. (int)htmlspecialchars($datensatz['id']) . "&action=delete" . "'>Löschen</a>"	. "</td>"
												. "</tr>\n";
									}
									$sql_abfrage->close();
									$mysqli->close();
						?>
					</table>
				<a href="route_OnePage.php?&action=add">Hinzufügen</a>
		<?php	
				}
		?>
	</body>
</html>


<!--end-->
<!--================================================================================================
    
    E N D E
    
=================================================================================================-->