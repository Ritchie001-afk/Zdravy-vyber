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
  },
  {
    slug: 'kreatin-monohydrat-davkovani',
    title: 'Kreatin Monohydrát: Král suplementů. Proč ho brát a jaký zvolit?',
    excerpt: 'Zvyšuje sílu, zlepšuje regeneraci a pomáhá i mozku. Kreatin není jen pro kulturisty. Podíváme se na vědecká fakta o monohydrátu, dávkování a mýtech o ledvinách.',
    date: '2026-01-16',
    readTime: '10 min čtení',
    category: 'Výkon',
    imageUrl: '/images/blog/creatine_powder_abstract_1767877395182.png',
    metaDescription: 'Vědecká analýza Kreatinu Monohydrátu. ATP resyntéza, vliv na kognitivní funkce a hydrataci svalů. Nasycovací fáze vs. konstantní dávkování.',
    scientificDisclaimer: true,
    keyTakeaways: [
      "Nejvíce prozkoumaný doplněk na světě (bezpečný).",
      "Monohydrát je nejúčinnější forma (ostatní jsou marketing).",
      "Zvyšuje sílu, svaly i paměť.",
      "Nevyžaduje nasycovací fázi, stačí 3-5 g denně.",
      "Zadržuje vodu VE SVALECH, ne v podkoží (to je dobře)."
    ],
    references: [
      "Kreider, R. B., et al. (2017). International Society of Sports Nutrition position stand: safety and efficacy of creatine supplementation in exercise, sport, and medicine. Journal of the International Society of Sports Nutrition.",
      "Avgerinos, K. I., et al. (2018). Effects of creatine supplementation on cognitive function of healthy individuals: A systematic review of randomized controlled trials. Experimental Gerontology.",
      "Rawson, E. S., & Volek, J. S. (2003). Effects of creatine supplementation and resistance training on muscle strength and weightlifting performance. Journal of Strength and Conditioning Research."
    ],
    content: `
      <h2>Palivo pro svaly (Jak funguje ATP)</h2>
      <p>Představte si, že vaše svaly jsou auto. ATP (adenosintrifosfát) je benzín. Když uděláte těžký dřep nebo sprint, benzín (ATP) dojde bleskově rychle – asi za 2 až 3 sekundy. Tělo pak musí vyrobit nový.</p>
      <p>A tady nastupuje kreatin. Kreatin je jako "extra kanystr s benzínem" v kufru. Půjčí svou energii (fosfátovou skupinu) vybitému ATP a bleskově ho dobije. Díky tomu zvládnete udělat o 1–2 opakování v sérii víc. A právě ta opakování navíc dávají svalům signál k růstu.</p>

      <h2>Monohydrát vs. Zbytek světa</h2>
      <p>Možná jste viděli reklamy na "Kreatin HCL", "Kre-Alkalyn" nebo "Kreatin Ethyl Ester". Výrobci tvrdí, že jsou lepší a vstřebatelnější. Věda říká opak.</p>
      <ul>
        <li><strong>Monohydrát: </strong> 99% všech studií bylo děláno na monohydrátu. Je nejlevnější a funguje perfektně. Vstřebatelnost je téměř 100 %.</li>
        <li><strong>Ostatní formy: </strong> Jsou dražší a často méně stabilní (v žaludku se rozpadnou na neúčinný kreatinin dříve, než se dostanou do svalu).</li>
      </ul>
      <p><strong>Verdikt: </strong> Ušetřete peníze a kupte si obyčejný, kvalitní Monohydrát (ideálně s ochrannou známkou <em>Creapure®</em>).</p>

      <h2>Mýty: Ledviny a "Zavodnění"</h2>
      <p>Pořád koluje mýtus, že kreatin ničí ledviny. Toto bylo mnohokrát vyvráceno. U zdravých lidí nemá kreatin na ledviny žádný negativní vliv (a to ani po 5 letech užívání).</p>
      <p>A zavodnění? Ano, kreatin natahuje vodu. Ale natahuje ji <strong>DO SVALOVÝCH BUNĚK</strong>, ne do podkoží. To je skvělé! Hydratovaná buňka je anabolická (lépe roste) a regeneruje. Díky kreatinu budou svaly vypadat plnější a tvrdší, ne oteklé.</p>

      <h2>Kreatin a Mozek (Nečekaný bonus)</h2>
      <p>Váš mozek spotřebovává obrovské množství energie (ATP), stejně jako svaly. Nové studie ukazují, že kreatin skvěle funguje i jako "nootropikum" (látka zlepšující funkce mozku). Zlepšuje krátkodobou paměť a snižuje mentální únavu, hlavně když jste nevyspalí nebo ve stresu. Je to super hack pro studenty a manažery.</p>

      <h2>Jak dávkovat?</h2>
      <p>Zapomeňte na složité "nasycovací fáze" (20 g denně). Jsou zbytečné a jen vás z nich bude bolet břicho.
      <br><strong>Zlatý standard: </strong> Berte <strong>3 až 5 gramů denně</strong> (jedna čajová lžička).<br>
      <strong>Kdy: </strong> Kdykoliv. Není nutné ho brát před tréninkem. Důležitá je dlouhodobá pravidelnost, aby se svaly "nasytily". Berte ho i v dny volna.</p>
    `
  }
  ,
  {
    slug: 'syrovatkovy-protein-whey',
    title: 'Syrovátkový Protein (Whey): Král anabolismu a biologická hodnota',
    excerpt: 'Hydrolýza, izolát nebo koncentrát? Detailní rozbor aminokyselinového profilu (BCAA) a rychlosti absorpce. Proč je syrovátka nadřazená rostlinným zdrojům?',
    date: '2026-01-18',
    readTime: '11 min čtení',
    category: 'Suplementy',
    imageUrl: '/images/blog/whey_protein_molecular_structure_1768898222075.png',
    metaDescription: 'Vědecký rozbor syrovátkového proteinu. Biologická hodnota (BV) a stimulace mTOR dráhy. Kdy zvolit izolát a kdy koncentrát? Leucinový práh.',
    scientificDisclaimer: true,
    keyTakeaways: [
      "Nejkvalitnější zdroj bílkovin pro lidské tělo.",
      "Rychle se vstřebává, ideální po tréninku.",
      "Obsahuje vysoké množství Leucinu (spouštěč růstu).",
      "Izolát je pro ty, co nesnesou laktózu.",
      "Není to 'chemie', je to sušená část mléka."
    ],
    references: [
      "Devries, M. C., & Phillips, S. M. (2015). Supplemental protein in support of muscle mass and health: advantage whey. Journal of Food Science.",
      "Tang, J. E., et al. (2009). Ingestion of whey hydrolysate, casein, or soy protein isolate: effects on mixed muscle protein synthesis at rest and following resistance exercise in young men. Journal of Applied Physiology.",
      "Jäger, R., et al. (2017). International Society of Sports Nutrition Position Stand: protein and exercise."
    ],
    content: `
      <h2>Není bílkovina jako bílkovina</h2>
      <p>Pokud se podíváme na kvalitu bílkovin optikou biochemie, syrovátka (Whey) vyhrává na plné čáře. Proč? Kvůli **Biologické hodnotě (BV)**. To je číslo, které říká, jak efektivně dokáže vaše tělo danou bílkovinu využít pro stavbu svalů. Vejce mají hodnotu 100. Syrovátkový protein má hodnotu 104 až 150 (podle zpracování). Rostlinné zdroje se často pohybují jen kolem 50–70.</p>

      <h2>Leucinový práh: Spínač růstu</h2>
      <p>Aby svaly začaly růst (anabolismus), musíte v krvi překročit určitou hladinu aminokyseliny **Leucin**. Říkáme tomu "leucinový práh". Syrovátka je na leucin extrémně bohatá. Stačí cca 25g proteinu a "spínač" se sepne. U jiných zdrojů byste museli sníst dvojnásobné množství jídla, abyste dosáhli stejného efektu.</p>

      <h2>Koncentrát vs. Izolát vs. Hydro</h2>
      <ul>
        <li><strong>Koncentrát (WPC):</strong> Zlatý standard. Chutná nejlépe, obsahuje trochu tuku a laktózy. Zachovává si prospěšné bioaktivní frakce (imunoglobuliny).</li>
        <li><strong>Izolát (WPI):</strong> Je "přečištěný". Má více bílkovin (90%+) a skoro žádnou laktózu. Ideální do diety nebo pro lidi s intolerancí.</li>
        <li><strong>Hydrolyzát (Hydro):</strong> Je předtrávený enzymy. Vstřebá se bleskově (do 15 min). Je drahý a často hořký. Pro amatéra zbytečný luxus.</li>
      </ul>

      <h2>Kdy ho pít?</h2>
      <p>Díky rychlému vstřebávání je králem v době **po tréninku**, kdy tělo volá po živinách (anabolické okno). Ale upřímně? Důležitější je celkový příjem bílkovin za den (cca 1.6 – 2g na kg váhy). Jestli si dáte protein ráno nebo večer, je sekundární.</p>
    `
  },
  {
    slug: 'melatonin-spanek-modre-svetlo',
    title: 'Melatonin a Architektura spánku: Temná stránka modrého světla',
    excerpt: 'Hormon tmy vs. LED obrazovky. Jak suprachiasmatická jádra řídí cirkadiánní rytmus? Vliv melatoninu na REM fázi a proč ' + "'více neznamená lépe'" + ' v dávkování.',
    date: '2026-01-19',
    readTime: '13 min čtení',
    category: 'Spánek',
    imageUrl: '/images/blog/melatonin_sleep_cycle_abstract_1768898364106.png',
    metaDescription: 'Mechanismus produkce melatoninu v epifýze. Vliv modrého světla (450-480nm) na potlačení sekrece. Optimální dávkování (0.3mg vs 5mg).',
    scientificDisclaimer: true,
    keyTakeaways: [
      "Melatonin není prášek na spaní, je to 'startér' spánku.",
      "Modré světlo (mobil) ho blokuje.",
      "Méně je více: 0.5 mg funguje lépe než 5 mg.",
      "Spánek je nejlepší (a nejlevnější) regenerace.",
      "Brýle blokující modré světlo opravdu fungují."
    ],
    references: [
      "Zhdanova, I. V., et al. (2001). Melatonin treatment for age-related insomnia. The Journal of Clinical Endocrinology & Metabolism.",
      "Reiter, R. J., et al. (1995). Melatonin as an antioxidant: under promises but over delivers. International Journal of Biochemistry & Cell Biology.",
      "Cajochen, C., et al. (2003). Role of melatonin in the regulation of human circadian rhythms and sleep. Journal of Neuroendocrinology."
    ],
    content: `
      <h2>Hormon tmy (Drákula mezi hormony)</h2>
      <p>Melatonin se tvoří v malé žláze v mozku zvané šišinka (epifýza). Ale má to háček – tvoří se **pouze ve tmě**. Jakmile sítnice oka zaznamená světlo (hlavně to modré z mobilů a LED žárovek), výroba se okamžitě zastaví. Proto v dnešní době "světelného smogu" trpíme epidemií nespavosti.</p>

      <h2>Proč vám 5 mg nezabere?</h2>
      <p>V lékárnách a e-shopech se často prodávají obří dávky (3 mg, 5 mg i více). To je z fyziologického hlediska nesmysl. Vaše tělo si přirozeně vyrobí jen asi 0.3 mg. Pokud si vezmete 5 mg, zaplavíte receptory takovým množstvím, že příští den "přeestanou poslouchat" (desenzitivizace).
      <br><strong>Paradox: </strong> Menší dávka (0.3 – 0.5 mg) často funguje lépe a dlouhodoběji než koňská dávka.</p>

      <h2>Architektura spánku</h2>
      <p>Melatonin není sedativum (jako Stilnox). On vás "nevypne". On jen dá tělu signál: <em>"Je noc, začni brzdit metabolismus, sniž teplotu a připrav se na regeneraci."</em> Pomáhá zkrátit dobu usínání a zlepšuje přechod do hlubokých fází spánku, kde se opravují svaly a čistí mozek (glymfatický systém).</p>

      <h2>Biohack: Červené brýle</h2>
      <p>Pokud musíte večer pracovat na počítači, pořiďte si brýle blokující modré světlo. Je to vědecky ověřená metoda, jak "podvést" mozek, aby si myslel, že je tma, i když koukáte do monitoru. Výroba melatoninu tak může běžet na plné obrátky.</p>
    `
  },
  {
    slug: 'kofein-adenosin-vykon',
    title: 'Kofein: Antagonista adenosinu a palivo pro výkon',
    excerpt: 'Molekulární mimikry: Jak kofein blokuje únavu v mozku? Poločas rozpadu (CYP1A2), vliv na kortizol a proč káva před tréninkem zvyšuje oxidaci tuků.',
    date: '2026-01-20',
    readTime: '9 min čtení',
    category: 'Výkon',
    imageUrl: '/images/blog/caffeine_adenosine_receptor_block_1768898516890.png',
    metaDescription: 'Farmakokinetika kofeinu. Antagonismus adenosinových receptorů A1 a A2a. Ergogenní efekt ve vytrvalostním i silovém sportu. Genetika metabolismu.',
    scientificDisclaimer: true,
    keyTakeaways: [
      "Kofein nedodává energii, jen 'půjčuje' tím, že oddálí únavu.",
      "Funguje tak, že v mozku ucpe receptory pro únavu (adenosin).",
      "Ideální dávka: 3-6 mg na kg váhy (cca 200-400 mg).",
      "Pozor na poločas rozpadu (6-8 hodin) – nepijte ho odpoledne.",
      "Je to nejlevnější a nejúčinnější 'pre-workout'."
    ],
    references: [
      "Spriet, L. L. (2014). Exercise and sport performance with low doses of caffeine. Sports Medicine.",
      "Ribeiro, J. A., & Sebastiao, A. M. (2010). Caffeine and adenosine. Journal of Alzheimer's Disease.",
      "Grgic, J., et al. (2020). Wake up and smell the coffee: caffeine supplementation and exercise performance. Journal of the International Society of Sports Nutrition."
    ],
    content: `
      <h2>Falešný klíč do zámku únavy</h2>
      <p>V průběhu dne se ve vašem mozku hromadí látka zvaná **adenosin**. To je "molekula únavy". Sedá si na své receptory a tím vás zpomaluje a uspává. Kofein vypadá molekulárně skoro stejně jako adenosin. Díky tomu se dokáže "vylhát" do těchto receptorů, obsadit je, ale neaktivovat je! Adenosin si pak nemá kam sednout a vy únavu prostě necítíte.</p>

      <h2>Poločas rozpadu: Neviditelný nepřítel spánku</h2>
      <p>Kofein je super sluha, ale zlý pán. Jeho poločas rozpadu je u průměrného člověka **6 až 8 hodin**.
      <br>To znamená: Dáte si v 16:00 dvojité espresso (100 mg). O půlnoci, když jdete spát, máte v krvi stále 50 mg kofeinu (jako byste si dali malé kafe přímo v posteli). To vám sice nezabrání usnout, ale drasticky to sníží kvalitu hlubokého spánku.</p>

      <h2>Genetika: Jste rychlí nebo pomalí?</h2>
      <p>Rychlost odbourávání kofeinu řídí enzym v játrech (CYP1A2). My lidé se dělíme na "rychlé metabolizéry" (káva jim nevadí ani večer) a "pomalé metabolizéry" (jedno kafe ráno a v noci koukají do stropu). Zjistěte, do které skupiny patříte, a podle toho kofein dávkujte.</p>

      <h2>Ergogenní efekt: Legální doping</h2>
      <p>Studie jasně ukazují, že kofein zvyšuje výkon o 3–15 %. Pomáhá mobilizovat mastné kyseliny (spalovat tuk) jako zdroj energie, šetří svalový glykogen a snižuje vnímání bolesti při tréninku. Pro maximální efekt si ho dejte asi 45–60 minut před výkonem.</p>
    `
  }
];
