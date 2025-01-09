'use strict';

const taskList = document.querySelector('.task-list');
const btnAdd = document.querySelector('.js-btn-add');
const input = document.querySelector('.js-text-task-add');


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
  ];

// Pintar las tareas que ya existen en el array con los checkbox y tachadas (y guardar la funcion para reutilizarla)
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

renderTask();

//PASOS
// 1. poner checkbox a las tareas que ya tenemos
// 2. añadir addeventlistener que cambie la propiedad completed de true a false o viceversa y se pinte o no el checkbox

//   // Busca la tarea que tenga el id `taskId` en el array `tasks`
//   // Una vez que has obtenido la tarea, actualiza la propiedad `completed`
//   // Pinta de nuevo las tareas en el html



const handleClickList = (event) => {
  const taskId = parseInt(event.target.id); // Obtengo el id del checkbox clickado por la usuaria

  if (!taskId) {
    return;
  } // Si no ha pulsado en el checkbox, no queremos hacer nada y salimos de la función

  const positionId = tasks.findIndex((task) => task.id === taskId); // Buscar la posición del objeto en el array que tenga el mismo id que ese checkbox
  console.log(positionId);

  // tasks[positionId].completed = !tasks[positionId].completed;

  if (tasks[positionId].completed){
    //Si la propiedad completed del objeto posicionado es true, modificarla a false 
    tasks[positionId].completed = false
  } else {
    //Si no, modificarla a true 
    tasks[positionId].completed = true
  };
   
  renderTask(); //volver a pintar las tareas con el checkbox actualizado
};

//evento de click en el checkbox
taskList.addEventListener("click", handleClickList);


