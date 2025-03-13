// Catálogo de programas de la Universidad San Mateo
const catalogo = [
  { id: 1, nombre: "Ingeniería de Sistemas", duracion: "8 semestres" },
  { id: 2, nombre: "Administración de Empresas", duracion: "8 semestres" },
  { id: 3, nombre: "Derecho", duracion: "10 semestres" }
];

// Mostrar catálogo
catalogo.forEach(programa => {
  console.log(`${programa.id}. ${programa.nombre} - ${programa.duracion}`);
});

// Crear formulario de inscripción
document.body.innerHTML += `
  <form id="formInscripcion">
    <h2>Solicitud de Inscripción</h2>
    <label>Nombre: <input type="text" id="nombre" /></label><br>
    <label>Programa ID: <input type="text" id="programaId" /></label><br>
    <button type="button" onclick="enviarSolicitud()">Enviar</button>
  </form>
`;

// Función para enviar solicitud
function enviarSolicitud() {
  const nombre = document.getElementById("nombre").value;
  const programaId = document.getElementById("programaId").value;

  // Validar los campos (puedes agregar más validaciones si es necesario)
  if (!nombre || !programaId) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  // Crear la consulta SQL (solo para propósitos de demostración, no ejecutar SQL en el navegador)
  const solicitud = `INSERT INTO solicitudes (nombre, programaId) VALUES ('${nombre}', '${programaId}')`;
  console.log("Solicitud enviada:", solicitud);

  // Aquí, en un entorno real, deberías enviar la solicitud al servidor a través de una API o algo similar
  // Ejemplo con fetch (debes implementar la API en tu servidor):
  // fetch('/api/enviarSolicitud', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ nombre, programaId })
  // }).then(response => response.json())
  //   .then(data => {
  //     console.log("Respuesta del servidor:", data);
  //     alert("Solicitud enviada correctamente.");
  //   }).catch(error => {
  //     console.error("Error al enviar la solicitud:", error);
  //     alert("Hubo un error al enviar la solicitud.");
  //   });

  // Para efectos de demostración, solo mostramos un mensaje de éxito
  alert("Solicitud enviada correctamente.");
}

// Hacer accesible el catálogo y la función enviarSolicitud desde el navegador
window.catalogo = catalogo;
window.enviarSolicitud = enviarSolicitud;
