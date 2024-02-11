let myForm = document.getElementById("myForm");
myForm.addEventListener("submit", (e) => {
e.preventDefault();
	
function formSubmit() {
	var fullName = document.getElementById('name').value;
	var personalBkg = document.getElementById('personalBackground').value;
	var profession = document.getElementById('profession').value;
	var academicBkg = document.getElementById('academicBkg').value;
  	var computer = document.getElementById('computer').value;
  	var courses = document.getElementById('education').value;
  	var funFact = document.getElementById('funfact').value;
 	 var addFact = document.getElementById('addfact').value;
 	 document.getElementById('jsLoop').innerHTML = (fullName)
	document.getElementById('jsLoop').innerHTML = (personalBkg);
	document.getElementById('jsLoop').innerHTML = (profession);
	document.getElementById('jsLoop').innerHTML = (academicBkg);
	document.getElementById('jsLoop').innerHTML = (computer);
	document.getElementById('jsLoop').innerHTML = (courses);
	document.getElementById('jsLoop').innerHTML = (funFact);
	document.getElementById('jsLoop').innerHTML = (addFact);
}
});
