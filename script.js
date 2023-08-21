function toggleAnswer(questionNumber) {
    const answer = document.getElementById(`answer${questionNumber}`);
    const arrow = document.querySelector(`#answer${questionNumber} + .question span`);
    
    if (answer.style.display === "block") {
      answer.style.display = "none";
      arrow.innerHTML = "&#9660;";
    } else {
      answer.style.display = "block";
      arrow.innerHTML = "&#9650;";
    }
  }

