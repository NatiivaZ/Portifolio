const fs = require('fs');
const path = require('path');

// Diretório de destino
const imageDir = path.join(__dirname, 'public', 'images');

// Certificar de que o diretório existe
if (!fs.existsSync(imageDir)) {
    fs.mkdirSync(imageDir, { recursive: true });
    console.log(`Diretório ${imageDir} foi criado.`);
}

// Função para criar uma imagem SVG simples
function createSvgImage(fileName, width, height, bgColor, text) {
    // Substituir extensão para .svg
    const svgFileName = fileName.replace(/\.[^/.]+$/, ".svg");
    
    const svg = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="${bgColor}"/>
    <text 
        x="50%" 
        y="50%" 
        font-family="Arial" 
        font-size="${Math.min(width, height) * 0.1}px" 
        font-weight="bold" 
        fill="white" 
        text-anchor="middle" 
        dominant-baseline="middle">
        ${text}
    </text>
</svg>`;

    const filePath = path.join(imageDir, svgFileName);
    fs.writeFileSync(filePath, svg);
    console.log(`Imagem ${svgFileName} foi criada em ${filePath}`);
}

// Lista de imagens para criar
const images = [
    { name: 'project1.jpg', width: 800, height: 600, color: '#4361EE', text: 'Project 1' },
    { name: 'project2.jpg', width: 800, height: 600, color: '#4CC9F0', text: 'Project 2' },
    { name: 'project3.jpg', width: 800, height: 600, color: '#3F37C9', text: 'Project 3' },
    { name: 'project4.jpg', width: 800, height: 600, color: '#4361EE', text: 'Project 4' },
    { name: 'project5.jpg', width: 800, height: 600, color: '#4CC9F0', text: 'Project 5' },
    { name: 'project6.jpg', width: 800, height: 600, color: '#3F37C9', text: 'Project 6' },
    { name: 'testimonial1.jpg', width: 300, height: 300, color: '#4361EE', text: 'Testimonial 1' },
    { name: 'testimonial2.jpg', width: 300, height: 300, color: '#4CC9F0', text: 'Testimonial 2' },
    { name: 'testimonial3.jpg', width: 300, height: 300, color: '#3F37C9', text: 'Testimonial 3' },
    { name: 'hero-bg.jpg', width: 1200, height: 600, color: '#333333', text: 'Hero Background' },
    { name: 'counter-bg.jpg', width: 1200, height: 600, color: '#333333', text: 'Counter Background' },
    { name: 'profile.jpg', width: 400, height: 400, color: '#4361EE', text: 'Profile' },
    { name: 'favicon.png', width: 32, height: 32, color: '#4361EE', text: 'F' }
];

// Criar todas as imagens
images.forEach(img => {
    createSvgImage(img.name, img.width, img.height, img.color, img.text);
});

console.log('Todas as imagens foram criadas com sucesso!'); 