window.onload = pageLoad;

function pageLoad(){
	let GetReady = document.getElementById("start")
	GetReady.onclick = startGame 
}

function startGame()
{
	addBox();
	timeStart();
}

function timeStart(){
	var TIMER_TICK = 1000;
	var timer = null;
	var min = 0.1; 
	var second = min*60; 
	var x = document.getElementById('clock');
	
	timer = setInterval(timeCount, TIMER_TICK)
	
	function timeCount(){
		var allbox = document.querySelectorAll("#game-zone div");
		second = second-1 
		x.innerHTML = second
		
		if(allbox.length == 0 && second != 0){
			alert(" Win !!")
			clearInterval(timer)
		}
		else if(allbox.length != 0 && second == 0){
			alert(" Hey loser !!")
			clearInterval(timer)
			clearScreen()
		}
	}
}

function addBox(){
	
	var numbox = document.getElementById("numbox").value
	var gamezone =  document.getElementById("game-zone")
	var colorDrop = document.getElementById("color").value
	for (var i =0; i<numbox;i++){
		var tempbox = document.createElement("div")
		tempbox.className = "square"
		tempbox.style.backgroundColor = colorDrop
		tempbox.id = "box"+i;
		tempbox.style.left = Math.random() * (500 - 25) + "px";
		tempbox.style.top = Math.random() * (500 - 25) + "px";		
		
		gamezone.appendChild(tempbox) 
		blindBox(tempbox);
	}
}

function blindBox(box){
	
	var gamezone =  document.getElementById("game-zone")
	box.onclick = function(){
		gamezone.removeChild(box)		
	}
}

function clearScreen(){
	
	var allbox = document.querySelectorAll("#game-zone div")
	var gamezone = document.getElementById("game-zone")

	for (var i=0;i<allbox.length;i++){
		gamezone.removeChild(allbox[i])
	}
}






