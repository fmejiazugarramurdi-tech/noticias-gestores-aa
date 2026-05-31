"""
fetch_news.py
Busca noticias de los últimos 7 días en Google News RSS
para los 4 gestores de activos alternativos.
Guarda los resultados en pending-news.json (sin clasificar).
La clasificación rojo/amarillo/verde la hace Claude Code.
"""

import json
import sys
from datetime import datetime, timedelta, timezone
from urllib.request import urlopen
from urllib.parse import quote
import xml.etree.ElementTree as ET

MANAGERS = {
    "Lexington Partners":           "lexington",
    "Ares Management":              "ares",
    "Oaktree Capital Management":   "oaktree",
    "Brookfield Asset Management":  "brookfield",
}

DAYS_BACK = int(sys.argv[1]) if len(sys.argv) > 1 else 7
cutoff = datetime.now(timezone.utc) - timedelta(days=DAYS_BACK)


def parse_rss_date(date_str):
    """Parsea fechas RFC 2822 de RSS."""
    from email.utils import parsedate_to_datetime
    try:
        return parsedate_to_datetime(date_str)
    except Exception:
        return None


def fetch_google_news(query, max_items=10):
    """Obtiene artículos de Google News RSS."""
    encoded = quote(query)
    url = f"https://news.google.com/rss/search?q={encoded}&hl=en-US&gl=US&ceid=US:en"
    try:
        with urlopen(url, timeout=15) as r:
            xml_data = r.read()
        root = ET.fromstring(xml_data)
        items = []
        for item in root.findall(".//item")[:max_items]:
            pub_raw = item.findtext("pubDate", "")
            pub_dt  = parse_rss_date(pub_raw)
            if pub_dt and pub_dt < cutoff:
                continue
            items.append({
                "title":     item.findtext("title", "").strip(),
                "link":      item.findtext("link",  "").strip(),
                "published": pub_dt.strftime("%Y-%m-%d") if pub_dt else "",
                "summary":   item.findtext("description", "")[:600].strip(),
            })
        return items
    except Exception as e:
        print(f"  ERROR fetching '{query}': {e}", file=sys.stderr)
        return []


results = []

for name, key in MANAGERS.items():
    print(f"Buscando: {name} …")
    articles = fetch_google_news(name)
    print(f"  → {len(articles)} artículos encontrados (últimos {DAYS_BACK} días)")
    for a in articles:
        results.append({
            "manager":      key,
            "managerLabel": name,
            "title":        a["title"],
            "link":         a["link"],
            "published":    a["published"],
            "summary":      a["summary"],
        })

with open("pending-news.json", "w", encoding="utf-8") as f:
    json.dump(results, f, ensure_ascii=False, indent=2)

print(f"\n✓ {len(results)} noticias guardadas en pending-news.json")
print("  Abre Claude Code y escribe /classify-news para clasificarlas.")
