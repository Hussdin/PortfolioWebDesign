const querystring = window.location.search
	const url = new URLSearchParams(querystring)
	const urluser = url.get("username")
	const urlpass = url.get("password")
	
window.onload = loginLoad;
function loginLoad(){
	let form =document.getElementById("Login")
	form.onsubmit = checkLogin
}

function checkLogin(){
	
	
	let user = document.forms["Login"]["username"].value
	let password = document.forms["Login"]["password"].value


	if(user!=urluser || password!=urlpass){
		alert("Username or Password is wrong")
		return false;
	}
	else{
		alert(" Succeuss!")
		return true;
	}
}