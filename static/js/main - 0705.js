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
            margin: 125,
            responsiveClass: true,
            nav: false,
            navText: ['<i class="bi bi-arrow-right arrow-right"></i>','<i class="bi bi-arrow-left arrow-left"></i>'],
            items: 4,
            smartSpeed: 1000,
            dots: true,
            autoplay: false,
            autoplayHoverPause:false,
            autoplayTimeout: 4000,
            center: false,   
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 4
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

$(function() {  
    var index = 0; // 将index变量移动到$(function(){...})内部，作为局部变量  
    var list = $('.bot-img ul li').length;  
    var $activeImg = $('.activeimg');  
    var $liItems = $('.bot-img ul li');  
  
    // 初始化active状态和大图的宽度  
    $liItems.first().addClass('active');  
    $activeImg.css({  
        width: list * 1024  
    });  
  
    // 点击列表项切换图片  
    $liItems.click(function() {  
        var _this = $(this);  
        _this.addClass('active').siblings('li').removeClass('active');  
        // index = _this.index();  更新index值  
		index = _this.index(); // 更新index值  
        $activeImg.animate({left: index * -1024}, "slow");  
    });  
  
    // 下一张  
    $('.right').click(function() {  
        next();  
    });  
  
    // 上一张  
    $('.left').click(function() {  
        prev();  
    });  
  
    // 封装next函数  
    function next() {  
        index++;
		if (index >= list ) {  
            index = 0;  
        }  
        updateImageAndActive();  
    }  
  
    // 封装prev函数  
    function prev() {  
        if (index <= 0) {  
            index = list - 1; // 回到最后一张  
        } else {  
            index--;  
        }  
        updateImageAndActive();  
    }  
  
    // 更新图片和大图列表项的active状态  
    function updateImageAndActive() {  
        $activeImg.animate({left: index * -1024}, "slow");  
        $liItems.eq(index).addClass('active').siblings('li').removeClass('active');  
    }  
});