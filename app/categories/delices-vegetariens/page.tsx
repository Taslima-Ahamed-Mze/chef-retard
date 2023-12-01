import vegetarianRecipesData from '@/data/vegetarianRecipesData'
import { genPageMetadata } from 'app/seo'
import Link from '@/components/Link'




export const metadata = genPageMetadata({ title: 'Cuisine express' })

export default function Projects() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Recettes Végétariennes
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Découvrez notre collection exquise de Délices Végétariens, où chaque plat est une célébration de saveurs sans viande. Le Chef Retard met en avant la diversité et la créativité des plats végétariens, alliant des ingrédients frais et des techniques culinaires innovantes. Des recettes gourmandes, équilibrées et délicieusement conçues pour satisfaire les papilles, même avec un léger retard. Explorez l'art culinaire végétarien avec une touche unique du Chef Retard. </p> </div>
      <section className="mt-8 bg-white">
      
      <div className="container w-full px-5 py-6 mx-auto">
        <div className="grid lg:grid-cols-3 gap-y-6">

          {vegetarianRecipesData.map((d) => (
            <div className="max-w-xs mx-4 mb-2 rounded-lg shadow-lg flex-1">
              <img className="w-full h-48" src={d.imgSrc}
                alt={d.title} />
              <div className="px-6 py-4">
                <div className="mb-3 text-xl font-semibold tracking-tight text-green-600 uppercase">{d.title}</div>
                <p className="leading-normal text-gray-700">{d.description}</p>
              </div>
              <div className="flex items-center  p-4">
                <Link
                  href="/delices-vegetariens/[slug]" as={`/delices-vegetariens/${d.slug}`}
                  className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300"
                >
                  <button className="px-4 py-2 bg-green-600 text-green-50">Lire la recette</button> 
                </Link>
              </div>
            </div>

          ))} 
        </div>
      </div>
    </section>
      </div>
    </>
  )
}
