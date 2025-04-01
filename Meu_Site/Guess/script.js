let randomNumber = Math.floor(Math.random() * 10) + 1;

function check() {
    let userGuess = parseInt(document.getElementById("guess").value);
    let message = document.getElementById("messagem");

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        message.textContent = "Por favor, digite um número entre 1 e 10.";
        message.style.color = "black";
        return;
    }

    if (userGuess === randomNumber) {
        message.textContent = "Parabéns! Você acertou!";
        message.style.color = "green";
        document.body.style.backgroundColor = "#d4edda"; 
    } else {
        message.textContent = userGuess > randomNumber ? "Muito alto! Tente novamente." : "Muito baixo! Tente novamente.";
        message.style.color = "red";
        document.body.style.backgroundColor = "#f8d7da";
    }
}

document.getElementById("guess").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        check();  
    }
});

