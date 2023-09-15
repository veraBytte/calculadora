let notas=[]
let materias = "";
let matematicas = 0;
let ingles = 0;
let geografia = 0;

function agregarInfo() {
    const materiainput=document.getElementById('materia').value
     materias=materiainput
    const notasinput=document.getElementById('calificaciones').value
     notas.push(notasinput)
     console.log(materias ,notas)
}

function calcularPromedio() {

    if (notas.length > 0) {
        const suma = notas.reduce((total, numero) => total + numero, 0);
        const total=suma / notas.length;
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
    } else {
        console.log('no válido');
    }
}

