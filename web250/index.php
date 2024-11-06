<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8">
      <link rel = "stylesheet" href ="styles/home.css">
      <title>Alyssa Vang | Absolute Violet | WEB250 | %header%</title>
      <script src="https://lint.page/kit/880bd5.js" crossorigin="anonymous"></script>
   </head>
<header>
   <title>Home</title>
   <div class="header">
      <h1>Alyssa Vang | Absolute Violet | WEB250</h1>
      <h2>
         "Dance of the heart"
      </h2>
   </div>
   <nav class="navbar">
      <a href="?p=home.php">Home</a>
      <a href="?p=contract.php">Contract</a>
      <a href="?p=introduction.php">Introduction</a>
      <a href="?p=brand.php">Brand</a>
      <a href="?p=demo.php">PHP Demo</a>
   </nav>
</header>
<main>
<?php
	$sPage = $_GET["p"];
	//echo ("You picked the page: " . $sPage); 
	
	if($sPage == "") {  $sPage = "home.php"; }
	include($sPage);
?>
</main>
<footer>
    <nav class="footer">             
      <a href="https://github.com/avang006">GitHub</a>
      <a href="https://avang006.github.io/">GitHub.io</a>
      <a href="index.html"> WEB250.io </a>
      <a href="https://www.codecademy.com/profiles/avang006"> Codecademy </a>
      <a href="https://www.freecodecamp.org/avang006"> FreeCodeCamp</a>
      <a href="https://jsfiddle.net/u/avang006/fiddles/"> JSFiddle</a>
      <a href="https://www.linkedin.com/in/alyssa-vang-3a8723191/"> LinkedIn</a>
      
      <p>
           <p class="center">Designed by AV &copy;2024</p>
      </p></nav>
  </footer>
</html>
  
