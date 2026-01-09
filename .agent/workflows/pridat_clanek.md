---
description: Jak přidat nový článek na blog
---

# Jak přidat nový článek

Tento proces slouží k přidání nového článku do souboru `src/data/posts.ts` a jeho nasazení na web.

## 1. Příprava obrázku
1.  Najdi nebo vygeneruj kvalitní obrázek (poměr stran 16:9).
2.  Pojmenuj ho bez diakritiky, např. `novy-clanek-tema.jpg`.
3.  Ulož ho do složky: `public/images/blog/`.

## 2. Přidání textu
1.  Otevři soubor `src/data/posts.ts`.
2.  Na začátek pole `blogPosts` přidej nový objekt článku.
3.  Použij tuto šablonu:

```typescript
{
  slug: 'nazev-clanku-v-url', // např. 'kurkuma-ucinky'
  title: 'Nadpis článku',
  excerpt: 'Krátký úvod (perex), který se zobrazí na hlavní stránce.',
  content: `
    <h2>Podnadpis</h2>
    <p>Text odstavce...</p>
    <h2>Další sekce</h2>
    <p>Další text...</p>
  `,
  date: '2026-0X-XX', // Dnešní datum
  readTime: 'X min čtení',
  metaDescription: 'Meta popis pro Google (cca 150 znaků).',
  imageUrl: '/images/blog/novy-clanek-tema.jpg', // Cesta k obrázku
  category: 'Název kategorie', // např. 'Bylinky'
  keyTakeaways: [
    "Bod 1",
    "Bod 2",
    "Bod 3"
  ],
  references: [
    "Citace studie 1...",
    "Citace studie 2..."
  ]
},
```

## 3. SEO Kontrola (Sitemap)
- Nemusíš dělat nic! Soubor `sitemap.xml` se vygeneruje automaticky po nasazení.

## 4. Nasazení (Release)
1.  Otevři terminál.
2.  Spusť příkaz pro nahrání změn:
    ```bash
    npx vercel --prod
    ```
3.  Počkej na potvrzení. Nový článek se objeví na webu do pár sekund.
