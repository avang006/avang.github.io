<?php include 'includes/header.php'; ?>
   <body>
      <main>
         <h2>PHP DEMO</h2>
         <div class="info">
            <div class="infomain">
            <?php
$sOutputString = "<hr>";


for($iCounter = 1; $iCounter <= 1000; $iCounter++)
{
     $sOutputString .= $iCounter . ") alyssa got PHP running on my computer!! ";
}


echo ("<h5>" . $sOutputString . "</h5><hr>");
?>
            </div>
         </div>
         <script src="scripts/HTMLInclude.min.js"></script>
      </main>
<?php include 'includes/footer.php'; ?>
