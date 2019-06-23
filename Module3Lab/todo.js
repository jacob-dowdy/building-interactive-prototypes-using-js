// create references to page elements
var textBox = document.getElementById('task');
var add = document.getElementById('add');
var taskList = document.getElementById('taskList');
var clearButton = document.getElementById('clear');

// add new item to task list
add.addEventListener("click", function(){
    var task = textBox.value;
    // Don't add an empty string
    if(task.trim()){
        var newToDo = document.createElement("LI");
        var toDoText = document.createTextNode(task);
        newToDo.appendChild(toDoText);
        // clear the text
        textBox.value = "";
        // add remove option for new item
        var removeButton = document.createElement("BUTTON");
        removeButton.innerHTML = "Done";
        removeButton.className = "remove";
        removeButton.addEventListener("click", removeTask);
        newToDo.appendChild(removeButton);
        taskList.appendChild(newToDo);
    } else {
        alert("The task cannot be empty!")
    }
});

// clear the task list
clearButton.addEventListener("click", function(){
    taskList.innerHTML = "";
});

//remove a task from the list
function removeTask(e){
    // get the parent list item to remove
    var taskItem = e.target.parentElement;
    taskList.removeChild(taskItem);
}

