var theMostRare = document.getElementById("theMostRare");

theMostRare.addEventListener("click", function(){
var string = ['кришна', 'кришна', 'кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', '8-()'];
var sample = [""];
var repeated = false;

for(var i = 0; i < string.length; i++){
repeated = false;
	for(var j = 0; j < sample.length; j++){
		if(string[i] === sample[j]){
			repeated = true;
		} 
	} 
	if(!repeated){
		sample.push(string[i]);
	}
}
string = sample;
string.shift();
console.log(string);
});

// var b = ["abc","a","a","d","c",1];
// var c = [""];
// var repeated = false;

// for(var i = 0; i < b.length; i++){
// var repeated = false;
// 	for(var j = 0; j < c.length; j++){
// 		if(b[i] === c[j]){
// 			repeated = true;
// 		} 
// 	} 
// 	if(!repeated){
// 		c.push(b[i]);
// 	}
// }
// console.log(c);