document.getElementById("button").onclick = function() {
    document.getElementById("error").innerHTML = "Please enter a valid email";
    document.getElementById("email").style.border = "3px solid red"
}