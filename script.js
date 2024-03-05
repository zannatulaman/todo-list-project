document.addEventListener("DOMContentLoaded", function (){
    const inputTask = document.getElementById("task");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");
    
    addTaskButton.addEventListener("click", function () {
        const taskText = inputTask.value;
        inputTask.value = "";
        if (taskText === "") {
            alert("Please enter a task");
            inputTask.focus();
        } else {

            const taskItem = document.createElement("li");
            taskItem.innerHTML = `${taskText}  <button id="delete-btn">Delete</button>`
            taskList.appendChild(taskItem);
        
    
       const deleteButton = taskItem.querySelector("#delete-btn");
        deleteButton.addEventListener("click", function() {
            taskList.removeChild(taskItem);
        })
         
        }
       
    
        
    
    })
})

/*document.addEventListener("DOMContentLoaded", function () {
    const inputTask = document.getElementById("task");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function () {
        const taskText = inputTask.value;

        if (taskText === "") {
            alert("Please enter a task");
            inputTask.focus();
        } else {
            inputTask.value = "";

            const taskItem = document.createElement("li");
            taskItem.innerHTML = `${taskText} <button id="delete-btn">Delete</button>`;
            taskList.appendChild(taskItem);

            const deleteButton = taskItem.querySelector("#delete-btn");
            deleteButton.addEventListener("click", function () {
                taskList.removeChild(taskItem);
            });
        }
    });
});*/
