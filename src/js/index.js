function sendGrade(grade) {
  const feedbackNumber = grade.textContent;
  const feedbackText = `You selected ${feedbackNumber} out of 5`;
  const feedbackResponse = document.querySelector('.thank-you__subtitle');
  feedbackResponse.textContent = feedbackText;
}

const gradeNumbers = document.querySelectorAll('.grade');
const submitButton = document.querySelector('.feedback__submit');

gradeNumbers.forEach(grade => {
  grade.addEventListener('click', () => {
    const gradeActive = document.querySelector('.active');
    const gradeToActive = grade;
    if (gradeActive === null) {
      gradeToActive.classList.add('active');
    } else {
      gradeActive.classList.remove('active');
      gradeToActive.classList.add('active');
    }    
  })
});

submitButton.onclick = function () {
  const gradeNumber = document.querySelector('.active');

  sendGrade(gradeNumber);

  const feedbackPanel = document.querySelector('.feedback');
  feedbackPanel.removeAttribute('id');

  const thankYouPanel = document.querySelector('.thank-you');
  thankYouPanel.id = 'open';
}
