let task = []; //宣告一個空陣列 task 用來存放待辦事項

//這是一個製造機（函式），負責把「一筆任務資料」包裝成「網頁的 HTML 標籤」
function taskTemplate(task) {
    return `
    <li ${task.completed ? 'class="strike"' : ""}>
        <p>${task.name}</p>
        <div>
            <span data-action="delete">❎</span>
            <span data-action="complete">✅</span>
        </div>
    </li>`
}
function renderTasks(task) {
    const listElement = document.querySelector('#todoList');
    listElement.innerHTML = "";
    const html = task.map(taskTemplate).join(""); 
    //把陣列裡的每一筆任務，依序丟進剛剛第 2 段的「範本製造機」裡，產出一個包含很多條 HTML 字串的新陣列
    //把這個陣列裡的所有字串黏成一整串長字串
    listElement.innerHTML = html;
}

function newTask() {
    const task = document.querySelector("#todo").ariaValueMax;
    task.push({detail:task, completed:false});
    renderTasks(task);
}

function removeTask(taskElment) {
   tasks = tasks.filter(
    (task) => task.detail != taskElement.querySelector('p').innerText
   );
   taskElement.remove();
}

function completeTask(taskElement) {
  const taskIndex = tasks.findIndex(
    (task) => task.detail === taskElement.querySelector('p').innerText
  );
  tasks[taskIndex].completed = tasks[taskIndex].completed ? false : true;
  taskElement.classList.toggle("strike");
  console.log(tasks);
}

function manageTasks(e) {
  // did they click the delete or complete icon?
  console.log(e.target);
  const parent = e.target.closest("li");
  if (e.target.dataset.action === "delete") {
    removeTask(parent);
  }
  if (e.target.dataset.action === "complete") {
    completeTask(parent);
  }
}

// Add your event listeners here
document.querySelector("#submitTask").addEventListener("click", newTask);
document.querySelector("#todoList").addEventListener("click", manageTasks);

renderTasks(task);