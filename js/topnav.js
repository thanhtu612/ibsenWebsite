window.addEventListener('scroll', (e) => {
  const navBar = document.querySelector('.topnav');
  const searchBar = document.querySelector('.search-bar');
  navBar.classList.toggle('topnav--fixed', window.scrollY > 200);
  searchBar.classList.toggle('searchBar--fixed', window.scrollY > 200);
})

var openMenu = document.querySelector('#openMenu');
var sideBar = document.querySelector('.side-bar');
var closeMenu = document.querySelector('#closeMenu');
openMenu.addEventListener('click', function() {
  sideBar.style.transform = 'translateX(0)';
  const list = document.querySelectorAll('.side-bar__list');
  list.forEach(  step =>{
    step.classList.add('animate__bounceInRight');
    step.style.setProperty('--animate-duration', '1.5s');
    step.style.setProperty('--animate-delay', '2s');
  })
  const donate = document.querySelector('.donate-button-container');
  donate.classList.add('animate__backInUp');
  document.documentElement.style.setProperty('--animate-delay', '3s');
})

closeMenu.addEventListener('click', function() {
  sideBar.style.transform = 'translateX(300px)'
})

var openSearch = document.querySelector('#openSearch');
var searchBar = document.querySelector('.search-bar');
var closeSearch = document.querySelector('#closeSearch');
openSearch.addEventListener('click', function() {
  searchBar.style.transform = 'translateX(0)'
})

closeSearch.addEventListener('click', function() {
  searchBar.style.transform = 'translateX(300px)'
})

$(document).ready(function(){
  $("a").click(function(){
    //Find out where we go
    var hash = this.hash;

    //Navigate to the position of hash
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    });
  });
});