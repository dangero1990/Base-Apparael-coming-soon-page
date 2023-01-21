document.getElementById("button").onclick = function ValidateEmail() {

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(document.getElementById("email").value.match(mailformat)) {
        return true;
    } else {
    document.getElementById("error__msg").innerHTML = "Please enter a valid email";
    document.getElementById("error__icon").style.display = "block";
    document.getElementById("email").style.border = "3px solid red";
    return false;
    }
}