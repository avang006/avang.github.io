let myForm = document.getElementById("myForm");
	function submitForm() {
		const form = document.getElementById('myForm');
		form.addEventListener('submit', (event) => {
		event.preventDefault();
		});
		form.submit();
	
	function formValue() {
		const fullName = document.getElementById('name').value;
		const personalBkg = document.getElementById('personalBackground').value;
		const profession = document.getElementById('profession').value;
		const academicBkg = document.getElementById('academicBkg').value;
  		const computer = document.getElementById('computer').value;
  		const course = document.getElementById('education').value;
  		const funFact = document.getElementById('funfact').value;
 		const addFact = document.getElementById('addfact').value;
 	 	document.getElementById('jsLoop').innerHTML = (fullName);

		const resultsHTML = `
  						<p><strong>Name:</strong> ${name}</p>
            	<p><strong>Personal Background:</strong> ${personalBackground}</p>
            	<p><strong>Professional Background:</strong> ${professionalBackground}</p>
            	<p><strong>Academic Background:</strong> ${academicBackground}</p>
            	<p><strong>Subject Background:</strong> ${subjectBackground}</p>
            	<p><strong>Primary Computer Platform:</strong> ${platform}</p>
            	<p><strong>Courses I'm taking & why:</strong></p>
            	<ul>
                ${formattedCourses.map(course => `<li>${course}</li>`).join('')}
            	</ul>
            	<p><strong>Funny Item to Remember me by:</strong> ${funFact}</p>
            	<p><strong>Do you enjoy coding?</strong> ${enjoyCoding}</p>}`;
              
              }}
