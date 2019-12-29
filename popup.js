/* 
  Cookie Notifiction / Bottom of Window 
  Author: FruitLukes
*/
// ******* START *********
var modal = document.getElementById('umcCookiePopup');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var understandBtn = document.getElementsByClassName("modal-btn")[0];
var checkBtn = document.getElementsByClassName("checkCookie")[0];
var resetBtn = document.getElementsByClassName("resetCookie")[0];
var cookie = "";
var now = new Date();

// *************** FUNCTIONS ***************

// Show Modal
function showPopup() {
  modal.style.display = "block";
  setTimeout(function(){modal.classList.add("modal-fade-in")},10);
}

// Set path=YourSite, line 33
// Set New Cookie
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=https://codepen.io/FruitLukes/pen/KbwvGV";
}

//Get Cookie
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

//Check for Specific Cookie
function checkCookie() {
  console.log("Check Cookie");
  var cookieVal = getCookie("Visited");
    if (cookieVal != "") {
      cookie = "yes";
    } else{
      cookie = "none";
    } 
  }

// ************ CHECK FOR COOKIE / IF NONE, SHOW POPUP **********
// ON Load Check for Cookie 
checkCookie();
if(cookie == "none") {
    showPopup(); 
   }else{
     var cookieName = getCookie("Visited");
 }

// ******** BUTTONS ************
// Close Button
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.classList.remove("modal-fade-in");
  setTimeout(function(){modal.style.display = "none"},100);
} 
// I Understand Button
understandBtn.onclick = function() {
  setCookie("Visited", "yes", 365);
  console.log("cookie created");
  modal.classList.remove("modal-fade-in");
  setTimeout(function(){modal.style.display = "none"},200);
}

//************** END ******************

// ********************BUTTONS For Testing / DONT INCLUDE********************
// Checks for cookie, if none, show popup
// checkBtn.onclick = function() {
//   console.log("--------checkBtn--------");
//   checkCookie();
//   if(cookie == "none") {
//     console.log("cookie: none"); 
//    }else{
//     console.log("Already Visited");
// }
// }
// resetBtn.onclick = function() {
//   console.log("--------resetBtn--------");
//   document.cookie = "Visited=; expires=;";
//   checkCookie();
//   if(cookie == "none") {
//     console.log("Cookie: " + cookie);
//     showPopup();
//    }else {
//      console.log("Cookie: Visited=" + cookie)}
// }
