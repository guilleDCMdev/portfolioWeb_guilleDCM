// Script para actualizar cv.ts desde un JSON extraído
import fs from 'fs';

const jsonFile = 'linkedin-data.json';

if (!fs.existsSync(jsonFile)) {
  console.log('❌ No se encontró el archivo linkedin-data.json');
  console.log('💡 Primero ejecuta el script de extracción o crea el archivo manualmente');
  process.exit(1);
}

console.log('📖 Leyendo datos de LinkedIn...\n');

const linkedinData = JSON.parse(fs.readFileSync(jsonFile, 'utf-8'));

// Convertir datos al formato de cv.ts
const cvData = {
  personal: {
    name: linkedinData.personal.name || "Guillermo de Carlos Muñoz",
    title: linkedinData.personal.title || "Tu Título Profesional",
    email: "tu.email@ejemplo.com", // Actualizar manualmente
    phone: "+34 600 000 000", // Actualizar manualmente
    location: linkedinData.personal.location || "Ciudad, País",
    linkedin: linkedinData.personal.linkedin || "https://www.linkedin.com/in/guillermo-de-carlos-mu%C3%B1oz-a68592270/",
    github: "https://github.com/tu-usuario", // Actualizar manualmente
    website: "https://tu-website.com", // Actualizar manualmente
    summary: linkedinData.personal.summary || "Breve descripción profesional sobre ti, tus habilidades y objetivos."
  },
  experience: linkedinData.experience.map(exp => {
    // Parsear fechas si están en formato "Ene 2023 - Presente" o similar
    const dateRange = exp.dateRange || '';
    const [startDate, endDate] = dateRange.includes(' - ') 
      ? dateRange.split(' - ').map(d => d.trim())
      : [dateRange, 'Presente'];
    
    return {
      company: exp.company || "Nombre de la Empresa",
      position: exp.position || "Tu Posición",
      location: exp.location || "Ciudad, País",
      startDate: startDate || "Enero 2023",
      endDate: endDate || "Presente",
      description: exp.description || "Descripción de tus responsabilidades y logros en este puesto.",
      achievements: exp.achievements || []
    };
  }),
  education: linkedinData.education.map(edu => {
    const dateRange = edu.dateRange || '';
    const [startDate, endDate] = dateRange.includes(' - ') 
      ? dateRange.split(' - ').map(d => d.trim())
      : [dateRange.split(' ')[0] || '2020', dateRange.split(' ')[2] || '2024'];
    
    return {
      institution: edu.institution || "Nombre de la Universidad/Instituto",
      degree: edu.degree || "Título Obtenido",
      field: edu.field || "Campo de Estudio",
      startDate: startDate || "2020",
      endDate: endDate || "2024",
      description: edu.description || ""
    };
  }),
  skills: [
    {
      category: "Habilidades Técnicas",
      items: linkedinData.skills || ["JavaScript", "TypeScript", "Python"]
    }
  ],
  projects: [
    {
      name: "Nombre del Proyecto",
      description: "Descripción breve del proyecto",
      technologies: ["React", "TypeScript", "Astro"],
      github: "https://github.com/tu-usuario/proyecto",
      demo: "https://demo-proyecto.com",
      image: "/images/proyecto1.jpg"
    }
  ],
  languages: [
    { language: "Español", level: "Nativo" },
    { language: "Inglés", level: "Avanzado" }
  ],
  certifications: []
};

// Generar el contenido del archivo cv.ts
const cvContent = `// Datos del CV - Personaliza estos datos con tu información de LinkedIn
export const cvData = ${JSON.stringify(cvData, null, 2)};
`;

// Escribir el archivo
fs.writeFileSync('src/data/cv.ts', cvContent);

console.log('✅ Archivo src/data/cv.ts actualizado exitosamente!\n');
console.log('📝 Recuerda actualizar manualmente:');
console.log('   - Email');
console.log('   - Teléfono (opcional)');
console.log('   - GitHub (si lo tienes)');
console.log('   - Proyectos');
console.log('   - Certificaciones');
console.log('\n💡 Revisa el archivo y ajusta los datos según sea necesario.');

