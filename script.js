function login(){
  var username=document.getElementById("username").value;
  var password=document.getElementById("password").value;
  window.location.href="home.html";
}

function signup(){
  var fname=document.getElementById("firstname").value;
  var lname=document.getElementById("lastname").value;
  var email=document.getElementById("signup_email").value;
  var password=document.getElementById("signup_password").value;
  var c_password=document.getElementById("signup_confirmpassword").value;
  window.location.href="login.html";
}

// function handleSubmit(event) {
//   event.preventDefault(); 
//   var username = document.getElementById("username").value;
//   var email = document.getElementById("email").value;
//   var password = document.getElementById("password").value;
//   if (!username || !email || !password) {
//       alert("Please fill out all fields.");
//       return;
//   }
//   alert("Signup successful! You can now login.");
//   window.location.href = "login.html";
// }