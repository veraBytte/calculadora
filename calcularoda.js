let notas=[]
let materias = "";
let matematicas = 0;
let ingles = 0;
let geografia = 0;

function agregarInfo(params) {
    const materiainput=document.getElementById('materia').value
    const materias=materiainput
}

function calcularPromedio(notas, materia) {

    if (notas.length > 0) {
        const suma = notas.reduce((total, numero) => total + numero, 0);
        const total=suma / notas.length;
        const promedio = total.toFixed(1)
        switch (materia) {
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
        materias = materia;
        console.log(promedio, materias);
    } else {
        console.log('no válido');
    }
}

calcularPromedio([5.0, 3.0, 2.0], "matematicas");
