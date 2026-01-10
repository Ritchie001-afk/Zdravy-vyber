export type Category = 'weight_loss' | 'energy' | 'sleep' | 'muscle' | 'health' | 'joints';
export type Gender = 'male' | 'female' | 'unisex';
export type Budget = 'cheap' | 'quality' | 'premium';
export type Form = 'pill' | 'powder' | 'drops' | 'gummy' | 'any';

export interface Product {
  id: string;
  name: string;
  price: number; // in CZK
  image_url: string;
  affiliate_link: string;
  category: Category;
  tags: string[];
  gender: Gender;
  description: string;
  rating: number;
  form: Form;
}

export const products: Product[] = [
  // MUSCLE (GymBeam)
  {
    id: 'gymbeam-true-whey',
    name: 'GymBeam True Whey Protein',
    price: 499,
    image_url: 'https://gymbeam.cz/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/t/r/true_whey_cocco_1.png',
    affiliate_link: 'https://gymbeam.cz/true-whey-gymbeam.html',
    category: 'muscle',
    tags: ['protein', 'whey', 'muscle_growth', 'bestseller'],
    gender: 'unisex',
    description: 'Nejoblíbenější syrovátkový protein na trhu. Skvělý poměr cena/výkon, vysoký podíl bílkovin a výborná rozpustnost.',
    rating: 4.9,
    form: 'powder'
  },
  {
    id: 'gymbeam-creatine-monohydrate',
    name: 'GymBeam Creatine Monohydrate',
    price: 319,
    image_url: 'https://gymbeam.cz/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/k/r/kreatin_monohydrat_unflavored_500_g_1.png',
    affiliate_link: 'https://gymbeam.cz/kreatin-100-monohydrate-gymbeam.html',
    category: 'muscle',
    tags: ['creatine', 'strength', 'performance'],
    gender: 'unisex',
    description: '100% čistý kreatin monohydrát pro zvýšení síly, výkonnosti a růst svalové hmoty. Základní doplněk pro každého sportovce.',
    rating: 4.8,
    form: 'powder'
  },

  // WEIGHT LOSS (KetoMix & GymBeam)
  {
    id: 'ketomix-koktejl',
    name: 'KetoMix Proteinový koktejl',
    price: 1350,
    image_url: 'https://www.ketomix.cz/upload/product/def/554/554-20230509-082218-1.png',
    affiliate_link: 'https://www.ketomix.cz/proteinove-koktejly/',
    category: 'weight_loss',
    tags: ['keto', 'meal_replacement', 'diet'],
    gender: 'unisex',
    description: 'Lahodný proteinový koktejl, který vás zasytí a pomůže s hubnutím. Ideální náhrada jídla při keto dietě.',
    rating: 4.7,
    form: 'powder'
  },
  {
    id: 'gymbeam-synephrine',
    name: 'Synephrine Fat Burner',
    price: 111,
    image_url: 'https://gymbeam.cz/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/s/y/synephrine_unflavored_90_tabs_gymbeam_1.png',
    affiliate_link: 'https://gymbeam.cz/synefrin-gymbeam.html',
    category: 'weight_loss',
    tags: ['fat_burner', 'metabolism', 'weight_loss'],
    gender: 'unisex',
    description: 'Účinný spalovač tuků na přírodní bázi. Zvyšuje termogenezi a pomáhá spalovat více kalorií v klidu i při zátěži.',
    rating: 4.6,
    form: 'pill'
  },
  {
    id: 'gymbeam-carnitine',
    name: 'L-Carnitine',
    price: 189,
    image_url: 'https://gymbeam.cz/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/l/k/l-karnitin_1.png',
    affiliate_link: 'https://gymbeam.cz/l-karnitin-gymbeam.html',
    category: 'weight_loss',
    tags: ['fat_burner', 'endurance', 'caffeine_free'],
    gender: 'unisex',
    description: 'Nejpopulárnější spalovač tuků, který přeměňuje tuky na energii. Vhodný i pro večerní tréninky.',
    rating: 4.7,
    form: 'pill'
  },
  {
    id: 'beastpink-beast-burn',
    name: 'BeastBurn',
    price: 490,
    image_url: 'https://gymbeam.cz/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/b/e/beast_burn_120_caps_beastpink_1.png',
    affiliate_link: 'https://gymbeam.cz/spalovac-tuku-beast-burn-beastpink.html',
    category: 'weight_loss',
    tags: ['for_women', 'fat_burner', 'complex'],
    gender: 'female',
    description: 'Spalovač tuků speciálně vyvinutý pro ženy. Obsahuje látky pro zrychlení metabolismu a snížení chuti k jídlu.',
    rating: 4.8,
    form: 'pill'
  },

  // HEALTH (Pilulka)
  {
    id: 'pilulka-martianci',
    name: 'Martiánci Gummy',
    price: 269,
    image_url: 'https://www.pilulka.cz/v2/img/products/12534_1.jpg',
    affiliate_link: 'https://www.pilulka.cz/martianci-gummy-podzim-zima-multi-pack-60-ks',
    category: 'health',
    tags: ['vitamins', 'kids', 'immunity', 'gummy'],
    gender: 'unisex',
    description: 'Oblíbené vitamíny pro děti i dospělé ve formě gumových bonbonů. Komplexní podpora imunity.',
    rating: 4.8,
    form: 'gummy'
  },
  {
    id: 'gymbeam-omega-3',
    name: 'Omega 3',
    price: 179,
    image_url: 'https://gymbeam.cz/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/o/m/omega_3_120_caps_gymbeam_1.png',
    affiliate_link: 'https://gymbeam.cz/omega-3-gymbeam.html',
    category: 'health',
    tags: ['health', 'fish_oil', 'brain', 'heart'],
    gender: 'unisex',
    description: 'Zdravé tuky EPA a DHA pro podporu srdce, mozku a zraku. Nezbytný doplněk pro celkové zdraví.',
    rating: 4.8,
    form: 'pill'
  },

  // JOINTS (NaturaMed)
  {
    id: 'naturamed-proenza',
    name: 'Proenza 360',
    price: 599,
    image_url: 'https://www.naturamed.cz/sk/p/proenza-360-1', // Generic placeholder as URL not verified
    affiliate_link: 'https://www.naturamed.cz/proenza-360',
    category: 'joints',
    tags: ['joints', 'mobility', 'health'],
    gender: 'unisex',
    description: 'Komplexní kloubní výživa pro zdravé klouby a chrupavky. Obsahuje glukosamin, chondroitin a kolagen.',
    rating: 4.7,
    form: 'pill'
  },
  {
    id: 'naturamed-prostaxin',
    name: 'Prostaxin',
    price: 399,
    image_url: 'https://www.naturamed.cz/sk/p/prostaxin-1',
    affiliate_link: 'https://www.naturamed.cz/prostaxin',
    category: 'health',
    tags: ['prostate', 'men_health', 'herbal'],
    gender: 'male',
    description: 'Přírodní podpora pro zdravou prostatu a močové cesty. Speciálně vyvinuto pro muže.',
    rating: 4.6,
    form: 'pill'
  },

  // ENERGY (GymBeam)
  {
    id: 'gymbeam-thor',
    name: 'Thor Pre-Workout',
    price: 309,
    image_url: 'https://gymbeam.cz/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/t/h/thor_watermelon_6.png',
    affiliate_link: 'https://gymbeam.cz/thor-predtreninkovy-stimulant-gymbeam.html',
    category: 'energy',
    tags: ['pre_workout', 'caffeine', 'beta_alanine', 'focus'],
    gender: 'unisex',
    description: 'Komplexní předtréninkový stimulant pro maximální nabuzení, prokrvení svalů a soustředění na trénink.',
    rating: 4.7,
    form: 'powder'
  },
  {
    id: 'gymbeam-multivitamin-yummies',
    name: 'Multivitamin Yummies',
    price: 199,
    image_url: 'https://gymbeam.cz/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/m/u/multivitamin_yummies_1.png',
    affiliate_link: 'https://gymbeam.cz/multivitamin-yummies-gymbeam.html',
    category: 'energy',
    tags: ['vitamins', 'immunity', 'health', 'tasty'],
    gender: 'unisex',
    description: 'Chutné gumové bonbony plné vitamínů pro podporu imunity a vitality. Ideální pro ty, kteří neradi polykají tablety.',
    rating: 4.9,
    form: 'gummy'
  },

  // SLEEP (GymBeam)
  {
    id: 'gymbeam-magnesium-chelate',
    name: 'Magnesium Chelate',
    price: 219,
    image_url: 'https://gymbeam.cz/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/m/a/magnesium_chelate_120_caps_gymbeam_2.png',
    affiliate_link: 'https://gymbeam.cz/magnesium-chelate-gymbeam.html',
    category: 'sleep',
    tags: ['recovery', 'sleep', 'cramp_prevention'],
    gender: 'unisex',
    description: 'Nejlépe vstřebatelná forma hořčíku. Pomáhá proti křečím, únavě a zlepšuje kvalitu spánku a regeneraci.',
    rating: 4.9,
    form: 'pill'
  },
  {
    id: 'gymbeam-melatonin',
    name: 'Melatonin',
    price: 99,
    image_url: 'https://gymbeam.cz/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/m/e/melatonin_120_tabs_gymbeam_1.png',
    affiliate_link: 'https://gymbeam.cz/melatonin-1mg-gymbeam.html',
    category: 'sleep',
    tags: ['sleep', 'insomnia', 'rest'],
    gender: 'unisex',
    description: 'Rychlá pomoc pro snadné usínání. Reguluje spánkový cyklus a zlepšuje kvalitu odpočinku.',
    rating: 4.8,
    form: 'pill'
  }
];
