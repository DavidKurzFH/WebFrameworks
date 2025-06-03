const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

let todos = JSON.parse(localStorage.getItem('todos')) || [];

function renderTodos(){
    list.innerHTML = '';
    todos.forEach((todo, i) => {
        const li = document.createElement('li');
        li.textContent = todo.text;
        if(todo.done){
            li.classList.add('done');
        }
        li.addEventListener('click', () => {
            todos[i].done = !todos[i].done;
            saveTodos();
        })
        list.appendChild(li);
    })
}

function saveTodos(){
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodos();
    
}


form.addEventListener('submit', e => {
    e.preventDefault();
    const text = input.value.trim();
    if(text){
        todos.push({text, done:false});
        input.value = '';
        saveTodos();

        if (text.toLowerCase().includes('erinnern')) {
            scheduleReminder(text)
        }
    }
   
});

function requestNotificationPermission() {
    console.log("Entered f: requestNotificationPermission")
    Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
            console.log('NOTIFY: Granted')
        } else if (permission === 'denied') {
            console.log('NOTIFY: Denied')
        } else {
            console.log('NOTIFY: Something went wrong!')
        }
    }).catch(error => {console.error("NOTIFY Error:", error)});
}


function scheduleReminder(todoText) {
    console.log('ENTERED: scheduleReminder')
    if ('serviceWorker' in navigator && Notification.permission === 'granted') {
        navigator.serviceWorker.ready.then(registration => {
            if (navigator.serviceWorker.controller) {
                navigator.serviceWorker.controller.postMessage({ task: todoText });
            } else {
                console.warn("scheduleReminder: SW registered, but no controller yet found. Reloading...");
                location.reload();
            }
        });
    } else {
        console.warn("scheduleReminder: No permission");
    }
}

requestNotificationPermission();
renderTodos();