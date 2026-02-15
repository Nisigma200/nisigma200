const pagetopBtn = document.querySelector('#page-top');
pagetopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

$(document).ready(function () {
  $("#header").load("https://nisigma200.github.io/nisigma200/common/header.html");
});

$(document).ready(function () {
  $("#footer").load("https://nisigma200.github.io/nisigma200/common/footer.html");
});
