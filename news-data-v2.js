// ═══════════════════════════════════════════════════════
//  news-data-v2.js  —  Monitor Ampliado de Managers
//  Período: 28–31 mayo 2026
//  Solo noticias publicadas en ese período exacto
// ═══════════════════════════════════════════════════════

const CURRENT_DATE = new Date("2026-05-31");

const NEWS = [

  /* ══ NOTICIAS CONFIRMADAS 28–31 MAYO 2026 ══════════ */

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

  // ── BROOKFIELD — VERDE (solo dividendo en el período) ─
  {
    id: 3,
    manager: "brookfield", managerLabel: "Brookfield Asset Management",
    severity: "green",
    keywords: [],
    title: "Dividendo trimestral $0,5025/acción — fecha récord 29 mayo 2026",
    date: "29 de mayo de 2026", isoDate: "2026-05-29",
    body: `El Consejo de Brookfield Asset Management (NYSE: BAM) declaró un <strong>dividendo trimestral de $0,5025/acción</strong>, pagadero el 30 de junio de 2026 a accionistas registrados al cierre del 29 de mayo. Yield anualizado del <strong>4,12%</strong>. Nota: la demanda Raffaelli (fraude/whistleblower) fue presentada en mayo 2025 y permanece activa, pero no tuvo desarrollos nuevos publicados en el período 28–31 mayo 2026.`,
    sources: [
      { label: "SEC 8-K", url: "https://www.sec.gov/Archives/edgar/data/0001937926/000117184326003183/exh_991.htm" }
    ]
  },

  /* ══ SIN NOTICIAS EN 28–31 MAYO 2026 ══════════════
     Última alerta conocida indicada en cada caso        */

  {
    id: 4,
    manager: "larrainvial", managerLabel: "LarrainVial Activos AGF",
    severity: "green",
    keywords: [],
    title: "Sin noticias nuevas en el período — última alerta: recurso de ilegalidad activo en Corte de Apelaciones (dic 2025)",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `No se detectaron noticias publicadas entre el 28 y 31 de mayo de 2026. <strong>Última alerta conocida (dic 2025):</strong> exdirectores de LarrainVial Activos AGF mantienen reclamo de ilegalidad activo en Corte de Apelaciones de Santiago, impugnando multas CMF de UF 160.000 (~US$4,73M) por el caso Factop. La Corte Suprema confirmó en octubre 2025 la suspensión del proceso penal para los ejecutivos.`,
    sources: [
      { label: "La Tercera", url: "https://www.latercera.com/pulso/noticia/caso-factop-exdirectores-de-larrainvial-sancionados-solicitan-citar-a-declarar-a-la-presidenta-de-la-cmf/" }
    ]
  },
  {
    id: 5,
    manager: "grupopatio", managerLabel: "Grupo Patio",
    severity: "green",
    keywords: [],
    title: "Sin noticias nuevas en el período — última alerta: querella Jalaff por venta Grupo Patio activa (ene 2026)",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `No se detectaron noticias publicadas entre el 28 y 31 de mayo de 2026. <strong>Última alerta conocida (ene 2026):</strong> Antonio Jalaff mantiene querella por estafa alegando maquinación fraudulenta en la venta de su participación en Grupo Patio. 23 aportantes del fondo LarrainVial se sumaron como querellantes. El caso Factop-Audios sigue en investigación penal activa.`,
    sources: [
      { label: "Infobae", url: "https://www.infobae.com/america/america-latina/2026/01/27/la-disputa-que-sacude-a-uno-de-los-conglomerados-inmobiliarios-mas-grandes-de-chile/" }
    ]
  },
  {
    id: 6,
    manager: "redmegacentro", managerLabel: "Red Megacentro",
    severity: "green",
    keywords: [],
    title: "Sin noticias nuevas en el período — última alerta: tres arbitrajes activos de accionista minoritario (ene 2025)",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `No se detectaron noticias publicadas entre el 28 y 31 de mayo de 2026. <strong>Última alerta conocida (ene 2025):</strong> Felipe Guzmán, accionista fundador con el 5,32%, mantiene tres arbitrajes activos ante CAM Santiago acusando administración desleal y operaciones irregulares con partes relacionadas.`,
    sources: [
      { label: "La Tercera", url: "https://www.latercera.com/pulso/noticia/socio-minoritario-de-red-megacentro-inicia-tres-arbitrajes-y-denuncia-multiples-irregularidades/B4ZF3L2JZVBX5COIRU4IBEX4CQ/" }
    ]
  },
  {
    id: 7,
    manager: "onestream", managerLabel: "OneStream",
    severity: "green",
    keywords: [],
    title: "Sin noticias nuevas en el período — última alerta: demanda por take-private $6.400M con Hg Capital (feb 2026)",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `No se detectaron noticias publicadas entre el 28 y 31 de mayo de 2026. <strong>Última alerta conocida (feb 2026):</strong> demanda activa en Illinois acusando al directorio de incumplimiento de deberes fiduciarios en el take-private de $6.400M liderado por Hg Capital a $24/acción.`,
    sources: [
      { label: "Bloomberg Law", url: "https://news.bloomberglaw.com/litigation/onestream-investor-sues-to-stop-6-4-billion-take-private-deal" }
    ]
  },
  {
    id: 8,
    manager: "credicorp", managerLabel: "Credicorp Capital",
    severity: "green",
    keywords: [],
    title: "Sin noticias nuevas en el período — última alerta: cassation SMV pendiente + compra cuotas Sartor (feb 2026)",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `No se detectaron noticias publicadas entre el 28 y 31 de mayo de 2026. <strong>Última alerta conocida (feb 2026):</strong> SMV de Perú requirió explicar no declaración de multa de 510 UIT como hecho relevante; cassation ante Corte Suprema peruana pendiente. Credicorp Capital comprometió US$125,3M para rescatar clientes afectados por quiebra de Sartor AGF.`,
    sources: [
      { label: "StockTitan", url: "https://www.stocktitan.net/sec-filings/BAP/6-k-credicorp-ltd-current-report-foreign-issuer-10f4a142b558.html" }
    ]
  },
  {
    id: 9,
    manager: "hellmanfriedman", managerLabel: "Hellman & Friedman",
    severity: "green",
    keywords: [],
    title: "Sin noticias nuevas en el período — última alerta: demanda Delaware por venta Snap One (jun 2025)",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `No se detectaron noticias publicadas entre el 28 y 31 de mayo de 2026. <strong>Última alerta conocida (jun 2025):</strong> demanda activa en Corte de Chancery de Delaware acusando a H&F de priorizar su salida sobre los accionistas públicos en la venta de Snap One a Resideo por $1.400M.`,
    sources: [
      { label: "Bloomberg Law", url: "https://news.bloomberglaw.com/esg/jpmorgan-hellman-friedman-moelis-sued-over-1-4-billion-deal" }
    ]
  },
  {
    id: 10,
    manager: "thomabravo", managerLabel: "Thoma Bravo",
    severity: "green",
    keywords: [],
    title: "Sin noticias nuevas en el período — última alerta: pérdida $5.000M en Medallia bajo escrutinio (abr 2026)",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `No se detectaron noticias publicadas entre el 28 y 31 de mayo de 2026. <strong>Última alerta conocida (abr 2026):</strong> pérdida de ~$5.000M en inversión en Medallia, descrita como uno de los mayores fracasos en la historia del PE de software, bajo escrutinio público.`,
    sources: [
      { label: "Puck News", url: "https://puck.news/five-billion-dollar-private-equity-wipeout-thoma-bravos-medallia-miss/" }
    ]
  },
  {
    id: 11,
    manager: "toesca", managerLabel: "Toesca AGF",
    severity: "green",
    keywords: [],
    title: "Sin noticias nuevas en el período — última alerta: designada liquidadora de Sartor AGF con caídas hasta 85% (ago 2025)",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `No se detectaron noticias publicadas entre el 28 y 31 de mayo de 2026. <strong>Última alerta conocida (ago 2025):</strong> CMF designó a Toesca AGF como liquidadora de los fondos de Sartor AGF. PwC y Deloitte revelaron caídas de hasta 85% en los fondos. Proceso de liquidación activo con plazo de 36 meses.`,
    sources: [
      { label: "Diario Financiero", url: "https://www.df.cl/mercados/fondos-de-inversion/sartor-informes-de-pwc-y-deloitte-revelaron-caidas-de-hasta-85-en-fondos" }
    ]
  },
  {
    id: 12,
    manager: "moneda", managerLabel: "Moneda Asset Management",
    severity: "green",
    keywords: [],
    title: "Sin noticias nuevas en el período — última alerta: evalúa acciones legales por pérdida US$30M en Nova Austral (ene 2025)",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `No se detectaron noticias publicadas entre el 28 y 31 de mayo de 2026. <strong>Última alerta conocida (ene 2025):</strong> Moneda Asset Management evaluaba acciones legales contra exresponsables de Nova Austral tras pérdida de US$30M en la salmonera con deudas totales de US$559M.`,
    sources: [
      { label: "SeafoodSource", url: "https://www.seafoodsource.com/news/premium/business-finance/investor-sues-former-managers-directors-of-beleaguered-nova-austral-for-fraud" }
    ]
  },

  /* ══ SIN ALERTAS HISTÓRICAS ════════════════════════ */
  {
    id: 13,
    manager: "harbourvest", managerLabel: "HarbourVest Partners",
    severity: "green", keywords: [],
    title: "Sin noticias en el período — sin alertas regulatorias activas",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `No se detectaron noticias publicadas entre el 28 y 31 de mayo de 2026, ni alertas regulatorias, demandas ni investigaciones activas. HarbourVest gestiona más de <strong>$161.000M en AUM</strong> a marzo 2026.`,
    sources: [{ label: "HarbourVest", url: "https://www.harbourvest.com" }]
  },
  {
    id: 14,
    manager: "flintglobal", managerLabel: "Flint Global",
    severity: "green", keywords: [],
    title: "Sin noticias en el período — sin alertas regulatorias activas",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `No se detectaron noticias publicadas entre el 28 y 31 de mayo de 2026, ni alertas regulatorias, demandas ni investigaciones activas. Flint Global completó en enero 2026 la entrada de Cinven como socio mayoritario a una valoración de ~£190M.`,
    sources: [{ label: "Flint Global", url: "https://flint-global.com" }]
  },
  {
    id: 15,
    manager: "patiocomer", managerLabel: "Patio Comercial",
    severity: "green", keywords: [],
    title: "Sin alertas en el período — utilidades suben 160% en Q1 2026",
    date: "22 de mayo de 2026", isoDate: "2026-05-22",
    body: `No se detectaron alertas regulatorias entre el 28 y 31 de mayo de 2026. Patio Comercial (filial de Grupo Patio, independiente de las investigaciones a Antonio Jalaff) reportó un alza de <strong>160%</strong> en utilidades en Q1 2026, alcanzando $5.364 millones.`,
    sources: [{ label: "Diario Financiero", url: "https://www.df.cl/empresas/retail/filial-comercial-de-grupo-patio-eleva-en-160-sus-ganancias-al-consolidar" }]
  },
  {
    id: 16,
    manager: "linkcapital", managerLabel: "Link Capital Partners AGF",
    severity: "green", keywords: [],
    title: "Sin noticias en el período — entidad vigente y sin sanciones ante CMF",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `No se detectaron noticias publicadas entre el 28 y 31 de mayo de 2026, ni alertas regulatorias activas. Link Capital Partners AGF (RUT 76963034-1) se mantiene vigente ante la CMF.`,
    sources: [{ label: "CMF Chile", url: "https://www.cmfchile.cl/institucional/mercados/entidad.php?mercado=V&rut=76963034&grupo=&tipoentidad=RGAGF" }]
  },
  {
    id: 17,
    manager: "volcom", managerLabel: "Volcom Capital AGF",
    severity: "green", keywords: [],
    title: "Sin noticias en el período — sin sanciones CMF, US$6.000M captados",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `No se detectaron noticias publicadas entre el 28 y 31 de mayo de 2026, ni alertas regulatorias activas. Volcom Capital AGF mantiene alianzas con Ardian, CVC, Blackstone y otros gestores internacionales.`,
    sources: [{ label: "Diario Financiero", url: "https://www.df.cl/mercados/bolsa-monedas/volcom-capital-estudia-acciones-legales-tras-acusaciones-por-supuesto" }]
  },
  {
    id: 18,
    manager: "warburgpincus", managerLabel: "Warburg Pincus",
    severity: "green", keywords: [],
    title: "Sin noticias en el período — sin alertas regulatorias activas",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `No se detectaron noticias publicadas entre el 28 y 31 de mayo de 2026, ni alertas regulatorias activas. Warburg Pincus gestiona más de <strong>$87.000M en AUM</strong>.`,
    sources: [{ label: "Warburg Pincus", url: "https://www.warburgpincus.com" }]
  },
  {
    id: 19,
    manager: "activaalt", managerLabel: "Activa Alternative Assets",
    severity: "green", keywords: [],
    title: "Sin noticias en el período — sin alertas regulatorias activas",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `No se detectaron noticias publicadas entre el 28 y 31 de mayo de 2026, ni alertas regulatorias, demandas ni investigaciones activas.`,
    sources: [{ label: "Activa", url: "https://www.activaalternativeassets.com" }]
  },
  {
    id: 20,
    manager: "activadebt", managerLabel: "Activa Private Debt",
    severity: "green", keywords: [],
    title: "Sin noticias en el período — sin alertas regulatorias activas",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `No se detectaron noticias publicadas entre el 28 y 31 de mayo de 2026, ni alertas regulatorias, demandas ni investigaciones activas.`,
    sources: [{ label: "Activa", url: "https://www.activaalternativeassets.com/english/investment-areas/private-debt.html" }]
  },
  {
    id: 21,
    manager: "banchile", managerLabel: "Banchile AGF",
    severity: "green", keywords: [],
    title: "Sin noticias en el período — sin alertas regulatorias activas",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `No se detectaron noticias publicadas entre el 28 y 31 de mayo de 2026, ni alertas regulatorias, demandas ni investigaciones activas ante la CMF.`,
    sources: [{ label: "Banchile Inversiones", url: "https://www.banchileinversiones.cl" }]
  },
  {
    id: 22,
    manager: "blackstonesp", managerLabel: "Blackstone Strategic Partners",
    severity: "green", keywords: [],
    title: "Sin noticias en el período — sin alertas regulatorias activas",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `No se detectaron noticias publicadas entre el 28 y 31 de mayo de 2026, ni alertas regulatorias ni litigios activos específicos para Blackstone Strategic Partners.`,
    sources: [{ label: "Blackstone", url: "https://www.blackstone.com" }]
  },
  {
    id: 23,
    manager: "btgpactual", managerLabel: "BTG Pactual AGF",
    severity: "green", keywords: [],
    title: "Sin noticias en el período — sin alertas regulatorias activas",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `No se detectaron noticias publicadas entre el 28 y 31 de mayo de 2026, ni alertas regulatorias, demandas ni multas activas ante la CMF.`,
    sources: [{ label: "BTG Pactual", url: "https://www.btgpactual.com" }]
  },
  {
    id: 24,
    manager: "cmbprime", managerLabel: "CMB Prime AGF",
    severity: "green", keywords: [],
    title: "Sin noticias en el período — sin alertas regulatorias activas",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `No se detectaron noticias publicadas entre el 28 y 31 de mayo de 2026, ni alertas regulatorias activas ante la CMF.`,
    sources: [{ label: "CMF Chile", url: "https://www.cmfchile.cl" }]
  },
  {
    id: 25,
    manager: "cumplo", managerLabel: "Cumplo AGF",
    severity: "green", keywords: [],
    title: "Sin noticias en el período — sin alertas regulatorias activas",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `No se detectaron noticias publicadas entre el 28 y 31 de mayo de 2026, ni alertas regulatorias activas ante la CMF.`,
    sources: [{ label: "Cumplo", url: "https://www.cumplo.cl" }]
  },
  {
    id: 26,
    manager: "gsicapital", managerLabel: "GSI Capital AGF",
    severity: "green", keywords: [],
    title: "Sin noticias en el período — sin alertas regulatorias activas",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `No se detectaron noticias publicadas entre el 28 y 31 de mayo de 2026, ni alertas regulatorias activas ante la CMF.`,
    sources: [{ label: "CMF Chile", url: "https://www.cmfchile.cl" }]
  },
  {
    id: 27,
    manager: "hgcapital", managerLabel: "HG Capital",
    severity: "green", keywords: [],
    title: "Sin noticias en el período — sin alertas regulatorias activas",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `No se detectaron noticias publicadas entre el 28 y 31 de mayo de 2026, ni alertas regulatorias activas. HG Capital lidera el take-private de OneStream (NASDAQ: OS) por $6.400M, actualmente en proceso de cierre.`,
    sources: [{ label: "HG Capital", url: "https://www.hgcapital.com" }]
  },
  {
    id: 28,
    manager: "hggenesis", managerLabel: "HG Genesis",
    severity: "green", keywords: [],
    title: "Sin noticias en el período — sin alertas regulatorias activas",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `No se detectaron noticias publicadas entre el 28 y 31 de mayo de 2026, ni alertas regulatorias activas.`,
    sources: [{ label: "HG Capital", url: "https://www.hgcapital.com" }]
  },
  {
    id: 29,
    manager: "independencia", managerLabel: "Independencia AGF",
    severity: "green", keywords: [],
    title: "Sin noticias en el período — sin alertas regulatorias activas",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `No se detectaron noticias publicadas entre el 28 y 31 de mayo de 2026, ni alertas regulatorias activas ante la CMF.`,
    sources: [{ label: "Independencia AGF", url: "https://www.independencia.cl" }]
  },
  {
    id: 30,
    manager: "linzor", managerLabel: "Linzor Capital Partners",
    severity: "green", keywords: [],
    title: "Sin noticias en el período — sin alertas regulatorias activas",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `No se detectaron noticias publicadas entre el 28 y 31 de mayo de 2026, ni alertas regulatorias activas.`,
    sources: [{ label: "Linzor Capital", url: "https://www.linzor.com" }]
  },
  {
    id: 31,
    manager: "megacentroagf", managerLabel: "Megacentro AGF",
    severity: "green", keywords: [],
    title: "Sin noticias en el período — sin alertas regulatorias activas",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `No se detectaron noticias publicadas entre el 28 y 31 de mayo de 2026, ni alertas regulatorias activas ante la CMF.`,
    sources: [{ label: "CMF Chile", url: "https://www.cmfchile.cl" }]
  },
  {
    id: 32,
    manager: "newmountain", managerLabel: "New Mountain Capital",
    severity: "green", keywords: [],
    title: "Sin noticias en el período — sin alertas regulatorias activas",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `No se detectaron noticias publicadas entre el 28 y 31 de mayo de 2026, ni alertas regulatorias activas. New Mountain Capital gestiona ~$55.000M en AUM.`,
    sources: [{ label: "New Mountain Capital", url: "https://www.newmountaincapital.com" }]
  },
  {
    id: 33,
    manager: "oaktree", managerLabel: "Oaktree Capital Management",
    severity: "green", keywords: [],
    title: "Sin noticias nuevas en el período — sin alertas regulatorias activas",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `No se detectaron alertas regulatorias nuevas entre el 28 y 31 de mayo de 2026. Oaktree Capital Management (~$193.000M AUM, filial de Brookfield) opera con normalidad.`,
    sources: [{ label: "Oaktree", url: "https://www.oaktreecapital.com" }]
  },
  {
    id: 34,
    manager: "picton", managerLabel: "Picton AGF",
    severity: "green", keywords: [],
    title: "Sin noticias en el período — sin alertas regulatorias activas",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `No se detectaron noticias publicadas entre el 28 y 31 de mayo de 2026, ni alertas regulatorias activas ante la CMF.`,
    sources: [{ label: "CMF Chile", url: "https://www.cmfchile.cl" }]
  },
  {
    id: 35,
    manager: "southerncross", managerLabel: "Southern Cross",
    severity: "green", keywords: [],
    title: "Sin noticias en el período — sin alertas regulatorias activas",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `No se detectaron noticias publicadas entre el 28 y 31 de mayo de 2026, ni alertas regulatorias activas.`,
    sources: [{ label: "Southern Cross", url: "https://www.southerncrossgroup.com" }]
  },
  {
    id: 36,
    manager: "vistaequity", managerLabel: "Vista Equity Partners",
    severity: "green", keywords: [],
    title: "Sin noticias en el período — sin alertas regulatorias activas",
    date: "28 de mayo de 2026", isoDate: "2026-05-28",
    body: `No se detectaron noticias publicadas entre el 28 y 31 de mayo de 2026, ni alertas regulatorias activas. Vista Equity Partners gestiona ~$100.000M en AUM.`,
    sources: [{ label: "Vista Equity", url: "https://www.vistaequitypartners.com" }]
  }

];
