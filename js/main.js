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


// Pintar las tareas que ya existen en el array con los checkbox y tachadas
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


// function changeStatus() {

//   // Busca la tarea que tenga el id `taskId` en el array `tasks`
//   // Una vez que has obtenido la tarea, actualiza la propiedad `completed`
//   // Pinta de nuevo las tareas en el html
// };



// Add event listener
const handleClickList = (event) => {
  const taskId = parseInt(event.target.id); // Obtengo el id del checkbox clickado por la usuaria
  if (taskId) {
    const sameID = tasks.find((task) => task.id === taskId); // Busca un elemento en el array que tenga el mismo id que este checkbox
    console.log(sameID);
    
    if (task.id === checked) { // -->>> Comprobar si está bien
      classList.remove('tachado');
    // -->>> Definir cambiar completed en array
    } else {
      classList.add('tachado');
    // -->>> Definir cambiar completed en array
    };

  } else if (!taskId) {
    return;
  } // Si no ha pulsado en el checkbox, no queremos hacer nada y salimos de la función
};



taskList.addEventListener("click", handleClickList);


// 1. poner checkbox a las tareas que ya tenemos
// 2. añadir addeventlistener que cambie la propiedad completed de true a false o viceversa y se pinta el checkbox
// 3. según completed sea true o false, se añade la clase 'tachado' 
// type="checkbox";