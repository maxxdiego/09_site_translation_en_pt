const translations = {
    en: {
        menuLanguage: 'Language:',
        menuLangEnglish: 'English',
        menuLangPortuguese: 'Portuguese',
        menuHome: 'Home',
        menuProducts: 'Products',
        menuServices: 'Services',
        homeContentTitleText: 'Welcome to Neotech!',
        homeContentText: `At Neotech, we're redefining the future with cutting-edge technology solutions. Our mission is to empower businesses and individuals through innovation, creativity, and excellence. From AI-driven software to state-of-the-art hardware, our team of experts is dedicated to delivering products that enhance efficiency, productivity, and growth.<br><br>
        Explore our solutions and discover how Neotech can transform your digital landscape. Join us on our journey to shape tomorrow, today.<br><br>
        Our commitment to quality and customer satisfaction drives us to push boundaries and continually strive for perfection. Whether you're a growing startup or an established company, we're here to provide the tools and support you need to achieve success. With Neotech by your side, the future is within your reach.`,
        footerText: 'All Rights Reserved ®',
    },
    
    pt: {
        menuLanguage: 'Idioma:',
        menuLangEnglish: 'Inglês',
        menuLangPortuguese: 'Português',
        menuHome: 'Início',
        menuProducts: 'Produtos',
        menuServices: 'Serviços',
        homeContentTitleText: 'Bem-vindo a Neotech!',
        homeContentText: `Na Neotech, estamos redefinindo o futuro com soluções tecnológicas de ponta. Nossa missão é capacitar empresas e indivíduos através da inovação, criatividade e excelência. Desde software impulsionado por IA até hardware de última geração, nossa equipe de especialistas está dedicada a entregar produtos que aumentam a eficiência, produtividade e crescimento.<br><br>
        Explore nossas soluções e descubra como a Neotech pode transformar seu cenário digital. Junte-se a nós em nossa jornada para moldar o amanhã, hoje.<br><br>
        Nosso compromisso com a qualidade e a satisfação do cliente nos impulsiona a superar limites e buscar constantemente a perfeição. Seja você uma startup em crescimento ou uma empresa consolidada, estamos aqui para fornecer as ferramentas e o suporte necessários para alcançar o sucesso. Com a Neotech ao seu lado, o futuro está ao seu alcance.`,
        footerText: 'Todos os direitos reservados ®',
    }
};

document.querySelector('#menuLangEnglish').addEventListener('click', () => changeLang('en'));
document.querySelector('#menuLangEnglish').style.color = '#F5a223'
document.querySelector('#menuLangPortuguese').addEventListener('click', () => changeLang('pt'));

function changeLang(lang) {
    localStorage.setItem('preferredLanguage', lang); // Armazena o idioma preferido no localStorage

    if (lang === 'en') {
        document.querySelector('#menuLangEnglish').style.color = '#F5a223'
        document.querySelector('#menuLangPortuguese').style.color = '#f1f1f1'
    } else if (lang === 'pt') {
        document.querySelector('#menuLangPortuguese').style.color = '#F5a223'
        document.querySelector('#menuLangEnglish').style.color = '#f1f1f1'
    }

    const translation = translations[lang];
    document.querySelector('#menuLanguage').textContent = translation.menuLanguage;
    document.querySelector('#menuLangEnglish').textContent = translation.menuLangEnglish;
    document.querySelector('#menuLangPortuguese').textContent = translation.menuLangPortuguese;
    document.querySelector('#menuHome').textContent = translation.menuHome;
    document.querySelector('#menuProducts').textContent = translation.menuProducts;
    document.querySelector('#menuServices').textContent = translation.menuServices;
    document.querySelector('#homeContentTitleText').textContent = translation.homeContentTitleText;
    document.querySelector('#homeContentText').innerHTML = translation.homeContentText;
    document.querySelector('#footerText').textContent = translation.footerText;
}

// Função para carregar o idioma preferido armazenado no localStorage
function loadPreferredLanguage() {
    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'en'; // Idioma padrão para 'en' se não houver preferência armazenada
    changeLang(preferredLanguage);
}

// Escolhe o idioma preferido quando a página for carregada
document.addEventListener('DOMContentLoaded', loadPreferredLanguage);