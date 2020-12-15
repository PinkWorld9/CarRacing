var Name_Of_The_Student_Array=[];
function Submit(){
var inputs = [];
for(var j=1; j <= 6; j++){
    inputs.push(document.getElementById("input"+j).value)
}
document.getElementById("ShowPara1").innerHTML=inputs.join(". ");
}
function Submit1(){
    var inputs = [];
    for(var j=1; j <= 6; j++){
        inputs.push(document.getElementById("input1"+j).value)
    }
    document.getElementById("ShowPara2").innerHTML=inputs.join(". ");
    }
