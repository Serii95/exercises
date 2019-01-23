
// This one needs some more work!
var lastOneOfSix = document.getElementById("lastOneOfSix");

lastOneOfSix.addEventListener("click", function(){
    var arr = ["abc","cba","abc","abc"];
var sample = [];
var word = "";

for(var i = arr.length - 1; i > -1; i--){
    for(var j = arr.length-2; j > -1; j--){
        for(var char1 = 0; char1 < arr[i].length+1; char1++){
            for(var char2 = 0; char2 < arr[j].length+1; char2++){
                var char11 = char1-1;
                var char22 = char2-1;
                var letter1 = arr[i].substring(char11,char1);
                var letter2 = arr[j].substring(char22,char2);
                if(letter1 === letter2){
                    word+=letter1;
                }
            }
        }
    }
    if(word.length === arr[i].length){
        sample.push(word);
        word = "";
    } else{
        word = "";
    }
}

console.log(sample);
});