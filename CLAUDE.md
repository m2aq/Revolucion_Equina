# Revolución Equina

Tienda web de productos veterinarios para caballos. Hermosillo, Sonora. Proyecto de cliente (maqueta para presentar al dueño).

## Decisiones aprobadas
- Ventas: catálogo con botón "Consultar precio" que abre WhatsApp con el producto en el mensaje. Sin pagos en línea ni backend.
- Los productos muestran "Consultar precio", sin precios visibles.
- Estilo: claro tipo revista de hípica (editorial). Fondo crema, texto tinta/azul marino apagado, dorado como acento y rojo solo en detalles pequeños. Títulos en serif (Cormorant Garamond), cuerpo en Inter, botones rectos con letras espaciadas, fotos grandes y mucho aire. El logo (fondo blanco) se integra con `mix-blend-mode: multiply`. Se descartó el estilo oscuro deportivo por verse a plantilla genérica y con colores muy fuertes.
- Secciones: inicio con logo, catálogo, quiénes somos, contacto (WhatsApp y TikTok).
- Estructura: `index.html`, `css/estilos.css`, `js/script.js`, `img/`. Productos definidos en el arreglo `productos` de `js/script.js`; el número de WhatsApp en la constante `WHATSAPP`.
- Footer con sello m2aq (proyecto de cliente, formato del CLAUDE.md global).

- Catálogo en rejilla de 3 columnas (2 en tableta, 1 en celular). Sello m2aq centrado en el footer, sin "© año" (el usuario lo pidió quitar).

## Estado actual (2026-11-20)
- Primera versión hecha y probada solo en Chrome de escritorio; falta revisar en celular.
- Catálogo con 6 productos: Magic Cushion y Xtreme, Equiwinner, Tri-Creatine Power, Creatine Power 5,000, Power Paks Surge, Flexineb.
- Repo: github.com/m2aq/Revolucion_Equina
- Rediseño a estilo claro tipo revista de hípica aplicado el 2026-11-20 (elegido por el usuario); falta que lo revise en navegador y celular.
- El logo tiene fondo blanco opaco (no transparente); se integra en el fondo crema con `mix-blend-mode: multiply`. No recortarlo ni recomprimirlo sin avisar.

## Pendientes
- SEO completo al final, cuando haya dominio y logo definitivos: vista previa al compartir (Open Graph con URL absoluta), favicon, `robots.txt`, `sitemap.xml`, canonical y datos estructurados de negocio local (Hermosillo). Ya tiene `title`, `meta description` e `lang="es-MX"`.
- El logo actual (`img/logo.webp`) es provisional; el original lo entregará el cliente.
- Las fotos de producto son versiones generadas de referencia; el usuario entregará las editadas definitivas.
- El número de WhatsApp es provisional.
- Texto de "Quiénes somos" provisional, por validar con el dueño.
- Confirmar el usuario real de TikTok.
