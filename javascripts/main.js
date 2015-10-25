$(function(){
  // smooth scrolling on link click
	$('a[href^=#]').on('click', function(){
    console.log(this);
    $('html, body').animate({
      scrollTop: $($.attr(this,'href')).offset().top
    }, 500);
    return false;
	});
});