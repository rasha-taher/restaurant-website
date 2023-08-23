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


  function isValidUsername() {
    var username=document.getElementById("username");
    var pattern = /^[a-zA-Z0-9]{5,}$/;
    if(! pattern.test(username.value)){
    username.setAttribute("placeholder", "Username must be at least 5 characters long and contain only letters and numbers.");
    username.style.borderColor="red";
    return false;   
}
username.style.borderColor="gray";
return true;
}

function isValidEmail() {
    var email=document.getElementById("email");
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(! pattern.test(email.value)){
        email.setAttribute("placeholder", "Please enter a valid email address.");
        email.style.borderColor="red";
        return false;
    }
    email.style.borderColor="gray";
    return true;
}
function isValidMessage(){
    let message=document.getElementById("message");
    if(message.value.trim()===""){
        message.setAttribute("placeholder", "Please enter a valid message.");
        message.style.borderColor="red";
        return false;
    }  message.style.borderColor="gray";
    return true;
}
function valid(){
    return isValidUsername()&&isValidEmail()&&isValidMessage();
}