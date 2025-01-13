'use strict';

const taskList = document.querySelector('.task-list');
const btnAdd = document.querySelector('.js-btn-add');
const input = document.querySelector('.js-text-task-add');
const searchField = document.querySelector('.js-text-task-filter');
const searchButton = document.querySelector('.js-btn-filter');

//para hacer la petición al servidor
const GITHUB_USER = "IdoiaBE";
const SERVER_URL = `https://dev.adalab.es/api/todo/${GITHUB_USER}`;


// Listado de tareas
// const tasks = [
//     { name: "Recoger setas en el campo", completed: true, id: 1 },
//     { name: "Comprar pilas", completed: true, id: 2 },
//     { name: "Poner una lavadora de blancos", completed: true, id: 3 },
//     {
//       name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
//       completed: false,
//       id: 4,
//     },
//     { name: "Reciclar pilas", completed: true, id: 5 },
//   ];

//en esta variable meteremos las tareas obtenidas con la petición del servidor
let tasks = []

// Pintar las tareas del array tasks con los checkbox y tachadas (y guardar la funcion para reutilizarla)
function renderTask(){
  taskList.innerHTML=``;
  for (const task of tasks) {
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

//PETICIONES AL SERVIDOR

function petition (){
  fetch(SERVER_URL)
  .then((response) => response.json())
  .then ((data) => {
    //Guarda la respuesta obtenida enla variable para el listado de tareas: `tasks`
    const newTasks = data.results;
    console.log(newTasks);
    tasks = newTasks;
    console.log(tasks);
    return tasks;
  })
}

petition();
// Ejecuta la función después de 1 segundo (1000 ms)
setTimeout(renderTask, 1000);


//ejecutamos la función después de recoger los datos de la petición

// Add event listener
const handleClickList = (event) => {
  const taskId = parseInt(event.target.id); // Obtengo el id del checkbox clickado por la usuaria

  if (!taskId) {
    return;
  } // Si no ha pulsado en el checkbox, no queremos hacer nada y salimos de la función

  const positionId = tasks.findIndex((task) => task.id === taskId); // Buscar la posición del objeto en el array que tenga el mismo id que ese checkbox


  if (tasks[positionId].completed){
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



