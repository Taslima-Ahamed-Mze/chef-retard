import comfortingRecipesData from '@/data/comfortingRecipesData'
import { genPageMetadata } from 'app/seo'
import Link from '@/components/Link'




export const metadata = genPageMetadata({ title: 'Cuisine réconfortant' })

export default function Projects() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Recettes réconfortantes
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Explorez notre Cuisine Réconfortante, où chaque plat, orchestré avec l'attention d'un chef, transcende tout retard pour offrir un réconfort immédiat et délicieux.          </p>
        </div>
        <section className="mt-8 bg-white">
      
      <div className="container w-full px-5 py-6 mx-auto">
        <div className="grid lg:grid-cols-3 gap-y-6">

          {comfortingRecipesData.map((d) => (
            <div className="max-w-xs mx-4 mb-2 rounded-lg shadow-lg flex-1">
              <img className="w-full h-48" src={d.imgSrc}
                alt={d.title} />
              <div className="px-6 py-4">
                <div className="mb-3 text-xl font-semibold tracking-tight text-green-600 uppercase">{d.title}</div>
                <p className="leading-normal text-gray-700">{d.description}</p>
              </div>
              <div className="flex items-center  p-4">
                <Link
                  href="/cuisine-reconfortante/[slug]" as={`/cuisine-reconfortante/${d.slug}`}
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