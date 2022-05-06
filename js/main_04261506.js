// jsを記述する際はここに記載していく
$('slider').slick({
  infinite: true,
  autoplay: true, 
  slidesToShow: 4,
  slidesToScroll: 4, 
  autoplaySpeed: 5000,   
}); 

$('.dropdown').click(function () {
  $(this).attr('tabindex', 1).focus();
  $(this).toggleClass('active');
  $(this).find('.dropdown-menu').slideToggle(300);
});
$('.dropdown').focusout(function () {
  $(this).removeClass('active');
  $(this).find('.dropdown-menu').slideUp(300);
});
$('.dropdown .dropdown-menu li').click(function () {
  $(this).parents('.dropdown').find('span').text($(this).text());
  // $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});

$(function() {
	setTimeout(function(){
		$('.start p').fadeIn(1600);
	},500); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
		$('.start').fadeOut(1000);
	},3000); //2.5秒後にロゴ含め真っ白背景をフェードアウト！
});

$('#page-top')(function(){
  var pagetop = $('#page-top');
  pagetop.hide();
  $(window).scroll(function () {
     if ($(this).scrollTop() > 100) {
          pagetop.fadeIn();
     } else {
          pagetop.fadeOut();
     }
  });
  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 5000 }, 2000);
     return false;
  });
});
/*End Dropdown Menu*/

// $('.dropdown-menu li').click(function () {
// var input = '<strong>' + $(this).parents('.dropdown').find('input').val() + '</strong>',
// msg = '<span class="msg">:';
// $('.msg').html(msg + input + '</span>');
