let notas=[]
let materias = "";
let matematicas = 0;
let ingles = 0;
let geografia = 0;

const parrafoResultado = document.getElementById('parrafoResultado')

function agregarInfo() {
    const materiainput = document.getElementById('materia').value
    materias = materiainput

    const notasinput = document.getElementById('calificaciones').value
    notas.push(parseInt(notasinput,notasinput))

    imprimirInfo(materiainput,notasinput)

    console.log(materias ,notasinput)
}

function calcularPromedio() {

    if (notas.length > 0) {

        const suma = parseFloat(notas.reduce((total, numero) => total + numero, 0));
        const total = suma / notas.length;
        const promedio = total.toFixed(1)

        switch (materias) {
            case "matematicas":
                matematicas = promedio;
                break;
            case "ingles":
                ingles = promedio;
                break;
            case "geografia":
                geografia = promedio;
                break;
            default:
                materias = "";
                break;
        }
        
        console.log(promedio, materias);
        // parrafoResultado.textContent = `El promedio de ${materias} es ${promedio}`


    } else {
        console.log('no válido');
    }
}

function imprimirInfo(valorMateria,valorNota) {
    const contenedorInfo = document.createElement('div')
    contenedorInfo.classList.add('informacion-notas')

    const mostrarMateria = document.createElement('p')
    const mostrarNota = document.createElement('p')

    const opcionEliminar = document.createElement('span')
    opcionEliminar.classList.add('opcion-eliminar')

    mostrarMateria.textContent = valorMateria
    mostrarNota.textContent = valorNota
    opcionEliminar.textContent = 'Eliminar'

    //Construccion HTML
    const contenedorInfoNotas = document.querySelector('.contenedor-informacion-notas')


    contenedorInfo.append(mostrarMateria,mostrarNota,opcionEliminar)

    contenedorInfoNotas.appendChild(contenedorInfo)
}