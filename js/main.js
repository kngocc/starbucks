var $play = $('.play'),
    $detail  = $('.detail'),
    $movie = $('.movie', $detail),
    $close = $('.close');

$('.movies .movie').click(function(){
  $movie.html($(this).html());
  $play.appendTo($movie);

  $poster = $('.poster', this).addClass('active');

  $('.poster', $detail).css({
    top: $poster.position().top,
    left: $poster.position().left,
    width: $poster.width(),
    height: $poster.height()
  }).data({
    top: $poster.position().top,
    left: $poster.position().left,
    width: $poster.width(),
    height: $poster.height()
  })

  $detail.show();

  $('.poster', $detail).delay(10).queue(function(next) {
    $detail.addClass('ready');

    next();
  }).delay(100).queue(function(next){
    $(this).css({
      top: '-10%',
      left: '-6%',
      width: 266,
      height: 400
    });
    next();
  })
})


/*--------------------
Close
--------------------*/
function close(){
  console.log('asd');
  $p = $('.detail .poster');
  console.log($p)
  $p.css({
    top: $p.data('top'),
    left: $p.data('left'),
    width: $p.data('width'),
    height: $p.data('height'),
  })
  $detail.removeClass('ready').delay(500).queue(function(next){
    $(this).hide();
    $poster.removeClass('active');
    next();
  });
}

$close.click(close);
$('body').click(function(e){
  $p = $(e.target).parents();
  if ($p.is('.app')){
    return false;
  } else {
    close();
  }
})


/*--------------------
CodePen Thumbnail
--------------------*/
setTimeout(function(){
  $('.movie:eq(0)').click();
}, 300);
setTimeout(function(){
  close();
},1700);



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

var interleaveOffset = 0.5;

var swiperOptions = {
  loop: true,
  speed: 1000,
  grabCursor: true,
  watchSlidesProgress: true,
  mousewheelControl: true,
  keyboardControl: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  on: {
    progress: function() {
      var swiper = this;
      for (var i = 0; i < swiper.slides.length; i++) {
        var slideProgress = swiper.slides[i].progress;
        var innerOffset = swiper.width * interleaveOffset;
        var innerTranslate = slideProgress * innerOffset;
        swiper.slides[i].querySelector(".slide-inner").style.transform =
          "translate3d(" + innerTranslate + "px, 0, 0)";
      }      
    },
    touchStart: function() {
      var swiper = this;
      for (var i = 0; i < swiper.slides.length; i++) {
        swiper.slides[i].style.transition = "";
      }
    },
    setTransition: function(speed) {
      var swiper = this;
      for (var i = 0; i < swiper.slides.length; i++) {
        swiper.slides[i].style.transition = speed + "ms";
        swiper.slides[i].querySelector(".slide-inner").style.transition =
          speed + "ms";
      }
    }
  }
};

var swiper = new swiper(".swiper-container", swiperOptions);

// document.querySelector('[data-toggle]').addEventListener('click', function(){
//   if (swiper.realIndex == 0) {
//     swiper.slideTo(swiper.slides.length - 1);
//   } else {
//     swiper.slideTo(0);
//   }
// });

// function logIndex () {
//   requestAnimationFrame(logIndex);
//   console.log(swiper.realIndex);
// }
// logIndex();


