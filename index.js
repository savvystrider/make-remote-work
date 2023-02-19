const featuresLink = document.getElementById("dropdown-link-1");
const featuresMenu = document.getElementById("dropdown-menu-1");

const companyLink = document.getElementById("dropdown-link-2");
const companyMenu = document.getElementById("dropdown-menu-2");

const mobileFeaturesLink = document.getElementById("dropdown-link-3");
const mobileFeaturesMenu = document.getElementById("dropdown-menu-3");

const mobileCompanyLink = document.getElementById("dropdown-link-4");
const mobileCompanyMenu = document.getElementById("dropdown-menu-4");

const downArrow1 = document.getElementById("down-arrow-1");
const downArrow2 = document.getElementById("down-arrow-2");

const hamburger = document.getElementById("hamburger");

const navMenu = document.getElementById("nav-menu");

const main = document.getElementById("main");

featuresLink.addEventListener("click", function(e) {
    e.stopPropagation();
    if (featuresMenu.style.display === "none") {
        featuresMenu.style.display = "flex";
    } else {
        featuresMenu.style.display = "none";
    }
});

companyLink.addEventListener("click", function(e) {
    e.stopPropagation();
    if (companyMenu.style.display === "none") {
        companyMenu.style.display = "flex";
    } else {
        companyMenu.style.display = "none";
    }
});

mobileFeaturesLink.addEventListener("click", function(e) {
    e.stopPropagation();
    if (mobileFeaturesMenu.style.display === "none") {
        mobileFeaturesMenu.style.display = "block";
        downArrow1.src = "./images/icon-arrow-up.svg";
    } else {
        mobileFeaturesMenu.style.display = "none";
        downArrow1.src = "./images/icon-arrow-down.svg"
    }
})

mobileCompanyLink.addEventListener("click", function(e) {
    e.stopPropagation();
    if (mobileCompanyMenu.style.display === "none") {
        mobileCompanyMenu.style.display = "block";
        downArrow2.src = "./images/icon-arrow-up.svg";
    } else {
        mobileCompanyMenu.style.display = "none";
        downArrow2.src = "./images/icon-arrow-down.svg";
    }
})

document.documentElement.addEventListener("click", function() {
    if (featuresMenu.style.display === "flex" || companyMenu.style.display === "flex") {
        featuresMenu.style.display = "none";
        companyMenu.style.display = "none";
    }
})

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    if (navMenu.style.right === "-100%") {
        navMenu.style.right = "0";
        hamburger.src = "./images/icon-close-menu.svg";
    } else {
        navMenu.style.right = "-100%";
        hamburger.src = "./images/icon-menu.svg";
    }
    
}

const mainImage = document.getElementById("main-image");

let screenWidth = window.innerWidth;
if (screenWidth < 800) {
  mainImage.src = "./images/image-hero-mobile.png";
} else {
  mainImage.src =
    "./images/image-hero-desktop.png";
}