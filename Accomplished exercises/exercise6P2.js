var arraySorting = document.getElementById("arraySorting");

arraySorting.addEventListener("click", function(){
    var arr = ['HTML', 'JavaScript', 'CSS'];
    var navigation = {
        CSS: 1,
        HTML: 2,
        JavaScript: 3
    }
    arr.sort(function(x,y){
        return navigation[x] - navigation[y];
    });
    console.log(arr);

    

});