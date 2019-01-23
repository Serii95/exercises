// 1
let yearQuestion = prompt("Какой сейчас год?");
if(yearQuestion == 2015){
    alert("Вы правы!");
} else {
    alert("С луны свалися? 2015!");
}

// 2
let numberQuestion = prompt("Введите любое целое число?");
if (numberQuestion > 0){
    alert("значение больше нуля");
} else if (numberQuestion < 0){
    alert("значение меньше нуля");
} else {
    alert("значение равно нулю");
}

// 3
var loginQuestion = prompt("Please insert username");
if(loginQuestion == "admin"){
    var password = prompt("Please insert your password.");
    if(password = "passw0rd"){
        alert("Welcome home!");
    } if(password != "passw0rd"){
        alert("Wrong password");
    } else {
        alert("cancelled");
    }
} if(loginQuestion != "admin"){
    alert("access denied");
}
else {
    alert("Cancelled");
}

// 4
var a = 1;
var b = 2;

var result = (a + b >= 3 ? "Yep!": "Noup!");

alert(result);

// 5
var name = 'admin', text;

var fifthExercise = (name == admin ? "Hi": "Hello");

if (name == 'admin') {
  text = 'Hi';
} else if (name == 'manager') {
  text = 'Hello';
} else if (name == '') {
  text = 'No login';
} else {
  text = '';
}

// exercise 1.1
function promptNumber(){
var numberGreaterThanOneHundred = prompt("Please insert a number greater than 100");
return numberGreaterThanOneHundred;
}

promptNumber();

if(numberGreaterThanOneHundred <= 100){
    promptNumber();
} else if(numberGreaterThanOneHundred > 100){
    alert("You inserted a number greater than 100.");
} else {
    alert("operation cancelled.");
}