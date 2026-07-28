# Menú Digital — Plantilla Astro (Neo-Bistro Editorial)

Plantilla mobile-first de menú digital interactivo, con datos servidos en vivo
desde Google Sheets. Cero JS de framework en cliente — solo Astro + un
script vanilla mínimo para la nav sticky.

## Estructura

```
src/
  components/
    Header.astro       → Hero: nombre, eslogan, horario, ubicación
    CategoryNav.astro   → Nav sticky por categorías (scroll-snap + scrollspy)
    MenuItem.astro       → Fila de producto: nombre, descripción, precio, badge, agotado
    Footer.astro         → CTA WhatsApp/Instagram + aviso legal
  layouts/
    Layout.astro          → HTML base, fuentes, meta tags
  pages/
    index.astro            → Fetch a Sheets + agrupación + orquestación
  styles/
    global.css               → Variables de marca (colores, tipografía)
  types.ts                     → Tipos TS de los datos del menú
```

## 1. Configura tu Google Sheet

Crea una hoja llamada **Hoja1** con estas columnas exactas (fila 1 = encabezados):

| id | categoria | nombre | descripcion | precio | disponible | etiqueta |
|----|-----------|--------|-------------|--------|------------|----------|
| 1  | Bebidas Calientes | Espresso | Doble shot, tueste medio | $45 | TRUE | Popular |
| 2  | Panadería | Croissant | Hojaldre de mantequilla | $58 | FALSE | |

- `disponible`: escribe `TRUE` o `FALSE` (texto). Si es `FALSE`, el producto se muestra atenuado con "Agotado por hoy".
- `etiqueta`: opcional. Reconoce especialmente `Popular`, `Vegano`, `Sin Gluten` (colores propios); cualquier otro texto usa un badge genérico.
- El orden de las categorías en el menú sigue el orden de aparición de las filas en el Sheet.

**Publica la hoja:** Archivo → Compartir → "Cualquier persona con el enlace puede ver". Copia el ID de la hoja desde la URL:

```
https://docs.google.com/spreadsheets/d/ESTE_ES_TU_ID/edit
```

## 2. Instala y corre en local

```bash
npm install
cp .env.example .env
# Edita .env con tu PUBLIC_GOOGLE_SHEET_ID y datos del local
npm run dev
```

Abre `http://localhost:4321`.

> Si no configuras un Sheet real, la plantilla carga datos de ejemplo automáticamente para que siempre puedas ver el diseño funcionando.

## 3. Personaliza la marca

Todo el rebrand vive en dos lugares:

1. **`src/styles/global.css`** — variables CSS (`--color-accent`, `--color-paper`, tipografías). Para cambiar de Azul Real a Borgoña Profundo, cambia `--color-accent: #1D4ED8;` por `#800020;`.
2. **`.env`** — nombre del local, eslogan, horario, ubicación, WhatsApp e Instagram.

## 4. Build para producción

```bash
npm run build
npm run preview
```

Como el sitio es estático (`output: 'static'`) y sin JS de framework en cliente, el bundle es mínimo y la carga es casi instantánea. Para que el menú se actualice tras editar el Sheet, vuelve a desplegar (rebuild) o mueve el fetch a un endpoint server-rendered si necesitas datos siempre en vivo sin rebuild.

## Notas técnicas

- El único JS en cliente es el de `CategoryNav.astro`: resalta la pestaña activa vía `IntersectionObserver` y hace scroll suave — sin dependencias externas.
- Los precios se alinean a la derecha con una guía punteada (`.dotted-guide` en `global.css`).
- Totalmente responsive; probado mobile-first desde 320px de ancho.
