  var homepage = new Vue({
  el: '#target',
  data: function(){

    return {
      s:s,//s is for app State
      docButtonHover: false,
      searchButtonHover: false,
      searchQuery: null
    }

  },
  mounted: function() {

    console.log("mounted");

    var elem = document.querySelector('.main-carousel');
    var flkty = new Flickity( elem, {
      cellAlign: 'left',
      wrapAround: true,
      contain: true
    });

    console.log("thing");
    //animate the search (WHY AM I DOING THIS)

    startPlaceholderFadeSequence()
    setInterval(function(){

      console.log("interval start");

      startPlaceholderFadeSequence()

    }, 9005);

  },
  updated: function() {

    console.log("updated");

    var elem = document.querySelector('.main-carousel');
    var flkty = new Flickity( elem, {
      // options
      cellAlign: 'left',
      contain: true
    });

  },
  methods: {
    selectTab: function(tabIndex){
      $.each(s.sidebarTabs,function(index,tab){
        tab.selected = false;
      });
      s.sidebarTabs[tabIndex].selected = true;
    }
  }
});


function startPlaceholderFadeSequence() {
  setTimeout(function(){
    $(".search-field").addClass("invisible-placeholder");
  },2500);
  setTimeout(function(){
    $(".search-field").attr("placeholder","Search by Title");
    $(".search-field").removeClass("invisible-placeholder");
  },3000);
  setTimeout(function(){
    $(".search-field").addClass("invisible-placeholder");
  },5500);
  setTimeout(function(){
    $(".search-field").attr("placeholder","Search by Customer Portfolio");
    $(".search-field").removeClass("invisible-placeholder");
  },6000);
  setTimeout(function(){
    $(".search-field").addClass("invisible-placeholder");
  },8500);
  setTimeout(function(){
    $(".search-field").attr("placeholder","Search by Name");
    $(".search-field").removeClass("invisible-placeholder");
    console.log("sequence end");
  },9000);
}
