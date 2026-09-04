from pathlib import Path

from playwright.sync_api import sync_playwright

VIEWPORTS = [
    ("desktop", 1920, 1080),
    ("tablet", 768, 1024),
    ("mobile", 375, 812),
]

PATHS = [
    "/",
    "/blog/",
    "/2023/06/21/montando-a-agenda-de-um-workshop/",
    "/2023/06/21/pensando-fora-da-caixa-estruturas-libertadoras/",
    "/2023/06/21/teoria-u-na-facilitacao/",
    "/2023/06/21/transforme-conflitos-em-oportunidades/",
]

out_dir = Path("/tmp/facilitr-visual-qa")
out_dir.mkdir(parents=True, exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    failures = []

    for name, width, height in VIEWPORTS:
        page = browser.new_page(viewport={"width": width, "height": height})
        for route in PATHS:
            page.goto(f"http://127.0.0.1:4321{route}", wait_until="networkidle")
            slug = "home" if route == "/" else route.strip("/").replace("/", "-")
            page.screenshot(path=str(out_dir / f"{name}-{slug}.png"), full_page=True)
            metrics = page.evaluate(
                """() => {
                  const body = document.body;
                  const doc = document.documentElement;
                  const bigSvgs = [...document.querySelectorAll('.e-font-icon-svg, .elementor-tab-title svg, .elementor-toggle-icon svg')]
                    .map((svg) => {
                      const rect = svg.getBoundingClientRect();
                      return { width: rect.width, height: rect.height, className: svg.getAttribute('class') || '' };
                    })
                    .filter((rect) => rect.width > 80 || rect.height > 80);

                  return {
                    h1Count: document.querySelectorAll('h1').length,
                    authorLinks: document.querySelectorAll('a[href="/author/ananda-academy/"]').length,
                    horizontalOverflow: Math.max(body.scrollWidth, doc.scrollWidth) > window.innerWidth + 1,
                    bigSvgs,
                  };
                }"""
            )
            print(f"{name} {route} {metrics}")
            if metrics["h1Count"] != 1:
                failures.append(f"{name} {route}: expected 1 h1, got {metrics['h1Count']}")
            if metrics["authorLinks"]:
                failures.append(f"{name} {route}: author link still present")
            if metrics["horizontalOverflow"]:
                failures.append(f"{name} {route}: horizontal overflow")
            if metrics["bigSvgs"]:
                failures.append(f"{name} {route}: oversized SVGs {metrics['bigSvgs'][:3]}")
        page.close()

    browser.close()

if failures:
    raise SystemExit("\\n".join(failures))

print(f"screenshots={out_dir}")
