


  var list = document.getElementById("list");

function addTodo(){
    var todoItem = document.getElementById("todo-item");

    // create list item with Text node
    var li = document.createElement('li');
    var liText = document.createTextNode(todoItem.value)
    li.appendChild(liText);

    todoItem.value = "";

   // create delete button 
   var delbtn = document.createElement("button");
   var delbtnText = document.createTextNode("Delete");
   delbtn.setAttribute("class","deletebtn")
   delbtn.setAttribute("onClick","deleteItem(this)")
   delbtn.appendChild(delbtnText); 
   

   //create edit button
   var editbtn = document.createElement("button");
   var editbtnText = document.createTextNode("Edit");
   editbtn.setAttribute("class","editbtn");
   editbtn.setAttribute("onClick","editButton(this)");
   editbtn.appendChild(editbtnText);

   li.appendChild(delbtn);
   li.appendChild(editbtn);



    list.appendChild(li);
    console.log(li)
    
}

function deleteItem(e){
    e.parentNode.remove();
}
function deleteAll(){
    list.innerHTML = "";

}

function editButton(e){
   var val =  e.parentNode.firstChild.nodeValue;
   var editValue = prompt("Enter new task",val)

   e.parentNode.firstChild.nodeValue = editValue;
} 