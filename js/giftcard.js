function handleSignin() {
    window.location = './auth.html'
  }
  const signIn = document.getElementById('signin');
  signIn.addEventListener('click', handleSignin)
  
  
  function transportHome() {
    window.location = './index.html'
  }
  
  const homeHtml = document.getElementById('symbol');
  homeHtml.addEventListener('click', transportHome)


  $(".custom-carousel").owlCarousel({
    autoWidth: true,
    loop: true
  });
  $(document).ready(function () {
    $(".custom-carousel .item").click(function () {
      $(".custom-carousel .item").not($(this)).removeClass("active");
      $(this).toggleClass("active");
    });
  });
  