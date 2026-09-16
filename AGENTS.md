# AGENTS.md

## Guía de estilo: funciones de fusión (merges)

### Principios generales
- Las funciones de fusión deben ser **cortas** (máximo 5-8 líneas).
- Deben ser **escalables**: soportar N argumentos, no asumir cantidades fijas.
- Deben ser **mantenibles**: evitar lógica anidada, usar nombres claros.
- Deben ser **reutilizables**: operar sobre genéricos, no sobre tipos específicos.
- Usar **JS moderno**: ES6+ (`const`, `let`, arrow functions, spread/rest, destructuración).

### Fusión de objetos
```js
const mergeObjects = (...objs) =>
  objs.reduce((acc, obj) => ({ ...acc, ...obj }), {});
```

### Fusión profunda (shallow opcional)
```js
const deepMerge = (...objs) =>
  objs.reduce((acc, obj) => {
    Object.keys(obj).forEach(key => {
      const [a, b] = [acc[key], obj[key]];
      acc[key] = a && b && typeof b === 'object' && !Array.isArray(b)
        ? deepMerge(a, b)
        : b;
    });
    return acc;
  }, {});
```

### Fusión de arrays
```js
const mergeArrays = (...arrays) => arrays.flat();
```

### Buenas prácticas
- Siempre devolver un **nuevo objeto/array** (inmutabilidad).
- Usar `reduce` con spread para fusiones declarativas.
- Evitar mutar argumentos de entrada.
- Usar parámetros rest (`...`) para escalabilidad.
- Prefiere funciones puras: mismos inputs → mismo output, sin side effects.
