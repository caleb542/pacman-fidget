pacman_animate_into_view();

$(document).ready(function () {
    $(".instructions").css({
        display: "none"
    });
    $(".instructions").fadeIn(2500);
});
var up = $('.direction_up');
var down = $('.direction_down');
var left = $('.direction_left');
var right = $('.direction_right');


right.mousedown( function(){
$('.pacman').stop();
up.removeClass('on');
down.removeClass('on');
left.removeClass('on');
animateRight();
right.addClass('on');

})
up.mousedown( function() {
$('.pacman').stop();
down.removeClass('on');
left.removeClass('on');
right.removeClass('on');
animateUp();
$(this).addClass('on');

})
left.mousedown( function(){
$('.pacman').stop();
up.removeClass('on');
down.removeClass('on');
right.removeClass('on');
animateLeft();
$(this).addClass('on');
})
down.mousedown( function() {
$('.pacman').stop();
up.removeClass('on');
left.removeClass('on');
right.removeClass('on');
animateDown();
$(this).addClass('on');
})
const fadeInstructions = () => {
    $(".instructions").fadeOut(1000);
}
function animateUp(){
	startEating();
    fadeInstructions();
	var screenWidth = $(window).width();
	var screenHeight = $(window).height();
	var theoffset = ($('.pacman').offset()).top;
	var rate = (Math.floor(theoffset/13)*50);
	console.log(rate + " as speed");
	$('.pacman').css({transform:'rotate(90deg)'}).animate({top:0},rate,"linear",  function(){
	stopEating();
	});
}
function animateRight(){
	startEating();
    fadeInstructions();
	var screenWidth = $(window).width();
	var screenHeight = $(window).height();
	var theoffset = (screenWidth - (($('.pacman').offset()).left + 60 ));
	var rate = (Math.floor((theoffset)/13)*50);
	console.log('RIGHT: OFFSET:' +theoffset+ " rate:"+ rate);
	$('.pacman').css({transform:'scale(-1,1)'}).animate({left:'+='+ theoffset},rate, "linear", function(){
	stopEating();
	});
}
function animateLeft(){
	startEating();
    fadeInstructions();
	var screenWidth = $(window).width();
	var screenHeight = $(window).height();
	var theoffset = ($('.pacman').offset()).left;
	var rate = (Math.floor((theoffset)/13)*50);
	console.log(rate + " as speed");
	$('.pacman').css({transform:'rotate(0deg)'}).animate({left:0},rate,"linear",  function(){
	stopEating();
	});
}
function animateDown(){
	startEating();
    fadeInstructions();
	var screenWidth = $(window).width();
	var screenHeight = $(window).height();
	var theoffset = ((($('.pacman').offset()).top - screenHeight + 60)* -1);
	var rate = (Math.floor((theoffset)/13)*50);
	console.log(rate + " as speed and animate down");
	$('.pacman').css({transform:'rotate(270deg)'}).animate({top:'+='  + theoffset},rate,"linear", function(){
	stopEating();
	});
}
	
function pacman_animate_into_view(){
var center = ($(window).width())/2;
	var turn = 'rotate(180deg)';
	var moveX = '+=';
	var speed = (center - 29) + 65 + 'px';
	var adjustment = 'translateX(-50%)';
		$('.pacman').css({
				'-webkit-animation':'pacman .25s steps(4) infinite',
				 animation:'pacman .25s steps(4) infinite',
				 '-webkit-transform': turn,
				  transform: turn
				 }).animate({
					left: moveX + speed,
					transform:adjustment
					}, 2000, function(){
						//checkPosition();
						$('.pacman').css({
							'-webkit-animation':'pacman .25s steps(4) linear',
							animation:'pacman .25s steps(4) linear'
							});
					})
}	
			

$(document).keydown(function(e){
//e.which is set by jQuery for those browsers that do not normally support e.keyCode.
	play(e); 
});


function play(e){
	var keyCode;
	var rate;	
	var turn = 0;
	var moveX;
	var moveY;
		if (e == 38 || e == 40 || e == 37 || e == 39){
			keyCode = e;
			rate = 120;
			speed = '40px';
		} else{
		keyCode = e.keyCode || e.which;
		}
		if (keyCode == 38){ 
			$('.pacman').stop()
			animateUp();
			
		}else if(keyCode == 40) { 
			$('.pacman').stop()
			animateDown();
		}else if(keyCode == 37) { 
			$('.pacman').stop()
			animateLeft();
		}else if (keyCode == 39) { 
			$('.pacman').stop()
			animateRight();
		};		
	}	
function pacman_initiate(turn,moveX,moveY,speed,rate){
$('.pacman').css({
			'-webkit-animation':'pacman 0.25s steps(4) infinite',
			 animation:'pacman 0.25s steps(4) infinite',
			 '-webkit-transform':turn,
			 transform: turn
			 }).animate({
				left: moveX + speed,
				top: moveY + speed
				},rate,'linear');
}	

function stopEating(){
 $('.pacman').css({
			'-webkit-animation':'pacman 0.25s linear',
			'-ms-animation':'pacman 0.25s linear',
			 animation:'pacman 0.25s linear',
			  'background-position':'-60px 0'
			 })
}
function startEating(){
$('.pacman').css({
			'-webkit-animation':'pacman 0.25s steps(4) infinite',
			'-ms-animation':'pacman 0.25s steps(4) infinite',
			 animation:'pacman 0.25s steps(4) infinite'
			 })
}

