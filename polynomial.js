window.addEventListener("load", main, false);
function main(){

	var ctx = canvas_example.getContext("2d");
	var w = canvas_example.width;
	var h = canvas_example.height;
	var x_min = -10;
	var x_max = 10;
	var N = 200;
	var dx = (x_max - x_min)/N;
	var y_min = -10;
	var y_max = 10;
	var scaleX = w/(x_max - x_min);
	var scaleY = h/(y_max - y_min);
	var start_button = document.getElementById('start_button')
	var clear_button = document.getElementById('clear_button')
	var x_extrMin = document.getElementById('formx1')
	var x_extrMax = document.getElementById('formx2')
	var y_extrMin = document.getElementById('formy1')
	var y_extrMax = document.getElementById('formy2')
	
	
	
function markup() {
ctx.fillStyle = "black";
//для оси y
for(var i =y_min; i < y_max - y_min; i++) { 
    ctx.fillText(- i + "", w/2-20, (i-y_min)*scaleY); 
    ctx.beginPath(); 
    ctx.moveTo(w/2-5,(i-y_min)*scaleY); 
    ctx.lineTo(w/2, (i-y_min)*scaleY); 
    ctx.stroke(); }
// для оси x
for(var j = x_min; j <x_max - x_min; j++) { 
    ctx.fillText(j + "", (j-x_min)*scaleX, h/2+20); 
    ctx.beginPath(); 
    ctx.moveTo( (j-x_min)*scaleX,h/2 -5); 
    ctx.lineTo( (j-x_min)*scaleX,h/2); 
    ctx.stroke(); 
}


}
 





	function f(x) { 
	 return  parseFloat(a0.value)+ parseFloat(a1.value)*x+ parseFloat(a2.value)*x**2+ parseFloat(a3.value)*x**3;
	

	 }






	 function extremum(){
	 	 if ((2*(a2.value))**2-4*3*(a3.value)*(a1.value)>=0){
	  var x1 = (-2*parseFloat(a2.value)+ Math.sqrt((2*parseFloat(a2.value))**2-4*3*parseFloat(a3.value)*parseFloat(a1.value)))/(2*3*parseFloat(a3.value))
		var x2 = (-2*parseFloat(a2.value)- Math.sqrt((2*parseFloat(a2.value))**2-4*3*parseFloat(a3.value)*parseFloat(a1.value)))/(2*3*parseFloat(a3.value))

	} 
		else { x_extrMin.value=x_extrMax.value=y_extrMin.value=y_extrMax.value= "None"}
  var y1 = parseFloat(a0.value)+ parseFloat(a1.value)*x1+ parseFloat(a2.value)*x1**2+ parseFloat(a3.value)*x1**3
	var y2 = parseFloat(a0.value)+ parseFloat(a1.value)*x2+ parseFloat(a2.value)*x2**2+ parseFloat(a3.value)*x2**3
	
	if (y1>y2){
		y_extrMax.value = y1
		y_extrMin.value = y2
		x_extrMax.value = x1
		x_extrMin.value = x2

	} else if(y1<y2){
		y_extrMax.value = y2
		y_extrMin.value = y1
		x_extrMax.value = x2
		x_extrMin.value = x1
	}else if (y1=y2){y_extrMin=y_extrMax= y1
		 x_extrMin=x_extrMax=x1
	}
}
					 
	
	

function axis() {
  ctx.beginPath();
  ctx.moveTo(w,h/2);
  ctx.lineTo(0,h/2);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(w/2,h);
  ctx.lineTo(w/2,0);
  ctx.stroke();

}
 
 axis();
 function plot(){
 ctx.beginPath();
 

 for(var x = x_min; x<=x_max;x=x+dx){ 
  ctx.lineTo(x*scaleX+w/2,-f(x)*scaleY+h/2);
}


 ctx.stroke();

 }
 



start_button.onclick = function() {
 ctx.clearRect(0,0, w,h);
axis();
plot();
 extremum();
 markup()

}
clear_button.onclick = function(){
 ctx.clearRect(0,0,w,h);
 axis();
 markup();
 y_extrMax.value = ''
		y_extrMin.value = ''
		x_extrMax.value = ''
		x_extrMin.value = ''

}

markup()

}
