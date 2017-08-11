// Firebase config

Vue.config.devtools = true;

var config = {
  apiKey: "AIzaSyD6z5l6ok8JEOUYVnO1VqUn6g-iFU2pJtc",
  authDomain: "nikilist-1cab2.firebaseapp.com",
  databaseURL: "https://nikilist-1cab2.firebaseio.com",
  projectId: "nikilist-1cab2",
  storageBucket: "nikilist-1cab2.appspot.com",
  messagingSenderId: "846412664063"
};

// Firebase intialise
firebase.initializeApp(config);
// Set Todos firebase object
var Todos = firebase.database().ref('/todos');
// Watch for value changes on Todos, set todoList.todos property as the value
Todos.on('value', function(snapshot) {
  console.log("FIREBASE UPDATE");
  todoList.todos = snapshot.val();


  updateGroups();
  localStorage.setItem("todos", JSON.stringify( todoList.todos ) );
})

var TodoHistory = firebase.database().ref('/todohistory');

// Create Vue component
var todoList = new Vue({
  el: '#todo',
  data: {
    todos: [],
    newTodo: {category:{},text:null},
    groupedTodos: {},
    categories:[
      // {name:"Produce",color:"#8BC34A"},
      // {name:"Organic",color:"#03A9F4"},
      // {name:"Toiletries",color:"#673AB7"},
      // {name:"Breakfast",color:"#FF5722"},
      // {name:"Cans",color:"#607D8B"},
      // {name:"Other",color:"#607D8B",hidden:true},
      // {name:"Snacks",color:"#3F51B5"},
      // {name:"Meat",color:"#f44336"},
      // {name:"Dairy",color:"#FF9800"},
      // {name:"Frozen",color:"#00BCD4"}

      {name:"Kroger",color:"#3F51B5"},
      {name:"Target",color:"#f44336"},
      {name:"Walmart",color:"#03A9F4"},

      {name:"Amazon",color:"#8BC34A"},


      {name:"Costco",color:"#673AB7"},
      {name:"Trader Joe's",color:"#FF5722"},

      {name:"Other",color:"#607D8B",hidden:true},
    ],
    categoriesByName: {},
    colorChanging:false,
    redBackground:false,
    controlsOpen:false,

  },
  created: function(){

    console.log("created");
    this.todos = JSON.parse (localStorage.getItem("todos"));

    this.categoriesByName = _.indexBy(this.categories,"name");

  },

  updated:function(){


    console.log("updated");


    //$('.todo-input').focus();

    $(".add-and-stay").on("touchstart",function(){ $('.todo-input').focus(); });
    $(".add-and-stay").on("click",function(){ $('.todo-input').focus(); });

    localStorage.setItem("todos", JSON.stringify( todoList.todos ) );
  },

  mounted: function() {

    $('.todo-input').on("touchstart",function(){  $('.todo-input').focus();  });


  },
  methods: {
    clearInput: function(){

      this.newTodo.text = null;
      this.newTodo.category = {};
      this.controlsOpen = false;
      $(".todo-input").blur();
    },
    setCategory: function(categoryName){

      console.log(categoryName);
      this.newTodo.category = categoryName;
      $('.todo-input').focus();
    },
    toggleCheck: function(todo,id,categoryName){


      todo.checked = !todo.checked;
      Todos.child(categoryName).child(id).set(todo);
      //updateGroups();
    },

    // Push new post in to Todos
    addTodo: function(stayHere) {


      if (this.newTodo.text && this.newTodo.text.length > 0){


        this.colorChanging = true;

        var todoThis = this;

        if (!stayHere) {
          todoThis.controlsOpen = false;
        } else {
          $('.todo-input').focus();
        }
        $('.todo-input').focus();

        setTimeout(function(){

          todoThis.colorChanging = false;

        },1000);


        //Do the stuff
        $('.todo-input').blur();

        //Todos are unchecked by default
        this.newTodo.checked = 0;

        //If no category is checked, set category to Other
        if (this.newTodo.category.length < 0 || typeof this.newTodo.category != "string") {
          this.newTodo.category = "Other";
        }

        //Push the todo as a child of the category
        Todos.child(this.newTodo.category).push(this.newTodo);
        //Also added to history list. May be used for autocomplete later
        TodoHistory.push(this.newTodo);

        //Clear the newTodo so that we can start another
        this.newTodo.text = null;
        this.newTodo.category = {};



      }



    },
    // Remove child based on key - firebase function
    removeTodo: function(category,key) {

      Todos.child(category).child(key).remove();


    },
    clearChecked: function(){


      $.each(this.todos,function(categoryName,category){
        $.each(category,function(key,todo){

          if (todo.checked == true){

            Todos.child(categoryName).child(key).remove();
          }



        });
      });


    }
  }
});


function updateGroups() {
  //THIS LINE DOES NOT PRESERVE FIREBASE IDs!!!!

  var newGroupTodo = {};


  //update the group object////////////////
  var newGroupTodo = _.groupBy(todoList.todos, function(item){ return item.category });
  todoList.groupedTodos = newGroupTodo;
  /////////////////////////////////////////

}
