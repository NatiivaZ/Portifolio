const express = require('express');
const path = require('path');

// Inicializa o express
const app = express();
const PORT = process.env.PORT || 3000;

// Define o motor de visualização como EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rotas
app.get('/', (req, res) => {
    // Dados para passar para o template
    const portfolioData = {
        name: 'Ruan Natividade',
        role: 'Desenvolvedor Back-end & Cientista de Dados',
        about: 'Sou um desenvolvedor back-end especializado em Python e tecnologias de banco de dados, com experiência na criação de APIs escaláveis e sistemas robustos. Apaixonado por solucionar problemas complexos através de código limpo e eficiente, combino habilidades técnicas com uma forte compreensão de análise de dados.',
        skills: [
            { name: 'Python', level: 95 },
            { name: 'SQL', level: 90 },
            { name: 'Django/Flask', level: 30 },
            { name: 'API RESTful', level: 40 },
            { name: 'Docker', level: 27 },
            { name: 'AWS', level: 20 }
        ],
        services: [
            { 
                icon: 'fa-code',
                title: 'Desenvolvimento Back-end',
                description: 'Criação de aplicações robustas e escaláveis com Python, Django e Flask.'
            },
            { 
                icon: 'fa-database',
                title: 'Bancos de Dados',
                description: 'Modelagem, otimização e administração de bancos SQL e NoSQL.'
            },
            { 
                icon: 'fa-server',
                title: 'APIs RESTful',
                description: 'Desenvolvimento de APIs seguras, documentadas e de alta performance.'
            },
            { 
                icon: 'fa-cloud',
                title: 'DevOps & Cloud',
                description: 'Implementação de CI/CD, containerização e infraestrutura na nuvem.'
            }
        ],
        projects: [
            {
                id: 1,
                title: 'Sistema de Análise de Dados',
                category: 'web',
                image: 'project1.svg',
                description: 'Python & Pandas'
            },
            {
                id: 2,
                title: 'API de Pagamentos',
                category: 'app',
                image: 'project2.svg',
                description: 'Django REST Framework'
            },
            {
                id: 3,
                title: 'Dashboard Analytics',
                category: 'design',
                image: 'project3.svg',
                description: 'SQL & Visualization'
            },
            {
                id: 4,
                title: 'Microserviço de Autenticação',
                category: 'web',
                image: 'project4.svg',
                description: 'Flask & JWT'
            },
            {
                id: 5,
                title: 'Sistema de Recomendação',
                category: 'app',
                image: 'project5.svg',
                description: 'Machine Learning'
            },
            {
                id: 6,
                title: 'Ferramenta ETL',
                category: 'design',
                image: 'project6.svg',
                description: 'Data Pipeline'
            }
        ],
        contact: {
            email: 'ruan.natividade1@icloud.com',
            phone: '+55 61 995103383',
            location: 'Brasília, Brasil'
        },
        social: {
            github: 'https://github.com/NatiivaZ',
            linkedin: 'https://www.linkedin.com/in/ruan-natividade-a09806360/',
            twitter: 'https://x.com/ruan_natividade',
            instagram: 'https://www.instagram.com/ruan.natividade/'
        },
        // Adicionando configurações de tradução
        translation: {
            heroTyped: ['Desenvolvedor Python', 'Especialista SQL', 'Engenheiro de Back-end', 'Cientista de Dados'],
            viewWork: 'Ver Meu Trabalho',
            contactMe: 'Contato',
            aboutMe: 'Sobre Mim',
            whoAmI: 'Quem sou eu?',
            mySkills: 'Minhas Habilidades',
            downloadCV: 'Baixar Currículo',
            myServices: 'Meus Serviços',
            myWork: 'Meus Projetos',
            allProjects: 'Todos',
            webProjects: 'Serviços',
            appProjects: 'APIs',
            designProjects: 'Dados',
            contactTitle: 'Entre em Contato',
            projectsCompleted: 'Projetos Concluídos',
            happyClients: 'Clientes Satisfeitos',
            awardsWon: 'Certificações',
            coffeesCups: 'Xícaras de Café',
            nameLabel: 'Seu Nome',
            emailLabel: 'Seu Email',
            subjectLabel: 'Assunto',
            messageLabel: 'Sua Mensagem',
            sendMessage: 'Enviar Mensagem',
            successMessage: 'Obrigado por sua mensagem! Entrarei em contato em breve.',
            footerRights: 'Todos os Direitos Reservados',
            portfolio: 'Portfólio'
        }
    };
    
    res.render('index', { data: portfolioData });
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
}); 