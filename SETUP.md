# 🚀 Guía de Configuración del Portfolio

Esta guía te ayudará a personalizar y configurar tu portfolio para que esté listo para usar.

## 📧 Configurar el Formulario de Contacto

El portfolio usa **FormSubmit** para enviar emails sin necesidad de backend. Es **100% gratis** y súper fácil de configurar.

### Paso 1: Activar tu email en FormSubmit

1. Abrí el archivo `index.html`
2. Buscá la línea 247 que dice:
   ```html
   <form class="contact-form" id="contactForm" action="https://formsubmit.co/TU_EMAIL_AQUI" method="POST">
   ```
3. Reemplazá `TU_EMAIL_AQUI` por tu email real. Por ejemplo:
   ```html
   <form class="contact-form" id="contactForm" action="https://formsubmit.co/tu@email.com" method="POST">
   ```

4. **Importante**: La primera vez que alguien envíe un mensaje, FormSubmit te enviará un email de confirmación. **Tenés que hacer click en el link de confirmación** para activar el servicio.

### Paso 2: Configurar la página de confirmación

1. Si vas a hostear el portfolio en un dominio, abrí `index.html`
2. Buscá la línea 252:
   ```html
   <input type="hidden" name="_next" value="https://tu-dominio.com/gracias.html">
   ```
3. Reemplazá `https://tu-dominio.com/gracias.html` con la URL real de tu portfolio. Por ejemplo:
   - Si usás GitHub Pages: `https://tu-usuario.github.io/tu-repo/gracias.html`
   - Si usás Netlify: `https://tu-sitio.netlify.app/gracias.html`
   - Con dominio propio: `https://tu-dominio.com/gracias.html`

4. Si estás probando localmente, podés dejar el valor como está o comentar esa línea temporalmente.

### Opciones adicionales de FormSubmit

FormSubmit tiene varias opciones que ya están configuradas en el formulario:

- `_subject`: Cambia el asunto del email (línea 249)
- `_captcha`: Desactivado para mejor experiencia (línea 250)
- `_template`: Usa formato de tabla para emails más legibles (línea 251)

Para más opciones, visitá: https://formsubmit.co/

---

## 🎨 Personalizar el Contenido

### 1. Información Personal

Abrí `index.html` y buscá estas secciones para actualizar:

**Hero Section (líneas 25-28):**
```html
<h1 class="hero-title">Hola, soy <span class="highlight">Tu Nombre</span></h1>
<p class="hero-subtitle">Tu descripción profesional</p>
```

**Sección Sobre Mí (líneas 77-85):**
- Actualizá el título, descripción y valores de diseño
- Cambiá los links de redes sociales (LinkedIn, Behance, Dribbble, Instagram)

**Contacto (líneas 238-242):**
```html
<a href="mailto:tu@email.com">tu@email.com</a>
<a href="https://wa.me/TUNUMERO">+54 9 11 XXXX-XXXX</a>
```

### 2. Proyectos del Portfolio

Cada proyecto está en una tarjeta `project-card` (comienzan en la línea 98). Para cada proyecto:

1. Reemplazá el placeholder SVG con tu imagen real:
   ```html
   <!-- Reemplazar esto -->
   <svg viewBox="0 0 400 300">...</svg>

   <!-- Por esto -->
   <img src="imagenes/proyecto-1.jpg" alt="Descripción del proyecto">
   ```

2. Actualizá el contenido:
   - Título del proyecto
   - Tipo de proyecto (UX/UI Design, Branding, etc.)
   - Descripción
   - Tags/tecnologías
   - Link al caso completo (por ejemplo, link a Behance)

### 3. Agregar/Quitar Proyectos

Para agregar más proyectos, copiá una de las tarjetas existentes (todo el bloque `<article class="project-card">...</article>`) y pegala dentro de `.portfolio-grid`.

Para quitar un proyecto, simplemente eliminá el bloque completo de la tarjeta.

---

## 🖼️ Agregar Imágenes

### Opción 1: Crear carpeta de imágenes

```bash
mkdir imagenes
```

Luego copiá tus fotos y mockups ahí, y actualizá las referencias en el HTML.

### Opción 2: Usar servicios externos

Podés usar servicios gratuitos como:
- [Imgur](https://imgur.com/)
- [Cloudinary](https://cloudinary.com/)
- [ImgBB](https://imgbb.com/)

Y usar las URLs directamente en el HTML.

### Foto de Perfil

Reemplazá los placeholders SVG en:
- Hero section (línea 33)
- About section (línea 72)

Con tu foto real:
```html
<img src="imagenes/perfil.jpg" alt="Tu nombre">
```

---

## 🎨 Personalizar Colores

Abrí `styles.css` y modificá las variables CSS (líneas 8-18):

```css
:root {
    --primary-color: #6366f1;      /* Color principal */
    --secondary-color: #8b5cf6;    /* Color secundario */
    --text-dark: #1f2937;          /* Texto oscuro */
    --text-light: #6b7280;         /* Texto claro */
    --bg-light: #f9fafb;           /* Fondo claro */
    --bg-white: #ffffff;           /* Fondo blanco */
}
```

Cambiá los valores hexadecimales por tus colores de marca.

---

## 📄 CV Descargable

1. Creá un PDF con tu CV
2. Guardalo en la raíz del proyecto como `cv.pdf`
3. El link en "Sobre mí" ya está configurado (línea 94):
   ```html
   <a href="/cv.pdf" class="btn btn-primary" download>Descargar CV</a>
   ```

Si tu archivo tiene otro nombre, actualizá el `href`.

---

## 🌐 Publicar el Portfolio

### Opción 1: GitHub Pages (Gratis)

1. Creá un repositorio en GitHub
2. Subí todos los archivos
3. Andá a Settings → Pages
4. Seleccioná la branch "main" y la carpeta "root"
5. Guardá y tu sitio estará en: `https://tu-usuario.github.io/nombre-repo/`

### Opción 2: Netlify (Gratis)

1. Andá a [Netlify](https://www.netlify.com/)
2. Arrastrá la carpeta del proyecto
3. Listo! Te da una URL automáticamente
4. Podés conectar un dominio propio gratis

### Opción 3: Vercel (Gratis)

Similar a Netlify:
1. Andá a [Vercel](https://vercel.com/)
2. Importá tu repositorio de GitHub
3. Deploy automático

---

## ✅ Checklist de Configuración

Antes de publicar, verificá que hayas completado:

- [ ] Configurado FormSubmit con tu email
- [ ] Confirmado tu email en FormSubmit (primera vez)
- [ ] Actualizado la URL de redirección `_next`
- [ ] Personalizado tu información (nombre, bio, descripción)
- [ ] Actualizado los links de redes sociales
- [ ] Cambiado el email y WhatsApp de contacto
- [ ] Agregado tus proyectos reales
- [ ] Reemplazado las imágenes placeholder
- [ ] Subido tu CV en PDF
- [ ] Personalizado los colores si querés
- [ ] Testeado el formulario de contacto
- [ ] Verificado que sea responsive (probalo en el celular)

---

## 🆘 Soporte

Si tenés problemas con FormSubmit:
- Documentación oficial: https://formsubmit.co/
- Recordá confirmar tu email la primera vez

Para personalización adicional del portfolio, editá los archivos:
- `index.html` - Contenido y estructura
- `styles.css` - Estilos y colores
- `script.js` - Funcionalidades interactivas

---

## 🎉 ¡Listo!

Tu portfolio ya está configurado. Solo falta personalizarlo con tu contenido y publicarlo.

¡Éxitos! 🚀
