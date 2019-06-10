const app = new Vue({
    el: '#app',
    data: {
        fondo: 'bg-warning',
        color: false
    }
});

const formulario = new Vue({
    el: '#formulario',
    data: {
        titulo: 'GYM CON VUE',
        nuevaTarea: '',
        tareas: []
    },
    methods:{
        almacenarLocal(){
            localStorage.setItem('gym-vue',JSON.stringify(this.tareas));
        },
        agregarTarea(){
            this.tareas.push({nombre:this.nuevaTarea, estado:false});
            this.nuevaTarea = '';
            this.almacenarLocal();
        },
        modificarTarea(index){
            this.tareas[index].estado = !this.tareas[index].estado;
            this.almacenarLocal();
        },
        eliminarTarea(index){
            this.tareas.splice(index,1);
            this.almacenarLocal();
        }
    },
    created: function(){
        let datosDB = JSON.parse(localStorage.getItem('gym-vue'));
        console.log(datosDB);
        if(datosDB == null){
            this.tareas = [];
        }else{
            this.tareas = datosDB;
        }
    }
});