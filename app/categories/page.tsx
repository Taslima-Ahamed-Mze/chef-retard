import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'
import categoriesData from '@/data/categoriesData'

export const metadata = genPageMetadata({ title: 'Catégories' })

export default function Projects() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Catégories de recettes
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Bienvenue dans les catégories de recettes du Chef Retard, où l'excellence culinaire se
            marie harmonieusement avec le charme du décalage temporel. Explorez un monde où chaque
            catégorie est une invitation à savourer l'art délicieux de notre chef, qui, malgré le
            retard, excelle toujours dans la création de plats exceptionnels. Laissez-vous emporter
            par des recettes qui transcendent le temps, offrant une expérience gustative d'une
            qualité inégalée. Découvrez l'exception culinaire dans chaque catégorie, où l'attente
            devient une promesse de délices extraordinaires, tous orchestrés avec maestria par notre
            Chef Retard.
          </p>
        </div>
        <section className="mt-8 bg-white">
          <div className="container mx-auto w-full px-5 py-6">
            <div className="-m-4 flex flex-wrap">
              {categoriesData.map((d) => (
                <Card
                  key={d.title}
                  title={d.title}
                  description={d.description}
                  imgSrc={d.imgSrc}
                  href={d.href}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
