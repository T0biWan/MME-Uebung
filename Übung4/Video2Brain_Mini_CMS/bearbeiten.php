<?php
require_once "db_daten_aktuell.php";
$host = htmlspecialchars($_SERVER["HTTP_HOST"]);
$uri  = rtrim(dirname(htmlspecialchars($_SERVER["PHP_SELF"])), "/\\");
$extra = "anzeigen.php";
if (empty($_POST["titel"])) { 
  if(!isset($_GET["id"]) || !is_numeric($_GET["id"])) {
     header("Location: http://$host$uri/$extra");
   }
?>
<!DOCTYPE html>
<html>
 <head>
  <title>News verwalten</title>
  <meta charset="UTF-8" />
  <style type="text/css">
  body { font-size: 80%; font-family: sans-serif; }
  </style>
</head>
<body>
<?php
  $id = $_GET["id"];
  if($stmt = $mysqli->prepare("SELECT id, titel, text 
		FROM aktuell WHERE id=?")) {
  $stmt->bind_param("i",  $id);
  $stmt->execute();
  $stmt->bind_result($id, $titel, $text);
  $stmt->fetch();
  $stmt->close();
  $mysqli->close();
  }
?>
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
Titel <br />
<input type="text" name="titel" value="<?php echo htmlspecialchars($titel); ?>" /><br />
Text <br />
<textarea name="text" rows="5" cols="30"><?php echo htmlspecialchars($text); ?></textarea><br />
<input type="hidden" name="id" value="<?php echo $id; ?>" />
<input type="submit" />
</form>
</body>
</html>
<?php
} else {
  $id = (int)$_POST["id"];
  if($stmt = $mysqli->prepare("UPDATE aktuell 
		SET titel=?, text=? WHERE id=?")) {
    $titel = $_POST["titel"];
    $text = $_POST["text"];
    $stmt->bind_param("ssi", $titel, $text, $id);
    $stmt->execute();
    $stmt->close();
    $mysqli->close();
    header("Location: http://$host$uri/$extra");
  }
} 
?>




