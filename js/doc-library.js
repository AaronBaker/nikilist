var closedFilterHeight = "25px";

var homepage = new Vue({
el: '#target',
data: function(){
  return {
    s:s, //s is for app State
    showHero: true,
    mode: "directory",
    searchQuery: null,
    showFavorites: false
  }
},
mounted: function() {
  console.log("mounted");


  $(".filter-box").each(function(index,filterBox){

    var topHeight     = $(filterBox).find(".filter-toggle-control").outerHeight();
    var bottomHeight  = $(filterBox).find(".filter-items").outerHeight();
    var totalHeight = topHeight + bottomHeight + 30;

    var heightString = totalHeight + "px";

    var filterIndex = $(filterBox).attr('groupname');

    s.filters[filterIndex].maxHeight = heightString;

  });
},
updated: function() {
  console.log("updated");
},
methods: {
  toggleGroup: function(group){
    if (group.currentHeight == closedFilterHeight){
      group.currentHeight = group.maxHeight;
      group.open = !group.open;
    } else {
      group.currentHeight = closedFilterHeight;
      group.open = !group.open;
    }
  },
  calcFilterHeight: function(element){

  }
}
});
