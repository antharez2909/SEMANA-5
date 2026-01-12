// Referencias a elementos del DOM
const gallery = document.getElementById("gallery");
const imageUrlInput = document.getElementById("imageUrl");
const addButton = document.getElementById("addImage");
const deleteButton = document.getElementById("deleteImage");

// Variable para almacenar la imagen seleccionada
let selectedImage = null;

// EVENTO: Agregar imagen
addButton.addEventListener("click", () => {

  // Obtener la URL ingresada por el usuario
  const url = imageUrlInput.value.trim();

  // Si el input está vacío, no hace nada
  if (url === "") return;

  // Crear dinámicamente un elemento <img>
  const img = document.createElement("img");

  // Asignar la URL a la imagen
  img.src = url;

  // Evento click para seleccionar la imagen
  img.addEventListener("click", () => selectImage(img));

  // Agregar la imagen al contenedor de la galería
  gallery.appendChild(img);

  // Limpiar el input
  imageUrlInput.value = "";
});

// FUNCIÓN: Seleccionar imagen
function selectImage(img) {

  // Si ya hay una imagen seleccionada, quitarle la clase
  if (selectedImage) {
    selectedImage.classList.remove("selected");
  }

  // Agregar clase de selección a la nueva imagen
  img.classList.add("selected");

  // Actualizar la imagen seleccionada
  selectedImage = img;
}

// EVENTO: Eliminar imagen seleccionada
deleteButton.addEventListener("click", () => {

  // Verifica si hay una imagen seleccionada
  if (selectedImage) {

    // Elimina la imagen del DOM
    gallery.removeChild(selectedImage);

    // Reinicia la variable
    selectedImage = null;
  }
});

// EVENTO: input (detecta escritura en el campo)
imageUrlInput.addEventListener("input", () => {
  console.log("URL ingresada:", imageUrlInput.value);
});

// EVENTO: teclado (atajos)
document.addEventListener("keydown", (event) => {

  // Presionar Enter agrega imagen
  if (event.key === "Enter") {
    addButton.click();
  }

  // Presionar Delete elimina imagen seleccionada
  if (event.key === "Delete") {
    deleteButton.click();
  }
});
