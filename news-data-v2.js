// ═══════════════════════════════════════════════════════
//  news-data-v2.js  —  Monitor Ampliado de Managers
//  Período: 28–31 mayo 2026
//  Solo noticias con fecha real publicada en ese período
// ═══════════════════════════════════════════════════════

const CURRENT_DATE = new Date("2026-05-31");

// Lista completa de managers monitorizados
const ALL_MANAGERS = [
  "brookfield","larrainvial","partnersgroup","grupopatio","redmegacentro",
  "onestream","credicorp","hellmanfriedman","thomabravo","toesca","moneda",
  "harbourvest","flintglobal","patiocomer","linkcapital","volcom","warburgpincus",
  "activaalt","activadebt","banchile","blackstonesp","btgpactual","cmbprime",
  "cumplo","gsicapital","hgcapital","hggenesis","independencia","linzor",
  "megacentroagf","newmountain","oaktree","picton","southerncross","vistaequity"
];

const NEWS = [

  // ── PARTNERS GROUP — ROJO ──────────────────────────
  {
    id: 1,
    manager: "partnersgroup", managerLabel: "Partners Group",
    severity: "red",
    keywords: ["lawsuit", "sues"],
    title: "Partners Group inicia acciones legales contra Grizzly Research por informe que compara a la firma con Wirecard",
    date: "29 de mayo de 2026", isoDate: "2026-05-29",
    body: `El chairman Steffen Meister confirmó el inicio de <strong>procedimientos legales contra Grizzly Research</strong>, el short seller cuyo informe del 29 de abril acusó a Partners Group de inflar valoraciones en fondos evergreen y comparó la firma con el escándalo Wirecard. Partners Group rechazó las alegaciones como "frívolas, defamatorias y altamente engañosas" y reportó <strong>posible manipulación de mercado</strong> a reguladores en Suiza y EE.UU. La acción cotiza en mínimos de 52 semanas (CHF 671), con un desplome del 28,68% en lo que va de año.`,
    sources: [
      { label: "Ad-hoc-news", url: "https://www.ad-hoc-news.de/boerse/news/ueberblick/partners-group-escalates-legal-fight-against-grizzly-research-while/69421741" },
      { label: "Opalesque", url: "https://www.opalesque.com/714500/Grizzly_Research_alleges_widespread_valuation_fraud_at450.html" }
    ]
  },

  // ── PARTNERS GROUP — AMARILLO ──────────────────────
  {
    id: 2,
    manager: "partnersgroup", managerLabel: "Partners Group",
    severity: "yellow",
    keywords: ["fiduciary"],
    title: "Partners Group congela retiros de fondo evergreen de $8.600M — solicitudes de reembolso casi duplican el límite permitido",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `Partners Group limitó los retiros de su fondo evergreen <strong>Global Value SICAV ($8.600M)</strong> al 5% del NAV trimestral, tras recibir solicitudes de reembolso del <strong>9,8%</strong> — casi el doble del límite. Un vehículo Delaware adicional también reportó solicitudes del 6% para Q2 2026. Tres fondos evergreen adicionales con <strong>$9.700M combinados</strong> enfrentan presiones similares. La acción cayó un <strong>17% en un día</strong> en la bolsa de Zúrich, arrastrando a pares del sector.`,
    sources: [
      { label: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-06-03/partners-group-gates-evergreen-fund-as-redemption-requests-rise" },
      { label: "Private Equity Wire", url: "https://www.privateequitywire.co.uk/partners-group-caps-withdrawals-at-evergreen-fund/" }
    ]
  },

  // ── BROOKFIELD — VERDE ─────────────────────────────
  {
    id: 3,
    manager: "brookfield", managerLabel: "Brookfield Asset Management",
    severity: "green",
    keywords: [],
    title: "Dividendo trimestral $0,5025/acción — fecha récord 29 mayo 2026",
    date: "29 de mayo de 2026", isoDate: "2026-05-29",
    body: `El Consejo de Brookfield Asset Management (NYSE: BAM) declaró un <strong>dividendo trimestral de $0,5025/acción</strong>, pagadero el 30 de junio de 2026 a accionistas registrados al cierre del 29 de mayo. Yield anualizado del <strong>4,12%</strong>. La demanda Raffaelli (fraude/whistleblower, mayo 2025) permanece activa pero sin desarrollos nuevos en este período.`,
    sources: [
      { label: "SEC 8-K", url: "https://www.sec.gov/Archives/edgar/data/0001937926/000117184326003183/exh_991.htm" }
    ]
  }

];
