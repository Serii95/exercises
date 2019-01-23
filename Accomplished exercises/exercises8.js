
// Exercise 8.1
var ladder = {
    step: 0,
    up: function() { // вверх по лестнице
      this.step++;
      return this;
    },
    down: function() { // вниз по лестнице
      this.step--;
      return this;
    },
    showStep: function() { // вывести текущую ступеньку
      console.log("You have advanced for " + this.step + " steps.");
      return this;
    }
  };
  

// Exercise 8.2
function calculator(data){
	this.result = 0;
	this.first = data.substring(0,1);
	this.second = data.substring(4,5);
	this.action = data.substring(2,3);
	this.calculate = function(){
		if(this.action === "+"){
			this.result = Number(this.first) + Number(this.second);
			return this.result;
		}
		if(this.action === "-"){
			this.result = Number(this.first) - Number(this.second);
			return this.result;

		}

	}
}

function calculator(data){
	this.result = 0;
	this.middle = data.indexOf(" ");
	this.first = data.substring(0,this.middle);
	this.second = data.substring(this.middle,data.length);
	this.calculate = function(action){
		this.action = action;
		if(this.action === "+"){
			this.result = Number(this.first) + Number(this.second);
			return this.result;
		}
		if(this.action === "-"){
			this.result = Number(this.first) - Number(this.second);
			return this.result;

		}
		if(this.action === "*"){
			this.result = Number(this.first) * Number(this.second);
			return this.result;

		}
		if(this.action === "/"){
			this.result = Number(this.first) / Number(this.second);
			return this.result;

		}
		if(this.action === "**"){
			this.result = Math.pow(Number(this.first), Number(this.second));
			return this.result;

		}

	}
}

// Exercise 8.3
function user(fullName){
	this.fullName = fullName;
	this.point = this.fullName.indexOf(" ");
	this.firstName = this.fullName.substring(0, this.point);
	this.lastName = this.fullName.substring(this.point, this.fullName.length);
	this.person = {
	get firstName(){
		if(this.fullName.length === 0){
			return "Undefined";
		} else {
			return this.firstName;
		}
	},
	get lastName(){
		if(this.fullName.length === 0){
			return "Undefined";
		} else {
			return this.lastName;
		}
	}
}
	
}

// Exercise 8.4
function Article(){
	var articles = [];
 return {
		newArticle: function(articleText){
			var finishedArt = articleText + " " + "Published at: " + Date();
			articles.push(finishedArt);
		},
		showStats(){
			if(articles.length === 0){
				console.log("Sorry there is a total of 0 articles posted. \nCome again later.");
			} else {
			console.log("There is a total of " + articles.length + " articles. The most resent is " + articles[articles.length-1]);
			}
		}
	}
}