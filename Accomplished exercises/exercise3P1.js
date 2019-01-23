
var student = document.getElementById("returnStudent");

student.addEventListener("click", function(){
    returnObject();
});

function returnObject(){
var tasksCompleted = [
    {name: "Anna",  score: 29},
    {name: "Serg",  score: 35},
    {name: "Elena", score: 1},
    {name: "Anton", score: 99}
];

var highestScore = Math.max(tasksCompleted[0].score, tasksCompleted[1].score,
 tasksCompleted[2].score, tasksCompleted[3].score);

 var x = 0;

while(x <= tasksCompleted.length){
    if(tasksCompleted[x].score === highestScore){
        console.log(tasksCompleted[x].name + ": " + highestScore);
    }
        x++;
}

// console.log(studentName + studentScore);
}

// a = tasksCompleted
// b = highestScore


