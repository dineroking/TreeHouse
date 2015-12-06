//Problem: User interaction doesnt provide desired results
//Solution: Add interactivity so the user can manage daily tasks

var taskInput = document.getElementById('new-task'); //#new-task
var addButton = document.getElementsByTagName('button')[0]; //first button
var incompleteTaskHolder = document.getElementById('incomplete-tasks'); //#incomplete-tasks
var completedTaskHolder = document.getElementById('completed-tasks'); //#completed-tasks
//Add a new task
var addTask = function() {
  //When the button is pressed
    //Create a new list item with the text from the #new-task
      //input (checkbox)
      //label
      //input (text)
      //button with class of edit (button.edit)
      //button with class of delete (button.delete)
      //each elements, needs modified and appended
};


//Edit an existing task
var editTask = function() {
  //When the edit button is pressed
    //if the class of the parent is .editMode
      //switch from .editMode
      //label text becomes the inputs value
    //else
      //switch to .editMode
      //input value becomes the label's text

    //Toggle .editMode on the parent
};


//Delete an existing task
var deleteTask = function() {
  //When delete button is pressed
    //Remove the parent list item from the ul
};


//Mark a task as complete
var taskCompleted = function() {
  //When the check box is checked
    //Append the tast list item to the #completed-tasks
};


//Mark a task as incomplete
var taskIncomplete = function() {
  //When the checkbox is unchecked
    //Append the tast list item to the #incompleted-tasks
};
