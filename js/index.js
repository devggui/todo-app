const form = document.querySelector('form');
const input = document.querySelector('#newTask');
const root = document.querySelector('#root');

let tasks = [];

const newTask = document.getElementById('newTask')

newTask.addEventListener('keypress', (event) => {
  if(event.key === 'Enter') {
    if(newTask.value == '') return;  
    
    tasks.push(newTask.value)
    newTask.value = ''

    addTask(tasks)
  }
})

function addTask(tasks) {  
  let html = '';

  tasks.map((task, index) => {                 
    html += `
      <div class="relative flex p-5 bg-white items-center justify-center border-b border-solid border-[var(--light-Light-Grayis-Blue)]" id="task${index}">
        <div class="p-[1px] bg-[var(--light-Very-Light-Grayish-Blue)] rounded-full sm:hover:bg-gradient-to-r from-[var(--primary-from)] to-[var(--primary-to)] relative">
          <input class="bg-[var(--light-Very-Light-Gray)] checked:bg-gradient-to-r from-[var(--primary-from)] to-[var(--primary-to)] appearance-none outline-none align-middle w-7 h-7 rounded-full cursor-pointer" type="checkbox" id="checkbox${index}" onclick="taskCompleted(${index})">
          <img class="block absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-3 h-3 pointer-events-none" src="./images/icon-check.svg" alt="">
        </div>
        <label class="w-full px-5 align-middle cursor-pointer text-[var(--dark-Very-Dark-Desaturated-Blue)]" for="checkbox${index}" id="label${index}">${tasks[index]}</label>      
        <img class="absolute top-1/2 right-6 transform -translate-y-1/2 cursor-pointer" onclick="removeTask(${index})" src="./images/icon-cross.svg" alt="Icone em formato de X">      
      </div> 
    `   
  }); 
  
  root.innerHTML = html;
}

function removeTask(element) {
  const task = document.getElementById(`task${element}`)  
  task.remove()
}

function taskCompleted(element) {
  const label = document.getElementById(`label${element}`)

  if(label.classList.contains('line-through')) {
    label.classList.remove('line-through')
  } else {
    label.classList.add('line-through')
  }
}

function toggleChecked(element) {  
  if(element.classList.contains('text-[var(--primary-Bright-Blue)]')) {
    element.classList.remove('text-[var(--primary-Bright-Blue)]')
  } else {
    element.classList.add('text-[var(--primary-Bright-Blue)]')
  }
}