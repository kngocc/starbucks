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

function handleCard(){
  window.location = './card_detail.html'
  console.log(1);

}


const card = document.getElementById('card');
card.addEventListener('click', handleCard)