let myForm = document.getElementById("myForm");
function submitForm() {
	const form = document.getElementById('myForm');
	form.addEventListener('submit', (event) => {
	event.preventDefault();
	});
	form.submit();
	}
	
function formValue() {
	var fullName = document.getElementById('name').value;
	var personalBkg = document.getElementById('personalBackground').value;
	var profession = document.getElementById('profession').value;
	var academicBkg = document.getElementById('academicBkg').value;
  	var computer = document.getElementById('computer').value;
  	var courses = document.getElementById('education').value;
  	var funFact = document.getElementById('funfact').value;
 	 var addFact = document.getElementById('addfact').value;
 	 document.getElementById('jsLoop').innerHTML = (fullName);
}
