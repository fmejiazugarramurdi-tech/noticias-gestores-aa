# Monitor de Noticias — Gestores de Activos Alternativos
## Archivo de contexto para Claude Code

> Este archivo es la memoria del proyecto. Léelo completo al inicio de cada conversación.

---

## 1. QUÉ ES ESTE PROYECTO

Página web que monitoriza noticias semanales de 4 gestores de activos alternativos internacionales, clasificadas por severidad (rojo/amarillo/verde). Accesible desde cualquier dispositivo via GitHub Pages.

**Gestores monitorizados:**
- Lexington Partners (secundarios PE, filial Franklin Templeton)
- Ares Management (crédito privado, NYSE: ARES)
- Oaktree Capital Management (deuda distressed, filial Brookfield)
- Brookfield Asset Management (infraestructura/real estate, NYSE: BAM)

---

## 2. ESTRUCTURA DE ARCHIVOS

```
C:\Users\fmeji\OneDrive\Escritorio\IA - Claude\AA\
│
├── index.html                  ← Página web (UI, estilos, lógica). NO tocar.
├── news-data.js                ← Array NEWS con todas las noticias. Se actualiza cada semana.
├── pending-news.json           ← Noticias crudas traídas por GitHub Action. Empieza en [].
├── CLAUDE.md                   ← Este archivo (memoria del proyecto)
│
├── scripts/
│   └── fetch_news.py           ← Script Python que busca noticias en Google News RSS
│
├── .github/
│   └── workflows/
│       └── fetch-news.yml      ← GitHub Action de disparo MANUAL (botón en GitHub.com)
│
└── .claude/
    └── commands/
        ├── update-news.md      ← Comando antiguo (reemplazado por classify-news)
        └── classify-news.md    ← Comando eficiente: lee pending-news.json y clasifica
```

---

## 3. REPOSITORIO GITHUB

- **Usuario:** fmejiazugarramurdi-tech
- **Repo:** noticias-gestores-aa
- **URL repo:** https://github.com/fmejiazugarramurdi-tech/noticias-gestores-aa
- **URL página pública:** https://fmejiazugarramurdi-tech.github.io/noticias-gestores-aa
- **Remote git local:** https://github.com/fmejiazugarramurdi-tech/noticias-gestores-aa.git

---

## 4. TAREA PENDIENTE — ACTIVAR GITHUB PAGES ⚠️

GitHub Pages NO está activado todavía. El usuario llegó al paso de activarlo pero estaba en el Settings del perfil personal en vez del Settings del repositorio.

**Para activarlo (próxima conversación):**
1. Ir a: https://github.com/fmejiazugarramurdi-tech/noticias-gestores-aa
2. Clic en pestaña **Settings** (la del repositorio, barra horizontal de pestañas)
3. Menú izquierdo → **Pages**
4. Source → **Deploy from a branch**
5. Branch → **master** / **/ (root)**
6. Clic **Save**
7. En 2 minutos la página estará en: https://fmejiazugarramurdi-tech.github.io/noticias-gestores-aa

---

## 5. FLUJO DE TRABAJO SEMANAL (0 tokens extra)

```
PASO 1 — GitHub.com (0 tokens)
  Repositorio → pestaña Actions → "📰 Buscar Noticias" → Run workflow
  → Genera pending-news.json con titulares crudos de los 4 gestores

PASO 2 — Claude Code (~1.500 tokens)
  Escribir: /classify-news
  → Claude lee pending-news.json (archivo pequeño)
  → Clasifica rojo/amarillo/verde
  → Actualiza news-data.js
  → Vacía pending-news.json
  → git commit + git push automático

PASO 3 — GitHub Pages (automático, 0 tokens)
  → La página pública se actualiza sola
```

---

## 6. CÓMO AÑADIR UNA NOTICIA MANUALMENTE

Abrir `news-data.js` y añadir al PRINCIPIO del array NEWS (justo después de `// DATA START`):

```js
{
  id: [SIGUIENTE_ID_DISPONIBLE],
  manager: "brookfield",          // brookfield | ares | oaktree | lexington
  managerLabel: "Brookfield Asset Management",
  severity: "red",                // red | yellow | green
  title: "Título en español",
  date: "2 de junio de 2026",
  isoDate: "2026-06-02",
  body: `Descripción con <strong>negritas</strong> para datos clave.`,
  sources: [{ label: "Bloomberg", url: "https://..." }]
},
```

Luego: `git add news-data.js && git commit -m "update: noticia manual" && git push`

---

## 7. CLASIFICACIÓN DE SEVERIDAD

| Color | Cuándo | Ejemplos |
|-------|--------|---------|
| 🔴 `red` | Grave, acción inmediata | Demandas, fraudes, investigaciones SEC/FINRA, pérdidas significativas |
| 🟡 `yellow` | A tener en cuenta | Alertas de mercado, resultados mixtos, amortizaciones, cambios estratégicos relevantes |
| 🟢 `green` | Normal | Captaciones, nombramientos, resultados positivos, distribuciones ordinarias |

---

## 8. FUNCIONALIDADES DE LA PÁGINA

- Filtro **Prioridad**: Negativas (rojo+amarillo, por defecto) / Todas / Grave / Atención / Normal
- Filtro **Período**: Esta semana / Semana anterior / Último mes / Todo
- Filtro **Gestor**: Todos / Brookfield / Ares / Oaktree / Lexington
- **Búsqueda** en tiempo real
- **Modo oscuro/claro** (guarda preferencia)
- **Badge "Esta semana"** en noticias recientes
- Noticias ordenadas de más reciente a más antigua

---

## 9. NOTICIAS ACTUALES (última actualización: 30 mayo 2026)

Total: 26 noticias | 3 rojas | 6 amarillas | 17 verdes

**Rojas (graves):**
- ID 1: Brookfield — Demanda fraude Raffaelli (desvío capital + SEC)
- ID 7: Ares — ASIF investigación FINRA + subida comisiones
- ID 8: Ares — Recorte valoraciones software Clearlake por riesgo IA

**Amarillas (atención):**
- ID 2: Brookfield — Adquisición Peakstone Realty (real estate comercial)
- ID 3: Brookfield — Emisión $1.000M deuda corporativa
- ID 9: Ares — $1.000M en software ARCC con riesgo IA medio
- ID 10: Ares — Q1 2026 BPA bajo estimaciones
- ID 15: Oaktree — Co-CEO advierte subestimación riesgos mercado
- ID 16: Oaktree — BDC amortiza software, 26% exposición IA
- ID 17: Oaktree — Alerta muro vencimientos HY $900.000M

**Último ID usado:** 26

---

## 10. TOKENS Y EFICIENCIA

- Actualización semanal: ~1.500 tokens (vs ~13.000 antes de la refactorización)
- El ahorro viene de: GitHub Action busca noticias (0 tokens) y Claude solo clasifica
- news-data.js separado del HTML → Claude no lee el archivo grande nunca
- Para hacer push a GitHub necesita token PAT con scopes: `repo` + `workflow`

---

## 11. CÓMO RETOMAR EN UNA NUEVA CONVERSACIÓN

Escribir exactamente esto al inicio:

> "Continúa el proyecto de monitor de noticias de gestores alternativos.
> Lee el archivo CLAUDE.md en C:\Users\fmeji\OneDrive\Escritorio\IA - Claude\AA\
> y dime el estado actual."
