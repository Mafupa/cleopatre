var container = document.querySelector(".card-container");
var ignoreNextScrollEvent = false;
var userHasScrolled = false;
var scrollDirection = 1

container.onscroll = function (e)
{
	if (ignoreNextScrollEvent){
    	ignoreNextScrollEvent = false;
    	return;
	}else{
		userHasScrolled = true;
		setTimeout(()=>{
			userHasScrolled = false;
		}, 20000);
	}
}

function smoothScroll(){
	if(userHasScrolled == false){
		ignoreNextScrollEvent = true;
		container.scrollLeft += scrollDirection;
		if (container.offsetWidth + container.scrollLeft >= container.scrollWidth || container.scrollLeft == 0) {
			scrollDirection *= -1
			document.getElementById('vitrine-image').style.backgroundImage="url(../img/hairdresser.jpg)"

		}
	}
}
setInterval(smoothScroll, 100);


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".header-navbar ul");
const navLink = document.querySelectorAll(".header-navbar a");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
}

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
	hamburger.classList.remove("active");
	navMenu.classList.remove("active");
}