export interface AboutContent {
  headline: string
  role: string
  location: string
  philosophy: string
  approach: string[]
}

export const aboutContent: AboutContent = {
  headline: 'Construyo sistemas que resuelven problemas reales.',
  role: 'Full-Stack Engineer & Automation Specialist',
  location: 'Colombia',
  philosophy:
    'La calidad de ingeniería y la ejecución de negocio no son disciplinas separadas. Un sistema bien construido sirve a ambos.',
  approach: [
    'Entiendo el problema antes de escribir código. Pregunto, investigo, cuestiono supuestos — luego construyo.',
    'Creo en productos que se usan, no en código que se despliega. Cada decisión técnica se mide por su impacto en el negocio.',
    'La automatización no reemplaza personas — elimina fricción. Mi objetivo es que los equipos trabajen en lo que importa.',
    'La ingeniería es un medio, no un fin. Construyo para que los resultados hablen.',
  ],
}
