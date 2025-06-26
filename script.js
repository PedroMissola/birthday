document.getElementById("abrirPresente").addEventListener("click", () => {
    // Mostrar a mensagem
    const mensagem = document.getElementById("mensagem");
    mensagem.classList.remove("hidden");

    // Tocar música
    const musica = document.getElementById("musica");
    if (musica) musica.play();

    // Confete 🎊
    confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 }
    });

    // Esconder botão
    document.getElementById("abrirPresente").style.display = "none";
});
