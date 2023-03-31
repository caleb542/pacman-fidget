pacman_animate_into_view();

$(document).ready(function () {
    $(".instructions").css({
        display: "none"
    });
    $(".instructions").fadeIn(2500);
});

let direction = "not moving"
let checked = false;
let checkbox = $('#checkbox');
function ch(){
   checkbox.change( function(){
    if(this.checked){
        checked = true
        // console.log(checked)
     
    } else if (!this.checked){
        checked = false
        // console.log(checked)
  
    }
}) 
}


let screenWidth = $(window).width();
let screenHeight = $(window).height();

let up = $('.direction_up');
let down = $('.direction_down');
let left = $('.direction_left');
let right = $('.direction_right');


right.mousedown(function () {
    $('.pacman-alt').stop();
    up.removeClass('on');
    down.removeClass('on');
    left.removeClass('on');
    checked ? animateRightThrough() : animateRightTo();
    direction = 'up'
    right.addClass('on');

})
up.mousedown(function () {
    $('.pacman-alt').stop();
    down.removeClass('on');
    left.removeClass('on');
    right.removeClass('on');
    checked ? animateUpThrough() : animateUpTo();
    direction = 'up'
    $(this).addClass('on');

})
left.mousedown(function () {
    $('.pacman-alt').stop();
    up.removeClass('on');
    down.removeClass('on');
    right.removeClass('on');
    checked ? animateLeftThrough() : animateLeftTo();
    direction = 'left'
    $(this).addClass('on');
})
down.mousedown(function () {
    $('.pacman-alt').stop();
    up.removeClass('on');
    left.removeClass('on');
    right.removeClass('on');
    checked ? animateDownThrough() : animateDownTo();
    direction = 'down'
    $(this).addClass('on');
})
const fadeInstructions = () => {
    $(".instructions").fadeOut(1000);
}

function animateUpThrough() {
    startEating();
    fadeInstructions();
    direction='up'

    let theoffset = ($('.pacman-alt').offset()).top + 60;
    let rate = (Math.floor(theoffset / 13) * 50);
    // console.log(rate + " as speed");
    $('.pacman-alt').css({
        transform: 'rotate(90deg)'
    }).animate({
        top: -60 + "px"
    }, rate, "linear", function () {
        //stopEating();
        $('.pacman-alt').css({
            transform: 'rotate(90deg))'
        }).css({
            top: "calc(100% + 60px)"
        });
        animateUpThrough();

    });
}

function animateRightThrough() {
    startEating();
    fadeInstructions();
    direction='right'
    let theoffset = (screenWidth - (($('.pacman-alt').offset()).left));
    let rate = (Math.floor((theoffset) / 13) * 50);
    // console.log('RIGHT: OFFSET:' + theoffset + " rate:" + rate);

        $('.pacman-alt').css({
            transform: 'scale(-1,1)'
        }).animate({
            left: '+=' + theoffset
        }, rate, "linear", function () {
            //stopEating();
            $('.pacman-alt').css({
                transform: 'scale(-1,1)'
            }).css({
                left: (-60) + "px"
            });
            animateRightThrough();
        });
    } 
   


function animateLeftThrough() {

    startEating();
    fadeInstructions();

    direction='left'

    let theoffset = ($('.pacman-alt').offset()).left + 60;
    let rate = (Math.floor((theoffset) / 13) * 50);
    // console.log(rate + " as speed");
    $('.pacman-alt').css({
        transform: 'rotate(0deg)'
    }).animate({
        left: "-60px"
    }, rate, "linear", function () {
        //stopEating();
        $('.pacman-alt').css({
            transform: 'rotate(0deg)'
        }).css({
            left: "calc(100% + 60px)"
        });
        animateLeftThrough();

    });
}

function animateDownThrough() {
    startEating();
    fadeInstructions();
    direction='down'

    let theoffset = ((($('.pacman-alt').offset()).top - screenHeight) * -1);
    let rate = (Math.floor((theoffset) / 13) * 50);
    // console.log(rate + " as speed and animate down");
    $('.pacman-alt').css({
        transform: 'rotate(270deg)'
    }).animate({
        top: '+=' + theoffset
    }, rate, "linear", function () {
        //stopEating();

        $('.pacman-alt').css({
            transform: 'rotate(270deg)'
        }).css({
            top: "-60px"
        });
        animateDownThrough();

    });
}
/**ORGINAL */


function animateUpTo(){
	startEating();
    fadeInstructions();
    direction='up'

	var screenWidth = $(window).width();
	var screenHeight = $(window).height();
	var theoffset = ($('.pacman-alt').offset()).top;
	var rate = (Math.floor(theoffset/13)*50);
	// console.log(rate + " as speed");
	$('.pacman-alt').css({transform:'rotate(90deg)'}).animate({top:0},rate,"linear",  function(){
	stopEating();
	});
}
function animateRightTo(){
	startEating();
    fadeInstructions();
    direction='right'
	var screenWidth = $(window).width();
	var screenHeight = $(window).height();
	var theoffset = (screenWidth - (($('.pacman-alt').offset()).left + 60 ));
	var rate = (Math.floor((theoffset) / 13) * 50);
	// console.log('RIGHT: OFFSET:' +theoffset+ " rate:"+ rate);
	
	$('.pacman-alt').css({transform:'scale(-1,1)'}).animate({left:'+='+ theoffset},rate, "linear", function(){
	stopEating();
	});
}
function animateLeftTo(){
	startEating();
    fadeInstructions();
    direction='left'
	var screenWidth = $(window).width();
	var screenHeight = $(window).height();
	var theoffset = ($('.pacman-alt').offset()).left;
	var rate = (Math.floor((theoffset)/13)*50);
	// console.log(rate + " as speed");
	$('.pacman-alt').css({transform:'rotate(0deg)'}).animate({left:0},rate,"linear",  function(){
	stopEating();
	});
}
function animateDownTo(){
	startEating();
    fadeInstructions();
    direction='down'

	var screenWidth = $(window).width();
	var screenHeight = $(window).height();
	var theoffset = ((($('.pacman-alt').offset()).top - screenHeight + 60)* -1);
	var rate = (Math.floor((theoffset)/13)*50);
	// console.log(rate + " as speed and animate down");
	$('.pacman-alt').css({transform:'rotate(270deg)'}).animate({top:'+='  + theoffset},rate,"linear", function(){
	stopEating();
	});
}
function pacman_animate_into_view() {
    let center = ($(window).width()) / 2;
    let turn = 'rotate(180deg)';
    let moveX = '+=';
    let speed = (center - 29) + 65 + 'px';
    let adjustment = 'translateX(-50%)';
    $('.pacman-alt').css({
        '-webkit-animation': 'pacman .25s steps(4) infinite',
        animation: 'pacman .25s steps(4) infinite',
        '-webkit-transform': turn,
        transform: turn
    }).animate({
        left: moveX + speed,
        transform: adjustment
    }, 2000, function () {
        //checkPosition();
        $('.pacman-alt').css({
            '-webkit-animation': 'pacman .25s steps(4) linear',
            animation: 'pacman .25s steps(4) linear'
        });
    })
}


$(document).keydown(function (e) {
    play(e);
});

function play(e) {
    let keyCode;
    let rate;
    let turn = 0;
    let moveX;
    let moveY;
    if (e == 38 || e == 40 || e == 37 || e == 39) {
        keyCode = e;
        rate = 120;
        speed = '40px';
    } else {
        keyCode = e.keyCode || e.which;
    }
    if (keyCode == 38) {
        $('.pacman-alt').stop()
        checked ? animateUpThrough() : animateUpTo();
        direction = 'up'

    } else if (keyCode == 40) {
        $('.pacman-alt').stop()
        checked ? animateDownThrough() : animateDownTo();
        direction = 'down'

    } else if (keyCode == 37) {
        $('.pacman-alt').stop()
        checked ? animateLeftThrough() : animateLeftTo();
        direction = 'left'
    } else if (keyCode == 39) {
        $('.pacman-alt').stop()
        checked ? animateRightThrough() : animateRightTo();
        direction = 'left'
        
    };
}

function pacman_initiate(turn, moveX, moveY, speed, rate) {
    $('.pacman-alt').css({
        '-webkit-animation': 'pacman 0.25s steps(4) infinite',
        animation: 'pacman 0.25s steps(4) infinite',
        '-webkit-transform': turn,
        transform: turn
    }).animate({
        left: moveX + speed,
        top: moveY + speed
    }, rate, 'linear');
}

// Below the code renders css for the action of pacman eating (sprite)
function stopEating() {
    $('.pacman-alt').css({
        '-webkit-animation': 'pacman 0.25s linear',
        '-ms-animation': 'pacman 0.25s linear',
        animation: 'pacman 0.25s linear',
        'background-position': '-60px 0'
    })
}

function startEating() {
    $('.pacman-alt').css({
        '-webkit-animation': 'pacman 0.25s steps(4) infinite',
        '-ms-animation': 'pacman 0.25s steps(4) infinite',
        animation: 'pacman 0.25s steps(4) infinite'
    })
}
ch()
let obstacle = [];
