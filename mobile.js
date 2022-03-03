window.addEventListener('scroll', function () {
  var scroll = document.querySelector('.backToTop');
  scroll.classList.toggle("active", window.scrollY > 300)

})

function backToTop() {
  window.scrollTo({
      top: 0,
      behavior: "smooth"
  })
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});