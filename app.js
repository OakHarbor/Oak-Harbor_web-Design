/* jQuery for the navigation animation */

var $hamburger = $(".hamburger");
  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    // Do something else, like open/close menu
  });

  /* Code for the toggling of the navbar */

let toggleNavStatus = false;

let toggleNav = function () {
    var $html = $("html");
    let getSidebar = document.querySelector(".navbar-menu");
    let getSidebarUL = document.querySelector(".side-nav ul");
    let getSidebarLinks = document.querySelectorAll(".side-nav a");
    let getSidebarVisibility = document.querySelector(".side-nav");

    if (toggleNavStatus === false) {

      getSidebarVisibility.style.visibility = "visible"

      getSidebarLinks.forEach((item, index)=>{
        console.log(item);
        item.style.opacity = "1";
        item.style.visibility = "visible";
        });
      getSidebar.style.width = "60%";
      $html.addClass("clicked");
      toggleNavStatus = true;
    } 

    else if (toggleNavStatus === true) {

         getSidebarLinks.forEach((item, index)=>{
          item.style.opacity = "0";
          item.style.transitionDelay = "0s";
          item.style.visibility = "hidden";
         });
        getSidebar.style.width = "0";
        $html.removeClass("clicked");
        toggleNavStatus = false;
    }
}


// ------------------------------------------------- DARK MODE -----------------------------

/* Navigation Bar and Body */
var $body = $("body");

// Dark Mode Action
let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector('#dark-mode');

const enableDarkMode = () => {

  /* Navigation */
  

  localStorage.setItem("darkMode", "enabled")
}

const disableDarkMode = () => {

  /* Navigation */
  

  localStorage.setItem("darkMode", null)
}

if (darkMode == "enabled") {
  enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
})