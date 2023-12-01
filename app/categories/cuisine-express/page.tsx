import expressRecipesData from '@/data/expressRecipesData'
import { genPageMetadata } from 'app/seo'
import Link from '@/components/Link'




export const metadata = genPageMetadata({ title: 'Cuisine express' })

export default function Projects() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Recettes express
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Plongez dans l'univers de la Cuisine Express du Chef Retard, où la délicatesse des saveurs rencontre l'efficacité du quotidien. Ces recettes, bien que préparées avec une pointe de retard, offrent une symphonie culinaire harmonieuse, mettant en avant des plats aussi délicieux qu'accessibles. De la fraîcheur des salades aux arômes réconfortants des plats sautés, chaque création incarne la fusion parfaite entre le talent du chef et la praticité du repas express. Découvrez des délices qui transcendent le temps, car même avec un léger retard, la qualité et la saveur ne font jamais compromis. Faites l'expérience de la Cuisine Express du Chef Retard et transformez chaque repas en une aventure gastronomique rapide et délicieuse.</p>        </div>
        <section className="mt-8 bg-white">
      
      <div className="container w-full px-5 py-6 mx-auto">
        <div className="grid lg:grid-cols-3 gap-y-6">

          {expressRecipesData.map((d) => (
            <div className="max-w-xs mx-4 mb-2 rounded-lg shadow-lg flex-1">
              <img className="w-full h-48" src={d.imgSrc}
                alt={d.title} />
              <div className="px-6 py-4">
                <div className="mb-3 text-xl font-semibold tracking-tight text-green-600 uppercase">{d.title}</div>
                <p className="leading-normal text-gray-700">{d.description}</p>
              </div>
              <div className="flex items-center  p-4">
                <Link
                  href="/cuisine-express/[slug]" as={`/cuisine-express/${d.slug}`}
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