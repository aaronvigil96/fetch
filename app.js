window.addEventListener('DOMContentLoaded', () => {
    cargarPersonas();
})

const cargarPersonas = async () => {
    try {
        const response = await fetch('https://fakerapi.it/api/v1/users?_quantity=100');

        if(response.status === 200){
            const datos = await response.json();

            let personas = '';

            datos.data.forEach(persona => {
                personas += `<p>
                Nombre: ${persona.lastname} ${persona.firstname}</p>`
            })
            document.querySelector('#contenedor').innerHTML = personas;

        } else {
            console.log('Estas teniendo un error')
        }
    } catch (error){
        console.log(error)
    }
}