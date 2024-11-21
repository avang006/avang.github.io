const form = document.getElementById("myform"); // Replace "myForm" with your form's ID

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission

  // Access form data
  const userPhoto = document.getElementById('photo').files[0];
  const caption = form.elements["caption"].value;
  const pbackground = form.elements["personal"].value;
  const abackground = form.elements["academic"].value;
  const sbackground = form.elements["subject"].value;
  const platform = form.elements["platform"].value;
  const courses = form.elements["course"].value;
  const fact = form.elements["fact"].value;
  // Access other form fields similarly

  // Display the results
  displayResults(userPhoto, caption, pbackground, abackground, sbackground, platform, courses, fact); // Call a function to display the results
});
function previewUserPhoto() {
    const userPhotoInput = document.getElementById('userPhoto');
    const previewImage = document.getElementById('user-photo-preview');

    if (userPhotoInput.files && userPhotoInput.files[0]) {
        const reader = new FileReader();

        reader.onload = function (e) {
            previewImage.src = e.target.result;
        };

        reader.readAsDataURL(userPhotoInput.files[0]);
    }
}
function displayResults(userPhoto, caption, pbackground, abackground, sbackground, platform, courses, fact) {
  const resultsDiv = document.getElementById("myform"); 
  // Replace "results" with the ID of the element where you want to display results

  resultsDiv.innerHTML = `
  <div style="text-align: center;">
                <img src="${URL.createObjectURL(userPhoto)}" alt="User Photo" style="display: block; margin: 0 auto; width: 250px;">
                <figcaption style="font-style: italic;">${caption}</figcaption>
            </div>
    <ul>
    <li><strong>Personal Background:</strong> ${pbackground}</li>
    <li><strong>Academic Background:</strong> ${abackground}</li>
    <li><strong>Background in this Subject:</strong> ${sbackground}</li>
    <li><strong>Primary Computer Platform:</strong> ${platform}</li>
    <li><strong>Courses I'm Taking and Why:</strong></li>
    <ul>${(() => {
             let coursesList = courses.split('\n').map(course => course.trim().filter(Boolean));
              let content = '';
              for (let course of coursesList) {
                let split = course.split(/\s+-\s+/);
                content += `<li>${split[0]} - ${split[1]}</li>`;
              }
              return content;
            })()}</ul>
    <li><strong>Funny/Interesting Item to Remember me by:</strong> ${fact}</li></ul>
  `;
   }
