function changeMessage(){

    const message = document.getElementById("message");

    const messages = [
        "Keep Learning HTML!",
        "CSS makes websites beautiful.",
        "JavaScript adds interactivity.",
        "Git helps track your code.",
        "GitHub stores your projects online."
    ];

    const random = Math.floor(Math.random() * messages.length);

    message.innerHTML = messages[random];
}