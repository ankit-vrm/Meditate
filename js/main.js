AOS.init({
 	duration: 800,
 	easing: 'slide'
 });


$(window).load(function(){
      $("#preloader").delay(600).fadeOut ("slow");
      $(".loader").fadeOut();
});

$(window).load(function(){
    $("html, body").animate({ scrollTop: 0 }, "slow");
});

$(".class").mouseover(function(){
   $(this).find(".cls").css({"box-shadow":"2px 4px 10px #000", "cursor":"pointer", "padding":"2px", "transform":"translateY(-4px)","transition":".2s"})
});
$(".class").mouseout(function(){
   $(this).find(".cls").css({"box-shadow":"none", "cursor":"pointer", "transform":"translateY(0)"})
});
$(".class").click(function(){
    window.location=$(this).find("a").attr("href");
    return false;
})

$(".blogs").mouseover(function(){
   $(this).find(".blog").css({"box-shadow":"2px 4px 10px #000", "cursor":"pointer", "padding":"2px"})
});
$(".blogs").mouseout(function(){
   $(this).find(".blog").css({"box-shadow":"none", "cursor":"pointer", "padding":"0"})
});
$(".blogs").click(function(){
    window.location=$(this).find("a").attr("href");
    return false;
})

//carousel
	var carousel = function() {
		$('.banner').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});
		$('.testimony-carousel').owlCarousel({
			center: false,
			loop: true,
            autoplay: true,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 2
				},
                800:{
					items: 2
				},
				1000:{
					items: 3
				}
			}
		});

	};
	carousel();


$(".gallery").mouseenter(function(){
   $(this).find(".icon").delay(100).fadeIn(400) 
});
$(".gallery").mouseleave(function(){
   $(this).find(".icon").css({"display":"none"})
});

   // magnific popup
$(".gallery").magnificPopup({
    type:"image",
    delegate: "a",
    gallery:{ enabled: true},
});




//navbar
$(window).scroll(function(){
   var x=$(this).scrollTop();
    if(x>30 && x<300){
        $(".custom-nav").hide()
    }
    else{
        $(".custom-nav").show()
    }
}); 


