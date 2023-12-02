import { MetadataRoute } from 'next'
import { allBlogs } from 'contentlayer/generated'
import siteMetadata from '@/data/siteMetadata'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteMetadata.siteUrl

  const blogRoutes = allBlogs
    .filter((post) => !post.draft)
    .map((post) => ({
      url: `${siteUrl}/${post.path}`,
      lastModified: post.lastmod || post.date,
    }))

  const routes = [
    '',
    'categories',
    'conseils',
    'contact',
    'categories/cuisine-reconfortante',
    'categories/cuisine-express',
    'categories/delices-vegetariens',
    'categories/plaisirs-sucres',
    'cuisine-reconfortante/soupe-hiver',
    'cuisine-reconfortante/poulet-roti-herbes',
    'cuisine-reconfortante/gratin-dauphinois-cremeux',
    'cuisine-reconfortante/boeuf-bourguignon-traditionnel',
    'cuisine-reconfortante/chili-con-carne-chaleureux',
    'cuisine-reconfortante/pates-carbonara-cremeuses',
    'cuisine-express/omelette-rapide',
    'cuisine-express/pizza-express',
    'cuisine-express/burger-express',
    'cuisine-express/tacos-express',
    'cuisine-express/salade-caesar-express',
    'cuisine-express/nouilles-sautees-legumes',
    'delices-vegetariens/risotto-champignons',
    'delices-vegetariens/aubergines-parmesan',
    'delices-vegetariens/curry-legumes',
    'delices-vegetariens/pizza-margherita',
    'delices-vegetariens/burger-vegetarien',
    'delices-vegetariens/ratatouille-provencale',
    'plaisirs-sucres/tarte-fruits-rouges',
    'plaisirs-sucres/muffins-pepites-chocolat',
    'plaisirs-sucres/tiramisu-classique',
    'plaisirs-sucres/crepes-gourmandes',
    'plaisirs-sucres/brownies-fondants',
    'plaisirs-sucres/panna-cotta-fruits-rouges',
  ].map(
      (route) => ({
        url: `${siteUrl}/${route}`,
        lastModified: new Date().toISOString().split('T')[0],
      }))
  return [...routes, ...blogRoutes]
}
