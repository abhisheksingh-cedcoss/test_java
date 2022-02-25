function myfunction(){
var red= document.getElementById("rangeRed").value;
var blue = document.getElementById("rangeBlue").value;
var green= document.getElementById("rangeGreen").value;

var color = 'rgb(' + red + ',' + green +','+blue+')';

document.body.style.background = color;
document.getElementById("colouroutput").innerHTML = ':'+ color;

}
document.getElementById("rangeRed").addEventListener('input', changecolor);
document.getElementById("rangeGreen").addEventListener('input', changecolor);
document.getElementById("rangeBlue").addEventListener('input', changecolor);
