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

    // Simular respuesta de IA
    const iaMessageDiv = document.createElement("div");
    iaMessageDiv.className = "chat-message ia";
    iaMessageDiv.textContent = "¡Gracias por tu mensaje! Estoy aquí para ayudarte.";
    setTimeout(() => chatMessages.appendChild(iaMessageDiv), 500);

    // Limpiar campo de entrada y desplazarse al final
    userInput.value = "";
    chatMessages.scrollTop = chatMessages.scrollHeight;
});
