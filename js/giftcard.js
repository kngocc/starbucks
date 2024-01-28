function returnSign() {
  window.location = './auth.html'
}
const signIn = document.getElementById('signin');
signIn.addEventListener('click', returnSign)


function transportHome() {
  window.location = './index.html'
}

const homeHtml = document.getElementById('symbol');
homeHtml.addEventListener('click', transportHome)

function handleCard() {
  window.location = './card_detail.html'
  console.log(1);
}

const cardElm= document.getElementById('card');
cardElm.addEventListener('click', handleCard)