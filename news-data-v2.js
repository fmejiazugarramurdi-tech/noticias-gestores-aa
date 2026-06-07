// ═══════════════════════════════════════════════════════
//  news-data-v2.js  —  Monitor Ampliado de Managers
//  Período: 25–31 mayo 2026
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

  /* ══ PARTNERS GROUP ══ */
  {
    id: 1,
    manager: "partnersgroup", managerLabel: "Partners Group",
    severity: "red",
    keywords: ["lawsuit", "sues"],
    title: "Partners Group confirma acciones legales contra Grizzly Research — acción en mínimos anuales",
    date: "26 de mayo de 2026", isoDate: "2026-05-26",
    body: `El chairman Steffen Meister confirmó a NZZ am Sonntag el inicio de <strong>procedimientos legales contra Grizzly Research</strong>, el short seller que publicó el 29 de abril un informe de 37 páginas acusando a Partners Group de inflar valoraciones en fondos evergreen y comparando la firma con el escándalo Wirecard. La acción cotizaba a CHF 938, un <strong>23% por debajo de su máximo de 52 semanas</strong> y un 14% en lo que va del año. Partners Group reportó posible manipulación de mercado a reguladores en Suiza y EE.UU.`,
    sources: [
      { label: "Swissquote", url: "https://www.swissquote.com/en-row/newsroom/morning-news/2026-05-26" },
      { label: "Ad-hoc-news", url: "https://www.ad-hoc-news.de/boerse/news/ueberblick/partners-group-escalates-legal-fight-against-grizzly-research-while/69421741" }
    ]
  },
  {
    id: 2,
    manager: "partnersgroup", managerLabel: "Partners Group",
    severity: "yellow",
    keywords: ["fiduciary"],
    title: "Partners Group paga dividendo €46/acción el 27 mayo — acción cae 5,6% al cotizar ex-dividendo",
    date: "27 de mayo de 2026", isoDate: "2026-05-27",
    body: `Partners Group distribuyó su dividendo anual de <strong>€46 por acción</strong> aprobado en la Junta General del 20 de mayo, lo que provocó un ajuste técnico que hundió la acción un <strong>5,6% a €936,40</strong> en Zúrich. La firma mantuvo su guidance de captación para 2026 en $26–$32B pese al litigio activo con Grizzly Research. Próximo catalizador: actualización de AUM al 15 de julio.`,
    sources: [
      { label: "NewsCase", url: "https://www.newscase.com/partners-group-takes-legal-fight-to-short-seller-as-dividend-payout-tests-investor-resolve/" },
      { label: "Ad-hoc-news", url: "https://www.ad-hoc-news.de/boerse/news/ueberblick/partners-group-sues-short-seller-grizzly-research-as-residential-real/69471590" }
    ]
  },
  {
    id: 3,
    manager: "partnersgroup", managerLabel: "Partners Group",
    severity: "yellow",
    keywords: ["fiduciary"],
    title: "Partners Group congela retiros de fondo evergreen de $8.600M — solicitudes de reembolso casi duplican el límite",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `Partners Group limitó los retiros de su fondo evergreen <strong>Global Value SICAV ($8.600M)</strong> al 5% del NAV trimestral, tras recibir solicitudes de reembolso del <strong>9,8%</strong> — casi el doble del límite. Un vehículo Delaware adicional reportó solicitudes del 6% para Q2 2026. Tres fondos evergreen adicionales con <strong>$9.700M combinados</strong> enfrentan presiones similares. La acción cayó un <strong>17% en un día</strong> en la bolsa de Zúrich.`,
    sources: [
      { label: "Private Equity Wire", url: "https://www.privateequitywire.co.uk/partners-group-caps-withdrawals-at-evergreen-fund/" },
      { label: "SWI swissinfo", url: "https://www.swissinfo.ch/eng/partners-caps-evergreen-fund-redemptions-as-requests-rise/91517861" }
    ]
  },

  /* ══ BROOKFIELD ══ */
  {
    id: 4,
    manager: "brookfield", managerLabel: "Brookfield Asset Management",
    severity: "green",
    keywords: [],
    title: "Dividendo trimestral $0,5025/acción — fecha récord 29 mayo 2026",
    date: "29 de mayo de 2026", isoDate: "2026-05-29",
    body: `El Consejo de Brookfield Asset Management (NYSE: BAM) declaró un <strong>dividendo trimestral de $0,5025/acción</strong>, pagadero el 30 de junio de 2026 a accionistas registrados al cierre del 29 de mayo. Yield anualizado del <strong>4,12%</strong>.`,
    sources: [
      { label: "SEC 8-K", url: "https://www.sec.gov/Archives/edgar/data/0001937926/000117184326003183/exh_991.htm" }
    ]
  }

];
