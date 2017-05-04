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

  directorySearchResults: [
    {
      name: "Cheddar Jack",
      title:"Chief Dairy Officer",
      img: "https://api.adorable.io/avatars/340/by5bba4ob.png",
      url:"http://www.google.com"
    },
    {
      name: "Mario Brother",
      title: "Senior Plumbing Official",
      img: "https://api.adorable.io/avatars/340/boburyt.png",
      url:"http://www.google.com"
    },
    {
      name: "Señor Frog",
      title: "Master of Ceremonies",
      img: "https://api.adorable.io/avatars/340/b3542ob.png",
      url:"http://www.google.com"
    },
    {
      name: "Ortuga P'Dandy-Brine",
      title: "Envelope Licker",
      img: "https://api.adorable.io/avatars/340/b354ff2ob.png",
      url:"http://www.google.com"
    },
    {
      name: "Slash",
      title: "Master Guitarist",
      img: "https://api.adorable.io/avatars/340/b354ff2oaab.png",
      url:"http://www.google.com"
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
      tags: false,
      url: "http://www.google.com"
    }
  ],
  events:[
    {
      date: "May 25, 2017",
      title: "Annual Awareness Gala",
      url: "http://www.google.com"
    },
    {
      date: "July 4, 2017",
      title: "Independence Day Party",
      url: "http://www.google.com"
    },
    {
      date: "August 15, 2017",
      title: "John Davis Participation Trophy Ceremony",
      url: "http://www.google.com"
    },
    {
      date: "January 1, 2018",
      title: "A Very Happy New Year",
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
  ],
  filters: {
    "Programs" : {
      open: true,
      items: {
        "Cheeseburgers" : {active: false},
        "Fries" : {active: false},
        "Onion Rings" : {active: false},
        "Ketchup" : {active: false},
        "Mustard" : {active: false}
      }
    },
    "Beverages" : {
      open: false,
      items: {
        "Coca-Cola" : {active: false},
        "Diet Coke" : {active: false},
        "Sprite" : {active: false},
        "Fanta" : {active: false},
        "Dasani" : {active: false}
      }
    },
    "Partners" : {
      open: false,
      items: {
        "McDonalds" : {active: false},
        "Burger King" : {active: false},
        "Kroger" : {active: false},
        "Publix" : {active: false},
        "Walmart" : {active: false},
        "Walmart2" : {active: false},
        "Walmart3" : {active: false},
        "Walmart4" : {active: false},
        "Walmart5" : {active: false},
        "Walmart6" : {active: false},
        "Walmart7" : {active: false},
        "Walmart8" : {active: false},
        "Walmart9" : {active: false},
        "Walmart10" : {active: false},
        "Walmart11" : {active: false},
        "Walmart12" : {active: false},
        "Walmart13" : {active: false},
        "Walmart14" : {active: false},
        "Walmart15" : {active: false},
        "Walmart16" : {active: false},
        "Walmart17" : {active: false},
        "Walmart18" : {active: false}
      }
    }
  },
  footerLinks:[
    {
      name:"Consectetur adipisicing elit",
      url: "http://www.google.com"
    },
    {
      name:"Sed do eiusmod tempor incididunt",
      url: "http://www.google.com"
    },
    {
      name:"Labore et dolore magna aliqua",
      url: "http://www.google.com"
    },
    {
      name:"Enim ad minim",
      url: "http://www.google.com"
    }
  ],
  footerNews:[
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
    }
  ]
};
