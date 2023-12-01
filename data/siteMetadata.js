/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Chef Retard',
  author: 'Taslima',
  headerTitle: 'Chef Retard',
  description: 'Découvrez les meilleures recettes du Chef Retard',
  language: 'fr', // Assurez-vous de définir la langue correcte
  theme: 'light', // système, foncé ou clair
  siteUrl: 'https://chef-en-retard.tech', // Assurez-vous de remplacer cela par l'URL de votre site
  siteRepo: 'https://github.com/votreutilisateur/votre-repo', // Ajoutez votre référentiel GitHub
  siteLogo: '/static/images/chef-retard.png', // Assurez-vous d'avoir votre propre logo
  socialBanner: '/static/images/twitter-card.png', // Ajoutez votre propre bannière sociale
  mastodon: 'https://mastodon.social/@votrenom',
  email: 'votre@email.com',
  github: 'https://github.com/votreutilisateur',
  twitter: 'https://twitter.com/VotreTwitter',
  facebook: 'https://facebook.com/VotreFacebook',
  youtube: 'https://youtube.com/VotreYouTube',
  linkedin: 'https://www.linkedin.com/in/votreprofil',
  locale: 'fr-FR', // Assurez-vous de définir la locale correcte
  analytics: {
    umamiAnalytics: {
      umamiWebsiteId: process.env.NEXT_UMAMI_ID,
    },
    // Ajoutez d'autres configurations d'analyse si nécessaire
  },
  newsletter: {
    provider: 'buttondown',
    // Ajoutez les variables d'environnement nécessaires dans votre fichier .env
  },
  comments: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      lang: 'fr', // Assurez-vous de définir la langue correcte
    },
  },
  search: {
    provider: 'kbar',
    kbarConfig: {
      searchDocumentsPath: 'search.json',
    },
    // Ajoutez d'autres configurations de recherche si nécessaire
  },
}

module.exports = siteMetadata;
