//scroll to top
$(window).scroll(function () {
  if ($(window).scrollTop() >= 10) {
    $('.Button_ScrollToTop').show();
  } else {
    $('.Button_ScrollToTop').hide();
  }
});

function page_ScrollToTop() {
  $('html,body').animate(
    {
      scrollTop: 0,
    },
    'fast'
  );
}