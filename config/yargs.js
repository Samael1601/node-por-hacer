const descripcion = {
    demand: true, //Esto significa que es obligatorio
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};
const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado la tarea'
};

const argv = require('yargs')
    .command('crear', 'crea un elemento por hacer', {
        descripcion
        /* : {
            demand: true, //Esto significa que es obligatorio
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        } */
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        /* : {
            demand: true, //Esto significa que es obligatorio
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        } */
        completado
        /* : {
            default: true,
            alias: 'c',
            desc: 'Marca como completado la tarea'
        } */

    }).command('borrar', 'Borra una tarea', {
        descripcion
        /* : {
                    demand: true, //Esto significa que es obligatorio
                    alias: 'd',
                    desc: 'Descripcion de la tarea por hacer'
                } */
    })
    .help()
    .argv;

module.exports = {
    argv
};