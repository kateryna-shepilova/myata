$(document).ready(function () {
	$('.menu-burger').click(function (event) {
		$('.menu-burger, .menu').toggleClass('active');
		$('.user-nav-burger, .user-nav').removeClass('active');
		$('body').toggleClass('lock');
	});
});

$(document).ready(function () {
	$('.user-nav-burger').click(function (event) {
		$('.user-nav-burger, .user-nav').toggleClass('active');
		$('.menu-burger, .menu').removeClass('active');
		$('body').toggleClass('lock');
	});
});


$(document).ready(function () {
	$('.slider').slick({
		infinite: true,
		dots: true,
		autoplay: true
	});
});

function bootstrapTabControl() {
	var i, items = $('.btn-tabs'), pane = $('.tab-pane');

	$('.nexttab').on('click', function () {
		for (i = 0; i < items.length; i++) {
			if ($(items[i]).hasClass('active') == true) {
				break;
			}
		}

		if (i < items.length - 1) {
			$(items[i]).removeClass('active');
			$(items[i + 1]).addClass('active');
			$(pane[i]).removeClass('show active');
			$(pane[i + 1]).addClass('show active');
		}
	});

	$('.prevtab').on('click', function () {
		for (i = 0; i < items.length; i++) {
			if ($(items[i]).hasClass('active') == true) {
				break;
			}
		}
		if (i != 0) {
			$(items[i]).removeClass('active');
			$(items[i - 1]).addClass('active');
			$(pane[i]).removeClass('show active');
			$(pane[i - 1]).addClass('show active');
		}
	});
}
bootstrapTabControl();

$(function () {
	$('.scrollup').click(function () {
		$("html, body").animate({
			scrollTop: 0
		}, 1000);
	})
})
$(window).scroll(function () {
	if ($(this).scrollTop() > 200) {
		$('.scrollup').fadeIn();
	}
	else {
		$('.scrollup').fadeOut();
	}
});