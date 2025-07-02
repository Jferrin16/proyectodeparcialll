function mostrarSeccion(id) {
  const secciones = document.querySelectorAll(".topic-section");
  secciones.forEach((sec) => (sec.style.display = "none"));
  document.getElementById(id).style.display = "block";
}
