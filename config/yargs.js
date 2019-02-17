

const descripcion = {
     demand:true,
     alias:'d',
     desc:'Descripcion de la tarea por hacer'
}
const completado ={
     deafult:true,
     alias:'c',
     desc:'Marca como completado o pendiente la tarea'
}
const argv = require('yargs')
                    .command('crear','Crear un elemento por hacer',{
                         descripcion
                    })
                    .command('actualizar','Actualizar un elemento por hacer',{
                         descripcion,
                         completado

                    })
                    .command('borrar','Eliminar el elemento por hacer',{
                         descripcion

                    })
                    .help()
                    .argv;



module.exports ={
     argv
}
