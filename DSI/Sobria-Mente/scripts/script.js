function loadContent(item) {
    const details = document.getElementById('extra'); // Apunta al contenedor dinámico

    if (item === 'identificadores') {
        details.innerHTML = `
            <h2 class="custom-heading">IDENTIFICADORES</h2>
            <p class="custom-text">
            El trastorno asociado al consumo de alcohol puede ser leve, moderado o grave, según la cantidad de síntomas que manifiestes. Entre los signos y síntomas, se incluye lo siguiente:
            <ul class="custom-list">
                <li><span class="title">Pérdida de Control:</span> Ser incapaz de limitar la cantidad de alcohol que bebes.</li>
                <li><span class="title">Intención de Reducir Consumo:</span> Tener la intención de reducir la cantidad que bebes o haberlo intentado sin éxito.</li>
                <li><span class="title">Compromiso Excesivo:</span> Dedicar mucho tiempo a beber, conseguir alcohol o recuperarse del consumo de alcohol.</li>
                <li><span class="title">Antojos Intensos:</span> Sentir antojos intensos o ansias de beber alcohol.</li>
                <li><span class="title">Incapacidad de Cumplir Obligaciones:</span> Ser incapaz de cumplir obligaciones importantes en el trabajo, la escuela o el hogar debido al consumo reiterado de alcohol.</li>
                <li><span class="title">Negligencia de Consecuencias:</span> Continuar con el consumo de alcohol aun sabiendo que te provoca problemas físicos, sociales, laborales o interpersonales.</li>
            </ul>
            <img src="./imgs/bottles.jpg" alt="Botellas" width="300">
            </p>`;
    } else if (item === 'consecuencias') {
        details.innerHTML = `
            <h2 class="custom-heading">CONSECUENCIAS</h2>
            <p class="custom-text">
            El alcoholismo en jóvenes es una preocupación creciente que puede tener efectos devastadores en su desarrollo. A una edad temprana, el consumo excesivo de alcohol interrumpe el desarrollo del cerebro, lo que afecta la memoria, el aprendizaje y el control emocional.
            <p class="custom-info">Además de los daños cerebrales, el alcoholismo en jóvenes puede provocar problemas físicos graves, como daño hepático y debilidad en el sistema inmunológico. Esto hace que los jóvenes sean más susceptibles a enfermedades y otros problemas de salud a largo plazo.
            <br>
            <br>
            En el ámbito social, el abuso de alcohol puede llevar a un aislamiento progresivo, generando conflictos familiares y problemas en la escuela o en el trabajo. A menudo, los jóvenes alcohólicos desarrollan conductas de riesgo, como accidentes de tráfico o embarazos no deseados, lo que aumenta el peligro tanto para ellos como para quienes los rodean.
            </p>`;
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
            <h2 class="custom-heading">LAS 5 MEJORES ALTERNATIVAS PARA COMBATIR EL ALCOHOLISMO</h2>
        <p class="custom-text">
            Existen diversas estrategias para ayudar a los jóvenes a combatir el abuso de alcohol. Aquí te presentamos las mejores alternativas:
            <ul class="custom-list">
                <li><span class="title">Educación sobre los riesgos del alcohol:</span> Sensibilizar sobre los peligros del alcohol mediante programas educativos en escuelas y campañas informativas.</li>
                <li><span class="title">Terapia psicológica:</span> La terapia cognitivo-conductual ayuda a los jóvenes a cambiar patrones de pensamiento que fomentan el consumo de alcohol.</li>
                <li><span class="title">Grupos de apoyo:</span> Los grupos como AA ofrecen apoyo mutuo para superar la adicción al alcohol.</li>
                <li><span class="title">Actividades recreativas saludables:</span> Fomentar actividades como deportes o arte para distraer a los jóvenes del consumo de alcohol.</li>
                <li><span class="title">Intervenciones familiares:</span> Involucrar a la familia en el proceso de prevención y tratamiento mediante apoyo emocional y comunicación.</li>
                </ul>
        </p>
    `;
    } else if (item === 'chat') {
        details.innerHTML = `
            <h2>Soporte</h2>
            <p>Esta es la sección de soporte y chat.</p>`;
    }
} 