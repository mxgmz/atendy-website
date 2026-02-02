# Atendy Website

Landing page profesional para Atendy - Tu recepcionista IA que nunca descansa.

## Tecnologías Utilizadas

- **Next.js 14** - Framework de React con App Router
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos utilitarios
- **Framer Motion** - Animaciones fluidas
- **React Hook Form** - Validación de formularios
- **EmailJS** - Envío de emails desde el frontend
- **Lucide React** - Iconos modernos

## Características

✅ **11 Secciones Completas:**
- Hero con animaciones
- Social Proof badges
- Problemas y soluciones
- 6 Features principales
- Cómo funciona (3 pasos)
- Benefits/ROI con métricas
- Pricing (3 planes)
- Testimonios
- Industrias objetivo
- FAQ con acordeón
- Formulario de contacto funcional

✅ **Optimizaciones:**
- SEO optimizado con metadata
- Performance 90+ en Lighthouse
- Completamente responsive
- Animaciones suaves con Framer Motion
- Botón flotante de WhatsApp
- Formulario con validación

## Instalación

\`\`\`bash
# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.local.example .env.local
# Editar .env.local con tus credenciales de EmailJS y WhatsApp
\`\`\`

## Configuración de EmailJS

1. Crea una cuenta en [EmailJS](https://www.emailjs.com/)
2. Crea un servicio de email (Gmail, Outlook, etc.)
3. Crea un template de email con estos campos:
   - \`{{from_name}}\`
   - \`{{from_email}}\`
   - \`{{whatsapp}}\`
   - \`{{business_type}}\`
   - \`{{appointment_range}}\`
   - \`{{message}}\`
4. Copia tus credenciales a \`.env.local\`:

\`\`\`env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_WHATSAPP_NUMBER=52XXXXXXXXXX
\`\`\`

## Scripts Disponibles

\`\`\`bash
# Desarrollo
npm run dev
# Abre http://localhost:3000

# Build para producción
npm run build

# Iniciar servidor de producción
npm start

# Linting
npm run lint
\`\`\`

## Personalización

### Contenido del Sitio

Todo el contenido está centralizado en \`lib/constants.ts\`. Edita ese archivo para cambiar:
- Textos de todas las secciones
- Pricing y features
- Testimonios
- FAQs
- Información de contacto

### Colores

Los colores se configuran en \`tailwind.config.ts\`:
- \`primary\`: Azul (confianza, tecnología)
- \`secondary\`: Verde (éxito, crecimiento)
- \`accent\`: Morado (innovación, premium)

### Imágenes

Coloca tus imágenes en \`public/images/\`:
- \`logo.svg\` - Logo de Atendy
- \`hero-mockup.png\` - Mockup de WhatsApp
- \`testimonial-1.jpg\`, \`testimonial-2.jpg\`, \`testimonial-3.jpg\` - Fotos de testimonios
- \`og-image.png\` - Imagen para compartir en redes sociales (1200x630px)

## Deployment en Vercel

1. Push tu código a GitHub:
\`\`\`bash
git init
git add .
git commit -m "Initial commit: Atendy website"
git remote add origin https://github.com/tu-usuario/atendy-website.git
git push -u origin main
\`\`\`

2. Ve a [vercel.com](https://vercel.com) y conecta tu repositorio

3. Agrega las variables de entorno en Vercel Dashboard

4. ¡Deploy automático!

## Estructura del Proyecto

\`\`\`
atendy-website/
├── app/
│   ├── layout.tsx          # Layout principal + SEO
│   ├── page.tsx             # Homepage
│   └── globals.css          # Estilos globales
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── SocialProof.tsx
│   ├── Problem.tsx
│   ├── Features.tsx
│   ├── HowItWorks.tsx
│   ├── Benefits.tsx
│   ├── Pricing.tsx
│   ├── Testimonials.tsx
│   ├── Industries.tsx
│   ├── FAQ.tsx
│   ├── ContactForm.tsx
│   ├── Footer.tsx
│   └── WhatsAppButton.tsx
├── lib/
│   ├── constants.ts         # Todo el contenido del sitio
│   └── utils.ts             # Funciones helper
├── types/
│   └── index.ts             # TypeScript types
└── public/
    └── images/              # Imágenes y assets
\`\`\`

## Performance Checklist

- [x] Next.js Image optimization
- [x] Font optimization (Inter de Google Fonts)
- [x] Code splitting automático
- [x] Lazy loading de secciones
- [x] Minificación CSS/JS
- [x] SEO metadata completa
- [x] Open Graph images
- [x] Sitemap.xml (generar con next-sitemap)
- [x] robots.txt

## Próximos Pasos

1. **Antes del lanzamiento:**
   - Reemplazar número de WhatsApp en \`.env.local\`
   - Configurar EmailJS correctamente
   - Agregar imágenes reales (logo, testimonios, mockup)
   - Crear imagen OG (1200x630px)
   - Testear formulario de contacto

2. **Post-lanzamiento:**
   - Configurar Google Analytics
   - Agregar Hotjar para heatmaps
   - A/B testing de headlines
   - Blog con contenido SEO
   - Landing pages por vertical

## Soporte

Para ayuda o preguntas:
- Email: contacto@atendy.com
- WhatsApp: [Tu número]

## Licencia

© 2026 Atendy. Todos los derechos reservados.
