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

/* Dark Mode Toggle */
var $DTspan = $(".DTspan");
var $darkToggle = $(".dark-toggle");
var $wire = $(".wire");
var $triangle = $(".triangle");

/* Body and Core Elements */
var $body = $("body");

var $h2 = $("h2");
var $h3 = $("h3");
var $p = $("p");

/* Landing */
var $landing = $("#landing");
var $lightSwoop = $(".light-swoop");
var $darkSwoop = $(".dark-swoop");

/* Portfolio */
var $example = $(".example");

/* Pricing */
var $priceBox = $(".price-box");
var $priceBoxLi = $(".price-box li");
var $priceBoxSpan = $(".price-box span");
var $priceBoxH2 = $(".price-box h2");

/* Footer */
var $footer = $("footer");
var $darkSVG = $(".dark-mode-svg");
var $lightSVG = $(".light-mode-svg");

// Dark Mode Action
let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector('.dark-mode-button');

const enableDarkMode = () => {

  /* Dark Mode Toggle */
  $darkToggle.addClass("dark-mode");
  $DTspan.addClass("dark-mode");
  $wire.addClass("dark-mode");
  $triangle.addClass("dark-mode");

  $body.addClass("dark-mode");

  $h2.addClass("dark-mode");
  $h3.addClass("dark-mode");
  $p.addClass("dark-mode");

  // Landing
  $landing.addClass("dark-mode");
  $lightSwoop.addClass("dark-mode");
  $darkSwoop.addClass("dark-mode");

  // Portfolio
  $example.addClass("dark-mode");

  // Pricing
  $priceBox.addClass("dark-mode");
  $priceBoxLi.addClass("dark-mode");
  $priceBoxSpan.addClass("dark-mode");
  $priceBoxH2.addClass("dark-mode");

  // Footer
  $footer.addClass("dark-mode");
  $darkSVG.addClass("dark-mode");
  $lightSVG.addClass("dark-mode");

  localStorage.setItem("darkMode", "enabled")
}

const disableDarkMode = () => {

  /* Dark Mode Toggle */
  $darkToggle.removeClass("dark-mode");
  $DTspan.removeClass("dark-mode");
  $wire.removeClass("dark-mode");
  $triangle.removeClass("dark-mode");

  $body.removeClass("dark-mode");

  $h2.removeClass("dark-mode");
  $h3.removeClass("dark-mode");
  $p.removeClass("dark-mode");

  // Landing
  $landing.removeClass("dark-mode");
  $lightSwoop.removeClass("dark-mode");
  $darkSwoop.removeClass("dark-mode");

  // Portfolio
  $example.removeClass("dark-mode");

  // Pricing
  $priceBox.removeClass("dark-mode");
  $priceBoxLi.removeClass("dark-mode");
  $priceBoxSpan.removeClass("dark-mode");
  $priceBoxH2.removeClass("dark-mode");

  // Footer
  $footer.removeClass("dark-mode");
  $darkSVG.removeClass("dark-mode");
  $lightSVG.removeClass("dark-mode");

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