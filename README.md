# 🌾 AgroServicios - Página de Agronomía

Sitio web estático de servicios agronómicos construido con **React 18 + Vite + Tailwind CSS**.

## 🛠️ Tecnologías

- **React 18** — Librería de UI
- **Vite** — Build tool ultrarrápido
- **Tailwind CSS 3** — Framework de estilos utilitarios (paleta vino + dorado)
- **GitHub Pages** — Hosting gratuito

## 🚀 Instalación

```bash
git clone https://github.com/TU-USUARIO/agronomia-page.git
cd agronomia-page
npm install
npm run dev
```

Abre http://localhost:3000

## 📦 Deploy en GitHub Pages

```bash
# 1. En vite.config.js, descomentar la línea "base" con el nombre de tu repo
# 2. Hacer build y deploy:
npm run deploy
```

## 📁 Estructura

```
src/
├── components/      → Todos los componentes/secciones
│   ├── Navbar.jsx        → Nav flotante glassmorphism
│   ├── Hero.jsx          → Carrusel de banners (desktop + mobile)
│   ├── Nosotros.jsx      → Quiénes somos + stats
│   ├── MisionVision.jsx  → Cards interactivas
│   ├── Proceso.jsx       → 6 pasos con visor de imagen
│   ├── Servicios.jsx     → Grid de servicios con fotos
│   ├── Alianzas.jsx      → Grid de logos/instituciones
│   ├── Contacto.jsx      → Formulario + info de contacto
│   └── Footer.jsx        → Footer moderno 4 columnas
├── assets/          → Imágenes y banners
├── App.jsx          → Componente raíz (single page)
├── main.jsx         → Punto de entrada
└── index.css        → Tailwind + estilos globales
```

## 👥 Equipo

Proyecto académico de agronomía.
