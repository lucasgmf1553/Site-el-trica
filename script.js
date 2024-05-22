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
window.addEventListener('scroll', function() {
    // Verifica se a posição atual do scroll é igual à altura total da página menos a altura da janela
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
      document.getElementById('footer').style.display = 'block'; // Exibe o footer
    } else {
      document.getElementById('footer').style.display = 'none'; // Oculta o footer
    }
  });
