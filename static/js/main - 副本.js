$(document).ready(function() {
    "use strict";
	
	/*20240609*/
	$('.filter').click(function(e) {
		// e.preventDefault();
		var project = $(this).data('project');
		// Hide all images and thumbnails
		$('.activeimg img').hide();
		$('.bot-img').hide();
		// Show images and thumbnails for selected project
		$('.' + project).show();
		$('.' + project + '-thumbnails').show();
		index = 0  // Reset index to 0 when changing project  20240611
	});
	$('.filter[data-project="project1"]').click(); // Initially show images of project 1
	/*--------------------*/
	
    /** ------------------------------------
    * StellarNav Header
    * -------------------------------------*/
    $('.stellarnav').stellarNav({
        theme: 'light',
        breakpoint: 991,
        openingSpeed: 350,
        closingDelay: 10,
        position: 'top',
        scrollbarFix: false,
        mobileMode:false,
        closeLabel: '',
        menuLabel: '',

    });
    /** ------------------------------------
    *  Mobile menu should close automatically after the clicking on the menu item
    * -------------------------------------*/
    $('.stellarnav ul li').click(function(e) {
        if ($(window).width() < 991){
            $(".stellarnav ul").css('display', 'none');
            $(".stellarnav").removeClass('active');
         }
    });
    /** ------------------------------------
    * Owl Carousel Portfolio
    * -------------------------------------*/
	$('.work-list2.hidden-on-load').show();  
	
      function  work_list() {
        var owl = $(".work-list");
        owl.owlCarousel({
            loop: true,
            margin: 25,
            responsiveClass: true,
            nav: false,
            navText: ['<i class="bi bi-arrow-right arrow-right"></i>','<i class="bi bi-arrow-left arrow-left"></i>'],
            items: 6,
            smartSpeed: 1000,
            dots: true,
            autoplay: false,
            autoplayHoverPause:false,
            autoplayTimeout: 4000,
            center: false,
            responsive: {
                0: {
                    items: 2
                },
                480: {
                    items: 3
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 5
                },
                
            }
        });
      }
      work_list();

     /** ------------------------------------
     * Portfolio Mixitup
     * -------------------------------------*/
   
    $('#grid').mixItUp({
        
    });
    $('.portfolio-list2 li a').eq(0).addClass('active');



    /** ------------------------------------
     * Counterup
    * -------------------------------------*/
    $('.counternumber').counterUp({
        delay: 10,
        time: 1000
    });

     /** ------------------------------------
     * Valid Contact Form
     * -------------------------------------*/

    $('#emailForm').submit(function(event) {
        event.preventDefault();   
        var formData = $(this).serialize();   
        $.ajax({
            type: 'POST',
            url: 'php-mail/send.php',
            data: formData,
            success: function(response) {
                $('#response').html(response); // Update response div with the result
            },
            error: function() {
                $('#response').html('Error occurred. Please try again.'); // Display error message
            }
        });
    });

    
    /** ------------------------------------
    * Scroll bottom to top
    * -------------------------------------*/

    var circleBtn = $('.back-to-top');

    $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        circleBtn.addClass('show');
    } else {
        circleBtn.removeClass('show');
    }
    });
    circleBtn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '300');
    });
    /** ------------------------------------
    * WOW
    * -------------------------------------*/

    new WOW().init();
		
    /** ------------------------------------
    * WOW
    * -------------------------------------*/
  
//Scroll stable when click element
$("portfolio-list2 li a.filter").on("click", function(e) {
  e.preventDefault();
});
    var headerFixed = $(".header-area");
    if ($(window).scrollTop() > 60) {
        headerFixed.addClass("animated fadeInDown stricky-menu");
    }
    else {
        headerFixed.removeClass("animated fadeInDown stricky-menu");
    }
    
    // window on scroll function
    $(window).on("scroll", function () {

      // Sticky Header
      if ($(window).scrollTop() > 50) {
        headerFixed.addClass("animated fadeInDown stricky-menu");
      }
      else {
        headerFixed.removeClass("animated fadeInDown stricky-menu");
      }
    });
    
});

$(window).on('load', function() {
    /** ------------------------------------
    * Preloder
    * -------------------------------------*/
    $('.loading').fadeOut();
});


$(function(){
    $('.bot-img ul li').click(function(){
        var _this=$(this);
        _this.addClass('active').siblings('li').removeClass('active');
        var int=_this.index();
        $('.activeimg').animate({left:int*-1024},"slow");
    });
    var list=$('.bot-img ul li').length;
    $('.activeimg').css({
        width:list*1024,
    });
    $('.right').click(function(){
        next(list)

    })
    $('.left').click(function(){
        prev(list)
    });
	
/**
    //自动播放 80秒播放一次 无限循环
    var timer='';
    var num=0;
    timer=setInterval(function(){ //打开定时器
        num++;
        if(num>parseFloat(list)-1){
            num=0;
            $('.activeimg').animate({left:num*-1024},"slow");
        }else{
            $('.activeimg').animate({left:num*-1024},"slow");
        }
    },80000);
*/

})
var index=0;
//下一张
function next(list){
    if(index<list-1){
        index++;
        $('.activeimg').animate({left:index*-1024},"slow");
        $('.bot-img ul li').eq(index).addClass('active').siblings('li').removeClass('active')
    }else{
        index=0;
        $('.activeimg').animate({left:index*-1024},"slow");
        $('.bot-img ul li').eq(index).addClass('active').siblings('li').removeClass('active')
    }
}
//        上一张
function prev(list){
    index--;
    if(index<0){
        index=list-1;
        $('.activeimg').animate({left:index*-1024},"slow");
        $('.bot-img ul li').eq(index).addClass('active').siblings('li').removeClass('active')
    }else{
        $('.activeimg').animate({left:index*-1024},"slow");
        $('.bot-img ul li').eq(index).addClass('active').siblings('li').removeClass('active')
    }
}

