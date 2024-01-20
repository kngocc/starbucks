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