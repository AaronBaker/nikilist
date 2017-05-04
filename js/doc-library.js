var homepage = new Vue({
el: '#target',
data: function(){
  return {
    s:s, //s is for app State
    showHero: true
  }
},
mounted: function() {
  console.log("mounted");
},
updated: function() {
  console.log("updated");
},
methods: {

}
});
