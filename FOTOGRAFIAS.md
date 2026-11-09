# Fotografías reales del sitio

La carpeta `public/images/` contiene fotografías reales entregadas para el sitio, incluida una foto de Ezequiel. La galería ya está conectada a los trabajos correspondientes desde `src/data/site.ts`.

Para agregar futuras fotos, guardarlas en `public/images/` y sumar el trabajo al arreglo `projects`. La foto personal se configura en `siteMedia.about`; la imagen de portada ilustrada se conserva para mantener el diseño actual.

```ts
{
  id: "obra-01",
  title: "Nombre del trabajo",
  category: "Pisos y revestimientos",
  image: "/images/trabajo-01.webp",
  alt: "Descripción precisa de la fotografía real",
  layout: "horizontal", // "vertical", "horizontal" o "cuadrado"
  // Opcional para una comparación antes/después:
  beforeImage: "/images/trabajo-01-antes.webp",
  beforeAlt: "Descripción del estado anterior",
}
```

Las fotografías se mostrarán en la galería con filtros, visor de pantalla completa y navegación por teclado. Si se incluye `beforeImage`, el visor permitirá alternar entre antes y después. Las fotos de portada y presentación solo aparecen cuando se configuran rutas válidas.

La galería tiene filtros por categoría, visor de pantalla completa y navegación por teclado. El trabajo de revoque con ladrillos de vidrio incluye comparación antes/después. Al definir el dominio, configurar `og:image` como una URL absoluta que use el dominio definitivo.
