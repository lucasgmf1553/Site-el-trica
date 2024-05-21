document.addEventListener("DOMContentLoaded", function() {
    // Adiciona evento de clique apenas aos links dentro da navegação
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Obtém o ID da seção correspondente ao link clicado
            const targetId = this.getAttribute('href').substring(1);

            // Rola suavemente até a seção correspondente
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
