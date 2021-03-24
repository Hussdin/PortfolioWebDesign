window.onload = pageLoad;
function pageLoad(){
	let RegisterForm = document.getElementById("Form")
    RegisterForm.onsubmit = validateForm
}

function validateForm() {
    
    
	let pw = document.forms["Form"]["password"].value
	let repw = document.forms["Form"]["retype"].value


    if (repw != pw){
        alert("Password are not match, Please try again!")
        return false;
    }
    else {
        alert("Register success!")
        return true;
    }
}