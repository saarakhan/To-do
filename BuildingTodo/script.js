let input = document.querySelector("#task");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener('click', function (e) {
    if (input.value !== '') {
        let li = document.createElement('li');
        li.innerText = input.value;
        ul.appendChild(li);
        let del = document.createElement('button');
        del.innerText = '❌';
        del.classList.add("del");
        li.appendChild(del);
        ul.appendChild(li);
        input.value = " ";
        saveTodoList();
    }
});

// event bubbling 
ul.addEventListener("click", function (event) {
    // nodeName (which element triggered the event)
    if (event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
        saveTodoList();
    }
});

function saveTodoList() {
    localStorage.setItem("todoList", ul.innerHTML);
}

function loadTodoList() {
    let savedTodoList = localStorage.getItem("todoList");
    if (savedTodoList) {
        ul.innerHTML = savedTodoList;
    }
}

window.onload = function () {
    loadTodoList();
};
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let time = document.querySelector(".date");
let date = new Date();
let options = { year: 'numeric', month: '2-digit', day: '2-digit' };
let formattedDate = date.toLocaleDateString(undefined, options).replace(/\//g, '-'); //undefined-> local user envir
time.innerText = `${weekday[date.getDay()]}, ${formattedDate}`;

