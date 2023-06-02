function calculateGrade() {
    // Get the input value from the input field
    var markInput = document.getElementById("markInput");
    var mark = Number(markInput.value);
  
    // Get the reference to the result element and the image element
    var resultElement = document.getElementById("result");
    var gradeImage = document.getElementById("gradeImage");
    var studentName = document.getElementById("nameInput");
    let studentNameInput = studentName.value
  
    // Check the mark range and set the corresponding message and image source
    if (mark >= 0 && mark <= 49) {
      resultElement.textContent = `Sorry, you have failed.${studentNameInput}`;
      gradeImage.src =
        "https://thumbs.dreamstime.com/z/failed-stamp-grunge-vintage-isolated-white-background-sign-148244680.jpg";
    } else {
      resultElement.textContent = "Congratulations, you passed! "+`${studentNameInput}`;
      gradeImage.src =
        "https://th.bing.com/th/id/OIP.2hrMp6Ez1a-6wejuxoiVUQHaES?pid=ImgDet&rs=1";
    }

}