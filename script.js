
// Para JUSTIFY CONTENT
function setJustify(value) {
    const flexContainer = document.getElementById('flexContainer');
    if (flexContainer) {
        flexContainer.style.justifyContent = value;
    }
}

// Función global que cambia align-items del contenedor
function setAlign(value) {
    const flexContainerItems = document.getElementById('flexContainerItems');
    if (flexContainerItems) {
        flexContainerItems.style.alignItems = value;
    }
}