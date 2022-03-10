function taskClicked(task){
    const clickedTask = task.target;
    const clickedTaskIndex = parseInt(task.getAttribute('data-cell-index'));

    taskCrossedOff(clickedTask, clickedTaskIndex);
}

function deleteTask(){
    task;
    updateGrid();
}

function addTask(){
    task;
    updateGrid();
}

function taskCrossedOff(clickedTask, clickedTaskIndex){
    deleteTask();
    updateGrid();
}

function updateGrid(){

}