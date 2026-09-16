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

const formulario = document.getElementById('formulario');
const mensaje = document.getElementById('mensaje');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const datos = new FormData(formulario);
    const nombre = datos.get('nombre');
    const edad = datos.get('edad');
    const email = datos.get('email');
    if (!nombre || !edad || !email) {
        mensaje.textContent = 'Todos los campos son obligatorios.';
        mensaje.style.color = 'red';
        return;
    }
    mensaje.textContent = 'Formulario enviado correctamente.';
    mensaje.style.color = 'green';
    console.log({ nombre, edad: Number(edad), email });
});