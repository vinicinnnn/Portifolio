// Quando o documento HTML é completamente carregado...
document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todos os elementos com a classe 'subject'
    var subjects = document.querySelectorAll('.subject');

    // Para cada elemento 'subject', adiciona um listener de clique
    subjects.forEach(function(subject) {
        subject.addEventListener("click", function() {
            toggleContent(subject); // Chama a função para exibir/ocultar conteúdo
        });

        // Procura pelo botão de fechar dentro do 'subject'
        var closeButton = subject.querySelector(".close-btn");
        // Se encontrado, adiciona um listener para evitar propagação e chamar a função de exibir/ocultar conteúdo
        if (closeButton) {
            closeButton.addEventListener("click", function(event) {
                event.stopPropagation(); // Evita que o clique se propague para o elemento 'subject'
                toggleContent(subject); // Chama a função para exibir/ocultar conteúdo
            });
        }
    });
});

// Adiciona um listener para o botão com id 'profile-btn'
document.getElementById('profile-btn').addEventListener('click', function() {
    this.classList.toggle('clicked'); // Alterna a classe 'clicked' no elemento 'profile-btn'
});

// Função para exibir/ocultar conteúdo de um elemento 'subject'
function toggleContent(element) {
    var subjects = document.querySelectorAll('.subject'); // Seleciona todos os elementos com a classe 'subject'
    var content = element.querySelector(".content"); // Seleciona o conteúdo dentro do elemento 'subject'

    // Se o elemento 'subject' já está expandido...
    if (element.classList.contains("expanded")) {
        content.style.display = "none"; // Oculta o conteúdo
        element.classList.remove("expanded"); // Remove a classe 'expanded' do elemento
    } else { // Caso contrário...
        // Itera por todos os 'subjects' para fechar os que estão expandidos
        subjects.forEach(function(item) {
            if (item !== element && item.classList.contains("expanded")) {
                var itemContent = item.querySelector(".content");
                itemContent.style.display = "none"; // Oculta o conteúdo do 'subject' atual
                item.classList.remove("expanded"); // Remove a classe 'expanded' do 'subject' atual
            }
        });
        content.style.display = "block"; // Exibe o conteúdo do 'subject' clicado
        element.classList.add("expanded"); // Adiciona a classe 'expanded' ao 'subject' clicado
    }
}
