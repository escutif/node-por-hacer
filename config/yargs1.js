const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        }
    })
    .command('actualizar', 'Actualizar el estado completado de una tarea', {
        descripcion: {
            demand: true,
            alias: 'd'
        },
        completado: {
            alias: 'c',
            default: true,
            desc: 'Marca como completado o pendiente la tarea'

        }
    })
    .command('borrar', 'Se elimina un elemento por hacer', {
        descripcion: {
            demand: true,
            alias: 'b',
            desc: 'Borrado de la tarea por hacer'
        }
    })
    .help()
    .argv;


module.exports = {
    argv
}