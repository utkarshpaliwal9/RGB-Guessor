var rgbToHex = function (rgb) { 
  var hex = Number(rgb).toString(16);
  if (hex.length < 2) {
       hex = "0" + hex;
  }
  return hex;
};
var fullColorHex = function(r,g,b) {   
  var red = rgbToHex(r);
  var green = rgbToHex(g);
  var blue = rgbToHex(b);
  return red+green+blue;
};
function displayInstuctions()
{
	alert("The RGB color model is an additive color model in which red, green, and blue light are added together in various ways to reproduce a broad array of colors. The name of the model comes from the initials of the three additive primary colors, red, green, and blue. \n\nYour task is to guess which colour is represented from the given numbers in the RGB(). \nReference: https://en.wikipedia.org/wiki/RGB_color_model ");
}
function generateColor(btn)
{
	var r = Math.floor(Math.random()*255)+1;
	var g = Math.floor(Math.random()*255)+1;
	var b = Math.floor(Math.random()*255)+1;
	document.getElementById("color"+btn).style.backgroundColor = '#'+fullColorHex(r,g,b);
}
var r = Math.floor(Math.random()*255)+1;
var g = Math.floor(Math.random()*255)+1;
var b = Math.floor(Math.random()*255)+1;
document.getElementById("color").innerHTML = "RGB("+ r+","+g+","+b+")";
//document.getElementById("color").style.backgroundColor = '#'+fullColorHex(r,g,b);
var ans_btn = Math.floor(Math.random()*6)+1;
var ans = document.getElementById("color"+ans_btn);
ans.style.backgroundColor = '#'+fullColorHex(r,g,b);
for (var i = 1; i <= 6; i++) {
	if(i==ans_btn)
		continue;
	generateColor(i);

}
function check(bt)
{
	if(bt[5] == ans_btn)
	{
		document.getElementById("result").innerHTML = "Yayy! Correct";
		document.getElementById("jumbo").style.backgroundColor = '#'+fullColorHex(r,g,b);
		for (var i = 1; i <= 6; i++) {
			document.getElementById("color"+i).disabled = true;
		}
	}
	else
	{
		document.getElementById("result").innerHTML = "Try Again";
		var button = document.getElementById(bt);
		button.style.backgroundColor = "transparent";
		button.disabled = true;
	}
}




var btn1 = document.getElementById("color1");
var btn2 = document.getElementById("color2");
var btn3 = document.getElementById("color3");
var btn4 = document.getElementById("color4");
var btn5 = document.getElementById("color5");
var btn6 = document.getElementById("color6");
//bt1.style.backgroundColor: rgb(r,g,b);