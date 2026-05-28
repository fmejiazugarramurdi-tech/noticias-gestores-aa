# Monitor de Noticias — Gestores de Activos Alternativos

## ¿Qué es este proyecto?

Página web local para monitorizar noticias semanales de cuatro gestores de activos alternativos internacionales:
- Lexington Partners
- Ares Management
- Oaktree Capital Management
- Brookfield Asset Management

## Archivos

| Archivo | Descripción |
|---------|-------------|
| `index.html` | Página principal. Contiene CSS, HTML y el array NEWS con todas las noticias |
| `.claude/commands/update-news.md` | Comando `/update-news` para actualizar noticias semanalmente |

## Cómo usar el agente semanal

Cada semana (idealmente el lunes), abre Claude Code en esta carpeta y ejecuta:

```
/update-news
```

Claude buscará automáticamente las noticias de la semana anterior, las clasificará y las añadirá al archivo.

## Estructura de una noticia en index.html

Las noticias están en el array `NEWS` dentro del `<script>` de `index.html`, entre los marcadores:
```
/* DATA START */
...noticias...
/* DATA END */
```

Formato de cada noticia:
```js
{
  id: 24,
  manager: "ares",           // brookfield | ares | oaktree | lexington
  managerLabel: "Ares Management",
  severity: "yellow",        // red | yellow | green
  title: "Título breve",
  date: "28 de mayo de 2026",
  isoDate: "2026-05-28",    // para el filtro por semana
  body: `Descripción. <strong>Datos clave en negrita.</strong>`,
  sources: [{ label: "Bloomberg", url: "https://..." }]
}
```

## Clasificación de severidad

- 🔴 **red** → Demandas, fraudes, pérdidas, investigaciones regulatorias
- 🟡 **yellow** → Alertas, resultados mixtos, riesgos latentes, cambios relevantes
- 🟢 **green** → Captaciones, resultados positivos, nombramientos, distribuciones

## Funcionalidades de la página

- Filtro por **prioridad**: Negativas (rojo+amarillo) / Todas / Grave / Atención / Normal
- Filtro por **período**: Esta semana / Semana anterior / Último mes / Todo
- Filtro por **gestor**: Todos / Brookfield / Ares / Oaktree / Lexington
- **Búsqueda** en tiempo real
- **Modo oscuro** (se guarda la preferencia)
- Las noticias se ordenan de **más reciente a más antigua**
