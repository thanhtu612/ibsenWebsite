window.addEventListener('onload', (e) => {
  const navBar = document.querySelector('.body-container');
  console.log(window.scrollY, window.innerHeight);
  navBar.classList.toggle('hero-title--fixed', window.scrollY >= window.innerHeight);

  const howTo = document.querySelector('.how-to-container');
  const bounding = howTo.getBoundingClientRect();
  if (bounding.top <= 100 && bounding.bottom >= 0) {
    const smartPhone = document.querySelector('.smartphone')
    smartPhone.classList.add('animate__backInDown')
  }
})