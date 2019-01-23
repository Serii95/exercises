var arrayRandom = document.getElementById("arrayRandom");

arrayRandom.addEventListener("click", function(){
    var array = [1,2,3,4,5];

        shuffleArray(array);

        function shuffleArray(arr) {
            for (var i = arr.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        console.log(array);
    }
});

