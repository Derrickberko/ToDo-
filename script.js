

function addTodo(){
  let text = document.getElementById('myInput').value; // get the value of the input

  //using trim method  to remove any extra spaces at beginning and end

  if(text ===''){
  alert( "You must write something!" );
   return;
}

//Now we create our li in the ul
let list = document.createElement("li");

//we assign the input value to li
list.textContent =  text ;

//creating a close button to removed done  tasks
let close =  document.createElement("closeButton");

//assign a close button a variable
close.textContent = 'X';

//add some style to it 
close.classList.add("btn", "btn-danger", "btn-sm", "ms-2")

// add a function to it to make sure you can remove it  when click on it
close.onclick = function(){

  //this will remove that specific task from the todo
  this.parentElement.remove();
}
//append the close button to the li so each task has its own close button
list.appendChild(close); // with this every time a task is created it has a close button to it that in sece u want to delete u can delete that specific task

// This retrives the ul list from the HTML and append the li as a child node to it
document.getElementById("list").appendChild(list);

//clear the input and type the next task
document.getElementById("myInput").value= "";

}