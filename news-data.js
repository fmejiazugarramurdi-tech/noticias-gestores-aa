// ═══════════════════════════════════════════════════════
//  news-data.js  —  Datos de noticias
//  Actualizado por: GitHub Action (fetch) + Claude (classify)
//  NO editar manualmente — usar /classify-news en Claude Code
// ═══════════════════════════════════════════════════════

const CURRENT_DATE = new Date("2026-05-30");

// DATA START — Claude inserta noticias nuevas AQUÍ ARRIBA
const NEWS = [

  /* ══ SEMANA 26–30 MAYO 2026 ══════════════════════════ */
  {
    id: 26,
    manager: "oaktree", managerLabel: "Oaktree Capital Management",
    severity: "green",
    title: "Oaktree y Pantheon lanzan alianza de préstamo directo europeo con objetivo de €1.000M",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `Oaktree Capital Management se asoció con Pantheon Ventures (gestora con <strong>$85.000M en AUM</strong>) para impulsar su estrategia de préstamo directo europeo hasta <strong>€1.000M (~$1.200M)</strong>. Pantheon aportará capital fresco sobre una cartera semilla existente. La estrategia se centrará en préstamos senior garantizados de primer rango a empresas de Europa y el Reino Unido. Oaktree señaló que este será el primero de varios fondos dedicados a direct lending europeo.`,
    sources: [
      { label: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-05-28/oaktree-partners-with-pantheon-to-boost-european-direct-lending" },
      { label: "Alt. Credit Investor", url: "https://alternativecreditinvestor.com/2026/05/28/oaktree-secures-pantheon-backing-for-european-direct-lending-expansion/" }
    ]
  },
  {
    id: 25,
    manager: "brookfield", managerLabel: "Brookfield Asset Management",
    severity: "green",
    title: "Dividendo trimestral $0,5025/acción con yield 4,12% — fecha récord 29 mayo",
    date: "29 de mayo de 2026", isoDate: "2026-05-29",
    body: `El Consejo de Administración de Brookfield Asset Management (NYSE: BAM) declaró un <strong>dividendo trimestral de $0,5025 por acción</strong>, pagadero el 30 de junio de 2026 a accionistas registrados a cierre del 29 de mayo. El dividendo ofrece un <em>yield</em> anualizado del <strong>4,12%</strong>, en línea con la política de distribución histórica de la firma.`,
    sources: [
      { label: "GuruFocus", url: "https://www.gurufocus.com/news/8846212/bam-declares-quarterly-dividend-of-05025-with-412-yield" },
      { label: "SEC 8-K", url: "https://www.sec.gov/Archives/edgar/data/0001937926/000117184326003183/exh_991.htm" }
    ]
  },
  {
    id: 24,
    manager: "ares", managerLabel: "Ares Management",
    severity: "green",
    title: "Co-Presidente Jacobson presenta en Goldman Sachs European Financials Conference el 3 de junio",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `Ares Management anunció que su Co-Presidente <strong>Blair Jacobson</strong> presentará en el Goldman Sachs European Financials Conference el <strong>3 de junio de 2026</strong>. La presentación estará disponible en webcast en vivo y en diferido en la sección de Relaciones con Inversores de aresmgmt.com.`,
    sources: [
      { label: "Yahoo Finance", url: "https://finance.yahoo.com/markets/stocks/articles/ares-management-corporation-present-goldman-233000299.html" },
      { label: "StockTitan", url: "https://www.stocktitan.net/news/ARES/ares-management-corporation-to-present-at-the-goldman-sachs-european-5q6p0dudm7x4.html" }
    ]
  },

  /* ══ BROOKFIELD ══════════════════════════════════════ */
  {
    id: 1,
    manager: "brookfield", managerLabel: "Brookfield Asset Management",
    severity: "red",
    title: "Demanda por fraude: ex-socio Raffaelli acusa de desvío de capital y represalia al whistleblower",
    date: "12 de mayo de 2026", isoDate: "2026-05-12",
    body: `Josh Raffaelli, ex-managing partner de Brookfield, presentó una demanda de 100 páginas acusando a la firma de <strong>desviar capital</strong> de los fondos que gestionaba para compensar pérdidas de su división de real estate comercial, de <strong>inflar artificialmente</strong> el balance de Pinegrove Capital Partners en más de $100M, y de <strong>limitar el acceso de clientes a xAI de Elon Musk</strong>. Raffaelli denunció ante la <strong>SEC a finales de 2024</strong> y fue despedido en diciembre. Brookfield niega todas las acusaciones.`,
    sources: [
      { label: "Courthouse News", url: "https://www.courthousenews.com/silicon-valley-investor-with-ties-to-elon-musk-accuses-brookfield-of-fraud-retaliation/" },
      { label: "PitchBook", url: "https://pitchbook.com/news/articles/brookfield-venture-lawsuit-josh-raffaelli" }
    ]
  },
  {
    id: 2,
    manager: "brookfield", managerLabel: "Brookfield Asset Management",
    severity: "yellow",
    title: "Adquisición de Peakstone Realty: mayor exposición al real estate comercial en momento delicado",
    date: "6 de mayo de 2026", isoDate: "2026-05-06",
    body: `Brookfield completó la adquisición de Peakstone Realty Trust, ampliando su exposición al real estate comercial en el mismo momento en que la demanda Raffaelli señala pérdidas previas en esa área como detonante del supuesto desvío de capital.`,
    sources: [{ label: "Brookfield", url: "https://bam.brookfield.com/events-news/press-releases" }]
  },
  {
    id: 3,
    manager: "brookfield", managerLabel: "Brookfield Asset Management",
    severity: "yellow",
    title: "Emisión de $1.000M en deuda corporativa: notas a 2031 y reapertura de notas a 2036",
    date: "14 de abril de 2026", isoDate: "2026-04-14",
    body: `Brookfield anunció la emisión de $550M en notas con vencimiento 2031 y la reapertura de $450M en notas con vencimiento 2036. El incremento de deuda corporativa, en el contexto de la demanda activa, es un factor a monitorizar.`,
    sources: [{ label: "Brookfield", url: "https://bam.brookfield.com/events-news/press-releases" }]
  },
  {
    id: 4,
    manager: "brookfield", managerLabel: "Brookfield Asset Management",
    severity: "green",
    title: "Resultados Q1 2026 sólidos: en camino de ser el mayor año de captación histórico",
    date: "8 de mayo de 2026", isoDate: "2026-05-08",
    body: `Brookfield reportó resultados fuertes en Q1 2026. Los fondos co-gestionados (Primary Wave, 17Capital, Pinegrove) cerraron por encima de sus objetivos. La firma espera que 2026 sea el mayor año de captación de capital de su historia.`,
    sources: [
      { label: "Bloomberg", url: "https://www.bloomberg.com/news/newsletters/2026-05-08/brookfield-asset-management-s-safe-assets-have-strong-quarter" },
      { label: "Seeking Alpha", url: "https://seekingalpha.com/article/4902789-brookfield-asset-management-2026-set-to-be-record-year-for-fee-bearing-capital-formation" }
    ]
  },
  {
    id: 5,
    manager: "brookfield", managerLabel: "Brookfield Asset Management",
    severity: "green",
    title: "Junta General Anual: los 12 consejeros reelegidos por unanimidad",
    date: "7 de mayo de 2026", isoDate: "2026-05-07",
    body: `En la junta anual de accionistas celebrada el 7 de mayo en Nueva York, los 12 candidatos propuestos para el Consejo de Administración fueron elegidos sin incidencias.`,
    sources: [{ label: "GlobeNewswire", url: "https://www.globenewswire.com/news-release/2026/05/08/3291375/0/en/Brookfield-Asset-Management-Announces-Results-of-Annual-Meeting-of-Shareholders.html" }]
  },
  {
    id: 6,
    manager: "brookfield", managerLabel: "Brookfield Asset Management",
    severity: "green",
    title: "Demanda 401(k) desestimada: Brookfield exonerada por rendimientos positivos",
    date: "20 de marzo de 2026", isoDate: "2026-03-20",
    body: `Un tribunal desestimó la demanda colectiva que cuestionaba los fondos target-date de American Century usados en el plan 401(k) de empleados. Los fondos obtuvieron rendimientos positivos y el tribunal consideró insuficiente el argumento de incumplimiento fiduciario.`,
    sources: [{ label: "Bloomberg Law", url: "https://news.bloomberglaw.com/employee-benefits/brookfield-asset-management-cleared-in-401k-plan-fund-lawsuit" }]
  },

  /* ══ ARES ════════════════════════════════════════════ */
  {
    id: 7,
    manager: "ares", managerLabel: "Ares Management",
    severity: "red",
    title: "ASIF bajo escrutinio: investigación por pérdidas de inversores y arbitrajes FINRA abiertos",
    date: "26 de mayo de 2026", isoDate: "2026-05-26",
    body: `El fondo Ares Strategic Income Fund (BDC no listado) está bajo escrutinio por cómo fue comercializado entre inversores minoristas. Bufetes especializados investigan pérdidas y hay <strong>arbitrajes FINRA activos</strong>. La SEC tiene foco en 2026 sobre transparencia de productos de crédito privado. Ares también <strong>elevó las comisiones máximas del prospecto</strong> (clase D de 1,5% a 2%; nuevo límite del 2% para clase I).`,
    sources: [{ label: "The White Law Group", url: "https://whitesecuritieslaw.com/ares-strategic-income-fund-securities-investigation/" }]
  },
  {
    id: 8,
    manager: "ares", managerLabel: "Ares Management",
    severity: "red",
    title: "Ares recorta valoraciones de préstamos de software de Clearlake Capital por riesgo IA",
    date: "28 de abril de 2026", isoDate: "2026-04-28",
    body: `Ares redujo el valor de los préstamos a tres compañías de software participadas por Clearlake Capital, advirtiendo de <strong>"conversaciones difíciles"</strong> por venir con empresas expuestas a disrupción por IA. Primer reconocimiento público de una gestora de este tamaño sobre quiebras de valor vinculadas a riesgo IA en cartera de crédito privado.`,
    sources: [{ label: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-04-28/ares-slashes-value-of-three-clearlake-owned-software-companies" }]
  },
  {
    id: 9,
    manager: "ares", managerLabel: "Ares Management",
    severity: "yellow",
    title: "~$1.000M en software de ARCC con riesgo IA «medio»: revisión externa activa",
    date: "28 de abril de 2026", isoDate: "2026-04-28",
    body: `Una auditoría externa sobre Ares Capital Corp. ($29.500M de cartera) identificó que el <strong>14% de las inversiones en software tienen riesgo IA «medio»</strong> y el 1% riesgo «alto» — unos $1.000M en conjunto. El 85% restante está en riesgo «bajo». Se anticipan posibles amortizaciones adicionales.`,
    sources: [{ label: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-04-28/ares-sees-1-billion-of-bdc-s-software-bets-at-medium-ai-risk" }]
  },
  {
    id: 10,
    manager: "ares", managerLabel: "Ares Management",
    severity: "yellow",
    title: "Q1 2026: BPA por debajo de estimaciones y compresión de márgenes",
    date: "1 de mayo de 2026", isoDate: "2026-05-01",
    body: `Ares publicó resultados de Q1 2026: BPA de <strong>$1,24 frente a estimaciones de $1,36</strong> (miss de $0,12). Ingresos de $1.290M superaron estimaciones de $1.210M. La compresión de márgenes es el principal punto de atención, aunque la captación récord de $30.000M (+45% interanual) mitiga las preocupaciones.`,
    sources: [
      { label: "Yahoo Finance", url: "https://finance.yahoo.com/markets/stocks/articles/ares-expanding-aum-balance-aid-151100059.html" },
      { label: "Simply Wall St", url: "https://simplywall.st/stocks/us/diversified-financials/nyse-ares/ares-management/news/ares-management-ares-q1-2026-margin-compression-challenges-b" }
    ]
  },
  {
    id: 11,
    manager: "ares", managerLabel: "Ares Management",
    severity: "green",
    title: "Captación récord Q1 2026: $30.000M (+45% interanual)",
    date: "1 de mayo de 2026", isoDate: "2026-05-01",
    body: `Ares logró su mayor fundraising trimestral de la historia en Q1 2026, con <strong>$30.000M captados</strong> — un aumento del 45% respecto al mismo período de 2025.`,
    sources: [{ label: "QuiverQuant", url: "https://www.quiverquant.com/news/ARES+MANAGEMENT+($ARES)+Releases+Q1+2026+Earnings" }]
  },
  {
    id: 12,
    manager: "ares", managerLabel: "Ares Management",
    severity: "green",
    title: "Nuevo COO: Peter Ogilvie nombrado Director de Operaciones y Estrategia",
    date: "29 de abril de 2026", isoDate: "2026-04-29",
    body: `Ares nombró a Peter Ogilvie como Chief Operating Officer y Head of Strategy para apoyar la ejecución de las iniciativas de crecimiento estratégico de la firma.`,
    sources: [{ label: "Ares Management", url: "https://www.aresmgmt.com/news-views" }]
  },
  {
    id: 13,
    manager: "ares", managerLabel: "Ares Management",
    severity: "green",
    title: "Asociación de $910M en vivienda universitaria con Scion Group",
    date: "20 de mayo de 2026", isoDate: "2026-05-20",
    body: `Ares y Scion Group acordaron un partnership de <strong>$910M</strong> para activos de vivienda universitaria próximos a campus de élite, diversificando la estrategia de real estate hacia segmentos de demanda estable.`,
    sources: [{ label: "Simply Wall St", url: "https://simplywall.st/stocks/us/diversified-financials/nyse-ares/ares-management/news/ares-management-turns-to-student-housing-for-new-income-stre/amp" }]
  },
  {
    id: 14,
    manager: "ares", managerLabel: "Ares Management",
    severity: "green",
    title: "Renovación y ampliación de líneas de crédito rotativo de ARCC y ASIF",
    date: "26 de mayo de 2026", isoDate: "2026-05-26",
    body: `Ares Capital Corporation amplió su línea de crédito en ~<strong>$170M hasta $5.500M</strong> y redujo el coste de financiación en 0,10% anual. Ares Strategic Income Fund también renovó su facilidad.`,
    sources: [{ label: "Yahoo Finance", url: "https://finance.yahoo.com/markets/stocks/articles/ares-capital-corporation-ares-strategic-104500188.html" }]
  },

  /* ══ OAKTREE ═════════════════════════════════════════ */
  {
    id: 15,
    manager: "oaktree", managerLabel: "Oaktree Capital Management",
    severity: "yellow",
    title: "Co-CEO Panossian advierte: mercados subestiman riesgos y Oaktree acumula liquidez defensiva",
    date: "4 de mayo de 2026", isoDate: "2026-05-04",
    body: `Armen Panossian, co-CEO de Oaktree, declaró que los precios de mercado le resultan un <strong>«head-scratcher»</strong> dado el nivel de riesgos subestimados. La firma está preservando liquidez a la espera de una corrección.`,
    sources: [{ label: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-05-04/oaktree-co-ceo-calls-market-pricing-head-scratcher-given-risks" }]
  },
  {
    id: 16,
    manager: "oaktree", managerLabel: "Oaktree Capital Management",
    severity: "yellow",
    title: "Oaktree BDC amortiza préstamos de software y cuantifica 26% de exposición a IA",
    date: "5 de mayo de 2026", isoDate: "2026-05-05",
    body: `Oaktree Specialty Lending Corp. ($2.800M) recortó en <strong>~3%</strong> el valor de sus préstamos de software. La BDC también notificó que el <strong>26% de su cartera</strong> tiene exposición a sectores con riesgo de disrupción por IA.`,
    sources: [{ label: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-05-05/oaktree-bdc-marks-down-software-loans-flags-26-ai-exposure" }]
  },
  {
    id: 17,
    manager: "oaktree", managerLabel: "Oaktree Capital Management",
    severity: "yellow",
    title: "Alerta «muro de vencimientos» high yield: ~$900.000M por refinanciar en 3 años",
    date: "7 de mayo de 2026", isoDate: "2026-05-07",
    body: `Oaktree alerta sobre el vencimiento de <strong>~$900.000M en deuda high yield</strong> estadounidense en los próximos tres años, emitida con alto apalancamiento en entorno de tipos cero. Con los tipos actuales, la refinanciación es muy difícil.`,
    sources: [{ label: "Bloomingbit / Oaktree", url: "https://en.bloomingbit.io/feed/news/112977" }]
  },
  {
    id: 18,
    manager: "oaktree", managerLabel: "Oaktree Capital Management",
    severity: "green",
    title: "Oaktree Strategic Credit Fund: distribución ordinaria $0,16/acción (clase I)",
    date: "26 de mayo de 2026", isoDate: "2026-05-26",
    body: `El Consejo de Administración de Oaktree Strategic Credit Fund declaró la distribución periódica ordinaria para acciones clase I (<strong>$0,1600/acción</strong>), en línea con el calendario habitual del fondo.`,
    sources: [{ label: "SEC Filing 8-K", url: "https://www.sec.gov/Archives/edgar/data/0001872371/000119312526231657/d228029d8k.htm" }]
  },
  {
    id: 19,
    manager: "oaktree", managerLabel: "Oaktree Capital Management",
    severity: "green",
    title: "Oaktree identifica oportunidades en situaciones especiales por entorno de tipos altos",
    date: "7 de mayo de 2026", isoDate: "2026-05-07",
    body: `Coherente con su mandato de crédito distressed, Oaktree señala que el entorno de tipos elevados abre nuevas oportunidades en deuda de situaciones especiales con menor apalancamiento que ciclos previos.`,
    sources: [{ label: "Bloomingbit", url: "https://en.bloomingbit.io/feed/news/112977" }]
  },

  /* ══ LEXINGTON ═══════════════════════════════════════ */
  {
    id: 20,
    manager: "lexington", managerLabel: "Lexington Partners",
    severity: "green",
    title: "Franklin Lexington supera $3.500M de AUM en el primer año: hito récord en secundarios",
    date: "12 de febrero de 2026", isoDate: "2026-02-12",
    body: `La estrategia Franklin Lexington de secundarios de private equity superó los <strong>$3.500M en AUM</strong> en menos de un año desde su lanzamiento. Sub-asesorada por Lexington Partners, confirma el fuerte apetito del mercado wealth por los secundarios.`,
    sources: [
      { label: "Yahoo Finance", url: "https://finance.yahoo.com/news/franklin-lexington-private-equities-secondaries-143000875.html" },
      { label: "BusinessWire", url: "https://www.businesswire.com/news/home/20260212179946/en/Franklin-Lexington-Private-Equities-Secondaries-Strategy-Exceeds-%243.5-Billion-in-Assets-Under-Management-Globally-Within-First-Year" }
    ]
  },
  {
    id: 21,
    manager: "lexington", managerLabel: "Lexington Partners",
    severity: "green",
    title: "Tres nuevas promociones a socio: Grape, Oak y Skelly en el equipo de secundarios",
    date: "14 de enero de 2026", isoDate: "2026-01-14",
    body: `Lexington ascendió a Peter Grape, Simon Oak y Michael Skelly al rango de socio (Partner), todos especializados en transacciones LP y GP-led. El grupo de socios de Lexington asciende a <strong>28 miembros</strong>.`,
    sources: [
      { label: "Lexington Partners", url: "https://www.lexingtonpartners.com/press-releases/lexington-partners-names-three-new-partners/" },
      { label: "Yahoo Finance", url: "https://finance.yahoo.com/news/lexington-partners-names-three-partners-130000789.html" }
    ]
  },
  {
    id: 22,
    manager: "lexington", managerLabel: "Lexington Partners",
    severity: "green",
    title: "Lanzamiento del fondo luxemburgués FLEX-I con >$875M en AUM al lanzamiento",
    date: "22 de enero de 2026", isoDate: "2026-01-22",
    body: `Franklin Templeton y Lexington Partners lanzaron FLEX-I, subfondo del SICAV domiciliado en Luxemburgo, con más de <strong>$875M al lanzamiento</strong>. Abre el acceso al mercado europeo de inversores de patrimonio a los secundarios de private equity.`,
    sources: [{ label: "Lexington Partners", url: "https://www.lexingtonpartners.com/press-releases/franklin-templeton-and-lexington-partners-launch-first-registered-tender-offer-private-equity-secondaries-fund-for-u-s-wealth-channel/" }]
  },
  {
    id: 23,
    manager: "lexington", managerLabel: "Lexington Partners",
    severity: "green",
    title: "Posición líder consolidada: $82.000M de capitalización total como especialista global en secundarios",
    date: "27 de mayo de 2026", isoDate: "2026-05-27",
    body: `Lexington Partners mantiene su posición como uno de los mayores gestores de secundarios y co-inversión del mundo, con más de <strong>$82.000M de capitalización total</strong>. La integración con Franklin Templeton (2023) sigue generando sinergias positivas en distribución global.`,
    sources: [{ label: "Lexington Partners", url: "https://www.lexingtonpartners.com/" }]
  }
];
// DATA END
