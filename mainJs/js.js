let h_menu = document.getElementsByClassName('course__flexrow');
for(i=0; i<h_menu.length; i++) {
	h_menu[i].addEventListener('mousedown',showMenu);
	h_menu[i].addEventListener('mouseleave',hideMenu);
}

function showMenu() {
	if(this.children.length>1) {
		this.children[1].style.height = '0';
		this.children[1].style.opacity = '1';
		this.children[1].style.overflow = 'visible';
	
	}
}
function hideMenu() {
	if(this.children.length>1) {
		this.children[1].style.height = '0';
		this.children[1].style.opacity = '0';
		this.children[1].style.overflow = 'hidden';
	}
}

const freeWebButton = document.querySelector('.freeWeb__button');
console.log(freeWebButton)

const feedback1 = document.querySelector('.feedback');
console.log(feedback1);

const feedbackOpen = document.querySelector('.feedback-open');

let offset = 0;

const sliderLine = document.querySelector('.slider-line');
document.querySelector('.slider-next').addEventListener('click', function(){
	offset = offset + 256;
	if(offset > 760) {
		offset = 0;
	}
	sliderLine.style.left = -offset + 'px';


})

document.querySelector('.slider-prev').addEventListener('click', function(){
	offset = offset - 256;
	if(offset < 0) {
		offset = 760;
	}
	sliderLine.style.left = -offset + 'px';


})