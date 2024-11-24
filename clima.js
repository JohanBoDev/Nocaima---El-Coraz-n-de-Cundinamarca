// Tu clave API de OpenWeatherMap
const API_KEY = "e69eed45222829fd574a1b65c61b365c"; 

// Función para obtener los datos del clima
async function obtenerClima() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Nocaima&appid=${API_KEY}&units=metric&lang=es`;

  try {
    const respuesta = await fetch(url);
    const datos = await respuesta.json();

    if (respuesta.ok) {
      mostrarClima(datos);
    } else {
      document.getElementById("clima-info").innerHTML = `<p>Error: ${datos.message}</p>`;
    }
  } catch (error) {
    document.getElementById("clima-info").innerHTML = `<p>Error al obtener los datos del clima.</p>`;
    console.error(error);
  }
}

// Función para mostrar los datos del clima
function mostrarClima(datos) {
  const { name, weather, main, wind } = datos;
  const climaHTML = `
    <p><strong>Ubicación:</strong> ${name}</p>
    <p><strong>Clima:</strong> ${weather[0].description}</p>
    <p><strong>Temperatura:</strong> ${main.temp} °C</p>
    <p><strong>Sensación térmica:</strong> ${main.feels_like} °C</p>
    <p><strong>Humedad:</strong> ${main.humidity}%</p>
    <p><strong>Viento:</strong> ${wind.speed} m/s</p>
  `;
  document.getElementById("clima-info").innerHTML = climaHTML;
}

// Llama a la función al cargar la página
document.addEventListener("DOMContentLoaded", obtenerClima);
