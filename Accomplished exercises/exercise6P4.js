var arrayObjectSorting = document.getElementById("arrayObjectSorting");

arrayObjectSorting.addEventListener("click", function(){
        
        var vasya = { name: 'Вася', age: 23 };
        var masha = { name: 'Маша', age: 18 };
        var vovochka = { name: 'Вовочка', age: 6 };
        var people = [ vasya , masha , vovochka ];
        var ages = [];
        var sample = [];

        organize(people);

        function organize(arr){

            for(var a = arr.length - 1; a > -1; a--){
                ages.push(arr[a].age);
            }

            ages.sort(function(x, y){return x - y;});

            var i = -1;

            for(var j = arr.length - 1; j > -1; j--){
                i++;
                for(var k = arr.length - 1; k > -1; k--){
                    if(people[k].age === ages[i]){
                        sample.push(people[k]);
                    }
                }
            }
            people = sample;
            return people;
        }
        console.table(people);
});