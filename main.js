let nombreprofesor = prompt("Por favor ingrese su nombre");
let escuela = prompt("A que institucion corresponde?");
let curso = prompt("Sobre qué curso desea obtener el listado?");
let cantidadalumnos = parseInt(
  prompt("Cuántos alumnos tiene" + " " + curso + "?")
);
let listaestudiantes = [];
let listadomejores = [];

while (isNaN(cantidadalumnos)) {
  cantidadalumnos = parseInt(
    prompt("El número ingresado es inválido, por favor ingrese números.")
  );
}

for (let i = 0; i < cantidadalumnos; i++) {
  let nombre = prompt("Nombre del estudiante n°" + (i + 1));
  let apellido = prompt("Apellido del estudiante n°" + (i + 1));
  let promedios = promedio();
  let estudiante = {
    nombre: nombre.toLowerCase(),
    apellido: apellido.toLowerCase(),
    promedio: promedios,
  };
  listaestudiantes.push(estudiante);
}

console.log(
  "Hola " +
    nombreprofesor +
    ", a continuación usted puede ver su listado de alumnos del curso " +
    curso +
    " de la escuela " +
    escuela
);
listaestudiantes.sort((a, b) => {
  if (a.apellido < b.apellido) {
    return -1;
  }
  if (a.apellido > b.apellido) {
    return 1;
  }
  return 0;
});
console.table(listaestudiantes);

let aprobados = listaestudiantes.filter((alumno) => alumno.promedio >= 7);
let desaprobados = listaestudiantes.filter((alumno) => alumno.promedio < 7);

if (aprobados.length > 0) {
  console.log("Los alumnos aprobados son:");
  console.table(aprobados);
} else {
  console.log("no hay alumnos aprobados");
}

if (desaprobados.length > 0) {
  console.log("Los alumnos desaprobados son:");
  console.table(desaprobados);
} else {
  console.log("no hay alumnos desaprobados");
}

let mejornota = 0;
for (let alumno of listaestudiantes) {
  if (mejornota < parseFloat(alumno.promedio)) {
    mejornota = parseFloat(alumno.promedio).toFixed(2);
  }
}

for (let alumno of listaestudiantes) {
  if (alumno.promedio == mejornota) {
    listadomejores.push(alumno.nombre + " " + alumno.apellido);
  }
}
promediossumados = 0;
for (let alumno of listaestudiantes) {
  promediossumados = promediossumados + parseFloat(alumno.promedio);
}

console.log(
  "El promedio general de " +
    curso +
    " es: " +
    (promediossumados / cantidadalumnos).toFixed(2)
);

console.log(
  "El promedio más alto del curso " +
    curso +
    " es: " +
    mejornota +
    "." +
    " Los alumnos con ese promedio son: " +
    listadomejores.join(", ") +
    "."
);
console.log(
  "El porcentaje de alumnos aprobados es: " +
    ((aprobados.length * 100) / cantidadalumnos).toFixed(1) +
    "%"
);

function promedio() {
  let cantidadnotas = parseInt(prompt("Cuántas notas tiene" + " "));
  while (isNaN(cantidadnotas) || cantidadnotas <= 0) {
    cantidadnotas = parseInt(
      prompt(
        "El número ingresado es inválido, por favor ingrese un valor numerico mayor a 0."
      )
    );
  }
  let contadornotas = 1;
  let puntaje = 0;
  while (contadornotas <= cantidadnotas) {
    let nota = parseFloat(
      prompt("por favor ingrese la nota n°" + " " + String(contadornotas))
    );
    while (isNaN(nota) || nota < 1 || nota > 10) {
      nota = parseFloat(
        prompt(
          "La nota ingresada es inválida, por favor ingrese un valor entre 1 y 10."
        )
      );
    }
    contadornotas = contadornotas + 1;
    puntaje = puntaje + nota;
  }
  let resultado = (puntaje / cantidadnotas).toFixed(2);
  return resultado;
}
