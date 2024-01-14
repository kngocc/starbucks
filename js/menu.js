let productList = [];

const productListElm = document.getElementById("product-list");
const productTemp = document.getElementById("product-template");

function getProductList() {
  fetch("https://mockapi.io/clone/6578608df08799dc80451934")
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
    productItem.getElementById("product-image").src = product.image;
    productItem.getElementById("product-title").textContent = product.child_type;

    productListElm.appendChild(productItem);
  }
}

getProductList();
