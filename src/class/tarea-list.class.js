

export class TareaList {

    constructor(){
        this.tareas = [];
    }

    nuevaTarea(tarea){
        this.tareas.push(tarea);
        this.cargarLocalStorage();
    }

    eliminarTarea(id){

        this.tareas = this.tareas.filter(tarea => tarea.id != id);
        this.cargarLocalStorage();

    }

    marcarCompletado(id){

        for(const tarea of this.tareas){
          
            if(tarea.id == id){
                tarea.completado = !tarea.completado;
                this.cargarLocalStorage();
                break;
            }
        }
    }

    eliminarCompletados(){
        this.tareas = this.tareas.filter(tarea => !tarea.completado);
        this.cargarLocalStorage();
    }

    guardarLocalStorage(){

        localStorage.setItem('tarea', JSON.stringify(this.tareas));
    }

    cargarLocalStorage(){
    
       this.tareas = (localStorage.getItem('tarea')) 
                   ?  this.tareas = localStorage.getItem('tarea') 
                   : this.tareas = [];
    }
}