
    var uneaven = document.getElementById("uneaven");

    uneaven.addEventListener("click", function(){
        exercise1Point2();
    });

    function exercise1Point2(){
        var divisible = prompt("please insert the number to find out lower natural numbers");
        var divider = divisible - 1;
        for(var i = divisible; i > 1; i--){
            if(divisible / divider % 2 != 0 && divider > 2){
                divider--;
            }
            else if(divisible / divider % 2 === 0){
                divisible-=1;
                divider = divisible - 1;
                i = divisible;
            }
            else if(divisible / divider % 2 != 0 && divider === 2){
                console.log(divisible);
                divisible-=1;
                divider = divisible - 1;
                i = divisible;
            }
        }
    }