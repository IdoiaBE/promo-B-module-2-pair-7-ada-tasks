'use strict';

const taskList = document.querySelector('.task-list');
const btnAdd = document.querySelector('.js-btn-add');
const input = document.querySelector('.js-text-task-add');
const searchField = document.querySelector('.js-text-task-filter');
const searchButton = document.querySelector('.js-btn-filter');


// Listado de tareas
const tasks = [
    { name: "Recoger setas en el campo", completed: true, id: 1 },
    { name: "Comprar pilas", completed: true, id: 2 },
    { name: "Poner una lavadora de blancos", completed: true, id: 3 },
    {
      name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
      completed: false,
      id: 4,
    },
    { name: "Reciclar pilas", completed: true, id: 5 },
  ];


// Pintar las tareas que ya existen en el array con los checkbox y tachadas (y guardar la funcion para reutilizarla)
function renderTask(taskArray){
  taskList.innerHTML=``;
  for (const task of taskArray) {
    if (task.completed === true) {
        taskList.innerHTML += 
          `<li>
            <input id="${task.id}" type="checkbox" checked/>
            <label for="${task.id}" class='tachado'>${task.name}</label>
          </li>`;
    } else {
        taskList.innerHTML +=
        `<li>
            <input id="${task.id}" type="checkbox"/>
            <label for="${task.id}">${task.name}</label>
          </li>`
          ;
    };
  };
}

renderTask(tasks);


// Add event listener
const handleClickList = (event) => {
  const taskId = parseInt(event.target.id); // Obtengo el id del checkbox clickado por la usuaria

  if (!taskId) {
    return;
  } // Si no ha pulsado en el checkbox, no queremos hacer nada y salimos de la función

  const positionId = tasks.findIndex((task) => task.id === taskId); // Buscar la posición del objeto en el array que tenga el mismo id que ese checkbox


  if ( tasks[positionId].completed){
    tasks[positionId].completed = false;
  } else {
    tasks[positionId].completed = true;
  };
   
  renderTask();
};


taskList.addEventListener("click", handleClickList);



// FILTRAR TAREAS

function findTask(value) {
  const filteredTask = tasks.filter((task) => task.name.toLowerCase().includes(value.toLowerCase()));
  console.log(filteredTask);
  renderTask(filteredTask);
}

function handleClickSearch(event) {
  event.preventDefault();
  const searchValue = searchField.value.trim(); // con trim() recortamos los espacios del valor que se ha introducido
  console.log(searchValue);
  findTask(searchValue);
};

searchButton.addEventListener('click', handleClickSearch);

// Revisar error (tras filtrar, al marcar o desmarcar checkbox)