Lee el archivo `pending-news.json`. Si está vacío (`[]`), avisa al usuario y para.

Para cada noticia del array, clasifícala con esta lógica:

| severity | Cuándo usarlo |
|----------|---------------|
| `red`    | Demandas, fraudes, pérdidas significativas, investigaciones regulatorias, escándalos, impagos |
| `yellow` | Resultados mixtos, alertas de mercado, cambios estratégicos relevantes, amortizaciones, riesgos latentes |
| `green`  | Captaciones, nombramientos, resultados positivos, distribuciones ordinarias, operaciones rutinarias |

Usa grep para encontrar el ID más alto actual en `news-data.js` y asigna IDs consecutivos a partir de ahí.

Para cada noticia crea un objeto con este formato exacto y añádelo AL PRINCIPIO del array NEWS en `news-data.js` (justo después de la línea `// DATA START`):

```js
{
  id: [SIGUIENTE_ID],
  manager: "[key del pending-news.json]",
  managerLabel: "[managerLabel del pending-news.json]",
  severity: "[red|yellow|green]",
  title: "[título conciso en español, máx. 15 palabras]",
  date: "[fecha legible en español, ej: '2 de junio de 2026']",
  isoDate: "[published del pending-news.json en formato YYYY-MM-DD]",
  body: `[3-5 líneas en español. Usa <strong>negritas</strong> para cifras, nombres y términos clave. Basado en title + summary del pending-news.json]`,
  sources: [{ label: "[nombre del medio extraído del title]", url: "[link del pending-news.json]" }]
},
```

Después de clasificar todas las noticias:
1. Actualiza `CURRENT_DATE` en `news-data.js` a la fecha de hoy
2. Vacía `pending-news.json` dejándolo como `[]`
3. Ejecuta:
   ```
   git add news-data.js pending-news.json
   git commit -m "update: noticias [fecha de hoy]"
   git push
   ```
4. Muestra al usuario un resumen: cuántas rojas, amarillas y verdes se añadieron.
