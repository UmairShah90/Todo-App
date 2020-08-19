


  var list = document.getElementById("list");

  firebase.database().ref('todos').on('child_added', function(data){

    // create list item with Text node
    var li = document.createElement('li');
    var liText = document.createTextNode(data.val().value);
    li.appendChild(liText);

   

     // create delete button 
   var delbtn = document.createElement("button");
   var delbtnText = document.createTextNode("Delete");
   delbtn.setAttribute("class","deletebtn")
   delbtn.setAttribute("id",data.val().key)
   delbtn.setAttribute("onClick","deleteItem(this)")
   delbtn.appendChild(delbtnText); 
   

   //create edit button
   var editbtn = document.createElement("button");
   var editbtnText = document.createTextNode("Edit");
   editbtn.setAttribute("class","editbtn");
   editbtn.setAttribute("id",data.val().key)
   editbtn.setAttribute("onClick","editButton(this)");
   editbtn.appendChild(editbtnText);

   li.appendChild(delbtn);
   li.appendChild(editbtn);



    list.appendChild(li);
    
  })

  

function addTodo(){
    var todoItem = document.getElementById("todo-item");
    var database = firebase.database().ref('todos');

    var key = database.push().key

    var todo = {
        value: todoItem.value,
        key: key
    }
    database.child(key).set(todo)
     todoItem.value = "";
    
}


function deleteItem(e){
    firebase.database().ref('todos').child(e.id).remove();
    e.parentNode.remove();
}
function deleteAll(){
    firebase.database().ref('todos').remove();
    list.innerHTML = "";

}

function editButton(e){
   
   var val = prompt("Enter new task",e.parentNode.firstChild.nodeValue)
   var editTodo = {
       value: val,
       key: e.id

   }
   firebase.database().ref('todos').child(e.id).set(editTodo)
   e.parentNode.firstChild.nodeValue = val;
} 