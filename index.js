document.addEventListener('DOMContentLoaded', () => {
    
    // selectors
    const todo = document.querySelector('.todo-input');
    const todoButton = document.querySelector('.todo-button');
    const todoList = document.querySelector('.todo-list');
    const filterOption = document.querySelector('select')


    // event listeners
    todoButton.addEventListener('click', addTodo)
    todoList.addEventListener('click', deleteCheck)
    filterOption.addEventListener('click', filterTodos)


    // functions
    function addTodo(e){
        e.preventDefault()
        const todoDiv = document.createElement("div")
        todoDiv.classList.add('todo')
        const newTodo = document.createElement("li")
        newTodo.innerText = todo.value
        newTodo.classList.add('todo-item')
        todoDiv.appendChild(newTodo)
        const completedButton = document.createElement('button')
        completedButton.innerHTML = '<i class="fas fa-check"></i>'
        completedButton.classList.add('complete-btn')
        todoDiv.appendChild(completedButton)
        const trashButton = document.createElement('button')
        trashButton.innerHTML = '<i class="fas fa-trash"></i>'
        trashButton.classList.add('trash-btn')
        todoDiv.appendChild(trashButton)
        todoList.appendChild(todoDiv)
        todo.value = ""
    }


    function deleteCheck(e){
        const item = e.target;
        if(item.classList[0] === 'trash-btn'){
            const toDo = item.parentNode
            toDo.classList.add('fall')
            toDo.addEventListener('transitionend', function(){
                toDo.remove()
            })
        }
        if(item.classList[0] === 'complete-btn'){
            const toDo = item.parentNode
            toDo.classList.toggle('completed')
        }
    }

    function filterTodos(e){
        console.log(e.target.value)
        const todos = todoList.children
        var arr = Array.prototype.slice.call( todos )
        arr.map((todo)=>{
            switch(e.target.value){
                case "all":
                    todo.style.display = 'flex'
                    break;
                case 'completed':
                    if(todo.classList.contains('completed')){
                        todo.style.display = 'flex'
                    } else{
                        todo.style.display = 'none'
                    }
                    break;
                case 'uncompleted':
                    if(!todo.classList.contains('completed')){
                        todo.style.display = 'flex'
                    } else{
                        todo.style.display = 'none'
                    }
                    break;
            }
        })
    }
    

    
})