# Cómo Ejecutar el Proyecto Don Queso

## Opción 1: Usar el archivo batch (Recomendado para Windows)

Doble clic en el archivo `iniciar.bat` para iniciar automáticamente el servidor de desarrollo.

## Opción 2: Manualmente

### 1. Instalar dependencias

Abre una terminal en la carpeta del proyecto y ejecuta:

```bash
npm install
```

Esto instalará todas las dependencias necesarias del proyecto.

### 2. Iniciar el servidor de desarrollo

Una vez instaladas las dependencias, ejecuta:

```bash
npm run dev
```

El servidor se iniciará en `http://localhost:5173`

### 3. Abrir en el navegador

Abre tu navegador y navega a `http://localhost:5173` para ver el sitio web.

## Comandos Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye el proyecto para producción
- `npm run preview` - Previsualiza la versión de producción
- `npm run lint` - Verifica el código con ESLint

## Solución de Problemas

### Si npm install falla

Intenta limpiar el caché de npm:

```bash
npm cache clean --force
npm install
```

### Si el puerto 5173 está en uso

Vite buscará automáticamente el siguiente puerto disponible, o puedes especificar uno diferente:

```bash
npm run dev -- --port 3000
```

### Si hay errores de TypeScript

Asegúrate de tener instalada la versión correcta de Node.js (v18 o superior):

```bash
node --version
```

## Construir para Producción

Para crear una versión optimizada para producción:

```bash
npm run build
```

Los archivos construidos estarán en la carpeta `dist`.

Para previsualizar la versión de producción:

```bash
npm run preview
```

## Soporte

Si tienes problemas técnicos, contacta al desarrollador o revisa la documentación de:
- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [TailwindCSS](https://tailwindcss.com/)
