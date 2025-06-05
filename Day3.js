//a To-Do List
    //using the concepts from Day1 and Day2 : Higher Order Fucntions and async/await/promises/callbacks


// Step 1 : Create an empty array to store tasks
let tasks = [];

// Step 2: Save a task to the array using a Promise
function saveTask(task){
    return new Promise ((resolve) => {
        tasks.push(task); //adding task
        resolve(task);  //resolve is carried out in case of success
    })
}

// Step 3 : Fetch and render the tasks
function fetchTask(){
    return new Promise ((resolve) => {
        const taskList = document.getElementById('taskList');
        taskList.innerHTML = ""; // Clear old list items before adding new ones

        tasks.forEach((task) => {
            const li = document.createElement('li');
            li.textContent = task;
            taskList.append(li);
        })
        resolve(); // Once done, resolve the Promise
    })
}


// Step 4 : Use of HOF- HOF is a function that takes another function as its parameter and returns new function as a result
function handleAsync(asyncFunc){
    return async (...args)=> {
        try{
            await asyncFunc(...args); // Run the async function
        }catch(error){
            alert(error);
        }
    }
}

// Step 5: Add a task using async/await, and use the HOF
const addTask = handleAsync(async () => {
     const input = document.getElementById('taskInput');
     const newTask = input.value.trim('');
    
     if(newTask){
        await saveTask(newTask); // Save task (async)
        await fetchTask(); // Fetch task list (async)
        input.value = ''; // Clear the input
     }
})