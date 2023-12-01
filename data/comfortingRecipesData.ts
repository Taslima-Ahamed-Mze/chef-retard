const comfortingRecipesData = [
  {
    title: "Soupe d'Hiver",
    description: `Une soupe copieuse aux légumes d'hiver, réchauffant le corps et l'âme`,
    imgSrc: '/static/images/comfortants/soupe.webp',
    href: '/cuisine-reconfortante/soupe-hiver',
    slug: 'soupe-hiver',
    longDescription: `Plongez dans la perfection culinaire du Chef Retard avec notre Soupe d'Hiver. Mêlant carottes, pommes de terre, oignons et poireaux dans un bouillon de légumes, cette soupe copieuse réchauffe le corps et l'âme. Une touche de crème fraîche, de beurre, de sel et de poivre ajoute une douceur qui transcende tout retard, créant une expérience réconfortante incomparable.`,
    ingredients: [
      {
        name: 'Carottes',
        quantity: '2',
        unit: 'pièces',
      },
      {
        name: 'Pommes de terre',
        quantity: '2',
        unit: 'pièces',
      },
      {
        name: 'Oignons',
        quantity: '2',
        unit: 'pièces',
      },
      {
        name: 'Poireaux',
        quantity: '2',
        unit: 'pièces',
      },
      {
        name: 'Bouillon de légumes',
        quantity: '1',
        unit: 'litre',
      },
      {
        name: 'Crème fraîche',
        quantity: '1',
        unit: 'cuillère à soupe',
      },
      {
        name: 'Beurre',
        quantity: '1',
        unit: 'cuillère à soupe',
      },
      {
        name: 'Sel',
        quantity: '1',
        unit: 'cuillère à café',
      },
      {
        name: 'Poivre',
        quantity: '1',
        unit: 'cuillère à café',
      },
    ],
  },
  {
    title: 'Poulet Rôti aux Herbes',
    description: `Un classique réconfortant, le poulet rôti, parfumé aux herbes, dégageant une fragrance apaisante.`,
    imgSrc: '/static/images/comfortants/chicken.webp',
    href: '/cuisine-reconfortante/poulet-roti-herbes',
    slug: 'poulet-roti-herbes',
    longDescription: `Succombez à la perfection culinaire du Chef Retard avec notre Poulet Rôti aux Herbes. Chaque morceau, parfumé aux herbes, dégage une fragrance apaisante qui transcende tout retard. Préparé avec soin, ce plat réconfortant est une expérience gustative incomparable.`,
    ingredients: [
      { 
        name: "Poulet entier", 
        quantity: 1, 
        unit: "pièce" 
      },
      { 
        name: "Herbes fraîches au choix", 
        quantity: "À votre goût", 
        unit: "cuillère à café" 
      },
      { 
        name: "Gousses d'ail écrasées", 
        quantity: 3, 
        unit: "pièces" 
      },
      { name: "Huile d'olive", quantity: 2, unit: "cuillère à soupe" },
      { name: "Sel", quantity: "Selon le goût", unit: "cuillère à café" },
      { name: "Poivre", quantity: "Selon le goût", unit: "cuillère à café" }
    ],
  },
  {
    title: 'Gratin Dauphinois Crémeux',
    description: `Des pommes de terre fondantes dans une sauce crémeuse, un plat parfait pour les jours froids.`,
    imgSrc: '/static/images/comfortants/gratin.webp',
    href: '/cuisine-reconfortante/gratin-dauphinois-cremeux',
    slug: 'gratin-dauphinois-cremeux',
    longDescription: `Plaisir crémeux à souhait, notre Gratin Dauphinois est une création du Chef Retard, idéal pour les jours froids. Des pommes de terre fondantes, baignées dans une sauce crémeuse, ce plat réconfortant transcende tout retard pour offrir une expérience culinaire mémorable.`,
    ingredients: [
      { name: "Pommes de terre", quantity: 4, unit: "grosses" },
      { name: "Gousse d'ail", quantity: 2, unit: "pièces" },
      { name: "Crème fraîche", quantity: 200, unit: "ml" },
      { name: "Lait", quantity: 200, unit: "ml" },
      { name: "Beurre", quantity: 30, unit: "g" },
      { name: "Fromage râpé (gruyère)", quantity: 100, unit: "g" },
      { name: "Noix de muscade", quantity: "Une pincée", unit: "" },
      { name: "Sel", quantity: "Selon le goût", unit: "" },
      { name: "Poivre", quantity: "Selon le goût", unit: "" }
    ],

  },
  {
    title: 'Bœuf Bourguignon Traditionnel',
    description: `Un plat français classique, le bœuf bourguignon, mijoté lentement pour une tendresse et une saveur ultimes.`,
    imgSrc: '/static/images/comfortants/beef.webp',
    href: '/cuisine-reconfortante/boeuf-bourguignon-traditionnel',
    slug: 'boeuf-bourguignon-traditionnel',
    longDescription: `Explorez l'art culinaire du Chef Retard avec notre Bœuf Bourguignon Traditionnel. Chaque morceau, mijoté lentement, offre une tendresse et une saveur ultimes. Même avec un léger retard, ce plat français classique est une expérience réconfortante à ne pas manquer.`,
    ingredients: [
      { name: "Bœuf à braiser", quantity: 800, unit: "g" },
      { name: "Lardons fumés", quantity: 150, unit: "g" },
      { name: "Champignons de Paris", quantity: 250, unit: "g" },
      { name: "Oignons", quantity: 10, unit: "petits" },
      { name: "Carottes", quantity: 4, unit: "moyennes" },
      { name: "Ail", quantity: 3, unit: "gousses" },
      { name: "Bouquet garni", quantity: 1, unit: "" },
      { name: "Vin rouge (Bourgogne)", quantity: 750, unit: "ml" },
      { name: "Bouillon de bœuf", quantity: 250, unit: "ml" },
      { name: "Farine", quantity: 2, unit: "cuillères à soupe" },
      { name: "Beurre", quantity: 2, unit: "cuillères à soupe" },
      { name: "Huile d'olive", quantity: 2, unit: "cuillères à soupe" },
      { name: "Sel", quantity: "Selon le goût", unit: "" },
      { name: "Poivre", quantity: "Selon le goût", unit: "" }
    ],
  },
  {
    title: 'Chili Con Carne Chaleureux',
    description: `Un chili épicé et robuste, réchauffant le cœur avec ses saveurs délicieusement combinées.`,
    imgSrc: '/static/images/comfortants/chili.webp',
    href: '/cuisine-reconfortante/chili-con-carne-chaleureux',
    slug: 'chili-con-carne-chaleureux',
    longDescription: `Laissez-vous emporter par le Chef Retard avec notre Chili Con Carne Chaleureux. Une création épicée, chaque haricot, chaque épice, même avec un léger retard, crée une explosion de saveurs délicieusement combinées, réchauffant le cœur de ceux qui le dégustent.`,
    ingredients: [
      { name: "Viande hachée (bœuf)", quantity: 500, unit: "g" },
      { name: "Oignons", quantity: 2, unit: "moyens" },
      { name: "Ail", quantity: 3, unit: "gousses" },
      { name: "Poivrons rouges", quantity: 2, unit: "moyens" },
      { name: "Haricots rouges en conserve", quantity: 400, unit: "g" },
      { name: "Maïs en conserve", quantity: 200, unit: "g" },
      { name: "Tomates concassées en conserve", quantity: 400, unit: "g" },
      { name: "Purée de tomate", quantity: 200, unit: "ml" },
      { name: "Bouillon de bœuf", quantity: 250, unit: "ml" },
      { name: "Chili en poudre", quantity: 2, unit: "cuillères à soupe" },
      { name: "Cumin en poudre", quantity: 1, unit: "cuillère à café" },
      { name: "Huile d'olive", quantity: 2, unit: "cuillères à soupe" },
      { name: "Sel", quantity: "Selon le goût", unit: "" },
      { name: "Poivre", quantity: "Selon le goût", unit: "" }
    ],
  },
  {
    title: 'Pâtes Carbonara Crémeuses',
    description: `Des pâtes al dente enrobées d'une sauce carbonara riche et crémeuse, une expérience réconfortante.`,
    imgSrc: '/static/images/comfortants/carbonara.webp',
    href: '/cuisine-reconfortante/pates-carbonara-cremeuses',
    slug: 'pates-carbonara-cremeuses',
    longDescription: `Plongez dans l'expérience réconfortante du Chef Retard avec nos Pâtes Carbonara Crémeuses. Chaque fil de pâtes, malgré un léger retard, révèle une perfection crémeuse. La sauce riche et onctueuse ajoute une couche de délice à chaque bouchée, créant une expérience culinaire mémorable.`,
    ingredients: [
      { name: "Pâtes", quantity: 400, unit: "g" },
      { name: "Lardons fumés", quantity: 150, unit: "g" },
      { name: "Crème fraîche", quantity: 200, unit: "ml" },
      { name: "Œufs", quantity: 2, unit: "pièces" },
      { name: "Parmesan râpé", quantity: 50, unit: "g" },
      { name: "Ail", quantity: 1, unit: "gousse" },
      { name: "Beurre", quantity: 1, unit: "cuillère à soupe" },
      { name: "Poivre noir moulu", quantity: "Selon le goût", unit: "" }
    ],
  },
]

export default comfortingRecipesData
