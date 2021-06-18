var buttonGenerate = document.getElementById("btnGen");
var buttonReset = document.getElementById("btnRes");

buttonGenerate.addEventListener('click',function ()  {
    let max = document.getElementById("upperBound").value;
    let min = document.getElementById("underBound").value;
    min = Math.ceil(min);
    max = Math.floor(max);
    document.getElementById("resultValue").value = Math.floor(Math.random() * (max - min + 1)) + min;
});

buttonReset.addEventListener('click', function(){
    document.getElementById("upperBound").value = "";
    document.getElementById("underBound").value = "";
    document.getElementById("resultValue").value = "";
});
