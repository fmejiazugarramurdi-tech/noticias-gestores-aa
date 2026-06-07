// ═══════════════════════════════════════════════════════
//  news-data-v2.js  —  Monitor Ampliado de Managers
//  Período base: 28–31 mayo 2026
//  Total managers: ~36 | IDs: 1–18
// ═══════════════════════════════════════════════════════

const CURRENT_DATE = new Date("2026-05-31");

const NEWS = [

  /* ══ ROJO — ALERTAS GRAVES ══════════════════════════ */
  {
    id: 1,
    manager: "brookfield", managerLabel: "Brookfield Asset Management",
    severity: "red",
    keywords: ["fraud", "lawsuit", "fiduciary"],
    title: "Demanda Raffaelli: ex-socio acusa desvío de capital, inflación de balance y represalia al whistleblower",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `Josh Raffaelli, ex-managing partner de Brookfield, presentó una demanda de 100 páginas acusando a la firma de <strong>desviar capital</strong> de fondos bajo su gestión para cubrir pérdidas en real estate comercial, de <strong>inflar artificialmente</strong> el balance de Pinegrove Capital Partners en más de $100M, y de limitar el acceso de clientes a xAI de Elon Musk. Raffaelli denunció ante la <strong>SEC</strong> y fue despedido en diciembre 2024. Brookfield niega todas las acusaciones.`,
    sources: [
      { label: "Courthouse News", url: "https://www.courthousenews.com/silicon-valley-investor-with-ties-to-elon-musk-accuses-brookfield-of-fraud-retaliation/" },
      { label: "PitchBook", url: "https://pitchbook.com/news/articles/brookfield-venture-lawsuit-josh-raffaelli" }
    ]
  },
  {
    id: 2,
    manager: "larrainvial", managerLabel: "LarrainVial Activos AGF",
    severity: "red",
    keywords: ["fraud", "fined", "fiduciary", "lawsuit"],
    title: "CMF multa con UF 60.000 por caso Factop: activos sobrevalorados y engaño a inversores — recurso activo en Corte de Apelaciones",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `La CMF aplicó multas por un total de <strong>UF 160.000 (~US$4,73M)</strong> a LarrainVial Activos AGF y exejecutivos por inducir a inversores a comprar cuotas del Fondo Capital Estructurado I mediante <strong>recursos engañosos</strong>, valorando créditos deteriorados de Antonio Jalaff como si fueran participación indirecta en Grupo Patio. La Corte Suprema confirmó en octubre 2025 la suspensión del proceso penal para los ejecutivos. El reclamo de ilegalidad contra las multas regulatorias sigue activo en la Corte de Apelaciones de Santiago en 2026.`,
    sources: [
      { label: "La Tercera", url: "https://www.latercera.com/pulso/noticia/cmf-multa-a-administradora-larrain-vial-activos-stf-capital-corredora-de-bolsa-exgerentes-y-exdirectores/" },
      { label: "CMF Chile", url: "https://www.cmfchile.cl/portal/prensa/615/w3-article-97902.html" }
    ]
  },
  {
    id: 3,
    manager: "partnersgroup", managerLabel: "Partners Group",
    severity: "red",
    keywords: ["fraud", "lawsuit", "sues"],
    title: "Partners Group demanda a Grizzly Research por informe que acusó inflación de software y comparó la firma con el mayor fraude corporativo alemán",
    date: "30 de mayo de 2026", isoDate: "2026-05-30",
    body: `El chairman Steffen Meister confirmó el inicio de <strong>procedimientos legales contra Grizzly Research</strong>, el short seller cuyo informe de abril 2026 acusó a Partners Group de inflar su exposición a software y comparó sus prácticas de valoración con el escándalo Wirecard. Partners Group rechazó las alegaciones como "frívolas, defamatorias y altamente engañosas" y reportó <strong>posible manipulación de mercado</strong> a reguladores en Suiza y EE.UU. La acción cayó a mínimos anuales; el mercado espera con tensión la actualización de AUM del 15 de julio.`,
    sources: [
      { label: "Ad-hoc-news", url: "https://www.ad-hoc-news.de/boerse/news/ueberblick/defamation-suit-and-a-new-income-fund-partners-group-s-two-front/69449112" },
      { label: "StockInvest", url: "https://stockinvest.us/digest/partners-group-stock-hits-yearly-low-amid-short-seller-allegations-and-fundraising-fears" }
    ]
  },
  {
    id: 4,
    manager: "grupopatio", managerLabel: "Grupo Patio",
    severity: "red",
    keywords: ["fraud", "lawsuit", "fiduciary"],
    title: "Caso Factop: Antonio Jalaff querellado por estafa — directores de Grupo Patio declaran haber sido engañados",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `En el marco del caso Factop, Antonio Jalaff impulsó un esquema en que ejecutivos de LarrainVial y STF Capital <strong>comercializaron cuotas de un fondo usando el logo de Grupo Patio</strong> sin autorización, prometiendo una participación indirecta del 3,87% en el grupo que nunca se concretó. La CMF remitió antecedentes al Ministerio Público para investigar responsabilidades penales de Antonio y Álvaro Jalaff y Cristián Menichetti. Directores de Grupo Patio declararon ante la Fiscalía haber sido víctimas del engaño, describiendo los hechos como "una enorme mentira" y "una canallada".`,
    sources: [
      { label: "Diario Financiero", url: "https://www.df.cl/mercados/bolsa-monedas/una-enorme-mentira-y-una-canallada-directores-de-grupo-patio-declaran" },
      { label: "CMF Chile", url: "https://www.cmfchile.cl/portal/prensa/615/w3-article-97902.html" }
    ]
  },
  {
    id: 5,
    manager: "redmegacentro", managerLabel: "Red Megacentro",
    severity: "red",
    keywords: ["lawsuit", "fiduciary"],
    title: "Accionista minoritario fundador inicia tres arbitrajes acusando administración desleal y operaciones irregulares con partes relacionadas",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `Felipe Guzmán, accionista fundador con el 5,32% de Red Megacentro, inició <strong>tres arbitrajes</strong> ante tribunales civiles y el CAM Santiago contra directores y ejecutivos de la compañía, acusándolos de <strong>administración desleal, operaciones con partes relacionadas y violación al pacto de accionistas</strong>. La disputa comenzó en 2022 cuando Guzmán fue desplazado como director ejecutivo y comenzó a detectar irregularidades. La empresa negó las acusaciones y anunció acciones legales contra quienes intenten dañar su reputación.`,
    sources: [
      { label: "La Tercera", url: "https://www.latercera.com/pulso/noticia/socio-minoritario-de-red-megacentro-inicia-tres-arbitrajes-y-denuncia-multiples-irregularidades/B4ZF3L2JZVBX5COIRU4IBEX4CQ/" },
      { label: "Diario Financiero", url: "https://www.df.cl/df-mas/por-dentro/la-historia-detras-de-los-arbitrajes-ingresados-contra-la-cupula-de-red" }
    ]
  },
  {
    id: 6,
    manager: "onestream", managerLabel: "OneStream",
    severity: "red",
    keywords: ["lawsuit", "fiduciary"],
    title: "Inversores demandan a OneStream por take-private de $6.400M con Hg Capital alegando incumplimiento de deberes fiduciarios",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `Un inversor demandó a OneStream (NASDAQ: OS) en febrero 2026 para detener la operación de <strong>take-private por $6.400M</strong> liderada por Hg Capital, alegando que la empresa no entregó suficiente información sobre cómo el PE persuadió al fundador Thomas Shea a aceptar los $24/acción. Firmas de derechos de accionistas investigaron si el directorio incumplió sus <strong>deberes fiduciarios</strong> y si ejecutivos obtuvieron beneficios no compartidos proporcionalmente con los inversores públicos.`,
    sources: [
      { label: "Bloomberg Law", url: "https://news.bloomberglaw.com/litigation/onestream-investor-sues-to-stop-6-4-billion-take-private-deal" },
      { label: "GlobeNewswire", url: "https://www.globenewswire.com/news-release/2026/01/28/3227529/0/en/Johnson-Fistel-Investigates-OneStream-Inc-OS-Shareholders-Rights-Following-Board-Approval-of-24-00-Take-Private-Transaction.html" }
    ]
  },

  /* ══ AMARILLO — ATENCIÓN ════════════════════════════ */
  {
    id: 7,
    manager: "credicorp", managerLabel: "Credicorp Capital",
    severity: "yellow",
    keywords: ["fined", "lawsuit"],
    title: "SMV peruana mantiene multa de 510 UIT por contribuciones políticas no declaradas — cassation pendiente en Corte Suprema",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `La Superintendencia del Mercado de Valores (SMV) de Perú <strong>multó a Credicorp con 510 UIT (~S/1,9M)</strong> por violaciones graves vinculadas a contribuciones políticas no declaradas en 2011 y 2016. Credicorp pagó la multa en 2021 pero sigue impugnando la resolución. En febrero 2026 el SMV requirió a Credicorp explicar por qué no declaró el caso como hecho relevante. El recurso de cassation ante la Corte Suprema peruana sigue pendiente.`,
    sources: [
      { label: "StockTitan", url: "https://www.stocktitan.net/sec-filings/BAP/6-k-credicorp-ltd-current-report-foreign-issuer-10f4a142b558.html" }
    ]
  },
  {
    id: 8,
    manager: "credicorp", managerLabel: "Credicorp Capital",
    severity: "yellow",
    keywords: ["lawsuit"],
    title: "Credicorp Capital compra US$125,3M en cuotas de clientes afectados por quiebra de Sartor AGF — proceso de recuperación activo",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `Credicorp Capital se comprometió a adquirir el <strong>100% de las inversiones de sus clientes</strong> en dos fondos afectados por la revocación de autorización de Sartor AGF por la CMF, cubriendo hasta <strong>US$125,3M en valor de inversión</strong>. La CMF designó a Sartor AGF como liquidador. Credicorp espera recuperación parcial de los fondos y ejerce acciones legales contra los responsables.`,
    sources: [
      { label: "StockTitan", url: "https://www.stocktitan.net/news/BAP/credicorp-ltd-announces-that-one-of-its-subsidiaries-offers-to-y90ysmx8urd1.html" }
    ]
  },
  {
    id: 9,
    manager: "hellmanfriedman", managerLabel: "Hellman & Friedman",
    severity: "yellow",
    keywords: ["lawsuit", "fiduciary"],
    title: "Demanda en Delaware acusa a H&F de priorizar su salida en venta de Snap One a Resideo por $1.400M usando orientación manipulada",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `Un inversor demandó a Hellman & Friedman, JPMorgan y Moelis en la Corte de Chancery de Delaware, alegando que la venta de Snap One a Resideo Technologies por <strong>$1.400M</strong> priorizó el "empuje agresivo" de H&F por liquidar su inversión sobre su obligación de maximizar el precio para los accionistas públicos. La demanda acusa el uso de <strong>"orientación manipulada"</strong> para justificar un precio en el rango bajo de valoración, con H&F ejerciendo control total sobre el proceso de venta.`,
    sources: [
      { label: "Bloomberg Law", url: "https://news.bloomberglaw.com/esg/jpmorgan-hellman-friedman-moelis-sued-over-1-4-billion-deal" }
    ]
  },
  {
    id: 10,
    manager: "thomabravo", managerLabel: "Thoma Bravo",
    severity: "yellow",
    keywords: ["lawsuit"],
    title: "Pérdida de $5.000M en Medallia expone riesgo sistémico en cartera de software de Thoma Bravo",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `Thoma Bravo enfrenta escrutinio público tras la pérdida de <strong>~$5.000M</strong> en su inversión en Medallia, descrita como uno de los mayores fracasos en la historia del PE de software. El caso intensifica las dudas sobre valoraciones de cartera de software en el sector, en un contexto donde múltiples gestoras de crédito privado también reportan amortizaciones por riesgo IA. Sin demandas activas nuevas confirmadas al 31 mayo 2026.`,
    sources: [
      { label: "Puck News", url: "https://puck.news/five-billion-dollar-private-equity-wipeout-thoma-bravos-medallia-miss/" }
    ]
  },
  {
    id: 11,
    manager: "toesca", managerLabel: "Toesca AGF",
    severity: "yellow",
    keywords: ["fiduciary"],
    title: "CMF designa a Toesca AGF como liquidadora de Sartor AGF — fondos con caídas de hasta 85% según PwC y Deloitte",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `La CMF designó a <strong>Toesca AGF como liquidadora</strong> de los fondos de inversión rescatables de Sartor AGF, cuya intervención se ordenó por graves irregularidades detectadas a fines de 2024. PwC y Deloitte revelaron <strong>caídas de hasta 85%</strong> en los fondos bajo administración. Toesca realizará un proceso de venta de los instrumentos remanentes en un plazo de 36 meses desde asumir el cargo.`,
    sources: [
      { label: "Diario Financiero", url: "https://www.df.cl/mercados/fondos-de-inversion/sartor-informes-de-pwc-y-deloitte-revelaron-caidas-de-hasta-85-en-fondos" },
      { label: "CMF Chile", url: "https://www.cmfchile.cl/portal/prensa/615/w3-propertyvalue-43349.html" }
    ]
  },
  {
    id: 12,
    manager: "moneda", managerLabel: "Moneda Asset Management",
    severity: "yellow",
    keywords: ["lawsuit"],
    title: "Moneda evalúa acciones legales contra exresponsables de Nova Austral tras pérdida de US$30M en la salmonera en quiebra",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `Moneda Asset Management, con <strong>US$30M invertidos en Nova Austral</strong>, evaluaba acciones legales contra los exresponsables de la firma salmonera, cuyas deudas totales ascienden a <strong>US$559M</strong>. Nova Austral enfrenta cargos criminales y multas por reporte fraudulento de mortalidad de peces. Moneda es el cuarto mayor acreedor, detrás de Nordic Trustee ($415M), DNB Bank ($69M) y Skretting ($23M).`,
    sources: [
      { label: "SeafoodSource", url: "https://www.seafoodsource.com/news/premium/business-finance/investor-sues-former-managers-directors-of-beleaguered-nova-austral-for-fraud" }
    ]
  },

  /* ══ VERDE — SIN ALERTAS (REFERENCIA) ══════════════ */
  {
    id: 13,
    manager: "harbourvest", managerLabel: "HarbourVest Partners",
    severity: "green",
    keywords: [],
    title: "HarbourVest cierra HarbourVest Fund XIII con $2.400M — sin alertas regulatorias activas",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `HarbourVest Partners cerró su fondo HarbourVest Fund XIII con <strong>$2.400M</strong>, enfocado en compromisos primarios complementados con secundarios y co-inversiones directas. Sin noticias negativas ni alertas regulatorias detectadas en el período. La firma gestiona más de <strong>$161.000M en AUM</strong> a marzo 2026.`,
    sources: [
      { label: "Debevoise", url: "https://www.debevoise.com/news/2026/04/harbourvest" }
    ]
  },
  {
    id: 14,
    manager: "flintglobal", managerLabel: "Flint Global",
    severity: "green",
    keywords: [],
    title: "Cinven completa inversión mayoritaria en Flint Global valorando la firma en ~£190M",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `Cinven completó la adquisición de participación mayoritaria en Flint Global, firma asesora en política, regulación y competencia con sede en Londres, valorándola en <strong>~£190M (~$253M)</strong>. La firma opera oficinas en Londres, Bruselas, París, Berlín, Ámsterdam, Hong Kong y Singapur. Sin alertas regulatorias ni litigios detectados.`,
    sources: [
      { label: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2025-12-08/cinven-is-said-to-near-190-million-deal-for-uk-adviser-flint" }
    ]
  },
  {
    id: 15,
    manager: "patiocomer", managerLabel: "Patio Comercial",
    severity: "green",
    keywords: [],
    title: "Patio Comercial eleva 160% sus utilidades en Q1 2026 consolidando negocios en Chile, Perú y España",
    date: "22 de mayo de 2026", isoDate: "2026-05-22",
    body: `La filial comercial de Grupo Patio registró un alza de <strong>160%</strong> en sus utilidades respecto al mismo período del año anterior, alcanzando los $5.364 millones. Los ingresos superaron los $16.600 millones, cuatro veces superior al Q1 2025, impulsados por la consolidación de cinco outlets y expansión en Chile, Perú y España. Nota: Patio Comercial opera de forma independiente de las investigaciones que afectan a Antonio Jalaff y Grupo Patio holding.`,
    sources: [
      { label: "Diario Financiero", url: "https://www.df.cl/empresas/retail/filial-comercial-de-grupo-patio-eleva-en-160-sus-ganancias-al-consolidar" }
    ]
  },
  {
    id: 16,
    manager: "linkcapital", managerLabel: "Link Capital Partners AGF",
    severity: "green",
    keywords: [],
    title: "Link Capital Partners AGF: sin alertas regulatorias — entidad vigente y activa ante CMF",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `Link Capital Partners Administradora General de Fondos S.A. (RUT 76963034-1) se mantiene <strong>vigente y sin sanciones</strong> ante la CMF. La firma, establecida en 2018 y con domicilio en Alonso de Córdova 4355, Of. 603, Vitacura, ofrece fondos registrados públicos y feeder funds para acceso a oportunidades de inversión globales y locales. Sin noticias negativas detectadas en el período.`,
    sources: [
      { label: "CMF Chile", url: "https://www.cmfchile.cl/institucional/mercados/entidad.php?mercado=V&rut=76963034&grupo=&tipoentidad=RGAGF" }
    ]
  },
  {
    id: 17,
    manager: "volcom", managerLabel: "Volcom Capital AGF",
    severity: "green",
    keywords: [],
    title: "Volcom Capital AGF: sin sanciones desde su entrada al mercado — US$6.000M captados y alianzas con Ardian, CVC y Blackstone",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `Volcom Capital AGF se mantiene <strong>sin sanciones desde su fundación</strong>, según registros CMF. La gestora ha captado <strong>US$6.000M</strong> y mantiene 32 vehículos de inversión por US$3.000M, con alianzas con Ardian, CVC, Cevian Capital, Starwood Capital Group, Platinum Equity y Triton. Cuenta con oficinas en Colombia, Perú y Uruguay, con expansión proyectada a México.`,
    sources: [
      { label: "Diario Financiero", url: "https://www.df.cl/mercados/bolsa-monedas/volcom-capital-estudia-acciones-legales-tras-acusaciones-por-supuesto" }
    ]
  },
  {
    id: 18,
    manager: "warburgpincus", managerLabel: "Warburg Pincus",
    severity: "green",
    keywords: [],
    title: "Warburg Pincus: sin alertas regulatorias en el período — $87.000M en AUM y expansión en mercados emergentes",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `Warburg Pincus, con más de <strong>$87.000M en AUM</strong>, no registra alertas regulatorias, demandas ni investigaciones activas en el período 28–31 mayo 2026. La firma, presidida por Timothy Geithner, mantiene su foco en inversiones de crecimiento en sectores de healthcare, tecnología, servicios financieros y real estate en mercados globales y emergentes.`,
    sources: [
      { label: "Warburg Pincus", url: "https://www.warburgpincus.com" }
    ]
  }
];
