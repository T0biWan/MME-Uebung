<!--================================================================================================
    BESCHREIBUNG

    Datei: route_OnePage.php
    Datum: 11.01.2016
    Autor: Tobi Wan
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
		<link href="css/bootstrap.min.css" rel="stylesheet">
        <link href="css/styles.css" rel="stylesheet">
        <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,600' rel='stylesheet' type='text/css'>
        <link href='https://fonts.googleapis.com/css?family=Walter+Turncoat' rel='stylesheet' type='text/css'>
		<script src=""></script>
	</head>


<!--end-->
<!--================================================================================================

    Body

=================================================================================================-->
<!--fold-->
	<body>
        <h1>Etappenübersicht</h1>
		<?php
			require_once "db_daten.php";
			if(isset($_GET["action"])) {
				if($_GET["action"] == "add") {
		?>
            
                <section>
                <div class="table-responsive">
					<table class="table page_table">
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
                </div>
                </section>
					<!--action="<?php// echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>"-->
					<form method="post" action="tmp_submit.php">
                        <div class="table-responsive">
						  <table class="table page_table">
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
                        </div>
					</form>
		<?php
			}
				if($_GET["action"] == "edit") {
		?>
                <section>
                    <h2>Deine Etappen</h2>
					<form class="page_table" method="post" action="tmp_submit.php">
                        <div class="table-responsive">
						  <table class="table page_table">
                              <thead><tr><th>Etappe:</th><th>Region:</th><th>Datum:</th><th>Kommentar:</th><th></th><th></th></tr></thead>
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
																			$nordinsel	= array("Auckland", "Northland", "Coromandel Peninsula", "Waikato und King Country",
																								"Bay Of Plenty", "East Coast", "Zentrale Hochebene",
																							  "Taranaki", "Whanganui und Palmerston North", "Wellington");
																			$suedinsel	= array("Marlborough und Nelson", "Christchurch und Canterbury", "Otago",
																								"Fjordland und Southland", "Queenstown", "West Coast");

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
													  "<td>" . "<button id='absenden' type='submit'><span class='glyphicon glyphicon-ok-sign' aria-hidden='true'>  </span></button>" . "</td>"
													 . "<td>" . "<a class='table_trash trash' href='route_OnePage.php'><span class='glyphicon glyphicon-remove-sign' aria-hidden='true'  </span></a>"	. "</td>"
													 . "</tr>\n";
											} else {
												echo "<tr>"
													 . "<td>" . $etappe		. "</td>"
													 . "<td>" . $region		. "</td>"
													 . "<td>" . $datum		. "</td>"
													 . "<td>" . $kommentar	. "</td>"
													 . "<td>" . "<a class='table_edit' href='route_OnePage.php?id="	. (int)$id . "&action=edit"		. "'><span class='glyphicon glyphicon-pencil' aria-hidden='true'>  </span></a>"	. "</td>"
													 . "<td>" . "<a class='table_trash trash' href='tmp_submit.php?id="		. (int)$id . "&action=delete"	. "'><span class='glyphicon glyphicon-trash' aria-hidden='true'></span></a>"	. "</td>"
													 . "</tr>\n";
											}
										}
										$sql_abfrage->close();
										$mysqli->close();
							?>
						</table>
                        </div>
					</form>
                    </section>
		<?php
				}
			} else {
		?>
            <section>
                <h2>Deine Etappen</h2>
                <div class="table-responsive">
                    <table class="table page_table">
                            <thead><tr><th>Etappe:</th><th>Region:</th><th>Datum:</th><th>Kommentar:</th><th></th></tr></thead>
                        <tbody>
                            <?php
                                require_once "db_daten.php"; 																						// Verbindungsdaten zur Datenbank
                                $sql_abfrage = $mysqli->query("Select id, etappe, region, datum, kommentar FROM route;"); 							// SQL-Abfrage
                                        while($datensatz = $sql_abfrage->fetch_array()) {
                                            echo	
                                                "<tr>"
                                                    . "<td class='Start'>" . htmlspecialchars($datensatz['etappe'])		. "</td>"
                                                    . "<td class='Bis'>" . htmlspecialchars($datensatz['region'])		. "</td>"
                                                    . "<td class='Fahrer'>" . htmlspecialchars($datensatz['datum'])		. "</td>"
                                                    . "<td class='Plaetze'>" . htmlspecialchars($datensatz['kommentar'])	. "</td>"
                                                    . "<td class='Bearbeiten tb_btn'>" . "<a class='table_edit' href='route_OnePage.php?id="	. (int)htmlspecialchars($datensatz['id']) . "&action=edit" . "'><span class='glyphicon glyphicon-pencil' aria-hidden='true'></a>" . "<class='Bearbeiten tb_btn'>" . "<a class='table_trash trash' href='tmp_submit.php?id="	. (int)htmlspecialchars($datensatz['id']) . "&action=delete" . "'><span class='glyphicon glyphicon-trash' aria-hidden='true'></a>"	. "</td>"
                                                    . "</tr>\n"
                                                ;
                                        }
                                        $sql_abfrage->close();
                                        $mysqli->close();
                            ?>
                        </tbody>
                        </table>
                </div>
                <div class="Bedienung">
                  <a href="route_OnePage.php?&action=add">Hinzufügen</a>
              </div>
            </section>
		<?php	
				}
		?>
	</body>
</html>


<!--end-->
<!--================================================================================================
    
    E N D E
    
=================================================================================================-->