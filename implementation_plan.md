# Plan de Implementación: Corrección de Responsive, Navbar y Estabilización de Layout

El objetivo de este plan es corregir de manera integral la estabilidad del responsive, evitar la deformación horizontal del contenido en pantallas grandes, solucionar la desaparición del navbar central en tamaños intermedios y garantizar una jerarquía visual premium y uniforme en todos los dispositivos (375px a 1920px).

---

## 📌 Diagnóstico y Soluciones de Composición

### 1. Control del Ancho Máximo Estricto (`max-w-[1280px]`)
*   **Problema:** En pantallas grandes (1440px y 1920px), el contenido del dashboard se estira horizontalmente en exceso, deformando las proporciones visuales del Hero y de las tarjetas.
*   **Solución:** Limitaremos estrictamente el ancho máximo de la interfaz a **`max-w-[1280px]`** con márgenes centrados (`mx-auto`) en los siguientes contenedores principales:
    *   `src/app/[locale]/page.tsx`
    *   `src/components/layout/Navbar.tsx`
    *   `src/components/layout/Footer.tsx`

### 2. Estabilización del Bloque Superior (Layout Apilado Verticalmente)
*   **Problema:** Al forzar que el Hero y el StatusDashboard compartan fila en pantallas grandes (`lg:grid-cols-12` asimétrico), se produce una deformación y vacíos difíciles de predecir según el tamaño de la ventana.
*   **Solución:** 
    *   **Hero arriba:** El [HeroSection](file:///C:/Users/Kevin/Desktop/Dev/Portfolio/PortfolioWeb/src/components/sections/HeroSection.tsx) ocupará todo el ancho disponible, alineando de forma natural el nombre y la descripción en el lado izquierdo y el Avatar KOG técnico en el derecho en pantallas `sm` y superiores, apilándose en móviles de forma compacta.
    *   **StatusDashboard abajo:** El [StatusDashboard](file:///C:/Users/Kevin/Desktop/Dev/Portfolio/PortfolioWeb/src/components/sections/StatusDashboard.tsx) se posicionará directamente debajo del Hero. Su composición será:
        *   **Móvil (< 640px):** Rejilla de 1 columna (`grid-cols-1`).
        *   **Tablet, Escritorio y Pantallas Grandes (>= 640px):** Rejilla de 2 columnas (`sm:grid-cols-2`) distribuidas simétricamente en 2 columnas y 2 filas. Esto previene que las tarjetas queden muy separadas o muy pequeñas.
    *   Este orden secuencial reduce drásticamente el espacio vertical negro vacío y estabiliza el responsive sin breakpoints agresivos.

### 3. Recuperación y Optimización del Navbar
*   **Problema:** Los enlaces de navegación desaparecen en tamaños intermedios (< 1024px) al usar `hidden lg:flex`, lo que genera una experiencia incompleta en tablets o portátiles pequeños.
*   **Solución:**
    *   **Pantallas medianas y grandes (>= 768px):** Mostraremos los enlaces centrales cambiando la clase a `hidden md:flex items-center gap-4 sm:gap-5` en [Navbar.tsx](file:///C:/Users/Kevin/Desktop/Dev/Portfolio/PortfolioWeb/src/components/layout/Navbar.tsx).
    *   **Dispositivos móviles (< 768px):** Agregaremos un botón de menú interactivo con estética de terminal: `[ SYS_MENU: OPEN/CLOSE ]`. Al pulsarlo, desplegará una sección de enlaces vertical en monoespacio de forma fluida.
    *   Esto garantiza navegación 100% operativa en cualquier resolución sin desbordar el header.

### 4. Ajuste General de Espaciados y Paddings
*   *   Eliminar clases de altura como `min-h-screen` o `min-h-[100vh]` en el HeroSection.
    *   Consolidar paddings y gaps de sección para una alta densidad visual y un acabado muy pulido e integrado con la estética "Obsidian Logic".

---

## Proposed Changes

### [Componente: Layout & Navegación]

#### [MODIFY] [page.tsx](file:///C:/Users/Kevin/Desktop/Dev/Portfolio/PortfolioWeb/src/app/[locale]/page.tsx)
*   Cambiar el contenedor del dashboard a `max-w-[1280px]` con `mx-auto px-4 sm:px-6 py-4 space-y-6`.
*   Modificar la estructura de inicio para apilar verticalmente `<HeroSection />` y `<StatusDashboard />` secuencialmente en lugar de usar un grid lateral de 12 columnas.
*   Esto asegura una distribución perfectamente predecible en todos los tamaños de pantalla.

#### [MODIFY] [Navbar.tsx](file:///C:/Users/Kevin/Desktop/Dev/Portfolio/PortfolioWeb/src/components/layout/Navbar.tsx)
*   Establecer ancho máximo en `max-w-[1280px]`.
*   Cambiar la clase de visibilidad de enlaces centrales de `hidden lg:flex` a `hidden md:flex`.
*   Importar `useState` de React para manejar el estado del menú en móviles (`isOpen`).
*   Añadir un botón interactivo de terminal a la derecha `[ MENU ]` para pantallas móviles (< 768px) que despliegue el listado de links en vertical.

#### [MODIFY] [Footer.tsx](file:///C:/Users/Kevin/Desktop/Dev/Portfolio/PortfolioWeb/src/components/layout/Footer.tsx)
*   Establecer ancho máximo en `max-w-[1280px]`.

---

### [Componente: Secciones de Contenido]

#### [MODIFY] [HeroSection.tsx](file:///C:/Users/Kevin/Desktop/Dev/Portfolio/PortfolioWeb/src/components/sections/HeroSection.tsx)
*   Ajustar el contenedor principal para que use el ancho completo, eliminando cualquier limitación de altura vertical forzada.
*   Garantizar que el Avatar KOG se alinee correctamente con el nombre y descripción en pantallas medianas/grandes, y se apile limpiamente en pantallas pequeñas.

#### [MODIFY] [StatusDashboard.tsx](file:///C:/Users/Kevin/Desktop/Dev/Portfolio/PortfolioWeb/src/components/sections/StatusDashboard.tsx)
*   Configurar el contenedor del grid para que se muestre en **1 columna en móviles (`grid-cols-1`)** y en **2 columnas estables en tablet y escritorio (`sm:grid-cols-2`)** de manera permanente, sin importar el tamaño de pantalla ultra-ancho.

---

## 📈 Plan de Verificación Manual (Breakpoints)

Comprobaremos los siguientes tamaños de pantalla mediante la herramienta del navegador para certificar la visualización perfecta:
1.  **375px (Móvil)**: Navbar simplificado con botón `[ MENU ]` y logs desplegables; Hero apilado verticalmente; tarjetas de estado en 1 columna limpia.
2.  **768px (Tablet)**: Navbar central visible (links de navegación); Hero e iniciales en fila; tarjetas de estado en grid de 2x2.
3.  **1024px (Portátil)**: Contenido centrado a 1024px; visualización espaciosa y sin deformaciones.
4.  **1366px / 1440px / 1920px (Monitores de Escritorio)**: Interfaz fija en un ancho máximo de `1280px`, conservando un balance perfecto, sin estiramientos laterales y con el fondo Obsidian fluyendo a los extremos.

---

## 💬 Preguntas Abiertas

> [!NOTE]
> ¿Estás de acuerdo con esta estructura de apilamiento secuencial vertical de **Hero arriba y StatusDashboard abajo en grid 2x2**? Este patrón es el estándar dorado en diseño responsivo para dashboards técnicos, garantizando una estabilidad del 100% en pantallas anchas.
