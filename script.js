const persona = {
    nombre: "Matias",
    edad: 20,
    estudiante: true,
    hobbies: ["programar", "jugar"]
};

const producto = {
    nombre: "Notebook",
    precio: 500000,
    disponible: true
};

const numeros = [10, 20, 30, 40, 50];

function mostrarAtributo(objeto) {
    console.log(objeto.nombre);
}

function recorrerArray(array) {
    array.forEach(elemento => {
        console.log(elemento);
    });
}

mostrarAtributo(persona);
recorrerArray(numeros);