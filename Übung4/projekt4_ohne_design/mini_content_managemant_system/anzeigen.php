<!DOCTYPE html>
<html>
 <head>
  <title>News verwalten</title>
  <meta charset="UTF-8" />
  <style type="text/css">
  body { font-size: 80%; font-family: sans-serif; }
  ul { width: 40em; }
  li { margin: 10px;}
  </style>
</head>
<body>
<?php
require_once "db_daten_aktuell.php";
if ($stmt = $mysqli->prepare("SELECT etappe, region FROM route")) {
  $stmt->execute();
  $stmt->bind_result($id, $titel, $text);
  echo "<ul>\n";
  while($stmt->fetch()) {
    echo "<li><strong>"
          . htmlspecialchars($titel)
          . "</strong>: "
	  . htmlspecialchars($text)
	  . "| <a href='bearbeiten.php?id="
	  . (int)$id
	  . "'>bearbeiten</a> "
	  . "| <a href='loeschen.php?id="
	  . (int)$id
	  . "'>löschen</a>"
	  . "</li>\n";
  }
  echo "</ul>\n";
  $stmt->close();
  }
$mysqli->close();
?>
<a href="neu.php">Neue Schlagzeile eintragen</a>
</body>
</html>

