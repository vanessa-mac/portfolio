// Tema claro/escuro
const btnTema = document.querySelector('#btn-tema');
const body = document.body;

btnTema.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    btnTema.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Array de projetos - fácil de atualizar!
const meusProjetos = [
    {
        titulo: "📁 Portfólio Pessoal",
        descricao: "Este site que você está vendo! Meu primeiro projeto utilizando HTML, CSS e JavaScript. Aprendi sobre estrutura semântica, estilização e interatividade.",
        link: "https://github.com/vanessa-mac/portfolio"
    },
    {
        titulo: "🚀 Em Breve - Projeto 2",
        descricao: "Próximo projeto em desenvolvimento. Estou estudando para criar algo novo e empolgante. Acompanhe meu GitHub!",
        link: "https://github.com/vanessa-mac"
    },
    {
        titulo: "💡 Em Breve - Projeto 3",
        descricao: "Mais projetos serão adicionados conforme meu aprendizado no curso de Sistemas para Internet avançar.",
        link: "https://github.com/vanessa-mac"
    }
];

// Renderizar projetos dinamicamente
function mostrarProjetos() {
    const container = document.querySelector('#lista-projetos');
    
    container.innerHTML = meusProjetos.map(projeto => `
        <article class="projeto-card">
            <h3>${projeto.titulo}</h3>
            <p>${projeto.descricao}</p>
            <a href="${projeto.link}" target="_blank">
                Ver no GitHub →
            </a>
        </article>
    `).join('');
}

mostrarProjetos();

// Formulário de contato
const formulario = document.querySelector('#form-contato');

formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nome = document.querySelector('#nome').value;
    const email = document.querySelector('#email').value;
    const mensagem = document.querySelector('#mensagem').value;
    
    if(nome === '' || email === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos!');
        return;
    }
    
    alert(`Obrigada pelo contato, ${nome}! Sua mensagem foi enviada com sucesso.`);
    formulario.reset();
});

// Scroll suave para links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const alvo = document.querySelector(this.getAttribute('href'));
        if(alvo) {
            alvo.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
})
