<!DOCTYPE html>
<html lang="de">
	<head>
		<meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- Die 3 Meta-Tags oben *müssen* zuerst im head stehen; jeglicher sonstiger head-Inhalt muss *nach* diesen Tags kommen -->
        <title>Traumhafte Tabelle</title>

        <!-- Bootstrap -->
        <link href="css/bootstrap.min.css" rel="stylesheet">
        <link href="css/styles.css" rel="stylesheet">
        <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,600' rel='stylesheet' type='text/css'>
		<script src="js/jquery-2.1.4.min.js"></script>
		<script src="js/funktionen.js"></script>
	</head>
	<body>
        <h1>Kia Ora!</h1>
        <section>
            <div class="table-responsive">
                <table class="table" border='1'>
                    <?php
                        require_once "db_daten.php"; // Verbindungsdaten zur Datenbank
                        $abfrage = $mysqli->query("Select etappe, region, kommentar,Datum FROM route;"); // SQL-Abfrage
                        echo "<tr><th></th><th>Etappe:</th><th>Region:</th><th class='Besonderheiten'>Datum:</th><th class='Besonderheiten'>Kommentar:</th></tr>";
                        while($datensatz = $abfrage->fetch_array()) {
                            echo	"<tr><td><input type='radio' name='auswahl' class='radio'></td>"
                                    . "<td>"	. htmlspecialchars($datensatz['etappe'])	. "</td>"
                                    . "<td>"	. htmlspecialchars($datensatz['region'])	. "</td>"
                                    . "<td class='Besonderheiten'>"	. htmlspecialchars($datensatz['Datum'])	. "</td>"
                                    . "<td class='Besonderheiten'>"	. htmlspecialchars($datensatz['kommentar'])	. "</td></tr>\n";
                        }
                        $abfrage->close();
                        $mysqli->close();
                    ?>
                </table>
                <div class="Bedienung">
                    <button id="bearbeiten">Bearbeiten</button>
                    <button id="löschen">Löschen</button>
                    <button id="hinzufügen">Hinzufügen</button>
                </div>
            </div>
        </section>
        </body>
</html>