
'use strict';
export function createWelcomeSlider(){
	
  let items = document.querySelectorAll('.carousel .item'),
      dots = document.querySelectorAll('.slider-dots_item'),
      currentItem = 0,
      isEnabled = true,
      count = document.createElement('span'),
      dotsCounter = document.querySelector('.slider-counter'),
      str = 0 + String(currentItem + 1);
  
  count.innerHTML = str;
  count.classList.add('slider-counter');
  dotsCounter.before(count);
  
  document.querySelector('.control.left').addEventListener('click', function() {
  	if (isEnabled) {
  		previousItem(currentItem);
  		count.innerHTML =0 + String(currentItem+1);
  	}
  });
  
  document.querySelector('.control.right').addEventListener('click', function() {
  	if (isEnabled) {
  		nextItem(currentItem);
  		count.innerHTML =0 + String(currentItem+1);
  	}
  });
  
  const swipedetect = (el) => {
      let surface = el;
  	let startX = 0;
  	let startY = 0;
  	let distX = 0;
  	let distY = 0;
  	let startTime = 0;
  	let elapsedTime = 0;
  	let threshold = 150;
  	let restraint = 100;
  	let allowedTime = 300;
  
  	surface.addEventListener('mousedown', function(e){
  		startX = e.pageX;
  		startY = e.pageY;
  		startTime = new Date().getTime();
  		e.preventDefault();
  	}, false);
  
  	surface.addEventListener('mouseup', function(e){
  		distX = e.pageX - startX;
  		distY = e.pageY - startY;
  		elapsedTime = new Date().getTime() - startTime;
  		if (elapsedTime <= allowedTime){
  			if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){
  				if ((distX > 0)) {
  					if (isEnabled) {
  						previousItem(currentItem);
  						count.innerHTML =0 + String(currentItem+1);
  					}
  				} else {
  					if (isEnabled) {
  						nextItem(currentItem);
  						count.innerHTML =0 + String(currentItem+1);
  					}
  				}
  			}
  		}
  		e.preventDefault();
  	}, false);
  
  	surface.addEventListener('touchstart', function(e){
  		if (e.target.classList.contains('arrow') || e.target.classList.contains('control')) {
  			if (e.target.classList.contains('left')) {
  				if (isEnabled) {
  					previousItem(currentItem);
  					count.innerHTML = 0 + String(currentItem + 1);
  				}
  			} else {
  				if (isEnabled) {
  					nextItem(currentItem);
  					count.innerHTML =0 + String(currentItem+1);
  				}
  			}
  		}
  			var touchobj = e.changedTouches[0];
  			startX = touchobj.pageX;
  			startY = touchobj.pageY;
  			startTime = new Date().getTime();
  			e.preventDefault();
  	}, false);
  
  	surface.addEventListener('touchmove', function(e){
  			e.preventDefault();
  	}, false);
  
  	surface.addEventListener('touchend', function(e){
  			var touchobj = e.changedTouches[0];
  			distX = touchobj.pageX - startX;
  			distY = touchobj.pageY - startY;
  			elapsedTime = new Date().getTime() - startTime;
  			if (elapsedTime <= allowedTime){
  					if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){
  							if ((distX > 0)) {
  								if (isEnabled) {
  									previousItem(currentItem);
  									count.innerHTML =0 + String(currentItem+1);
  								}
  							} else {
  								if (isEnabled) {
  									nextItem(currentItem);
  									count.innerHTML =0 + String(currentItem+1);
  								}
  							}
  					}
  			}
  			e.preventDefault();
  	}, false);
  }
  
  var el = document.querySelector('.carousel');
  swipedetect(el);
  
  
  
  function nextItem(n) {
  	hideItem('to-left');
  	changeCurrentItem(n + 1);
  	showItem('from-right');
  	
  }
  
  function previousItem(n) {
  	hideItem('to-right');
  	changeCurrentItem(n - 1);
  	showItem('from-left');
  	
  }
  
  function changeCurrentItem(n) {
  	currentItem = (n + items.length) % items.length;
  }
  
  function hideItem(direction) {
  	isEnabled = false;
  	dots[currentItem].classList.remove('active');
  	items[currentItem].classList.add(direction);
  	items[currentItem].addEventListener('animationend', function() {
  		this.classList.remove('active', direction);
  	});
  }
  
  function showItem(direction) {
  	items[currentItem].classList.add('next', direction);
  	dots[currentItem].classList.add('active');
  	items[currentItem].addEventListener('animationend', function() {
  		this.classList.remove('next', direction);
  		this.classList.add('active');
  		isEnabled = true;
  	});
  }
  let menu = document.getElementById('menu');
  let nav = document.getElementById('navigation-list');
  menu.addEventListener('click', showHideMenu);
  function showHideMenu(){
    if(!nav.classList.contains('show-menu')) {
        nav.classList.remove('hide-menu');
        nav.classList.add('show-menu');
        
    } else {
        nav.classList.add('hide-menu');
        nav.classList.remove('show-menu');
    }
}
let n =0;
dots.forEach((e)=>{
	e.addEventListener('click',()=>{
		showItemDots(n);
		n++;
	});
});
function showItemDots(n){
	dots[currentItem].classList.remove('active');
	items[currentItem].classList.remove('active');
	changeCurrentItem(n);
	items[currentItem].classList.add('active');
	dots[currentItem].classList.add('active');
	count.innerHTML =0 + String(currentItem+1);
	}
}


