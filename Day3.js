//a To-Do List
    //using the concepts from Day1 and Day2 : Higher Order Fucntions and async/await/promises/callbacks

let tasks = [];

function saveTask(task){
    return new Promise ((resolve) => {
        tasks.push(task);
        resolve(task);
    })
}

function fetchTask(){
    return new Promise ((resolve) => {
        const taskList = document.getElementById('taskList');
        taskList.innerHTML = "";

        tasks.forEach((task) => {
            const li = document.createElement('li');
            li.textContent = task;
            taskList.append(li);
        })
        resolve();
    })
}

function handleAsync(asyncFunc){
    return async (...args)=> {
        try{
            await asyncFunc(...args);
        }catch(error){
            alert(error);
        }
    }
}

const addTask = handleAsync(async() => {
     const input = document.getElementById('taskInput');
     const newTask = input.value.trim('');
    
     if(newTask){
        await saveTask(newTask);
        await fetchTask();
        input.value = '';
     }
})