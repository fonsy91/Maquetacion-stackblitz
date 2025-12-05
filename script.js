
// Para justify-content
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

// Función global que cambia align-content del contenedor
function setAlignContent(value) {
    const container = document.getElementById('flexContainerContent');
    if (container) {
      container.style.alignContent = value;
    }
}

// Funciones para GRID
function setGridProperty(prop, value) {
    const grid = document.getElementById('gridContainer');
    if(grid) {
      grid.style[prop] = value;
    }
}







