export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string; // HTML string
  date: string;
  readTime: string;
  metaDescription: string;
  imageUrl: string;
  category: string;
  keyTakeaways: string[];
  references?: string[]; // Scientific citations
  scientificDisclaimer?: boolean; // Show strict medical disclaimer
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'ashwagandha-ucinky-skusenosti',
    title: 'Ashwagandha (Withania somnifera): Klinická analýza adaptogenu pro modulaci HPA osy',
    excerpt: 'Farmakologický pohled na withanolidy. Jak přesně tato bylina snižuje kortizol a ovlivňuje GABA receptory? Protokoly pro cyklování a standardizace extraktů (KSM-66).',
    metaDescription: 'Mechanismus účinku withanolidů na HPA osu. Snížení kortizolu, vliv na štítnou žlázu (T3/T4) a testosteron. Rozdíl mezi extraktem z kořene a listů.',
    date: '2026-01-02',
    readTime: '10 min čtení',
    imageUrl: '/images/blog/ashwagandha_roots_premium_1767793313192.png',
    category: 'Suplementy',
    scientificDisclaimer: true,
    keyTakeaways: [
      "Pomůže vám vypnout hlavu a zklidnit stres (snižuje kortizol).",
      "Dodá tělu energii, abyste měli sílu nejen na cvičení.",
      "Kvalitní extrakt (KSM-66) funguje lépe než obyčejný prášek.",
      "Nefunguje hned – dejte tomu alespoň měsíc pravidelného užívání."
    ],
    references: [
      "Chandrasekhar, K., et al. (2012). A prospective, randomized double-blind, placebo-controlled study of safety and efficacy of a high-concentration full-spectrum extract of ashwagandha root in reducing stress and anxiety in adults. Indian journal of psychological medicine.",
      "Wankhede, S., et al. (2015). Examining the effect of Withania somnifera supplementation on muscle strength and recovery: a randomized controlled trial. Journal of the International Society of Sports Nutrition.",
      "Choudhary, D., et al. (2017). Efficacy of Ashwagandha (Withania somnifera [L.] Dunal) in improving cardiorespiratory endurance in healthy athletic adults."
    ],
    content: `
      <h2>Co to vlastně dělá? (Vysvětlení pro lidi)</h2>
      <p>Představte si vaše tělo jako dům s centrálním termostatem, který řídí stres. Tomuto termostatu říkáme <strong>osa HPA</strong> (takový velín v mozku). Když jste ve stresu, termostat se zasekne na "horko" a do těla se valí stresový hormon kortizol. Ashwagandha funguje jako opravář, který tento termostat promaže a vrátí do normálu.</p>

      <h3>1. Méně stresu, více klidu</h3>
      <p>Možná znáte ten pocit, kdy jste "přetažení" a nemůžete vypnout hlavu. To často způsobuje nedostatek látky zvané <strong>GABA</strong>, což je taková "brzda" pro váš mozek. Bioaktivní látky v Ashwagandě (withanolidy) fungují podobně jako tato brzda – pomohou zklidnit rozjeté myšlenky a vy se konečně uvolníte. Studie potvrzují, že díky tomu klesá hladina škodlivého kortizolu až o 30 %.</p>

      <h3>2. Energie a svaly (nejen pro muže)</h3>
      <p>Když je tělo ve stresu, "krade" si stavební látky určené pro tvorbu pohlavních hormonů, aby mohlo vyrábět ještě více kortizolu. Říkáme tomu "pregnenolonová krádež". Ashwagandha tento začarovaný kruh zastaví. Tím, že sníží stres, zbyde tělu dostatek energie a materiálu na tvorbu testosteronu. Výsledek? Více elánu, síly a lepší regenerace po cvičení.</p>

      <h2>Jak vybrat tu správnou?</h2>
      <p>Není Ashwagandha jako Ashwagandha. Často se setkáte s levným práškem ze sušeného kořene, který ale skoro neúčinkuje. Abyste pocítili rozdíl, hledejte tzv. <strong>standardizovaný extrakt</strong>. To znamená, že výrobce garantuje sílu byliny.</p>
      <ul>
        <li><strong>KSM-66®:</strong> Zlatý standard. Je to čistý výtažek z kořene, který má sílu přesně tak akorát – uklidní, ale neuspí. Ideální na den.</li>
        <li><strong>Sensoril®:</strong> Silnější kalibr. Bere se i z listů, je velmi silný a hodně uklidňuje. Hodí se spíše na noc pro těžké nespavce.</li>
      </ul>

      <h2>Jak ji brát?</h2>
      <p>Pro začátek zkuste **300–600 mg denně** (nejlépe KSM-66). Účinek nepřijde hned po první tabletce, je to maraton, ne sprint. Dejte tomu alespoň 2–4 týdny. Po 2 měsících si dejte 14 dní pauzu, aby si tělo nezvyklo.</p>
    `
  },
  {
    slug: 'vitamin-d3-k2-imunita',
    title: 'Vitamin D3 + K2: Synergická regulace kalciového metabolismu',
    excerpt: 'Biochemie kalciferolu. Proč je D3 ve skutečnosti prohormon a jak K2 (MK-7) aktivuje Matrix GLA Protein pro prevenci arteriální kalcifikace?',
    date: '2026-01-08',
    readTime: '9 min čtení',
    category: 'Vitamíny',
    imageUrl: '/images/blog/vitamind3_sun_abstract_1767793387815.png',
    metaDescription: 'Metabolická dráha Vitaminu D. Vztah mezi 25(OH)D a 1,25(OH)2D. Role Vitamínu K2 při karboxylaci osteokalcinu. Dávkování podle krevních testů.',
    scientificDisclaimer: true,
    keyTakeaways: [
      "D3 je palivo pro imunitu, ale sám o sobě nestačí.",
      "K2 funguje jako dopravní policista – pošle vápník do kostí, ne do cév.",
      "Většina lidí má v zimě nedostatek, proto jsme často nemocní.",
      "Berte je vždy společně, ideálně s jídlem, které obsahuje tuk."
    ],
    references: [
      "Holick, M. F. (2007). Vitamin D deficiency. New England Journal of Medicine.",
      "Vermeer, C. (2012). Vitamin K: the effect on health beyond coagulation – an overview. Food & Nutrition Research.",
      "Rheaume-Bleue, K. (2011). Vitamin K2 and the Calcium Paradox: How a Little-Known Vitamin Could Save Your Life."
    ],
    content: `

      <h2>Vitamín D3: Palivo pro imunitu</h2>
  <p>Sluníčko je fajn, ale v Česku nám svítí "správně" jen asi 5 měsíců v roce.Od října do dubna jdou sluneční paprsky pod takovým úhlem, že se vitamín D v kůži zkrátka nevyrobí.A proč ho potřebujeme ? Není to jen vitamín, funguje spíše jako hormon.Dává "rozkazy" vaší imunitě, aby byla v pohotovosti(tvorba přírodních antibiotik), a říká buňkám, jak se mají správně dělit.</p>

    <h2>Proč K2 ? Příběh o dopravním policistovi</h2>
      <p>Tady přichází ten háček.Když zvýšíte příjem "Déčka", vaše tělo začne z potravy vstřebávat obrovské množství vápníku.To zní dobře, ne ? Ale pozor – samotný vápník je hloupý.Neví, kam má jít.</p>
        <p>Bez pomoci se vápník rád usazuje tam, kde nechceme – v cévách(kalficikace), v ledvinách(kameny) nebo v měkkých tkáních.A tady nastupuje ** Vitamín K2 **.Představte si ho jako ** dopravního policistu **, který stojí na křižovatce a říká vápníku: </p>
          <ul>
          <li><em>"Ty nechoď do cév, tam bys udělal neplechu."</em></li>
          <li><em>"Ty jdi rovnou do kostí a zubů, tam jsi potřeba."</em></li>
          </ul>
          <p>Proto je kombinace D3 + K2(ideálně forma MK - 7) klíčová.D3 vápník "pozve dovnitř" a K2 ho "uklidí na správné místo".</p>

            <h2>Kolik brát ?</h2>
              <p>Staré poučky o 400 IU denně jsou pro dospělého člověka v zimě jako kapka v moři.Moderní medicína a funkční lékaři se shodují, že bezpečný a funkční střed je někde mezi ** 2000 až 4000 IU denně **.Nebojte se v zimě přitlačit, v létě naopak můžete ubrat, pokud jste hodně venku.</p>
                `
  },
  {
    slug: 'horcik-magnesium-formy',
    title: 'Není hořčík jako hořčík: Klinický průvodce formami absorpce (2026)',
    excerpt: 'Bisglycinát, malát, nebo L-treonát? Detailní rozbor farmakokinetiky hořčíku. Která forma proniká hematoencefalickou bariérou a kterou zvolit pro svalovou regeneraci?',
    date: '2026-01-04',
    readTime: '12 min čtení',
    category: 'Minerály',
    imageUrl: '/images/blog/magnesium_mineral_abstract_1767793352819.png',
    metaDescription: 'Vědecké srovnání forem hořčíku. Absorpční křivky bisglycinátu vs. oxidu. Vliv na GABA receptory a produkci ATP. Dávkovací protokoly.',
    scientificDisclaimer: true,
    keyTakeaways: [
      "Nekupujte levný 'Oxid' v lékárně, skoro se nevstřebá a prožene vás.",
      "Na spaní a zklidnění: Bisglycinát (skvělý večer).",
      "Na energii po ránu: Malát (nakopne jako káva, ale zdravě).",
      "Pro mozek a paměť: L-Treonát (projde až do mozku)."
    ],
    references: [
      "Schuchardt, J. P., & Hahn, A. (2017). Intestinal Absorption and Factors Influencing Bioavailability of Magnesium-An Update. Current nutrition and food science.",
      "Boyle, N. B., Lawton, C., & Dye, L. (2017). The Effects of Magnesium Supplementation on Subjective Anxiety and Stress-A Systematic Review.",
      "Slutsky, I., et al. (2010). Enhancement of learning and memory by elevating brain magnesium. Neuron."
    ],
    content: `
      <h2>Proč jsme unavení a ve stresu?</h2>
      <p>Hořčík je palivo pro naše buňky. Podílí se na výrobě energie (ATP) – bez něj buňkám doslova "dochází baterky". Navíc funguje jako přírodní "zklidňovač". Představte si nervové receptory jako zámky a hořčík jako klíč, který je zamyká, aby nebyly přetížené. Když hořčík chybí, nervy jsou neustále v pozoru, což cítíte jako vnitřní neklid, tiky v oku nebo křeče.</p>

      <h2>Není hořčík jako hořčík (Vyberte si správně)</h2>
      <p>V lékárně často dostanete "Oxid hořečnatý". To je bohužel vyhození peněz oknem. Vstřebá se z něj jen asi 4 % a zbytek vás jen prožene na záchodě. Aby hořčík fungoval, musí být navázaný na "nosič", který ho propašuje do krve.</p>

      <h3>1. Bisglycinát: Na spánek a klid</h3>
      <p>Tady je hořčík navázaný na aminokyselinu glycin. Ta má úžasnou vlastnost – zklidňuje mozek.
      <br><strong>Kdy brát: </strong> Večer, hodinu před spaním.<br>
      <strong>Efekt: </strong> Hlubší spánek, vypnutí hlavy po práci, svalová regenerace.</p>

      <h3>2. Malát: Na energii a únavu</h3>
      <p>Hořčík ve vazbě na kyselinu jablečnou. Ta se účastní výroby energie v buňkách.
      <br><strong>Kdy brát: </strong> Ráno nebo před tréninkem.<br>
      <strong>Efekt: </strong> "Nakopnutí" bez nervozity (na rozdíl od kofeinu), řešení chronické únavy.</p>

      <h3>3. L-Treonát: Pro mozek paměť</h3>
      <p>Speciální nová forma, která jako jediná umí efektivně projít přímo do mozku.
      <br><strong>Kdy brát: </strong> Kdykoliv během dne.<br>
      <strong>Efekt: </strong> Lepší soustředění, paměť ("mlha v hlavě") a ochrana mozkových buněk.</p>

      <h2>Kolik je tak akorát?</h2>
      <p>Doporučená dávka je cca 375 mg elementárního hořčíku. Pokud sportujete nebo máte hodně stresu, klidně to zvedněte. Nebojte se, hořčíkem se prakticky nedá předávkovat – nejhorší, co se stane, je, že strávíte více času na toaletě (signál, že máte ubrat).</p>
    `
  },
  {
    slug: 'omega-3-rybi-tuk',
    title: 'Omega-3 EPA/DHA: Molekulární mechanismy protizánětlivého účinku',
    excerpt: 'Analýza poměru Omega-6:Omega-3 v buněčných membránách. Proč je EPA klíčová pro syntézu eikosanoidů a jak vysoké dávky jsou potřeba pro klinický efekt?',
    date: '2026-01-05',
    readTime: '14 min čtení',
    category: 'Zdravé tuky',
    imageUrl: '/images/blog/omega3_oil_capsules_1767793370369.png',
    metaDescription: 'Detailní rozbor EPA a DHA. Vliv na fluiditu buněčných membrán, oxidaci LDL a syntézu resolvinů. Rozdíl mezi triglyceridy a etylestery.',
    keyTakeaways: [
      "Omega-3 snižují záněty v těle.",
      "Jezte tučné ryby nebo kvalitní rybí olej.",
      "EPA je pro srdce, DHA pro mozek.",
      "Rostlinné zdroje (ořechy) nestačí, tělo je špatně zpracuje."
    ],
    references: [
      "Calder, P. C. (2017). Omega-3, fatty acids and inflammatory processes: from molecules to man. Biochemical Society Transactions.",
      "Harris, W. S. (2010). The Omega-3 Index: Clinical Utility for Therapeutic Intervention. Current Cardiology Reports.",
      "Dyerberg, J., et al. (2010). Bioavailability of marine n-3 fatty acid formulations. Prostaglandins, Leukotrienes and Essential Fatty Acids."
    ],
    content: `
      <h2>Válka tuků: Omega-6 vs. Omega-3</h2>
      <p>Představte si vaše tělo jako staveniště. Omega-6 mastné kyseliny (ze slunečnicového oleje, smažených jídel) jsou jako dělníci, kteří umí rychle stavět, ale dělají u toho nepořádek a zánět. Omega-3 jsou naopak úklidová četa, která zánět hasí. V naší moderní stravě máme bohužel obrovskou převahu "dělníků" (15:1), takže tělo je v neustálém tichém zánětu.</p>

      <h2>EPA a DHA: Dva různí specialisté</h2>
      <p>Rybí tuk obsahuje dvě hlavní složky a každá dělá něco jiného: </p>

      <h3>EPA: Hasič zánětu</h3>
      <p>EPA je klíčová pro vaše srdce a cévy. Jejím hlavním úkolem je "chladit" zánětlivé procesy v těle. Pokud vás bolí klouby nebo máte vysoký cholesterol, potřebujete hlavně EPA.</p>

      <h3>DHA: Architekt mozku</h3>
      <p>DHA je stavební kámen. Vaše mozkové buňky a sítnice oka jsou tvořeny převážně z DHA. Díky ní jsou membrány buněk pružné a signály v mozku létají rychle. Je kritická pro paměť, soustředění a zdravý zrak.</p>

      <h2>Pozor na žluknutí (TOTOX)</h2>
      <p>Rybí olej je extrémně citlivý na vzduch a teplo. Pokud se zkazí (zoxiduje), stává se z léku opak – toxin, který tělu škodí.
      <br><strong>Tip: </strong> Jakmile koupíte rybí olej, kousněte do kapsle. Měla by chutnat jemně po rybě. Pokud cítíte silnou rybinu nebo pachuť, je olej žluklý. Vyhazujte ho. Hledejte značky s certifikací "TOTOX" (číslo ukazující čerstvost, čím nižší, tím lepší).</p>

      <h2>Stačí mi lněné semínko?</h2>
      <p>Bohužel ne. Rostlinné zdroje (lněné semínko, ořechy) obsahují formu ALA. Lidské tělo ji musí pracně přeměnit na EPA a DHA, ale umí to jen velmi špatně (s účinností pod 5 %). Pokud nejíte ryby, jedinou funkční rostlinnou náhradou je olej z mořských řas.</p>
    `
  },

  {
    slug: 'zinek-top-formy',
    title: 'Zinek a Imunita: Biochemické procesy a antagonismus s mědí',
    excerpt: 'Bisglycinát vs. Pikolinát vs. Oxid. Jak zinek inhibuje replikaci virů? Vliv na konverzi testosteronu (aromatázu) a rizika dlouhodobého předávkování.',
    date: '2026-01-10',
    readTime: '11 min čtení',
    category: 'Minerály',
    imageUrl: '/images/blog/zinc_mineral_texture_1767793412590.png',
    metaDescription: 'Mechanismus účinku zinku na imunitní buňky. Inhibice virové replikace. Vliv na akné a regulaci hormonu DHT. Správný poměr zinku a mědi.',
    scientificDisclaimer: true,
    keyTakeaways: [
      "Klíčový pro imunitu, brání množení virů.",
      "Pro muže: Chrání testosteron a prostatu.",
      "Pomáhá na akné a zdravou pleť.",
      "Pozor: Dlouhodobé vysoké dávky mohou škodit (vyplavují měď).",
      "Nekupujte levné formy, dráždí žaludek."
    ],
    references: [
      "Prasad, A. S. (2013). Discovery of human zinc deficiency: its impact on human health and disease. Advances in Nutrition.",
      "Gupta, M., et al. (2014). Zinc therapy in dermatology: a review. Dermatology research and practice.",
      "Wessels, I., et al. (2017). Zinc as a Gatekeeper of Immune Function. Nutrients."
    ],
    content: `
      <h2>Strážce imunity a hormonů</h2>
      <p>Zinek je takový "manažer" vaší imunity. Je nezbytný pro to, aby se vaše bílé krvinky mohly množit a útočit na viry. Dokáže dokonce přímo zastavit virus v buňce, aby se nemohl kopírovat (blokuje jeho "kopírku" - enzym polymerázu).</p>

      <h2>Chlapi, pozor na testosteron</h2>
      <p>Pro muže je zinek naprostý základ. Funguje jako štít pro testosteron. Brání tomu, aby se testosteron přeměňoval na ženský hormon estrogen (což nechcete). Zároveň pomáhá, aby se neměnil na DHT, což je hormon zodpovědný za vypadávání vlasů a zvětšování prostaty. Zinek tak drží vaše hormony v rovnováze.</p>

      <h2>Zinek a pleť (Akné)</h2>
      <p>Pokud bojujete s akné, zinek může být game-changer. Funguje trojím způsobem: </p>
      <ol>
        <li>Zabíjí bakterie, které akné způsobují.</li>
        <li>Snižuje maštění pleti.</li>
        <li>Mírní zarudnutí a zánět.</li>
      </ol>

      <h2>Past se jménem Měď (Pozor!)</h2>
      <p>Tohle je nejdůležitější pravidlo. V těle funguje zinek a měď jako na houpačce. Když dlouhodobě berete hodně zinku, vytlačíte z těla měď. A bez mědi vám hrozí chudokrevnost a únava.
      <br><strong>Pravidlo: </strong> Pokud berete zinek dlouhodobě (více než 15-20 mg denně), vždy ho doplňte mědí. Ideální poměr je 15 mg zinku na 1 mg mědi.</p>

      <h2>Kterou formu vybrat?</h2>
      <ul>
        <li><strong>Bisglycinát / Pikolinát: </strong> Špičková vstřebatelnost, nedráždí žaludek. Jasná volba.</li>
        <li><strong>Oxid / Sulfát: </strong> Vyhněte se jim. Vstřebají se špatně a bude vám po nich těžko od žaludku.</li>
      </ul>
    `
  },
  {
    slug: 'kolagen-pro-zeny',
    title: 'Hydrolyzované Kolagenové Peptidy: Molekulární hmotnost a syntéza fibroblastů',
    excerpt: 'Proč kolagen v jídle nefunguje stejně jako peptidy? Rozbor typů I, II a III. Vliv na dermální denzitu, hydrataci a proteoglykany v chrupavce.',
    date: '2026-01-12',
    readTime: '13 min čtení',
    category: 'Krása',
    imageUrl: '/images/blog/collagen_water_splash_1767793430260.png',
    metaDescription: 'Vědecký pohled na suplementaci kolagenu. Daltony a molekulární hmotnost. Signální funkce peptidů. Klinické studie elasticity pleti.',
    scientificDisclaimer: true,
    keyTakeaways: [
      "Obyčejný kolagen v jídle na vrásky nefunguje.",
      "Hledejte 'hydrolyzované peptidy' pro pleť.",
      "Rybí kolagen je na pleť, hovězí na klouby.",
      "Bez vitamínu C se kolagen v těle nevytvoří.",
      "Výsledky uvidíte za 2-3 měsíce."
    ],
    references: [
      "Proksch, E., et al. (2014). Oral supplementation of specific collagen peptides has beneficial effects on human skin physiology: a double-blind, placebo-controlled study. Skin pharmacology and physiology.",
      "Bello, A. E., & Oesser, S. (2006). Collagen hydrolysate for the treatment of osteoarthritis and other joint disorders: a review of the literature.",
      "Zague, V. (2008). A new view concerning the effects of collagen hydrolysate intake on skin properties."
    ],
    content: `
      <h2>Proč kolagen v jídle nefunguje?</h2>
      <p>Kolagen je bílkovina. Pokud sníte "obyčejný" kolagen (třeba v tlačence nebo gumových medvídcích), je to pro vaše tělo stejné, jako byste snědli kuřecí prso. Žaludek ho rozloží na prvočinitele a pošle tam, kam zrovna uzná za vhodné (třeba do svalu, ne do vrásek).</p>
      <p>Trik je v tom dostat do těla tzv. <strong>bioaktivní peptidy</strong>. To jsou speciálně "nastrihané" kousky kolagenu, které jsou tak malé, že projdou do krve vcelku. V tu chvíli si tělo myslí: <em>"Aha, v krvi plavou kousky kolagenu, asi se nám někde něco rozbilo!"</em> a začne panikařit. Okamžitě nastartuje opravné procesy a začne vyrábět tuny vlastního, nového kolagenu. Peptidy tedy fungují jako "poslíček se zprávou", ne jen jako stavební materiál.</p>

      <h2>Rybí nebo Hovězí?</h2>
      <ul>
        <li><strong>Rybí (Mořský) kolagen (Typ I): </strong> Jeho struktura je nejpodobnější lidské kůži. Pokud řešíte primárně vrásky, pevnost pleti a vlasy, volte tento.</li>
        <li><strong>Hovězí kolagen (Typ II): </strong> Je vhodnější pro klouby a chrupavky.</li>
      </ul>

      <h2>Bez Vitamínu C to nejde</h2>
      <p>Tohle je kritické. Vitamín C funguje jako "lepidlo", které drží vlákna kolagenu pohromadě. Bez něj se nový kolagen neuspořádá do pevné sítě. Vždy si ke kolagenu dejte sklenici vody s citronem nebo si kupte doplněk, kde už je "céčko" přimíchané.</p>

      <h2>Kdy uvidím výsledky?</h2>
      <p>Kolagen není o instantním zázraku. Pleť se obnovuje pomalu.
      <br><strong>4 týdny: </strong> První známky lepší hydratace pleti.
      <br><strong>8 týdnů: </strong> Měřitelné zlepšení elasticity a redukce vrásek (ověřeno studiemi).
      <br><strong>3 měsíce +: </strong> Znatelný efekt na klouby a chrupavky.</p>
    `
  },
  {
    slug: 'probiotika-a-psychika',
    title: 'Osa Střevo-Mozek: Jak mikrobiom moduluje neurotransmitery a stresovou odpověď',
    excerpt: 'Psychobiotika nejsou sci-fi. Klinická analýza obousměrné komunikace přes Nervus Vagus. Které kmeny (Lactobacillus, Bifidobacterium) prokazatelně zvyšují GABA a Serotonin?',
    date: '2026-01-14',
    readTime: '12 min čtení',
    category: 'Trávení',
    imageUrl: '/images/blog/probiotics_microbiome_abstract_1767793449346.png',
    metaDescription: 'Mechanismus Gut-Brain Axis. Produkce SCFA (butyrátu) a integrity hematoencefalické bariéry. Vliv probiotik na HPA osu a redukci kortizolu.',
    scientificDisclaimer: true,
    keyTakeaways: [
      "Střeva ovlivňují náladu a stres.",
      "Probiotika potřebují vlákninu (prebiotika).",
      "Kysané zelí je dobré, ale na problémy sáhněte po kapslích.",
      "Hledejte produkty s miliardami bakterií (CFU)."
    ],
    references: [
      "Dinan, T. G., & Cryan, J. F. (2013). Melancholic microbes: a link between gut microbiota and depression? Neurogastroenterology & Motility.",
      "Sarkar, A., et al. (2016). Psychobiotics and the Manipulation of Bacteria–Gut–Brain Signals. Trends in Neurosciences.",
      "Bravo, J. A., et al. (2011). Ingestion of Lactobacillus strain regulates emotional behavior and central GABA receptor expression via the vagus nerve via the vagus nerve. PNAS."
    ],
    content: `
      <h2>Střevo a Mozek: Jak si povídají?</h2>
      <p>Dřív jsme si mysleli, že střevo jen tráví jídlo. Dnes víme, že je to váš "druhý mozek". Střevo a hlava jsou propojení tlustým kabelem – bloudivým nervem. Pořád si volají. Pokud máte ve střevech "nepořádek" (špatné bakterie), posílají do mozku zprávy: <em>"Je nám zle, buď ve stresu, boj se!"</em>. A vy pak cítíte úzkost, ani nevíte proč.</p>

      <h2>Štěstí vzniká v břiše</h2>
      <p>Věděli jste, že až 90 % serotoninu (hormonu štěstí a pohody) se tvoří ve střevech? Pokud nemáte v pořádku mikrobiom, nemáte ani dostatek "stavebního materiálu" pro dobrou náladu. Správné bakterie (psychobiotika) umí přímo vyrábět látky, které vás uklidní (např. GABA).</p>

      <h2>Jogurt vs. Tabletky</h2>
      <p>Kysané zelí, kefír nebo kimči jsou super a jezte je denně. Ale pokud řešíte konkrétní problém (deprese, časté nemoci, stavy po antibiotikách), jídlo většinou nestačí. Nevíte totiž, kolik a jaké bakterie v tom zelí zrovna jsou. Kvalitní doporučený doplněk by měl mít: </p>
      <ul>
        <li><strong>Miliardy bakterií: </strong> Hledejte číslo 10–20 miliard CFU (to znamená živých jedinců).</li>
        <li><strong>Ochrana kapsle: </strong> Musí přežít průchod kyselým žaludkem až do střev.</li>
        <li><strong>Konkrétní kmeny: </strong> Např. <em>Lactobacillus rhamnosus</em> je skvělý na psychiku.</li>
      </ul>

      <h2>Nakrmte je (Prebiotika)</h2>
      <p>Probiotika jsou jako semínka trávy. Prebiotika jsou hnojivo. Jedno bez druhého nefunguje. Prebiotika jsou vlastně vláknina, kterou my nestrávíme, ale naše bakterie ji milují. Najdete ji v česneku, cibuli, banánech nebo čekance. Bez vlákniny vám i ta nejdražší probiotika ve střevech "umřou hlady".</p>

      <h2>Kdy to zabere?</h2>
      <p>Na trávení (nafouklé břicho) to poznáte za pár dní. Ale na psychiku a imunitu si musíte počkat. Osidlování střev je pomalý proces, trvá to klidně 1 až 3 měsíce pravidelného užívání.</p>
    `
  }
];
