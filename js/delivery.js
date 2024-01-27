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

  //For Firefox we have to handle it in JavaScript 
var vids = $("video"); 
$.each(vids, function(){
       this.controls = false; 
}); 
//Loop though all Video tags and set Controls as false

$("video").click(function() {
  //console.log(this); 
  if (this.paused) {
    this.play();
  } else {
    this.pause();
  }
});