function toggleMenu() {
	//var elem = document.getElementsByClassName("menu_min-link");
	var resMenu = document.getElementById("mn");
	var minMenu = document.getElementById("mIcon");

	if (resMenu.className === "menu_min-link") {
		resMenu.className = "menu_min-link respons";
		minMenu.className = "menu_icon state_open";
	} else {
		resMenu.className = "menu_min-link";
		minMenu.className = "menu_icon";
	}
}

var quantSlide = $('.slide').length;
var slideIndex = quantSlide;
var fitstInd = 1;

function plusDivs() {
	showDivs(slideIndex);
}

function minusDivs() {
	showDivs(fitstInd);
}

function showDivs(n) {
	var firstElm = $('.item_img').css("background-image");
	var massSlide = [firstElm];

	for (var i = 0; i < quantSlide; i++)
		massSlide.push($('.slide'+(i+1))
			.css("background-image"));

	$('.item_img')
		.css("background-image", massSlide[n]);

	if (n != 1) {
		massSlide.unshift(massSlide[massSlide.length-1]);
		massSlide.pop();
	} else {
		massSlide.push(massSlide[0]);
		massSlide.shift();
	}

	for (var i = 1; i < massSlide.length; i++) {
		$('.slide'+(i))
			.css("background-image", massSlide[i]);
	}
}

var complet = false;

var downloadRecipe = anime({
  targets: '#downlod',
  opacity: 1,
  top: '70%',
  borderRadius: '100%',
  delay: 800,
  duration: 3000,
  autoplay: false,
  complete: function(anim) {
    complete = anim.completed;
  }
});

var closeDowload = anime({
  targets: '#downlod',
  scale: 1.5,
  backgroundColor: {
  	value: 'rgba(0, 0, 0, 0)',
  	duration: 1500
  },
  delay: 1000,
  direction: 'alternate',
  autoplay: false,
});


document.querySelector('#recipe').onclick = function() {
	if (!complet) {
		downloadRecipe.restart();
	}
}

document.querySelector('#downlod').onclick = function() {
	closeDowload.restart();
	setTimeout(function() {
		$('#downlod').css('opacity', '0');
	}, 1400);
	complet = false;
}