let paramString = window.location.href.split("?")[1];
let queryString = new URLSearchParams(paramString);
const type = queryString.get("type");
let productList = [];

const productListElm = document.getElementById("product-list");
const productTemp = document.getElementById("product-template");
function getProductList() {
  fetch(`https://6578608df08799dc80451933.mockapi.io/detail?child_type=${type}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      productList = data;
      renderProductlist();
    });
}

function renderProductlist() {
    for (let index = 0; index < productList.length; index++) {
      const product = productList[index];
  
      const productItem = productTemp.content.cloneNode(true);
      const productImage = productItem.getElementById("product-image")
      productImage.src = product.image;
      productItem.getElementById("product-title").textContent = product.child_type;
      productImage.addEventListener('click', function() {
        console.log(1);
        navigateToDetail(product.grandchild_type)
      })
      productListElm.appendChild(productItem);
    }
  }

getProductList();


function renderProductlist() {
  for (let index = 0; index < productList.length; index++) {
    const product = productList[index];

    const productItem = productTemp.content.cloneNode(true);
    const productImage = productItem.getElementById("product-image")
    productImage.src = product.image;
    productItem.getElementById("product-title").textContent = product.child_type;
    productImage.addEventListener('click', function() {
      console.log(1);
      navigateToDetail(product.id)
    })
    productListElm.appendChild(productItem);
  }
}


function navigateToDetail(type) {
  window.location = `./preferences.html?type=${type}`
}




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