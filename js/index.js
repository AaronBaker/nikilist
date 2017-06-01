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

console.log("init1");

// Firebase intialise
firebase.initializeApp(config);

console.log("init2");

// Set Todos firebase object
var Todos = firebase.database().ref('/todos');

// Watch for value changes on Todos, set todoList.todos property as the value
Todos.on('value', function(snapshot) {

  console.log("init3");
  todoList.todos = snapshot.val();

  todoList.groupedTodos = _.groupBy(todoList.todos, function(item){ return item.category });
})

var TodoHistory = firebase.database().ref('/todohistory');

// Create Vue component
var todoList = new Vue({
  el: '#todo',
  data: {
    todos: [],
    newTodo: {category:{}},
    groupedTodos: {},
    categories:[
      {name:"Produce",color:"#8BC34A"},
      {name:"Organic",color:"#03A9F4"},
      {name:"Baking",color:"#673AB7"},
      {name:"Breakfast",color:"#FF5722"},
      {name:"Cans",color:"#607D8B"},
      {name:"Snacks",color:"#3F51B5"},
      {name:"Meat",color:"#f44336"},
      {name:"Dairy",color:"#FF9800"},
      {name:"Frozen",color:"#00BCD4"}
    ],

  },
  created: function(){



  },

  mounted: function() {

    $('.todo-input').on("touchstart",function(){  $('.todo-input').focus();  });


  },
  methods: {
    setCategory: function(categoryName){


      this.newTodo.category = categoryName;
      $('.todo-input').focus();
    },
    toggleCheck: function(todo,id){


      todo.checked = !todo.checked;
      Todos.child(id).set(todo);

    },

    // Push new post in to Todos
    addTodo: function() {


      $('.todo-input').blur();

      this.newTodo.checked = 0;

      if (this.newTodo.category.length > 0) {
        //do nothing
      } else {
        this.newTodo.category = "Dairy";
      }


      Todos.push(this.newTodo);
      TodoHistory.push(this.newTodo);


      this.newTodo.text = '';
      this.newTodo.category = {};

    },
    // Remove child based on key - firebase function
    removeTodo: function(key) {
      Todos.child(key).remove()
    }
  }
})
