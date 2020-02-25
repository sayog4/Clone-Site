
$('.hamburger-box').click(function() {
  
  $('.hamburger-box').toggleClass('open');
  $('.nav').toggleClass('mobile-nav');
  
})

$(window).scroll(function(){
  if ($(window).scrollTop() >= 250) {
      $('.nav').addClass('fixed-nav');
  }
  else {
      $('.nav').removeClass('fixed-nav');
  }
});


$('.slider-image').owlCarousel({
  loop:true,
  margin:20,
  items: 4,
  nav:true,
  dots: false,
  responsive : {
    // breakpoint from 0 up
    0 : {
        items: 1,
        nav:false
    },
    // breakpoint from 480 up
    480 : {
      items: 2
    },
    // breakpoint from 768 up
    768 : {
      items: 3
    },
    992 :{
      items: 4
    }
}
})
$('.slider__container').owlCarousel({
  loop:true,
  margin:80,
  dots: false,
  items: 3,
  nav:true,
  responsive : {
    // breakpoint from 0 up
    0 : {
        items: 1,
        nav:false
    },
    // breakpoint from 480 up
    600 : {
      items: 2
    },
    // breakpoint from 768 up
    768 : {
      items: 2
    },
    992 :{
      items: 3
    }
}
})