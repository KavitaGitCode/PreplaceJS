//add too list : DOne
//set priority tasks ...in the list it will shown 1st : DONE
//filter 
/*     Date Wise : DONE
    Priority Wise: DONE
    Completed: DONE
    Not Completed: DONE
    Alphabet Wise : DONE */

//search on mouse down keys : DONE

//task list
// -task show : DONE
// -checkbox  complete it : DONE
// edit : edit text and check box : DONE
// delete: delete task : DONE

//store task in local storage  
let form = document.querySelector('#todoForm');
let addTaskInput = document.querySelector("#todoInput");
let checkboxInput = document.getElementById("#completed");
let priorityCheckedBox = document.querySelector("#priorityChecked");
let filterSelectBox = document.querySelector("#filterToDo");
let searchSelectBox = document.querySelector("#search-text");
let todoListSection = document.querySelector('.todo-list');
let todoArr = JSON.parse(localStorage.getItem("taskList")) || [];
let isEdit = false;
let isDone = false;
let creteHTML;

//add task
function addTask(event) {
    event.preventDefault();
    let getValue = addTaskInput.value;
    let getCurrentDate = new Date().toLocaleDateString("en-IN");
    let getCurrentTime = new Date().toLocaleTimeString("en-IN");
    let isPriorityCheck = priorityCheckedBox.checked;
    let todoObj = {
        taskText: getValue,
        isDone: false,
        date: getCurrentDate,
        priorityTask: isPriorityCheck,
        time: getCurrentTime,
        id: Date.now().toString(36)
    }
    todoArr.push(todoObj);
    const strigifyTaskObj = JSON.stringify(todoArr)
    localStorage.setItem("taskList", strigifyTaskObj);
    //return todoObj;
    //todoListSection.appendChild(todoObj);
    showTaskInList(todoArr);
    addTaskInput.value = "";
}

form.addEventListener("submit", addTask);

function showTaskInList(todoItem) {
    todoListSection.innerHTML = "";
    let toToHTML = Array.from(todoItem).map((task) => createHTMLForTodo(task)).join('');
    todoListSection.insertAdjacentHTML("beforeend", toToHTML);

    let taskDetails = document.querySelectorAll(".task-details");
        taskDetails.forEach((task) => {
            let getTaskId = task.id;
            let getIndex = todoArr.findIndex((item) => item.id === getTaskId);
            if(todoArr[getIndex].isDone === true && getTaskId !== -1){
                task.classList.add('completed-task');
                let getCheckBox = task.querySelector(".completedMark");
                let getTaskDes = task.querySelector('.task-description');
                let disableEditBtn = task.querySelector('.edit-task');
                let disableDeleteBtn = task.querySelector('.delete-task');
                if (getCheckBox) {
                        getCheckBox.checked = true
                        getTaskDes.style.textDecoration = "line-through";
                        disableEditBtn.disabled = true;
                        disableDeleteBtn.disabled = true;
                } 
            }
        })
}

//create row html
function createHTMLForTodo(taskDetails) {
    creteHTML = "";
    creteHTML += `<div id=${taskDetails.id} class="d-flex flex-row align-items-center text-bg-light p-3 border-bottom border-2 border-success task-details">
        <p class="m-0 flex-grow-1">
            <input type="checkbox" onclick="isTaskDone()" id="completed" class="completedMark me-2"/>
            <span class="task-description"> ${taskDetails.taskText}</span>
            <span class="priority-star me-2">${taskDetails.priorityTask ? "*" : ""}</span>
        </p>
        <button class="edit-task btn btn-warning ms-2 me-2" onclick="editTodo('${taskDetails.id}')">Edit</button>
        <button class="delete-task btn btn-danger" onclick="deleteTodo('${taskDetails.id}')">Delete</button>
        </div>`;
    /* console.log(creteHTML); */
    return creteHTML;
}

/* onclick=${deleteTodo(taskDetails.id)} */

//edit button functionality
function editTodo(id) {
    isEdit = true;
    let getElement = document.getElementById(id);
    getElement.innerHTML = "";
    creteHTML = "";
    if (isEdit) {
        todoArr.forEach((item, index) => {
            if (item.id === id && item) {
                creteHTML += `
        <p class="m-0 flex-grow-1 d-flex">
        <input type="text" class="edit-text w-50 form-control me-2" value='${item.taskText}'/>
        <div class="form-check">
            <input type="checkbox" id="priorityChecked" onclick="setPriority()">
            <label class="form-check-label" for="priorityChecked">
               Set Priority
            </label>
        </div>
        </p>
        <button class="edit-task btn btn-warning ms-2 me-2" onclick="saveTodo('${item.id}')">Save</button>`;
            }
        })

    }
    getElement.insertAdjacentHTML("beforeend", creteHTML);
}

////after edit save button functionality
function saveTodo(id) {
    isEdit = false;
    let element = document.getElementById(id);
    let getId = element.getAttribute('id');
    let getEditText = element.querySelector('.edit-text').value;
    let getPriorityCheck = element.querySelector('#priorityChecked');
    todoArr.forEach((item) => {
        if (item.id === getId) {
            item.taskText = getEditText;
            item.priorityTask = getPriorityCheck.checked
        }
    })
    showTaskInList(todoArr);
    localStorage.setItem('taskList', JSON.stringify(todoArr));
    return todoArr;
}

//delete task funcionality
function deleteTodo(id) {
    let element = document.getElementById(id);
    todoArr.forEach((todo, index) => {
        todo.id === id && todoArr.splice(index, 1);
    });
    element.remove();
    localStorage.setItem('taskList', JSON.stringify(todoArr));
    return todoArr;
}

//serach task funcionality
function searchTask() {
    let getSearchVal = searchSelectBox.value.toLowerCase();
    let taskDetails = document.querySelectorAll(".task-details");
    taskDetails.forEach((currentTask) => {
        let getSearchDiv = currentTask.querySelector('.task-description');
        let getTxt = getSearchDiv.textContent;
        if (getTxt.indexOf(getSearchVal) > -1) {
            currentTask.classList.remove('d-none')
        } else {
            currentTask.classList.add('d-none')
        }
    })
}
searchSelectBox.addEventListener("keyup", searchTask);

function isTaskDone() {
    let taskDetails = document.querySelectorAll(".task-details");
    taskDetails.forEach((currentTask, index) => {
        /* console.log(currentTask, 'currentTask'); */
        let getCheckBox = currentTask.querySelector("#completed");
        let getTaskDes = currentTask.querySelector('.task-description');
        let disableEditBtn = currentTask.querySelector('.edit-task');
        let disableDeleteBtn = currentTask.querySelector('.delete-task');
        if (getCheckBox.checked === true) {
            todoArr[index].isDone = true
            isDone = true;
            if (isDone) {
                getTaskDes.style.textDecoration = "line-through";
                disableEditBtn.disabled = true;
                disableDeleteBtn.disabled = true;
                currentTask.classList.add('completed-task');
            }
        } else {
            getTaskDes.style.textDecoration = "none";
            disableEditBtn.disabled = false;
            disableDeleteBtn.disabled = false;
            currentTask.classList.remove('completed-task');
            todoArr[index].isDone = false
        }
    })

    localStorage.setItem("taskList", JSON.stringify(todoArr))
}

//sorting
function selectValue(event) {
    console.log(event.target.value);
    let filterBy = event.target.value;
    switch (filterBy) {
        case "select-by-date":
            sortByDate()
            break;
        case "select-by-priority":
            sortByPriority()
            break;
        case "select-by-completed":
            sortByCompletedTask();
            break;
        case "select-by-not-completed":
            console.log("perfomr select-by-not-completed");
            sortByNotCompletedTask();
            break;
        case "select-by-A-Z":
            sortByAlphabasewise();
            break;
        default:
            console.log("perfomr date waise sorting");
            sortByDate()
    }
}
filterSelectBox.addEventListener("change", selectValue);

//sort by alphabates
function sortByAlphabasewise() {
    todoArr.sort(function (a, b) {
        if (a.taskText < b.taskText) {
            return -1;
        } else if (a.taskText > b.taskText) {
            return 1;
        } else {
            return 0;
        }
    })
    showTaskInList(todoArr);
}

//sort by Date wise
function sortByDate() {
    todoArr.sort((a, b) => {
        return a.date - b.date // ascending order
    });
    showTaskInList(todoArr);
}

//sort by completed task
function sortByCompletedTask() {
    todoArr.sort((a, b) => {
        return b.isDone - a.isDone
    })
    showTaskInList(todoArr);
}

//sort by not completed task
function sortByNotCompletedTask() {
    todoArr.sort((a, b) => {
        return a.isDone - b.isDone
    })
    showTaskInList(todoArr);
}

//sort by priority task
function sortByPriority() {
    todoArr.sort((a, b) => {
        return b.priorityTask - a.priorityTask
    });
    showTaskInList(todoArr);
}

window.addEventListener("load", function () {
    showTaskInList(todoArr);
});

