//Disable scrolling ios
/*document.ontouchmove = function(event){
	event.preventDefault();
}
//Disable scrolling
$('html').css('overflow', 'hidden');

//Plugin to write text one at a time
(function($) {
    $.fn.writeText = function(content) {
        var contentArray = content.split(""),
            current = 0,
            elem = this;
        setInterval(function() {
            if(current < contentArray.length) {
                elem.text(elem.text() + contentArray[current++]);
            } else if (current >= contentArray.length) {
                clearInterval(contentArray);
                current--;
            }
        }, 300);
    };
})(jQuery);

$('.cliptext').writeText(" loading ");

//When window has loaded
$(window).load(function() {
    $('.cliptext').delay(5000);
    $('.cliptext').fadeOut(3000);
    $('#bg').delay(8000);
    $('#bg').fadeOut(3000);
    $('html')
    	.delay(11000)
    	.queue(function(next) {
    		$(this).css('overflow', 'scroll');
    		next();
    	});
    function enableScrolling() {
    	document.ontouchmove = function(event) {
    		return true;    	
    	}
	}
	setTimeout(enableScrolling, 8000)
});*/

/*$(function() {
		var loop = function animateLoop() {

			$('#load-bar').animate({
				'height': '50%'
			}, 5000),
			$('#load-bar').animate({
				'height': '30%'
			}, 5000, loop)
		}
	loop();
	$(window).load(function() {
		$('#load-overlay').delay(5000);
		$('#load-overlay').fadeOut(0);

	});	
});*/


window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

// var refreshRate = 1000 / 60;
// var maxYposition = 70;
// var rect = document.getElementById('load-bar');
// var speedY = 0.2;
// var positionY = 0;
// var globalId;

//gradient animate
// var maxYpositionGrad = 100;
// var grad = document.getElementById('grad-box');
// var speedYgrad = 0.2;
// var globalIdTwo;

// var logoMaxPositionY = 70;
// var logoPositionY = 35;
// var logo = document.getElementById('load-logo-img');
// var logoSpeedY = 0.1 / 2;
// var logoPositionY = 35;
// var globalIdThree;

// function step() {
// 	positionY = positionY + speedY;
// 	if(positionY > maxYposition || positionY < 0) {
// 		speedY = speedY * (-1);
// 	}

// 	rect.style.height = positionY + '%';
// 	globalId = requestAnimFrame(step);
// }
// globalId = requestAnimFrame(step);

// function gradient() {
// 	positionY = positionY + speedY;
// 	if(positionY > maxYpositionGrad || positionY < 0) {
// 		speedY = speedY * (-1);
// 	}

// 	grad.style.height = positionY + '%';
// 	globalId = requestAnimFrame(gradient);
// }
// globalIdTwo = requestAnimFrame(gradient);

// $('body, html').css({
// 	'overflow': 'hidden'
// });


// $(window).load(function() {
//  	$('#load-overlay').fadeOut(1000);
//     cancelAnimationFrame(globalId);
//  //    $('body, html').css({
// 	// 'overflow': 'scroll'
// 	// });
// });



$(function() {
	var today = new Date();
	var hourNow = today.getHours();
	var greeting;

	if (hourNow >= 18) {
		greeting = 'Good Evening!';
	} else if (hourNow >= 12) {
		greeting = 'Good Afternoon';
	} else if (hourNow >= 0) {
		greeting = 'Good Morning';
	} else {
		greeting = 'Hello';
	}

	document.getElementById('greeting').innerHTML += '<h1>' + greeting + '</h1>';
});

/*navigation*/


$('#nav-button').click(function() {
	$('nav').removeClass('close-nav'),
	$('nav').addClass('open-nav'),	
	$('body').css({
		"overflow": "hidden"
	});
});

$('.close-button, nav a').click(function() {
	$('nav').removeClass('open-nav'),
	$('nav').addClass('close-nav'),
	$('body').css ({
		"overflow": "scroll"
	});
});

$('#read-more').click(function() {
	$('html, body').animate({
	scrollTop: $('#about').offset().top }, '500');
});

var menu  = $('.menu-icon');
var about = $('#about');
var footer =$('footer');

var scrolling = false;

$(window).scroll(function() {
	scrolling = true;
});

setInterval(function() { 
	if (scrolling) {
		scrolling = false;

		$(window).scroll(function() {
			if($(window).scrollTop() >= about.offset().top) {
				menu.css ({
					"background-color": "#002a7f"
				});
			}else{
				menu.css ({
					"background-color": "#ffffff"
				});
			}	
		});

		$(window).scroll(function() {
			if($(window).scrollTop() >= footer.offset().top - 50) {
				menu.css ({
					"background-color": "#ffffff"
				});
			}
		});
	}
}, 250);




	
	
	

