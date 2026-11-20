// Número de WhatsApp de pedidos (formato internacional, sin + ni espacios)
const WHATSAPP = '5216621686572';

// Catálogo de la maqueta. Para cambiar fotos, reemplaza el archivo en img/.
const productos = [
  {
    marca: 'Absorbine Hooflex',
    nombre: 'Magic Cushion y Magic Cushion Xtreme',
    desc: 'Hoof packing para el cuidado del casco. Disponible en versión estándar y Xtreme (fuerza de rendimiento).',
    imagen: 'img/magic-cushion.webp'
  },
  {
    marca: 'Equiwinner',
    nombre: 'Equiwinner Parche de Electrolitos',
    desc: 'Parche equino no transdérmico. Caja de 10 parches.',
    imagen: 'img/equiwinner.webp'
  },
  {
    marca: 'Peak Performance Nutrients',
    nombre: 'Tri-Creatine Power',
    desc: 'Suplemento de creatina para caballos. 2 lbs (0.91 kg), 45 porciones, sin azúcar añadida.',
    imagen: 'img/tri-creatine-power.webp'
  },
  {
    marca: 'Peak Performance Nutrients',
    nombre: 'Creatine Power 5,000',
    desc: 'Suplemento concentrado de creatina para rendimiento y resistencia. 2 lbs (0.91 kg), 36 porciones.',
    imagen: 'img/creatine-power-5000.webp'
  },
  {
    marca: 'Peak Performance Nutrients',
    nombre: 'Power Paks Surge',
    desc: 'Carga de 3 días previos a un evento: fuerza, energía, hidratación y recuperación. 3 paks.',
    imagen: 'img/power-paks-surge.webp'
  },
  {
    marca: 'Flexineb',
    nombre: 'Flexineb Sistema Nebulizador Equino',
    desc: 'Sistema de nebulización para caballos con estuche, equipo y solución.',
    imagen: 'img/flexineb.webp'
  }
];

function enlaceWhatsApp(mensaje) {
  return 'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(mensaje);
}

function crearTarjeta(p) {
  const t = document.createElement('article');
  t.className = 'tarjeta';

  const foto = document.createElement('div');
  foto.className = 'tarjeta__foto';
  const img = document.createElement('img');
  img.src = p.imagen;
  img.alt = p.nombre;
  img.loading = 'lazy';
  foto.appendChild(img);

  const cuerpo = document.createElement('div');
  cuerpo.className = 'tarjeta__cuerpo';

  const marca = document.createElement('span');
  marca.className = 'tarjeta__marca';
  marca.textContent = p.marca;

  const nombre = document.createElement('h3');
  nombre.className = 'tarjeta__nombre';
  nombre.textContent = p.nombre;

  const desc = document.createElement('p');
  desc.className = 'tarjeta__desc';
  desc.textContent = p.desc;

  const boton = document.createElement('a');
  boton.className = 'boton';
  boton.target = '_blank';
  boton.rel = 'noopener';
  boton.textContent = 'Consultar precio';
  boton.href = enlaceWhatsApp('Hola, me interesa consultar el precio de: ' + p.nombre);

  cuerpo.append(marca, nombre, desc, boton);
  t.append(foto, cuerpo);
  return t;
}

const rejilla = document.getElementById('rejilla');
productos.forEach(p => rejilla.appendChild(crearTarjeta(p)));

document.getElementById('botonWhatsapp').href =
  enlaceWhatsApp('Hola, quiero información de sus productos para caballos.');
