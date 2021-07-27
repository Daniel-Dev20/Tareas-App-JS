import { Tarea } from "../class";
import {tareasList} from '../index';
const divTareaHtml  = document.querySelector('.todo-list');
const txtInput      = document.querySelector('.new-todo')
const btnBorrar     = document.querySelector('.clear-completed')
export const  crearTareaHtml = (tareas) => {

    const tareaLi = `<li class="${ (tareas.completado) ? 'completed' : ''}" data-id="${tareas.id}">
    <div class="view">
        <input class="toggle" type="checkbox" ${(tareas.completado) ? 'checked' : '' } >
        <label>${tareas.tarea}</label>
        <button class="destroy"></button>
    </div>

    <input class="edit" value="Create a TodoMVC template">
    </li> `;

    const tareaDiv = document.createElement('div');
    tareaDiv.classList.toggle('completed');
    tareaDiv.innerHTML = tareaLi;

    divTareaHtml.append(tareaDiv.firstElementChild);
    return tareaDiv.firstElementChild;

}

//Eventos
txtInput.addEventListener('keyup', (event) => {

    if(event.keyCode === 13 && txtInput.value.length > 0){

        const nueva = new Tarea(txtInput.value);
        tareasList.nuevaTarea(nueva);
        
        crearTareaHtml(nueva);
        txtInput.value = '';  
    }
})

divTareaHtml.addEventListener('click', (event) => {


      const nombreElemento = event.target.localName;
      const tareaElemento  = event.target.parentElement.parentElement;
      const tareaId        = tareaElemento.getAttribute('data-id');
   
      if(nombreElemento.includes('input')){

        tareasList.marcarCompletado(tareaId);
        tareaElemento.classList.toggle('completed');

      }else if(nombreElemento.includes('button')){

        tareasList.eliminarTarea(tareaId);
        divTareaHtml.removeChild(tareaElemento)
      }

      console.log(tareasList);
    
});

btnBorrar.addEventListener('click', () => {

    tareasList.eliminarCompletados();

    for(let i = divTareaHtml.children.length-1; i >= 0; i--){

      const elemento = divTareaHtml.children[i];

      if(elemento.classList.contains('completed')){

          divTareaHtml.removeChild(elemento);
      }

    }
})