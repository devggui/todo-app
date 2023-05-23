const form = document.querySelector('form');
const input = document.querySelector('#newTask');
const list = document.querySelector('#taskComponent');

let tasks = [];

form.addEventListener('submit', (event) => {
  event.preventDefault();
  addTask();
});

function addTask() {
  const taskName = input.value.trim();
  
  if (taskName === '') return;

  tasks.push({
    name: taskName,
    completed: false
  });
  
  upgradeTasks();
  input.value = '';  
}


function upgradeTasks() {  
  list.innerHTML = '';

  tasks.forEach((task, index) => {
    console.log(task.name);
    
    
    list.innerHTML += '<div class="flex flex-row items-center p-3 bg-[var(--light-Very-Light-Gray)] rounded-[4px] relative cursor-pointer border-b-[1px]">';
    list.innerHTML += '  <div class="p-[1px] bg-[var(--light-Very-Light-Grayish-Blue)] rounded-full md:hover:bg-gradient-to-r from-[var(--primary-from)] to-[var(--primary-to)]">';
    list.innerHTML += '    <input type="checkbox" class="w-7 h-7 rounded-full align-middle appearance-none outline-none cursor-pointer bg-[var(--light-Very-Light-Gray)] checked:bg-gradient-to-r from-[var(--primary-from)] to-[var(--primary-to)]" id="checkbox">';
    list.innerHTML += '  </div>';
    list.innerHTML += '  <label for="checkbox" class="px-2 text-[var(--light-Very-Dark-Grayish-Blue)] md:py-2">'+task.name+'</label>';
    list.innerHTML += '  <img src="./images/icon-cross.svg" alt="Icone em formato de X" class="absolute right-4" id="delete">';
    list.innerHTML += '</div>';

    
    list.appendChild(html);

  });
  // const checked = document.querySelector('#checkbox');    
  // if (tarefa.concluida) checked.classList.add('line-through');
  // checked.addEventListener('checked', () => {
  //   concluirTarefa(index);
  // });
}

function concluirTarefa(index) {
  tasks[index].concluida = true;
  // upgradeTasks();
}
