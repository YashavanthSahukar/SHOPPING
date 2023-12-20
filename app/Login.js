
const text = document.getElementById("text").value;
const password = document.getElementById("password").value;
function login() {

if (text == "bbbbb" && password == "<12345>") {
    SubmitEvent(open("home.html"));
    window.location.href = "home.html";

}
else {
    alert("Incorrect username or password");
}
}