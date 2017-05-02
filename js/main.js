//////////////// INIT //////////////////////
//////////////// INIT //////////////////////
//////////////// INIT //////////////////////

//Folder getList Example:
//getList("SomeDocuments",[["ServerUrl","SomeDocuments/ThingFolder"]],{rel:ROOTSITE,querytype:"Contains",allfiles:true},function(jsonList){ console.log(jsonList) });

Vue.config.devtools = true;

//s is for app State;
var s = {
  slides: [
    {
      img: "principles.png",
      title: "Principles of Engagement",
      body: "Duis aute irure dolor in reprehenderit in quisvoluptate velit esse cillum dolore eu fugiat nulla pariatur. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
    },
    {
      img: "vision.png",
      title: "Our Vision",
      body: "Duis aute irure dolor in reprehenderit in quisvoluptate velit esse cillum dolore eu fugiat nulla pariatur. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
    },
    {
      img: "mission.png",
      title: "Our Mission",
      body: "Duis aute irure dolor in reprehenderit in quisvoluptate velit esse cillum dolore eu fugiat nulla pariatur. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
    }
  ],
  team: [
    {
      name: "Bob Jackson",
      img: "https://api.adorable.io/avatars/340/bob.png"
    },
    {
      name: "Janis Peterson",
      img: "https://api.adorable.io/avatars/340/bo3b.png"
    },
    {
      name: "Sampleblatherman LongestLongNameEver",
      img: "https://api.adorable.io/avatars/340/samle.png"
    },
    {
      name: "Bobby MiddleName Jordan",
      img: "https://api.adorable.io/avatars/340/basdob.png"
    },
    {
      name: "Middle B. Initial",
      img: "https://api.adorable.io/avatars/340/bfsob.png"
    },
    {
      name: "Qbert Pacman",
      img: "https://api.adorable.io/avatars/340/bfdaob.png"
    },
    {
      name: "Cheddar Jack",
      img: "https://api.adorable.io/avatars/340/by54ob.png"
    },
    {
      name: "Mario Brother",
      img: "https://api.adorable.io/avatars/340/boburyt.png"
    },
    {
      name: "Señor Frog",
      img: "https://api.adorable.io/avatars/340/b3542ob.png"
    },
    {
      name: "Ortuga P'Dandy-Brine",
      img: "https://api.adorable.io/avatars/340/b354ff2ob.png"
    },
    {
      name: "Slash",
      img: "https://api.adorable.io/avatars/340/b354ff2oaab.png"
    }
  ],
  news:[
    {
      date: "May 7, 2017",
      title: "Win! Read about our successful win",
      tags: ["Customer Win"],
      url: "http://www.google.com"
    },
    {
      date: "March 17, 2017",
      title: "Here is some Great NFSOP News!",
      tags: ["News"],
      url: "http://www.google.com"
    },
    {
      date: "February 5, 2017",
      title: "John Davis Wins Participation Trophy",
      tags: ["Recognition"],
      url: "http://www.google.com"
    },
    {
      date: "February 2, 2017",
      title: "A New Thing Happened in February",
      tags: ["News"],
      url: "http://www.google.com"
    }
  ],
  sidebarTabs:[
    {
      name:"News",
      template:'news',
      selected: true
    },
    {
      name:"Events",
      template:'events',
      selected: false
    }
  ]
};

///////////////////// COMPONENTS /////////////////////
///////////////////// COMPONENTS /////////////////////
///////////////////// COMPONENTS /////////////////////
var homepage = new Vue({
  el: '#home',
  data: function(){

    return {
      s:s,//s is for app State
      docButtonHover: false
    }

  },

  mounted: function() {

    console.log("mounted");

    var elem = document.querySelector('.main-carousel');
    var flkty = new Flickity( elem, {
      // options
      cellAlign: 'left',
      wrapAround: true,
      contain: true
    });

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
