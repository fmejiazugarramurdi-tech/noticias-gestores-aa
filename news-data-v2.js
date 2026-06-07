// ═══════════════════════════════════════════════════════
//  news-data-v2.js  —  Monitor Ampliado de Managers
//  Período base: 28–31 mayo 2026
//  Total managers: 36 | IDs: 1–36
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
    date: "12 de mayo de 2026", isoDate: "2026-05-12",
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
    date: "25 de agosto de 2025", isoDate: "2025-08-25",
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
    date: "29 de mayo de 2026", isoDate: "2026-05-29",
    body: `El chairman Steffen Meister confirmó el inicio de <strong>procedimientos legales contra Grizzly Research</strong>, el short seller cuyo informe de abril 2026 acusó a Partners Group de inflar su exposición a software y comparó sus prácticas de valoración con el escándalo Wirecard. Partners Group rechazó las alegaciones como "frívolas, defamatorias y altamente engañosas" y reportó <strong>posible manipulación de mercado</strong> a reguladores en Suiza y EE.UU. La acción cayó a mínimos anuales.`,
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
    date: "26 de noviembre de 2025", isoDate: "2025-11-26",
    body: `En el marco del caso Factop, Antonio Jalaff impulsó un esquema en que ejecutivos de LarrainVial y STF Capital <strong>comercializaron cuotas de un fondo usando el logo de Grupo Patio</strong> sin autorización, prometiendo una participación indirecta del 3,87% en el grupo que nunca se concretó. La CMF remitió antecedentes al Ministerio Público para investigar responsabilidades penales. Directores de Grupo Patio declararon ante la Fiscalía haber sido víctimas del engaño.`,
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
    title: "Accionista minoritario fundador inicia tres arbitrajes acusando administración desleal y operaciones irregulares",
    date: "23 de enero de 2025", isoDate: "2025-01-23",
    body: `Felipe Guzmán, accionista fundador con el 5,32% de Red Megacentro, inició <strong>tres arbitrajes</strong> ante tribunales civiles y el CAM Santiago contra directores y ejecutivos de la compañía, acusándolos de <strong>administración desleal, operaciones con partes relacionadas y violación al pacto de accionistas</strong>. La empresa negó las acusaciones y anunció acciones legales contra quienes intenten dañar su reputación.`,
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
    date: "23 de febrero de 2026", isoDate: "2026-02-23",
    body: `Un inversor demandó a OneStream (NASDAQ: OS) para detener la operación de <strong>take-private por $6.400M</strong> liderada por Hg Capital, alegando que la empresa no entregó suficiente información sobre cómo el PE persuadió al fundador Thomas Shea a aceptar los $24/acción. Múltiples firmas de derechos de accionistas investigaron si el directorio incumplió sus <strong>deberes fiduciarios</strong>.`,
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
    date: "27 de febrero de 2026", isoDate: "2026-02-27",
    body: `La Superintendencia del Mercado de Valores (SMV) de Perú <strong>multó a Credicorp con 510 UIT (~S/1,9M)</strong> por violaciones graves vinculadas a contribuciones políticas no declaradas en 2011 y 2016. En febrero 2026 el SMV requirió explicar por qué no se declaró como hecho relevante. El recurso de cassation ante la Corte Suprema peruana sigue pendiente.`,
    sources: [{ label: "StockTitan", url: "https://www.stocktitan.net/sec-filings/BAP/6-k-credicorp-ltd-current-report-foreign-issuer-10f4a142b558.html" }]
  },
  {
    id: 8,
    manager: "credicorp", managerLabel: "Credicorp Capital",
    severity: "yellow",
    keywords: ["lawsuit"],
    title: "Credicorp Capital compra US$125,3M en cuotas de clientes afectados por quiebra de Sartor AGF",
    date: "30 de diciembre de 2024", isoDate: "2024-12-30",
    body: `Credicorp Capital se comprometió a adquirir el <strong>100% de las inversiones de sus clientes</strong> en dos fondos afectados por la revocación de autorización de Sartor AGF por la CMF, cubriendo hasta <strong>US$125,3M</strong>. Credicorp espera recuperación parcial y ejerce acciones legales contra los responsables.`,
    sources: [{ label: "StockTitan", url: "https://www.stocktitan.net/news/BAP/credicorp-ltd-announces-that-one-of-its-subsidiaries-offers-to-y90ysmx8urd1.html" }]
  },
  {
    id: 9,
    manager: "hellmanfriedman", managerLabel: "Hellman & Friedman",
    severity: "yellow",
    keywords: ["lawsuit", "fiduciary"],
    title: "Demanda en Delaware acusa a H&F de priorizar su salida en venta de Snap One a Resideo por $1.400M",
    date: "26 de junio de 2025", isoDate: "2025-06-26",
    body: `Un inversor demandó a Hellman & Friedman, JPMorgan y Moelis en la Corte de Chancery de Delaware, alegando que la venta de Snap One a Resideo Technologies por <strong>$1.400M</strong> priorizó el interés de H&F sobre su obligación de maximizar el precio para los accionistas públicos. La demanda acusa el uso de <strong>"orientación manipulada"</strong> para justificar un precio en el rango bajo de valoración.`,
    sources: [{ label: "Bloomberg Law", url: "https://news.bloomberglaw.com/esg/jpmorgan-hellman-friedman-moelis-sued-over-1-4-billion-deal" }]
  },
  {
    id: 10,
    manager: "thomabravo", managerLabel: "Thoma Bravo",
    severity: "yellow",
    keywords: ["lawsuit"],
    title: "Pérdida de $5.000M en Medallia expone riesgo sistémico en cartera de software",
    date: "29 de abril de 2026", isoDate: "2026-04-29",
    body: `Thoma Bravo enfrenta escrutinio público tras la pérdida de <strong>~$5.000M</strong> en su inversión en Medallia, descrita como uno de los mayores fracasos en la historia del PE de software. Intensifica las dudas sobre valoraciones de cartera de software en el sector.`,
    sources: [{ label: "Puck News", url: "https://puck.news/five-billion-dollar-private-equity-wipeout-thoma-bravos-medallia-miss/" }]
  },
  {
    id: 11,
    manager: "toesca", managerLabel: "Toesca AGF",
    severity: "yellow",
    keywords: ["fiduciary"],
    title: "CMF designa a Toesca AGF como liquidadora de Sartor AGF — fondos con caídas de hasta 85%",
    date: "14 de agosto de 2025", isoDate: "2025-08-14",
    body: `La CMF designó a <strong>Toesca AGF como liquidadora</strong> de los fondos de inversión rescatables de Sartor AGF, cuya intervención se ordenó por graves irregularidades. PwC y Deloitte revelaron <strong>caídas de hasta 85%</strong> en los fondos. Toesca realizará un proceso de venta de los instrumentos remanentes en un plazo de 36 meses.`,
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
    title: "Moneda evalúa acciones legales contra exresponsables de Nova Austral tras pérdida de US$30M",
    date: "15 de enero de 2025", isoDate: "2025-01-15",
    body: `Moneda Asset Management, con <strong>US$30M invertidos en Nova Austral</strong>, evaluaba acciones legales contra los exresponsables de la firma salmonera, cuyas deudas totales ascienden a <strong>US$559M</strong>. Nova Austral enfrenta cargos criminales y multas por reporte fraudulento de mortalidad de peces.`,
    sources: [{ label: "SeafoodSource", url: "https://www.seafoodsource.com/news/premium/business-finance/investor-sues-former-managers-directors-of-beleaguered-nova-austral-for-fraud" }]
  },

  /* ══ VERDE — SIN ALERTAS ════════════════════════════ */
  {
    id: 13,
    manager: "harbourvest", managerLabel: "HarbourVest Partners",
    severity: "green", keywords: [],
    title: "HarbourVest cierra Fund XIII con $2.400M — sin alertas regulatorias",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `HarbourVest Partners cerró su fondo HarbourVest Fund XIII con <strong>$2.400M</strong>, enfocado en compromisos primarios complementados con secundarios y co-inversiones. Sin alertas regulatorias ni litigios detectados. Gestiona más de <strong>$161.000M en AUM</strong> a marzo 2026.`,
    sources: [{ label: "Debevoise", url: "https://www.debevoise.com/news/2026/04/harbourvest" }]
  },
  {
    id: 14,
    manager: "flintglobal", managerLabel: "Flint Global",
    severity: "green", keywords: [],
    title: "Cinven completa inversión mayoritaria en Flint Global valorando la firma en ~£190M",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `Cinven completó la adquisición de participación mayoritaria en Flint Global, firma asesora en política, regulación y competencia, valorándola en <strong>~£190M (~$253M)</strong>. Sin alertas regulatorias ni litigios detectados.`,
    sources: [{ label: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2025-12-08/cinven-is-said-to-near-190-million-deal-for-uk-adviser-flint" }]
  },
  {
    id: 15,
    manager: "patiocomer", managerLabel: "Patio Comercial",
    severity: "green", keywords: [],
    title: "Patio Comercial eleva 160% sus utilidades en Q1 2026 — operación independiente de investigaciones Jalaff",
    date: "22 de mayo de 2026", isoDate: "2026-05-22",
    body: `La filial comercial de Grupo Patio registró un alza de <strong>160%</strong> en utilidades, alcanzando $5.364 millones. Los ingresos superaron los $16.600 millones. Patio Comercial opera de forma independiente de las investigaciones que afectan a Antonio Jalaff y Grupo Patio holding.`,
    sources: [{ label: "Diario Financiero", url: "https://www.df.cl/empresas/retail/filial-comercial-de-grupo-patio-eleva-en-160-sus-ganancias-al-consolidar" }]
  },
  {
    id: 16,
    manager: "linkcapital", managerLabel: "Link Capital Partners AGF",
    severity: "green", keywords: [],
    title: "Link Capital Partners AGF: vigente y sin sanciones ante CMF",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `Link Capital Partners Administradora General de Fondos S.A. (RUT 76963034-1) se mantiene <strong>vigente y sin sanciones</strong> ante la CMF. Establecida en 2018, con domicilio en Alonso de Córdova 4355, Of. 603, Vitacura. Sin noticias negativas detectadas en el período.`,
    sources: [{ label: "CMF Chile", url: "https://www.cmfchile.cl/institucional/mercados/entidad.php?mercado=V&rut=76963034&grupo=&tipoentidad=RGAGF" }]
  },
  {
    id: 17,
    manager: "volcom", managerLabel: "Volcom Capital AGF",
    severity: "green", keywords: [],
    title: "Volcom Capital AGF: sin sanciones — US$6.000M captados con alianzas en Ardian, CVC y Blackstone",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `Volcom Capital AGF se mantiene <strong>sin sanciones</strong> desde su fundación según registros CMF. La gestora ha captado <strong>US$6.000M</strong> con 32 vehículos de inversión, manteniendo alianzas con Ardian, CVC, Cevian Capital, Starwood Capital Group y Blackstone.`,
    sources: [{ label: "Diario Financiero", url: "https://www.df.cl/mercados/bolsa-monedas/volcom-capital-estudia-acciones-legales-tras-acusaciones-por-supuesto" }]
  },
  {
    id: 18,
    manager: "warburgpincus", managerLabel: "Warburg Pincus",
    severity: "green", keywords: [],
    title: "Warburg Pincus: sin alertas regulatorias — $87.000M en AUM",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `Warburg Pincus, con más de <strong>$87.000M en AUM</strong>, no registra alertas regulatorias, demandas ni investigaciones activas en el período. La firma mantiene su foco en inversiones de crecimiento en healthcare, tecnología, servicios financieros y real estate.`,
    sources: [{ label: "Warburg Pincus", url: "https://www.warburgpincus.com" }]
  },
  {
    id: 19,
    manager: "activaalt", managerLabel: "Activa Alternative Assets",
    severity: "green", keywords: [],
    title: "Activa Alternative Assets: sin alertas regulatorias detectadas en el período",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `Activa Alternative Assets no registra alertas regulatorias, demandas, multas ni investigaciones activas en el período 28–31 mayo 2026. La gestora opera estrategias de financiamiento alternativo para empresas e individuos con acceso limitado al sistema bancario tradicional.`,
    sources: [{ label: "Activa", url: "https://www.activaalternativeassets.com" }]
  },
  {
    id: 20,
    manager: "activadebt", managerLabel: "Activa Private Debt",
    severity: "green", keywords: [],
    title: "Activa Private Debt: sin alertas regulatorias detectadas en el período",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `Activa Private Debt no registra alertas regulatorias, demandas, multas ni investigaciones activas en el período 28–31 mayo 2026. La gestora opera 6 estrategias de inversión en deuda privada orientadas a segmentos con bajo acceso bancario.`,
    sources: [{ label: "Activa", url: "https://www.activaalternativeassets.com/english/investment-areas/private-debt.html" }]
  },
  {
    id: 21,
    manager: "banchile", managerLabel: "Banchile AGF",
    severity: "green", keywords: [],
    title: "Banchile AGF: sin alertas regulatorias detectadas en el período",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `Banchile Administradora General de Fondos, filial de Banco de Chile, no registra alertas regulatorias, demandas, multas ni investigaciones activas ante la CMF en el período 28–31 mayo 2026.`,
    sources: [{ label: "Banchile Inversiones", url: "https://www.banchileinversiones.cl" }]
  },
  {
    id: 22,
    manager: "blackstonesp", managerLabel: "Blackstone Strategic Partners",
    severity: "green", keywords: [],
    title: "Blackstone Strategic Partners: sin alertas regulatorias detectadas en el período",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `Blackstone Strategic Partners, la plataforma de secundarios de PE de Blackstone con más de 2.000 transacciones ejecutadas, no registra alertas regulatorias ni litigios activos específicos en el período 28–31 mayo 2026.`,
    sources: [{ label: "Blackstone", url: "https://www.blackstone.com/businesses/hedge-fund-solutions/strategic-partners/" }]
  },
  {
    id: 23,
    manager: "btgpactual", managerLabel: "BTG Pactual AGF",
    severity: "green", keywords: [],
    title: "BTG Pactual AGF: sin alertas regulatorias detectadas en el período",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `BTG Pactual Administradora General de Fondos (filial del mayor banco de inversión de América Latina, con US$145.600M en activos totales) no registra alertas regulatorias, demandas ni multas activas ante la CMF en el período 28–31 mayo 2026.`,
    sources: [{ label: "BTG Pactual", url: "https://www.btgpactual.com" }]
  },
  {
    id: 24,
    manager: "cmbprime", managerLabel: "CMB Prime AGF",
    severity: "green", keywords: [],
    title: "CMB Prime AGF: sin alertas regulatorias detectadas en el período",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `CMB Prime Administradora General de Fondos no registra alertas regulatorias, demandas, multas ni investigaciones activas ante la CMF en el período 28–31 mayo 2026.`,
    sources: [{ label: "CMF Chile", url: "https://www.cmfchile.cl" }]
  },
  {
    id: 25,
    manager: "cumplo", managerLabel: "Cumplo AGF",
    severity: "green", keywords: [],
    title: "Cumplo AGF: sin alertas regulatorias detectadas en el período",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `Cumplo Administradora General de Fondos no registra alertas regulatorias, demandas, multas ni investigaciones activas ante la CMF en el período 28–31 mayo 2026.`,
    sources: [{ label: "Cumplo", url: "https://www.cumplo.cl" }]
  },
  {
    id: 26,
    manager: "gsicapital", managerLabel: "GSI Capital AGF",
    severity: "green", keywords: [],
    title: "GSI Capital AGF: sin alertas regulatorias detectadas en el período",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `GSI Capital Administradora General de Fondos no registra alertas regulatorias, demandas, multas ni investigaciones activas ante la CMF en el período 28–31 mayo 2026.`,
    sources: [{ label: "CMF Chile", url: "https://www.cmfchile.cl" }]
  },
  {
    id: 27,
    manager: "hgcapital", managerLabel: "HG Capital",
    severity: "green", keywords: [],
    title: "HG Capital: sin alertas regulatorias detectadas — lidera take-private de OneStream por $6.400M",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `HG Capital, PE especializado en software B2B, no registra alertas regulatorias ni litigios directos en el período. Lidera la operación de take-private de OneStream (NASDAQ: OS) por <strong>$6.400M</strong>, con participación minoritaria de General Atlantic y Tidemark.`,
    sources: [{ label: "GlobeNewswire", url: "https://www.globenewswire.com/news-release/2026/01/28/3227529/0/en/Johnson-Fistel-Investigates-OneStream-Inc-OS-Shareholders-Rights-Following-Board-Approval-of-24-00-Take-Private-Transaction.html" }]
  },
  {
    id: 28,
    manager: "hggenesis", managerLabel: "HG Genesis",
    severity: "green", keywords: [],
    title: "HG Genesis: sin alertas regulatorias detectadas en el período",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `HG Genesis, la estrategia de mid-market software de HG Capital, no registra alertas regulatorias, demandas ni investigaciones activas en el período 28–31 mayo 2026.`,
    sources: [{ label: "HG Capital", url: "https://www.hgcapital.com" }]
  },
  {
    id: 29,
    manager: "independencia", managerLabel: "Independencia AGF",
    severity: "green", keywords: [],
    title: "Independencia AGF: sin alertas regulatorias detectadas en el período",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `Independencia Administradora General de Fondos, gestora con ~US$2.000M en activos principalmente inmobiliarios, forestales y capital de riesgo en Chile, USA y Uruguay, no registra alertas regulatorias, demandas ni multas activas en el período 28–31 mayo 2026.`,
    sources: [{ label: "Independencia AGF", url: "https://www.independencia.cl" }]
  },
  {
    id: 30,
    manager: "linzor", managerLabel: "Linzor Capital Partners",
    severity: "green", keywords: [],
    title: "Linzor Capital Partners: sin alertas regulatorias detectadas en el período",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `Linzor Capital Partners, PE de mid-market latinoamericano con sede en Santiago y presencia en México, Colombia y Argentina, no registra alertas regulatorias, demandas ni investigaciones activas en el período 28–31 mayo 2026.`,
    sources: [{ label: "Linzor Capital", url: "https://www.linzor.com" }]
  },
  {
    id: 31,
    manager: "megacentroagf", managerLabel: "Megacentro AGF",
    severity: "green", keywords: [],
    title: "Megacentro AGF: sin alertas regulatorias detectadas en el período",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `Megacentro AGF no registra alertas regulatorias, demandas, multas ni investigaciones activas ante la CMF en el período 28–31 mayo 2026.`,
    sources: [{ label: "CMF Chile", url: "https://www.cmfchile.cl" }]
  },
  {
    id: 32,
    manager: "newmountain", managerLabel: "New Mountain Capital",
    severity: "green", keywords: [],
    title: "New Mountain Capital: sin alertas regulatorias detectadas en el período",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `New Mountain Capital, PE de growth equity con sede en Nueva York y ~$55.000M en AUM, no registra alertas regulatorias, demandas ni investigaciones activas en el período 28–31 mayo 2026.`,
    sources: [{ label: "New Mountain Capital", url: "https://www.newmountaincapital.com" }]
  },
  {
    id: 33,
    manager: "oaktree", managerLabel: "Oaktree Capital Management",
    severity: "green", keywords: [],
    title: "Oaktree Capital Management: sin alertas regulatorias nuevas en el período",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `Oaktree Capital Management (filial de Brookfield, ~$193.000M AUM) no registra alertas regulatorias nuevas ni litigios activos en el período 28–31 mayo 2026. Su Co-CEO Panossian advirtió sobre riesgos de mercado subestimados y la firma acumula liquidez defensiva.`,
    sources: [{ label: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-05-04/oaktree-co-ceo-calls-market-pricing-head-scratcher-given-risks" }]
  },
  {
    id: 34,
    manager: "picton", managerLabel: "Picton AGF",
    severity: "green", keywords: [],
    title: "Picton AGF: sin alertas regulatorias detectadas en el período",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `Picton Administradora General de Fondos no registra alertas regulatorias, demandas, multas ni investigaciones activas ante la CMF en el período 28–31 mayo 2026.`,
    sources: [{ label: "CMF Chile", url: "https://www.cmfchile.cl" }]
  },
  {
    id: 35,
    manager: "southerncross", managerLabel: "Southern Cross",
    severity: "green", keywords: [],
    title: "Southern Cross: sin alertas regulatorias detectadas en el período",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `Southern Cross Group, PE de mid-market latinoamericano con inversiones en consumo, servicios financieros y salud, no registra alertas regulatorias, demandas ni investigaciones activas en el período 28–31 mayo 2026.`,
    sources: [{ label: "Southern Cross", url: "https://www.southerncrossgroup.com" }]
  },
  {
    id: 36,
    manager: "vistaequity", managerLabel: "Vista Equity Partners",
    severity: "green", keywords: [],
    title: "Vista Equity Partners: sin alertas regulatorias detectadas en el período",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `Vista Equity Partners, PE especializado en software empresarial con ~$100.000M en AUM, no registra alertas regulatorias, demandas ni investigaciones activas en el período 28–31 mayo 2026.`,
    sources: [{ label: "Vista Equity", url: "https://www.vistaequitypartners.com" }]
  }

];
