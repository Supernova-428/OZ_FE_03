const todoList = document.getElementById('todo-list')
const todoForm = document.getElementById('todo-form')
let todoArr = []


// localstorage set
function saveTodos(){
    const todoString = JSON.stringify(todoArr)
    localStorage.setItem('myTodos', todoString)
}

// localstorage get
function loadTodos(){
    const myTodos = localStorage.getItem('myTodos')
    todoArr = JSON.parse(myTodos)
    displayTodos()
}

// 삭제
function handleTodoDelBtnClick(clickedId){
    todoArr = todoArr.filter(function(aTodo){
        return aTodo.todoId !== clickedId
    })
    displayTodos()
    saveTodos()
}

// 수정
function handleTodoItemClick(clickedId){
    todoArr = todoArr.map(function(aTodo){
        if(aTodo.todoId === clickedId){
            return {
                ...aTodo, todoDone: !aTodo.todoDone
            }
        }
        else{
            return aTodo
        }
    })
    displayTodos()
    saveTodos()
}

// 할일 출력
function displayTodos(){
    todoList.innerHTML=''
    todoArr.forEach(function(aTodo){
        const todoItem = document.createElement('li')
        const todoDelBton = document.createElement('span')
        todoItem.textContent = aTodo.todoText
        todoDelBton.textContent = 'X'
        todoItem.title = '클릭하면 완료'
        if(aTodo.todoDone){
            todoItem.classList.add('done')
        }else{
            todoItem.classList.add('yet')
        }
        todoDelBton.title = '클릭하면 삭제'

        todoItem.addEventListener('click', function(){
            handleTodoItemClick(aTodo.todoId)
        })

        todoDelBton.addEventListener('click', function(){
            handleTodoDelBtnClick(aTodo.todoId)
        })

        todoItem.appendChild(todoDelBton)
        todoList.appendChild(todoItem)
    })
}

// 할일 추가
todoForm.addEventListener('submit', function(e){
    e.preventDefault() // 기존 기능 차단 -> 새로고침x
    
    const toBeAdded = {
        todoText: todoForm.todo.value,
        todoId: new Date().getTime(),
        todoDone: false
    }
    todoForm.todo.value=''
    todoArr.push(toBeAdded)
    displayTodos()
    saveTodos()
})