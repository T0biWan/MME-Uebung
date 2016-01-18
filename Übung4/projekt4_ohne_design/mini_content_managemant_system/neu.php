<?php
require_once "db_daten_aktuell.php";
$host = htmlspecialchars($_SERVER["HTTP_HOST"]);
$uri  = rtrim(dirname(htmlspecialchars($_SERVER["PHP_SELF"])), "/\\");
$extra = "anzeigen.php";
if (empty($_POST["titel"])) { 
?>
<!DOCTYPE html>
<html>
 <head>
  <title>News eingeben</title>
  <meta charset="UTF-8" />
  <style type="text/css">
  body { font-size: 80%; font-family: sans-serif; }
  </style>
</head>
<body>
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
Titel <br />
<input type="text" name="titel" maxlength="25" /><br />
Text <br />
<textarea name="text" rows="5" cols="30"></textarea><br />
<input type="submit" />
</form>
</body>
</html>
<?php
} else {
  if ($stmt = $mysqli->prepare("INSERT INTO aktuell (titel, text) VALUES (?, ?)")) {
    $titel = $_POST["titel"];
    $text = $_POST["text"];
    $stmt->bind_param("ss", $titel, $text);
    $stmt->execute();
    $stmt->close();
    $mysqli->close();
    header("Location: http://$host$uri/$extra");
   } 
}
?>




