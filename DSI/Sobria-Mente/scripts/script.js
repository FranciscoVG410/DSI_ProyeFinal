function loadContent(item) {
    const details = document.getElementById('extra'); // Apunta al contenedor dinámico

    if (item === 'identificadores') {
        details.innerHTML = `
            <h2 class="custom-heading">IDENTIFICADORES</h2>
            <p class="custom-text">
            ¿Qué son los identificadores del alcoholismo? Son señales o comportamientos que pueden indicar un consumo problemático de alcohol. Reconocer estas señales es el primer paso para identificar si el consumo ha alcanzado niveles peligrosos o adictivos.
            <br>
            <p>El trastorno asociado al consumo de alcohol puede ser leve, moderado o grave, según la cantidad de síntomas que manifiestes. Entre los signos y síntomas, se incluye lo siguiente:</p>
            <ul class="custom-list">
                <li><span class="title">Pérdida de Control:</span> Ser incapaz de limitar la cantidad de alcohol que bebes.</li>
                <img src="./imgs/bottles.jpg" alt="Botellas" width="400">
                <li><span class="title">Intención de Reducir Consumo:</span> Tener la intención de reducir la cantidad que bebes o haberlo intentado sin éxito.</li>
                <img src="./imgs/noAlcohol.jpeg" alt="Botellas" width="400">
                <li><span class="title">Compromiso Excesivo:</span> Dedicar mucho tiempo a beber, conseguir alcohol o recuperarse del consumo de alcohol.</li>
                <img src="./imgs/mucho.jpeg" alt="Botellas" width="400">
                <li><span class="title">Antojos Intensos:</span> Sentir antojos intensos o ansias de beber alcohol.</li>
                <img src="./imgs/antojo.jpeg" alt="Botellas" width="400">
                <li><span class="title">Incapacidad de Cumplir Obligaciones:</span> Ser incapaz de cumplir obligaciones importantes en el trabajo, la escuela o el hogar debido al consumo reiterado de alcohol.</li>
                <img src="./imgs/chamba.jpeg" alt="Botellas" width="400">
                <li><span class="title">Negligencia de Consecuencias:</span> Continuar con el consumo de alcohol aun sabiendo que te provoca problemas físicos, sociales, laborales o interpersonales.</li>
                <img src="./imgs/preso.jpeg" alt="Botellas" width="400">
                </ul>
            <p><span class="title">¿Qué hacer si reconoces estos identificadores?</span> Si notas alguno de estos signos en ti mismo o en alguien cercano, es importante buscar ayuda. Hablar con un profesional o buscar grupos de apoyo puede ser el primer paso para superar el alcoholismo.</p>
            </p>`;
    } else if (item === 'consecuencias') {
        details.innerHTML = `
            <h2 class="custom-heading">CONSECUENCIAS</h2>
            <p class="custom-text">
            El alcoholismo puede tener graves consecuencias para la salud física, mental y social. A continuación, se detallan algunas de las consecuencias más comunes:

            <ul class="custom-list">
                <li><span class="title">Daños en el hígado:</span> El consumo excesivo de alcohol puede causar enfermedades hepáticas como la cirrosis o hepatitis alcohólica.</li>
                <img src="./imgs/chin.jpeg" alt="Botellas" width="400">
                <li><span class="title">Afectaciones mentales:</span> El alcoholismo está relacionado con trastornos como la ansiedad, depresión, y deterioro cognitivo a largo plazo.</li>
                <li><span class="title">Problemas sociales y familiares:</span> Las relaciones interpersonales pueden verse gravemente afectadas, generando conflictos familiares, sociales y laborales.</li>
                <img src="./imgs/papa.jpeg" alt="Botellas" width="400">
                <li><span class="title">Accidentes y lesiones:</span> El alcohol reduce las capacidades motoras y aumenta el riesgo de accidentes, caídas y otros incidentes.</li>
                <img src="./imgs/choque.jpeg" alt="Botellas" width="400">
                <li><span class="title">Impacto en la calidad de vida:</span> El consumo excesivo de alcohol puede llevar a una disminución de la calidad de vida, limitando la capacidad de realizar actividades diarias.</li>
                <li><span class="title">Aumento de enfermedades crónicas:</span> El alcohol está vinculado con enfermedades como hipertensión, cáncer de esófago, y trastornos cardiovasculares.</li>
            </ul>
            <p>Además de las consecuencias físicas y mentales, el alcoholismo tiene un impacto profundo en la vida social y emocional de la persona afectada. Las relaciones familiares y amistosas suelen verse alteradas, ya que el comportamiento errático y la incapacidad de controlar el consumo afectan la confianza y el bienestar de quienes están alrededor. En muchos casos, el aislamiento social se convierte en una consecuencia directa del abuso del alcohol, lo que a su vez puede empeorar la salud mental y emocional del individuo.</p>
            </p>`;
    } else if (item === 'testinomios') {
        details.innerHTML = `
            <h2 class="custom-heading">Testimonios</h2>
            <p class="custom-text">
            Testimonios de personas que han vivido la experiencia del alcoholismo y su proceso hacia la recuperación. Escucha sus historias y reflexiones, que pueden ofrecerte una perspectiva más cercana y humana sobre el impacto del consumo de alcohol en la vida de las personas. La superación es posible, y cada testimonio es un paso hacia la esperanza y el cambio.
            <br>
            <div class="testimonial-place">
                <div class="testimonio">
                    <iframe src="https://www.tiktok.com/embed/7313917339144146182" width="325" height="605" frameborder="0" allowfullscreen></iframe>
                </div>
                <br>
                <div class="testimonio">
                    <iframe src="https://www.tiktok.com/embed/7145606857149713669" width="325" height="605" frameborder="0" allowfullscreen></iframe>
                </div>
                <br>
                <div class="testimonio">
                    <iframe src="https://www.tiktok.com/embed/7279121671934496005" width="325" height="605" frameborder="0" allowfullscreen></iframe>
                </div>
                <br>
                <div class="testimonio">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/M5ayqp0bq7E?si=AN8jEitPLL6HvfCZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
            </p>`;
    } else if (item === 'factores') {
        details.innerHTML = `
            <h2 class="custom-heading">Factores de Riesgo del Alcoholismo</h2>

            <p class="custom-text">
                El alcoholismo no es solo el resultado de decisiones personales, sino que también está influenciado por una combinación de factores genéticos, psicológicos y sociales. A continuación, se detallan algunos de los principales factores que pueden aumentar el riesgo de desarrollar dependencia al alcohol:
            </p>

            <h3 class="custom-heading">1. Factores Genéticos (Hereditarios) - 50%</h3>
            <p class="custom-text">
                La genética juega un papel crucial en la predisposición al alcoholismo. Si un miembro de la familia tiene antecedentes de abuso de alcohol, la probabilidad de que otros miembros lo desarrollen es mucho mayor. Esto se debe a las diferencias en cómo las personas procesan el alcohol y reaccionan ante él.
            </p>
            <ul class="custom-list">
                <li><strong>Tendencias heredadas:</strong> Las personas con antecedentes familiares de alcoholismo pueden tener una mayor tolerancia al alcohol, lo que puede llevar a un mayor consumo.</li>
                <li><strong>Estudios de gemelos:</strong> Investigaciones han demostrado que los gemelos idénticos tienen más probabilidades de desarrollar alcoholismo si uno de ellos ya lo padece.</li>
            </ul>
            <div class="centered-image">
                <img src="./imgs/genetico.jpeg" alt="gen" width="400">
            </div>

            <h3 class="custom-heading">2. Factores Sociales - 30%</h3>
            <p class="custom-text">
                El entorno social juega un papel significativo en el riesgo de desarrollar alcoholismo. Las relaciones familiares, los amigos y la comunidad pueden influir en los hábitos de consumo.
            </p>
            <ul class="custom-list">
                <li><strong>Influencia de amigos y familiares:</strong> Crecer en un ambiente donde el consumo de alcohol es común puede normalizar su uso y aumentar la probabilidad de empezar a beber desde una edad temprana.</li>
                <li><strong>Presión social:</strong> En ciertos entornos, como las fiestas o reuniones sociales, la presión para beber puede llevar a un consumo excesivo.</li>
                <li><strong>Acceso al alcohol:</strong> La facilidad para obtener alcohol, ya sea a través de amigos, familiares o en el hogar, también puede ser un factor importante.</li>
            </ul>
            <div class="centered-image">
                <img src="./imgs/social.jpg" alt="gen" width="400">
            </div>

            <h3 class="custom-heading">3. Factores Psicológicos - 20%</h3>
            <p class="custom-text">
                Los trastornos emocionales y psicológicos están estrechamente relacionados con el alcoholismo. Las personas con problemas de salud mental pueden recurrir al alcohol como una forma de automedicarse o escapar de sus dificultades.
            </p>
            <ul class="custom-list">
                <li><strong>Trastornos emocionales:</strong> La depresión, la ansiedad y el estrés postraumático pueden aumentar la probabilidad de que una persona use el alcohol como una forma de automedicarse.</li>
                <li><strong>Baja autoestima:</strong> Las personas con baja autoestima pueden usar el alcohol para evadir sus inseguridades y mejorar su estado de ánimo.</li>
                <li><strong>Trastornos de control de impulsos:</strong> Los trastornos de personalidad y la dificultad para controlar los impulsos pueden hacer que las personas recurran al alcohol como una forma de manejar sus emociones.</li>
            </ul>
            <div class="centered-image">
                <img src="./imgs/psico.jpeg" alt="gen" width="400">
            </div>

            <h3 class="custom-heading">4. Factores Ambientales - 10%</h3>
            <p class="custom-text">
                El entorno en el que una persona vive también puede influir en su consumo de alcohol.
            </p>
            <ul class="custom-list">
                <li><strong>Accesibilidad al alcohol:</strong> Vivir en un lugar donde el alcohol es fácilmente accesible puede aumentar el riesgo de consumo.</li>
                <li><strong>Cultura y normalización del consumo:</strong> En algunas culturas, el consumo de alcohol está socialmente aceptado o incluso fomentado, lo que puede influir en la cantidad y frecuencia con la que una persona bebe.</li>
            </ul>
            <div class="centered-image">
                <img src="./imgs/fest.jpeg" alt="gen" width="400">
            </div>
            `;
    } else if (item === 'alternativas') {
        details.innerHTML = `
            <h2 class="custom-heading">LAS 5 MEJORES ALTERNATIVAS PARA COMBATIR EL ALCOHOLISMO</h2>
        <p class="custom-text">
            Existen diversas estrategias para ayudar a los jóvenes a combatir el abuso de alcohol. Aquí te presentamos las mejores alternativas:
            <ul class="custom-list">
                <li><span class="title">Educación sobre los riesgos del alcohol:</span> Sensibilizar sobre los peligros del alcohol mediante programas educativos en escuelas y campañas informativas.</li>
                <img src="./imgs/cartel2.jpeg" alt="Botellas" width="200">
                <li><span class="title">Terapia psicológica:</span> La terapia cognitivo-conductual ayuda a los jóvenes a cambiar patrones de pensamiento que fomentan el consumo de alcohol.</li>
                <img src="./imgs/terapia.png" alt="Botellas" width="800">
                <li><span class="title">Grupos de apoyo:</span> Los grupos como AA ofrecen apoyo mutuo para superar la adicción al alcohol.</li>
                <img src="./imgs/grupo.jpeg" alt="Botellas" width="300">
                <li><span class="title">Actividades recreativas saludables:</span> Fomentar actividades como deportes o arte para distraer a los jóvenes del consumo de alcohol.</li>
                <img src="./imgs/crrer.jpg" alt="Botellas" width="500">
                <li><span class="title">Intervenciones familiares:</span> Involucrar a la familia en el proceso de prevención y tratamiento mediante apoyo emocional y comunicación.</li>
                <img src="./imgs/familia.png" alt="Botellas" width="400">
                </ul>
        </p>
    `;
    }else if (item === 'chat') {
        details.innerHTML = `
            <div id="chat-container">
                <div id="chat-output"></div>
                <div id="chat-input">
                    <input type="text" id="user-message" placeholder="Escribe tu mensaje...">
                    <button id="send-button">Enviar</button>
                </div>
            </div>`;

        document.getElementById('send-button').addEventListener('click', sendMessage);
    } else if (item === 'ayuda') {
        details.innerHTML = `
            <section id="ayuda-prevencion-alcohol" style="padding: 20px; background-color: #f5f5f5; border-radius: 8px; max-width: 800px; margin: 20px auto;">
            <h2 style="text-align: center; color: #2c3e50;">Recursos y Ayuda para la Prevención del Consumo de Alcohol</h2>
            <p style="text-align: justify; font-size: 16px; color: #34495e;">
                La prevención del consumo de alcohol es esencial para garantizar una vida sana y equilibrada. Aquí encontrarás recursos útiles, contactos de ayuda y consejos prácticos para ti o para alguien que conozcas que pueda necesitar apoyo.
            </p>
            
            <div style="margin-top: 20px;">
                <h3 style="color: #2980b9;">Líneas de ayuda y contacto</h3>
                <ul style="list-style-type: none; padding: 0;">
                <li>
                    <strong>Línea Nacional de Ayuda:</strong> <a href="tel:8001234567" style="color: #3498db; text-decoration: none;">800-123-4567</a>
                </li>
                <li>
                    <strong>Centro de Información sobre Alcohol:</strong> <a href="https://www.gob.mx/salud/acciones-y-programas/centro-de-atencion-ciudadana-contra-las-adicciones" target="_blank" style="color: #3498db; text-decoration: none;">www.gob.mx</a>
                </li>
                <li>
                    <strong>Apoyo Local:</strong> Contacta con tu centro comunitario o busca grupos de apoyo como Alcohólicos Anónimos.
                </li>
                </ul>
            </div>
            
            <div style="margin-top: 20px;">
                <h3 style="color: #2980b9;">Recursos Educativos</h3>
                <ul style="list-style-type: none; padding: 0;">
                <li>
                    <a href="https://www.who.int" target="_blank" style="color: #3498db; text-decoration: none;">Guía de la OMS sobre la prevención del alcohol</a>
                </li>
                <li>
                    <a href="https://www.cdc.gov" target="_blank" style="color: #3498db; text-decoration: none;">Información de los CDC sobre el consumo de alcohol</a>
                </li>
                <li>
                    <a href="https://www.samhsa.gov" target="_blank" style="color: #3498db; text-decoration: none;">SAMHSA: Consejos para jóvenes y familias</a>
                </li>
                </ul>
            </div>
            
            <div style="margin-top: 20px; text-align: center;">
                <h3 style="color: #2980b9;">Consejos Clave</h3>
                <p style="font-size: 16px; color: #34495e;">
                - Habla abiertamente sobre los riesgos del alcohol.<br>
                - Fomenta actividades saludables y alternativas de ocio.<br>
                - Busca ayuda profesional si sientes que no puedes manejar la situación solo.
                </p>
            </div>
            </section>
    `;
}

    function sendMessage() {
        const userMessage = document.getElementById('user-message').value.trim();
        const chatOutput = document.getElementById('chat-output');

        if (userMessage !== "") {
            // Mostrar el mensaje del usuario
            const userBubble = document.createElement('div');
            userBubble.textContent = `Usuario: ${userMessage}`;
            userBubble.style.background = '#E8F0FE';
            userBubble.style.margin = '5px 0';
            userBubble.style.padding = '10px';
            userBubble.style.borderRadius = '5px';
            chatOutput.appendChild(userBubble);

            let botReply = '';

            // Definir palabras clave y respuestas
            const responses = [
                {
                    keywords: ['alcoholismo', 'alcohol', 'adicción', 'bebidas alcohólicas'],
                    reply: `
                        ALLY: El alcoholismo es una enfermedad crónica caracterizada por el consumo excesivo y compulsivo de alcohol. 
                        Los síntomas incluyen pérdida de control sobre el consumo, deseos persistentes de beber, 
                        e incapacidad para reducir el consumo. Las consecuencias pueden ser graves para la salud física y mental. 
                        ¿Quieres saber sobre recursos de ayuda?`
                },
                {
                    keywords: ['ayuda', 'necesito', 'problema'],
                    reply: `
                        ALLY: Parece que necesitas ayuda. Puedes buscar recursos en línea como Alcohólicos Anónimos o contactar con una línea de ayuda local. 
                        Estoy aquí para proporcionarte más información si la necesitas. ¿Cómo puedo ayudarte más?`
                },
                {
                    keywords: ['gracias', 'ok', 'entendido'],
                    reply: `
                        ALLY: ¡De nada! Siempre estoy aquí para ayudarte. Si necesitas más información o tienes dudas, ¡no dudes en escribir!`
                },
                {
                    keywords: [],
                    reply: `
                        ALLY: Hola, ¿cómo puedo ayudarte hoy? Puedes preguntarme sobre temas como el alcoholismo, recursos de ayuda o cualquier otra inquietud.`
                }
            ];

            // Encontrar respuesta adecuada
            let foundResponse = false;
            for (const response of responses) {
                if (response.keywords.some(keyword => userMessage.toLowerCase().includes(keyword))) {
                    botReply = response.reply;
                    foundResponse = true;
                    break;
                }
            }
            if (!foundResponse) {
                botReply = responses[responses.length - 1].reply; // Respuesta por defecto
            }

            // Mostrar la respuesta del bot
            const botBubble = document.createElement('div');
            botBubble.textContent = botReply.trim();
            botBubble.style.background = '#F1E1F5';
            botBubble.style.margin = '5px 0';
            botBubble.style.padding = '10px';
            botBubble.style.borderRadius = '5px';
            chatOutput.appendChild(botBubble);

            // Limpiar el campo de entrada
            document.getElementById('user-message').value = '';

            // Hacer scroll automático al final del chat
            chatOutput.scrollTop = chatOutput.scrollHeight;
        }
    }
}