var number_1 = Number(document.getElementById("firstno").value);


function calculate() {
number_1 = document.getElementById("firstno").value;

var area = number_1 * number_1;
var perimeter  = 4 * number_1;

document.getElementById("lblArea").innerHTML = area;

 /*Muestra el perímetro de la variable en la sección con ID lblPerimeter.*/
document.getElementById("lblPerimeter").innerHTML = perimeter;
  
}


