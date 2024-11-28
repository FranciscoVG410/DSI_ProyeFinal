function loadContent(item) {
    const details = document.getElementById('extra'); // Apunta al contenedor dinámico

    if (item === 'identificadores') {
        details.innerHTML = `
            <h2>Identificadores</h2>
            <p>Hola, esta es la sección de identificadores.iajsijasiasiajsiajsijaisajisjaisjiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii pero</p>`;
    } else if (item === 'consecuencias') {
        details.innerHTML = `
            <h2>Consecuencias</h2>
            <p>Esta es la información de las consecuencias.</p>`;
    } else if (item === 'testimonios') {
        details.innerHTML = `
            <h2>Testimonios</h2>
            <p>Estos son algunos testimonios relevantes.</p>`;
    } else if (item === 'señales') {
        details.innerHTML = `
            <h2>Señales</h2>
            <p>Aquí están las señales importantes.</p>`;
    } else if (item === 'alternativas') {
        details.innerHTML = `
            <h2>Alternativas</h2>
            <p>Estas son las alternativas disponibles.</p>`;
    } else if (item === 'chat') {
        details.innerHTML = `
            <h2>Soporte</h2>
            <p>Esta es la sección de soporte y chat.</p>`;
    }
} 