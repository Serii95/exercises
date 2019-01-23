var removeClassFunction = document.getElementById("removeClassFunction");

removeClassFunction.addEventListener("click", function(){
    var objectContent = prompt("Please insert the contents of the object className.");
        var obj = {
            className: objectContent
        }
        
        console.log(obj.className);

        var cls = prompt("Please insert the desired class to be removed");

        function removeClass(obj, cls){
            if(obj.className.includes(cls)){
                while(obj.className.includes(cls)){
                    if(obj.className.includes(" " + cls + " ")){
                        var removable = " " + cls + " ";
                        var replacement = obj.className.replace(removable, "");
                        obj.className = replacement;
                    } else if(obj.className.includes(" " + cls)){
                        var removable = " " + cls;
                        var replacement = obj.className.replace(removable, "");
                        obj.className = replacement;
                    } else if(obj.className.includes(cls + " ")){
                        var removable = cls + " ";
                        var replacement = obj.className.replace(removable, "");
                        obj.className = replacement;
                    } else if(obj.className.includes(cls)){
                        var removable = cls;
                        var replacement = obj.className.replace(removable, "");
                        obj.className = replacement;
                    }
                }
                console.log(obj.className);
            } else {
                console.log("I am sorry the set object does not contain the set class.");
            }
        }

        removeClass(obj, cls);

});

