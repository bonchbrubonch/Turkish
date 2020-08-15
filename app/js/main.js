$(function(){
  $('.slider-group, .slider-level').slick({
    dots: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true
  });
  
  $('.slider-reviews').slick({
    dots: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true
  });

  
 $('.slider-teachers').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  centerMode: true,
  asNavFor: '.nav-teachers',
  variableWidth: true
});
$('.nav-teachers').slick({
  prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/icons/prewarrow.svg" alt=""></img>',
  nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/icons/nextarrow.svg" alt=""></img>',
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.slider-teachers',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  centerMode: true,
});
  

  
});