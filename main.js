const habitacionesContenedor = document.getElementById("habitaciones-contenedor");

// Obtener los datos de las habitaciones
fetch("data.json")
    .then(response => response.json())
    .then(data => {
        // Almacenar los datos en una variable global
        window.habitaciones = data.habitaciones;
        // Mostrar las habitaciones en la página
        mostrarHabitaciones();
    })
    .catch(error => console.error(error));


function mostrarHabitaciones() {
    const habitacionesContenedor = document.getElementById("habitaciones-contenedor");
    habitacionesContenedor.innerHTML = "";

    // Obtener los valores seleccionados en los filtros
    const filtroModelo = document.getElementById("filtro-modelo").value;
    const filtroPrecio = parseFloat(document.getElementById("filtro-precio").value);

    console.log(filtroPrecio);

    
    window.habitaciones.forEach(function (habitación) {
       
        if ((filtroModelo === "" || habitación.modelo === filtroModelo) && (filtroPrecio === 0 || habitación.precio <= filtroPrecio)
        ) {
            // Crear un elemento div para la habitaciones
            const habitaciónDiv = document.createElement("div");
            habitaciónDiv.classList.add("habitación");
            // Crear una imagen para la habitaciones 
            const habitaciónImg = document.createElement("img");
            habitaciónImg.src = habitación.img;
            habitaciónImg.alt = habitación.modelo;
            habitaciónDiv.appendChild(habitaciónImg);

           
            const habitaciónNombre = document.createElement("h3");
            habitaciónNombre.innerHTML = habitación.nombre;
            habitaciónDiv.appendChild(habitaciónNombre);

            // Crear un p para el modelo de las habitaciones
            const habitaciónModel = document.createElement("p");
            habitaciónModel.innerHTML = habitación.modelo;
            habitaciónDiv.appendChild(habitaciónModel);

            // Crear un p para el precio de la habitación
            const habitaciónPrice = document.createElement("p");
            habitaciónPrice.innerHTML = "S/."+habitación.precio;            
            habitaciónDiv.appendChild(habitaciónPrice);

            // Agregar el elemento div a la página
            habitacionesContenedor.appendChild(habitaciónDiv);
        }
    });
}

// Agregar eventos a los filtros para que al cambiar su valor, se vuelva a mostrar
document.getElementById("filtro-modelo").addEventListener("change", mostrarHabitaciones);
document.getElementById("filtro-precio").addEventListener("change", mostrarHabitaciones);