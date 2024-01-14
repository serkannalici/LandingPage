const body = document.querySelector("body");
const main = document.querySelector(".main");
const mainContainer = document.querySelector(".main-container");
const navBar = document.querySelector(".nav-bar");
const upInfo = document.querySelector(".up-info");
const downInfo = document.querySelector(".down-info")
const aboutBtn = document.querySelector(".about-btn");
const themeBtn = document.querySelector(".theme-btn");
const activeBtn = document.querySelector(".active");
const projectsBtn = document.querySelector(".projects-btn");
const globeBtn = document.querySelector(".globe-btn");
const projects = document.querySelector(".projects")
const socialBtn = document.querySelector(".social-btn")
const socialBtn2 = document.querySelector(".social-btn2")
const socialBtn3 = document.querySelector(".social-btn3")
// ////////////////////////////////////////////////////////

var options = {
  strings: [
    "Front-end developer & designer & student, I continue to work on projects.",
    "You can access my projects by scrolling down.",
    "Merry Christmas!",
  ],
  typeSpeed: 35,
  backSpeed: 25,
  loop: true,
  startDelay: 300,
  contentType: "text",
  smartBackspace: true,
  backDelay: 3000,
  attr: null,
  cursorChar: "",
  waitUntilVisible: true,
};

var typed = new Typed("#typed-text", options);

// Social Media
var social = false;

const upInfoText = document.querySelector(".up-text")
const upInfoSocial = document.querySelector(".social-text");

aboutBtn.addEventListener("click", function(event) {

  social = ! social;

  if(social === false){
    upInfoText.style.display = "flex";
    upInfoSocial.style.display = "none";

  }else{
    upInfoText.style.display = "none";
    upInfoSocial.style.display = "flex";
  }
});



// LIGHT / DARK MODE

var theme = false; // ? Dark Mod İçin (FALSE) 

const darkMode = document.getElementById("dark-icon");
const lightMode = document.getElementById("light-icon");


themeBtn.addEventListener("click", function () {
  // Todo Light Mod İçin Classlistler (Önemli)
  main.classList.toggle("light-mode-body");
  mainContainer.classList.toggle("light-mode-container");
  activeBtn.classList.toggle("light-mode-navbar-button");
  projectsBtn.classList.toggle("light-mode-navbar-button");
  aboutBtn.classList.toggle("light-mode-navbar-button");
  themeBtn.classList.toggle("light-mode-navbar-button");
  upInfo.classList.toggle("light-mode-up-info");
  downInfo.classList.toggle("light-mode-down-info");
  projects.classList.toggle("light-mode-projects");
  socialBtn.classList.toggle("light-mode-navbar-button");
  socialBtn2.classList.toggle("light-mode-navbar-button");
  socialBtn3.classList.toggle("light-mode-navbar-button");
  theme = ! theme;
  
  if(theme === false){
    darkMode.style.display = "none";
    lightMode.style.display = "flex";

  }else{
    darkMode.style.display = "flex";
    lightMode.style.display = "none";

  }
});



