var fName = document.querySelector("#firstName");
var lName = document.querySelector("#lastName");
var email = document.querySelector("#em");
var username = document.querySelector("#usr");
var password = document.querySelector("#pass");
var Repassword = document.querySelector("#passR");
var buttonElement = document.querySelector("#myBtn");
var result = document.querySelector("#show");
var showMessage = document.querySelector(".showMsg");
var toggleIcon = document.querySelector("#toggle");

buttonElement.onclick = function() {
    let firstnameValue = fName.value;
    let lastnameValue = lName.value;
    var emailValue = email.value;
    var usernameValue = username.value;
    var passwordValue = password.value;
    var RepasswordValue = Repassword.value;

    if (firstnameValue == '' || lastnameValue == '' || emailValue == "" || usernameValue == "" || passwordValue == "" || RepasswordValue == ""){
        result.innerHTML = "Fill Up!";
    } else if (passwordValue !== RepasswordValue){
        result.innerHTML = "Re-enter Password";
    } else {
        showMessage.innerHTML = "Registeration Done";
    }
}

var state = false;
toggleIcon.onclick = function() {
    if(state) {
        pass.setAttribute("type", "password");
        state = false;
    } else {
        pass.setAttribute("type", "text");
        state = true;
    } 
}


