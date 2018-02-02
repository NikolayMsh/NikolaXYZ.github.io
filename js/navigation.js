
var navs = document.querySelectorAll('.navigation>.container>ul>li>a');
var lists = document.querySelectorAll('.navigation>.container li ul');
var menu = document.querySelector('.menu');
for (var i = 0; i < navs.length; i++) {
	navs[i].addEventListener('click', function (event) {
			hideList();
		
		if (this.nextElementSibling) {
			var h = 0;
			var height = getComputedStyle(this.nextElementSibling).height;
			for (var i = 0; i < this.nextElementSibling.children.length; i++) {
				h++;
			}
			if (height == '0px') {
				this.nextElementSibling.style.height = h*28+'px';
				this.nextElementSibling.style.transition = 'linear '+ h*0.05+'s';
				this.style.background = '#fbf2d3';
					this.style.borderBottomColor = '#f1e6bb';
			} else{
					this.nextElementSibling.style.height = '0px';
					this.style.background = '';
					this.style.borderBottomColor = 'transparent';
			}			
		}
		event.preventDefault();
		
	});
}
function hideList () {
	for (var i = 0; i < lists.length; i++) {
		lists[i].style.height = '0px';
		lists[i].previousElementSibling.style.background = '';
		lists[i].previousElementSibling.style.borderBottomColor = 'transparent';
	}
}


$(document).ready(function () {	
	$('.menu').click(function () {

		$('.navigation>.container>ul').slideToggle(500);
		hideList();	
	});
	$(window).resize(function () {
		if ($(window).width() > 850) {
			hideList();
		$('.navigation>.container>ul').removeAttr('style');
	}
	})
})