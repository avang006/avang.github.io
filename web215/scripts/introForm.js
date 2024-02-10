function formSubmit() {
	var fullName = document.getElementById('name').value;
	var personalBkg = document.getElementById('personalBackground').value;
	var profession = document.getElementById('profession').value;
	var academicBkg = document.getElementById('academicBkg').value;
  	var computer = document.getElementById('computer').value;
  	var courses = document.getElementById('education').value;
  	var funFact = document.getElementById('funfact').value;
 	 var addFact = document.getElementById('addfact').value;
 	 document.querySelector('main').innerHTML = `
          	<div class="bodyblock">
          	<ul>
          	  <li><b>Personal background: </b>${ personalBkg}</li>
          	  <li><b>Professional background: </b> ${ profession}</li>
          	  <li><b>Academic background: </b> ${ academicBkg}</li>
          	  <li><b>Primary Computer Platform: </b>${ computer}</li>
          	  <li><b>Courses I'm Taking & Why:</b>
    
          	  <ul>${(() => {
         	     let coursesList = courses.split('\n').map(course => course.trim()).filter(Boolean);
         	     let content = '';
	              for (let course of coursesList) {
           	     let split = course.split(/\s+-\s+/);
           	     content += `<li><strong>${split[0]}</strong> - ${split[1]}</li>`;
          	    }
          	    return content;
        	    })()}</ul>
         	   <li><b>Funny/Interesting Item about Yourself: </b>${ interesting}</li>
    
        	  </ul>
      	  </div>
       	 `;}

