document.getElementById("sendButton").addEventListener("click", () => {
    const userInput = document.getElementById("userInput");
    const chatMessages = document.getElementById("chatMessages");

    const userMessage = userInput.value.trim();
    if (userMessage === "") return;

    // Agregar mensaje del usuario
    const userMessageDiv = document.createElement("div");
    userMessageDiv.className = "chat-message user";
    userMessageDiv.textContent = userMessage;
    chatMessages.appendChild(userMessageDiv);

    // Respuestas simuladas basadas en palabras clave
    const responses = [
        { keyword: "alcohol", response: "El alcohol puede ser difícil de manejar, pero dar el primer paso es importante. ¿Qué te preocupa más sobre el consumo?" },
        { keyword: "ayuda", response: "Estoy aquí para ayudarte. ¿Cómo puedo apoyarte hoy?" },
        { keyword: "familia", response: "Hablar con tu familia puede ser un gran apoyo. ¿Crees que ellos entienden tu situación?" },
        { keyword: "amigos", response: "A veces, los amigos no entienden completamente lo que uno vive. ¿Te gustaría compartir más sobre eso?" },
        { keyword: "salud", response: "Cuidar tu salud es esencial. ¿Has notado algún cambio físico o emocional recientemente?" },
        { keyword: "motivación", response: "Encontrar una razón para seguir adelante puede marcar la diferencia. ¿Qué te motiva a mejorar?" },
        { keyword: "estrés", response: "El estrés puede ser un detonante. ¿Qué haces para relajarte o manejarlo?" }
    ];

    // Seleccionar una respuesta según el mensaje del usuario
    let iaResponse = "Gracias por compartirlo. Estoy aquí para escucharte.";
    for (const { keyword, response } of responses) {
        if (userMessage.toLowerCase().includes(keyword)) {
            iaResponse = response;
            break;
        }
    }

    // Simular respuesta de IA
    const iaMessageDiv = document.createElement("div");
    iaMessageDiv.className = "chat-message ia";
    iaMessageDiv.textContent = iaResponse;
    setTimeout(() => chatMessages.appendChild(iaMessageDiv), 500);

    // Limpiar campo de entrada y desplazarse al final
    userInput.value = "";
    chatMessages.scrollTop = chatMessages.scrollHeight;
});

const typingIndicator = document.createElement("div");
typingIndicator.className = "chat-typing";
typingIndicator.textContent = "Escribiendo...";
chatMessages.appendChild(typingIndicator);

setTimeout(() => {
    chatMessages.removeChild(typingIndicator);
    chatMessages.appendChild(iaMessageDiv);
}, 1000);
