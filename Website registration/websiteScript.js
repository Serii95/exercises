
var errorDisplay            = document.getElementById("errorDisplay"),
errorMessage                = document.getElementById("errorMessage"),
registrationDisplay         = document.getElementById("registrationDisplay"),
username                    = document.getElementById("username"),
password                    = document.getElementById("password"),
repeatPassword              = document.getElementById("repeatPassword"),
terms                       = document.getElementById("terms"),
check                       = document.getElementById("check"),
submittButton               = document.getElementById("submittButton");
termsDisplay                = document.getElementById("termsDisplay"),
registeredDisplay           = document.getElementById("registeredDisplay"),
registrationMessage         = document.getElementById("registrationMessage");


terms.addEventListener("click", function(){
    termsDisplay.classList.toggle("notDisplayed");
    if(terms.innerHTML === "View More"){
        terms.innerHTML = "View Less";
    } else {
        terms.innerHTML = "View More";
    }
});

submittButton.addEventListener("click", function(){
    errorDisplay.classList.add("notDisplayed");
    // if(username.value !== "" && password.value !== ""){
    //     if(username.value !== ""){
    //         if(username.value.length > 5){
    //             if(password.value !== ""){
    //                 if(password.value.length > 5){
    //                     if(password.value === repeatPassword.value){
    //                         if(check.checked === true){
    //                             registrationDisplay.classList.add("notDisplayed");
    //                             registeredDisplay.classList.remove("notDisplayed");
    //                         } else {
    //                             errorDisplay.classList.remove("notDisplayed");
    //                             errorMessage.innerHTML = "Please read and aignoledge our user Terms and conditions!";
    //                         }
    //                     } else {
    //                         errorDisplay.classList.remove("notDisplayed");
    //                         errorMessage.innerHTML = "Password must be repeated correctly!";
    //                     }
    //                 } else {
    //                     errorDisplay.classList.remove("notDisplayed");
    //                     errorMessage.innerHTML = "Password must be longer than 5 characters!";
    //                 }
    //             } else {
    //                 errorDisplay.classList.remove("notDisplayed");
    //                 errorMessage.innerHTML = "Please formulate a valid password!";
    //             }
    //         } else {
    //             errorDisplay.classList.remove("notDisplayed");
    //             errorMessage.innerHTML = "Username must be longer than 5 characters!";
    //         }
    //     } else {
    //         errorDisplay.classList.remove("notDisplayed");
    //         errorMessage.innerHTML = "Please insert a valid username!";
    //     }
    // } else {
    //     errorDisplay.classList.remove("notDisplayed");
    //     errorMessage.innerHTML = "Please insert a valid username and password!";
    // }

    var errors = verify();
    if(errors.length === 0){
        registrationDisplay.classList.add("notDisplayed");
        registeredDisplay.classList.remove("notDisplayed");
    } else {
        errorDisplay.classList.remove("notDisplayed");
        var errorText = "";
        for(var i = 0; i < errors.length; i++){
            errorText += errors[i];
        }
        errorMessage.innerHTML = errorText;
    }

});

function verify(){
    var errors = [];

    if(username.value === "" && password.value === ""){
        errors.push("<li>Please insert a valid username and password!</li>");
    } 
    if(username.value === ""){
        errors.push("<li>Please insert a valid username!</li>");
    } 
    if(username.value.length < 5){
        errors.push("<li>Username must be longer than 5 characters!</li>");
    }
    if(password.value === ""){
        errors.push("<li>Please formulate a valid password!</li>");
    }
    if(password.value.length < 5){
        errors.push("<li>Password must be longer than 5 characters!</li>");
    }
    if(password.value !== repeatPassword.value){
        errors.push("<li>Passwords must coincide!</li>");
    }
    if(check.checked !== true){
        errors.push("<li>Please read and acknowledge our user Terms and conditions!</li>");
    }
    console.log(errors);
    return errors;
}