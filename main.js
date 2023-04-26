class TodoList {
    constructor(name) {
        this.name = name;
        this.completed = false;
    }

    createElement() {
        const listElement = document.createElement('li');
        const todoText = document.createElement('text');

        todoText.textContent = this.name;
        listElement.appendChild(todoText);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            listElement.remove();
        });
        listElement.appendChild(deleteButton);

        const inputElement = document.createElement('input');
        inputElement.type = 'checkbox';
        inputElement.checked = this.completed;
        inputElement.addEventListener('change', () => {
            this.completed = inputElement.checked;
            if (this.completed) {
                listElement.classList.add('completed');
            } else {
                listElement.classList.remove('completed');
            }
        });
        listElement.appendChild(inputElement);

        return listElement;
    }
}

function addTodo(todoName) {
    const newTodo = new TodoList(todoName);
    const newListElement = newTodo.createElement();
    todoList.appendChild(newListElement);
}

const todoInput = document.querySelector('#input');
const addTodoButton = document.querySelector('#button');

addTodoButton.addEventListener('click', () => {
    const todoName = todoInput.value.trim();
    if (todoName !== '') {
        addTodo(todoName);
        todoInput.value = '';
    }
});

const todoList = document.querySelector('#list');