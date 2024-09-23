tasks =[];
let fullList = '';

function inputTask() {
    const inputVal = document.querySelector('.inputBar');
    const newTask = inputVal.value;

    const date = document.querySelector('.dateBar');
    const newDate = date.value;

    tasks.push({
        name: newTask,
        dueDate: newDate});
    inputVal.value = '';

    renderToDo();
}

function handleKeyDown(event) {
    if (event.key === 'Enter') {
        inputTask();
    }
}

function renderToDo() {
    let fullListHTML = '';

    tasks.forEach((todoObject, i) => {
        const {name, dueDate} = todoObject;
        //const name = todoObject.name;
        //const dueDate = todoObject.dueDate;
        const insertHtml = `
            <p>
                ${name}
            </p>
            <p>
                ${dueDate}
            </p>
            <button class= "deleteButton">Delete</button>
            `;
        fullListHTML = fullListHTML + insertHtml;
    });

    /*
    for (let i = 0; i<tasks.length; i++) {
        const todoObject = tasks[i];
        const {name, dueDate} = todoObject;
        //const name = todoObject.name;
        //const dueDate = todoObject.dueDate;
        const insertHtml = `
            <p>
                ${name}
            </p>
            <p>
                ${dueDate}
            </p>
            <button class= "deleteButton" onclick="
                tasks.splice(${i}, 1);
                renderToDo();
            ">Delete</button>
            `;
        fullListHTML = fullListHTML + insertHtml;
    }
    */
    console.log(fullListHTML);
    document.querySelector('.displayTasks').innerHTML = fullListHTML;

    document.querySelectorAll('.deleteButton').forEach((deleteButton, i)=>{
        deleteButton.addEventListener('click', ()=>{
            tasks.splice(i, 1);
            renderToDo();
        });
    });
}