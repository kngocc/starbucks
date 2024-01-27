

var tabs = $(".tabs"),
  tabsLists = $(".tabs ul.tabs--list li");
tabs.each(function () {
  var tab = $(this),
    tabItems = tab.find("ul.tabs--list"),
    tabContentWrapper = tab.children("ul.tabs--content");

  tabItems.on("click", "a", function (event) {
    event.preventDefault();
    var activedItem = $(this);
    if (!activedItem.hasClass("actived")) {
      var activedTab = activedItem.data("content"),
        activedContent = tabContentWrapper.find(
          'li[data-content="' + activedTab + '"]'
        );

      tabItems.find("a.actived").removeClass("actived");
      activedItem.addClass("actived");
      activedContent.addClass("actived").siblings("li").removeClass("actived");
    }
  });
});

tabsLists.click(function (e) {
  if ($(this).hasClass("moving-tab")) {
    return;
  }
  var whatTab = $(this).index();
  var howFar = 32.5 * whatTab;
  $(".moving-tab").css({
    left: howFar + "%"
  });
});



let paramString = window.location.href.split("?")[1];
let queryString = new URLSearchParams(paramString);
const id = queryString.get("type");
let productIn4 = {}


function getProductList() {
  fetch(`https://6578608df08799dc80451933.mockapi.io/detail/${id}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      productIn4 = data;
      renderProductlist();
      console.log(data);
    });
}

function renderProductlist() {

    const productImage = document.getElementById("product-image")
    productImage.src = productIn4.image;
    const productTitle = document.getElementById("product-title")
    productTitle.textContent = productIn4.grandchild_type;

   
}

getProductList();
