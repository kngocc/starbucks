let productList = [];

const productListElm = document.getElementById("product-list");
const productTemp = document.getElementById("product-template");

function getProductList() {
  fetch("https://6578608df08799dc80451933.mockapi.io/products?parent_type=drinks")
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
      navigateToDetail(product.child_type)
    })
    productListElm.appendChild(productItem);
  }
}

/////


function navigateToDetail(type) {
  console.log(1);
  window.location = `./detail.html?type=${type}`
}





getProductList();





let productLis = [];


const productFoodElm = document.getElementById("product-lis");
const productFood = document.getElementById("product-templat");

function getProductLis() {
  fetch("https://6578608df08799dc80451933.mockapi.io/products?parent_type=food")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      productLis = data;
      renderProductlis();
    });
}
function renderProductlis() {
  for (let index = 0; index < productLis.length; index++) {
    const produc = productLis[index];

    const productIte = productFood.content.cloneNode(true);
    const productImag = productIte.getElementById("product-imag")
    productImag.src = produc.image;
    productIte.getElementById("product-titl").textContent = produc.child_type;
    productImag.addEventListener('click', function() {
      console.log(1);
      navigateToDetai(produc.child_type)
    })
    productFoodElm.appendChild(productIte);
  }
}

function navigateToDetai(type) {
  console.log(1);
  window.location = `./detail.html?type=${type}`
}


getProductLis();




let productList1 = [];

const productListElm1 = document.getElementById("product-list1");
const productTemp1 = document.getElementById("product-template1");

function getProductList1() {
  fetch("https://6578608df08799dc80451933.mockapi.io/products?parent_type=at+home+coffee")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      productList1 = data;
      renderProductlist1();
    });
}



function renderProductlist1() {
  for (let index = 0; index < productList1.length; index++) {
    const product1 = productList1[index];

    const productItem1 = productTemp1.content.cloneNode(true);
    const productImage1 = productItem1.getElementById("product-image1")
    productImage1.src = product1.image;
    productItem1.getElementById("product-title1").textContent = product1.child_type;
    productImage1.addEventListener('click', function() {
      console.log(1);
      navigateToDetail1(product1.child_type)
    })
    productListElm1.appendChild(productItem1);
  }
}

/////


function navigateToDetail1(type) {
  console.log(1);
  window.location = `./detail.html?type=${type}`
}





getProductList1();



let productList2 = [];

const productListElm2 = document.getElementById("product-list2");
const productTemp2 = document.getElementById("product-template2");

function getProductList2() {
  fetch("https://6578608df08799dc80451933.mockapi.io/products?parent_type=merchandise")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      productList2 = data;
      renderProductlist2();
    });
}



function renderProductlist2() {
  for (let index = 0; index < productList2.length; index++) {
    const product2 = productList2[index];

    const productItem2 = productTemp2.content.cloneNode(true);
    const productImage2 = productItem2.getElementById("product-image2")
    productImage2.src = product2.image;
    productItem2.getElementById("product-title2").textContent = product2.child_type;
    productImage2.addEventListener('click', function() {
      console.log(1);
      navigateToDetail2(product2.child_type)
    })
    productListElm2.appendChild(productItem2);
  }
}

/////

function navigateToDetail2(type) {
  console.log(1);
  window.location = `./detail.html?type=${type}`
}





getProductList2();

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




