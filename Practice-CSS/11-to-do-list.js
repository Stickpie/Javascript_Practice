tasks =[];

function inputTask() {
    const inputVal = document.querySelector('.inputBar');
    const newTask = inputVal.value;
    
    tasks.push(newTask);
    inputVal.value = '';

    console.log(tasks);
    renderToDo();

    //for ( let i = 0; i<testData.length; i++) {
        //console.log(testData[i]);
    //}
}

function handleKeyDown(event) {
    if (event.key === 'Enter') {
        inputTask();
    }
}

function renderToDo() {
    let fullList = '';
    for (let i = 0; i<tasks.length; i++) {
        const todo = tasks[i];
        const insertHtml = `<p>${todo}</p>`;
        fullList += insertHtml;
    }
    document.querySelector('.displayTasks').innerHTML = fullList;
}