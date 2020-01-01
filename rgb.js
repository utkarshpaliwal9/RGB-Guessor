var r = Math.floor(Math.random()*255)+1;
var g = Math.floor(Math.random()*255)+1;
var b = Math.floor(Math.random()*255)+1;
document.getElementById("color").innerHTML = "RGB("+ r+","+g+","+b+")";
var btn1 = document.getElementById("color1");
var btn2 = document.getElementById("color2");
var btn3 = document.getElementById("color3");
var btn4 = document.getElementById("color4");
var btn5 = document.getElementById("color5");
var btn6 = document.getElementById("color6");
//bt1.style.backgroundColor: rgb(r,g,b);
function check(bt)
{
	var b = document.getElementById(bt);
	document.getElementById(bt).innerHTML = ":)";
}