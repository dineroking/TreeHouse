//Problem: User interaction doesnt provide desired results
//Solution: Add interactivity so the user can manage daily tasks

var taskInput = document.getElementById('new-task'); //#new-task
var addButton = document.getElementsByTagName('button')[0]; //first button
var incompleteTaskHolder = document.getElementById('incomplete-tasks'); //#incomplete-tasks
var completedTaskHolder = document.getElementById('completed-tasks'); //#completed-tasks

//New Task List Item
var createNewTaskElement = function(taskString){
  //create a list item
  var listItem = document.createElement('li');
  //input (checkbox)
  var checkbox = document.createElement('input');
    //label
  var label = document.createElement('label');
    //input (text)
  var editInput = document.createElement('input');
    //button with class of edit (button.edit)
  var editButton = document.createElement('button');
    //button with class of delete (button.delete)
  var deleteButton = document.createElement('button');

    //each element needs modifying
  checkbox.type = 'checkbox';
  editInput.type = 'text';

  editButton.innerText = 'Edit';
  editButton.className = 'edit';

  deleteButton.innerText = 'Delete';
  deleteButton.className = 'delete';

  label.innerText = taskString;

    //each element needs appending
  listItem.appendChild(checkbox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);
  return listItem;
};
//Add a new task
var addTask = function() {
  console.log('add task...');
    //Create a new list item with the text from the #new-task
  var listItem = createNewTaskElement(taskInput.value);

  //append listItem to incompleteTaskHolder
  incompleteTaskHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);

  taskInput.value = '';

};


//Edit an existing task
var editTask = function() {
  console.log('edit task...');

  var listItem = this.parentNode;
  var editInput = listItem.querySelector('input[type=text]');
  var label = listItem.querySelector('label');

  var containsClass = listItem.classList.contains('editMode');
    //if the class of the parent is .editMode
  if(containsClass){
    //switch from .editMode
    //label text becomes the inputs value
    label.innerText = editInput.value;
  }else{
    //switch to .editMode
    //input value becomes the label's text
    editInput.value = label.innerText;
  }


    //Toggle .editMode on the parent
  listItem.classList.toggle('editMode');
};


//Delete an existing task
var deleteTask = function() {
  console.log('delete task...');
    //Remove the parent list item from the ul
  var listItem = this.parentNode;
  var ul = listItem.parentNode;

  //remove the parent list item from the ul
  ul.removeChild(listItem);
};


//Mark a task as complete
var taskCompleted = function() {
  console.log('complete task...');
    //Append the task list item to the #completed-tasks
  var listItem = this.parentNode;
  completedTaskHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskIncomplete);
};


//Mark a task as incomplete
var taskIncomplete = function() {
  console.log('incomplete task...');
    //Append the last list item to the #incompleted-tasks
  var listItem = this.parentNode;
  incompleteTaskHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
};

var bindTaskEvents = function(taskListItem, checkboxEventHandler){
  console.log('bind list items event');
  //select taskListItem's children
  var checkBox = taskListItem.querySelector('input[type=checkbox]');
  var editButton = taskListItem.querySelector('button.edit');
  var deleteButton = taskListItem.querySelector('button.delete');

  //bind editTask to edit button
  editButton.onclick = editTask;

  //bind to deleteTask to delete button
  deleteButton.onclick = deleteTask;

  //bind checkboxEventHandler to checkbox
  checkBox.onchange = checkboxEventHandler;
};

var ajaxRequest = function(){
  console.log('AJAX request sent');
};

//set the click handler to the addTask function
//addButton.onclick = addTask; //cant use parenthesis because that would be considered a call and would execute immediately
addButton.addEventListener('click', addTask);
addButton.addEventListener('click', ajaxRequest);

//cycle over the incompleteTaskHolder ul list item
//for each list item
for(var i = 0; i < incompleteTaskHolder.children.length; i++){
  //bind events to list item's children (taskCompleted)
  bindTaskEvents(incompleteTaskHolder.children[i], taskCompleted);
}

//cycle over the completedTaskHolder ul list item
//for each list item
for(var i = 0; i < completedTaskHolder.children.length; i++) {
  //bind events to list item's children (taskIncomplete)
  bindTaskEvents(completedTaskHolder.children[i], taskIncomplete);
}