
<?php
// define variables and set to empty values
$firstErr = $lastErr = "";
$first = $last = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (empty($_POST["first"])) {
    $firstErr = "First name is required";
  } else {
    $first = test_input($_POST["first"]);
  }
  if (empty($_POST["last"])) {
   $lastErr = "Last name is required";
 } else {
   $last = test_input($_POST["last"]);
 }
}

function test_input($data) {
   $data = trim($data);
   $data = stripslashes($data);
   $data = htmlspecialchars($data);
   return $data;
 }
 ?>
 <?php
// define variables and set to empty values
$first2Err = $last2Err = "";
$first2 = $last2 = "";

if ($_SERVER["REQUEST_METHOD"] == "GET") {
  if (empty($_GET["first2"])) {
    $first2Err = "First name is required";
  } else {
    $first2 = test_input($_GET["first2"]);
  }
  if (empty($_GET["last2"])) {
   $last2Err = "Last name is required";
 } else {
   $last2 = test_input($_GET["last2"]);
 }
}

 ?>
         <h2>Dancer Sign up form</h2>
         <h3>Post</h3>
         <form method="post" id="postform" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">  
  First Name: <input type="text" name="first" required>
  <br><br>
  Last Name: <input type="text" name="last" required>
  <br><br>
  <input type="submit" class="button" name="submit" value="Submit">  
  </form>
  <h3>Get</h3>
  <form method="get" id="getform" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">  
  First Name: <input type="text" name="first2" required>
  <br><br>
  Last Name: <input type="text" name="last2" required>
  <br><br>
  <input type="submit" class="button" name="submit" value="Submit">  
  </form>
<hr>

<?php 
echo "Dancer Information Post" ; 
echo "<br>";
echo "First Name: " ;
echo $first;
echo "<br>";
echo "Last Name: " ;
echo $last;
echo "<br>" ;
?>
<?php 
echo "Dancer Information Get" ; 
echo "<br>";
echo "First Name: " ;
echo $first2;
echo "<br>";
echo "Last Name: " ;
echo $last2;
?>

