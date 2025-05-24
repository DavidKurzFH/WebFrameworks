document.addEventListener("DOMContentLoaded", function () {
    const addTaskInput = document.getElementById("addTaskInput");
    const taskList = document.getElementById("taskList");
    const addTaskBtn = document.getElementById("addTaskBtn");

    // localStorage load
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Func: Save tasks to localStorage
    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    // Func: Create a task row
    function addRow(taskName) {
        if (document.getElementById(taskName + "Box")) return;

        const taskBox = document.createElement("ul");
        taskBox.classList.add("list-group", "list-group-horizontal");
        taskBox.setAttribute("id", taskName + "Box");

        const delTask = document.createElement("li");
        delTask.classList.add("btn", "list-group-item");
        delTask.innerText = "-";
        delTask.setAttribute("id", taskName + "Btn");
        delTask.onclick = function () {
            taskBox.remove();
            tasks = tasks.filter(task => task !== taskName);
            saveTasks();
        };

        const newTask = document.createElement("li");
        newTask.classList.add("list-group-item", "flex-fill");
        newTask.innerHTML = taskName;
        newTask.setAttribute("id", taskName + "Text");

        taskBox.appendChild(delTask);
        taskBox.appendChild(newTask);
        taskList.appendChild(taskBox);
    }

    // Initial creation of locally stored tasks
    tasks.forEach(task => addRow(task));

    // Add new task on button click
    addTaskBtn.addEventListener("click", function () {
        const input = addTaskInput.value.trim();
        if (!input) return;

        if (document.getElementById(input + "Box")) {
            alert("Duplicate entry: " + input);
            return;
        }

        tasks.push(input);
        saveTasks();
        addRow(input);
        addTaskInput.value = ""; // clear input
    });
});
