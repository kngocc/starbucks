

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
