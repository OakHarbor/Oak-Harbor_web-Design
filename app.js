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
    var $container = $(".container");
    var $SidebarLi = $(".side-nav ul li");
    let getSidebar = document.querySelector(".navbar-menu");
    let getSidebarUL = document.querySelector(".side-nav ul");
    let getSidebarLinks = document.querySelectorAll(".side-nav a");
    let getSidebarVisibility = document.querySelector(".side-nav");

    if (toggleNavStatus === false) {
      $SidebarLi.addClass("open");
    }

    else if (toggleNavStatus === true) {
      $SidebarLi.removeClass("open");
    }

    if (toggleNavStatus === false) {

      getSidebarVisibility.style.visibility = "visible";

      getSidebarLinks.forEach(function(item, index) {
        item.style.opacity = "1";
        item.style.visibility = "visible";
        });
  
      getSidebar.style.width = "60%";
      $html.addClass("clicked");
      $container.addClass("clicked");
      toggleNavStatus = true;
    } 

    else if (toggleNavStatus === true) {

      getSidebarLinks.forEach(function(item, index) {
          item.style.opacity = "0";
          item.style.transitionDelay = "0s";
          item.style.visibility = "hidden";
         });
        getSidebar.style.width = "0";
        $html.removeClass("clicked");
       $container.removeClass("clicked");
        toggleNavStatus = false;
    }
}


// ------------------------------------------------- DARK MODE -----------------------------

/* Body and Core Elements */
const body = document.querySelector('body');

// Dark Mode Action
let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector('.dark-mode-button');
const darkModeToggleFooter = document.querySelector('footer .dark-mode-button');

// Enable Dark Mode
const enableDarkMode = () => {

  body.classList.add("dark-mode");
  localStorage.setItem("darkMode", "enabled")
}

// Disable Dark Mode
const disableDarkMode = () => {

  body.classList.remove("dark-mode");
  localStorage.setItem("darkMode", null)
}

if (darkMode == "enabled") {
  enableDarkMode();
}

// Desktop Button
darkModeToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
})

// Footer button
darkModeToggleFooter.addEventListener('click', () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
})