function formSubmit() {
	var fullName = document.getElementById('name').value;
	var personalBkg = document.getElementById('personalBackground').value;
	var profession = document.getElementById('profession').value;
	var academicBkg = document.getElementById('academicBkg').value;
  var computer = document.getElementById('computer').value;
  var education = document.getElementById('education').value;
  var funFact = document.getElementById('funfact').value;
  var addFact = document.getElementById('addfact').value;
  document.getElementById('jsloop').innerHTML =(fullName + personalBkg + profession + academicBkg + computer + education + funFact + addFact);
  }
