import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'
import Link from '@/components/Link'


import Confort from '@/data/categories/confort.webp'
import Express from '@/data/categories/fast.webp'
import Vegetarien from '@/data/categories/vegetarian.webp'
import Dessert from '@/data/categories/dessert.webp'

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
          Bienvenue dans les catégories de recettes du Chef Retard, où l'excellence culinaire se marie harmonieusement avec le charme du décalage temporel. Explorez un monde où chaque catégorie est une invitation à savourer l'art délicieux de notre chef, qui, malgré le retard, excelle toujours dans la création de plats exceptionnels. Laissez-vous emporter par des recettes qui transcendent le temps, offrant une expérience gustative d'une qualité inégalée. Découvrez l'exception culinaire dans chaque catégorie, où l'attente devient une promesse de délices extraordinaires, tous orchestrés avec maestria par notre Chef Retard.          </p>
        </div>
        <section className="mt-8 bg-white">
      
      <div className="container w-full px-5 py-6 mx-auto">
        <div className="grid lg:grid-cols-2 gap-y-6">
          
          <div className="max-w-xs mx-4 mb-2 rounded-lg shadow-lg flex-1">
            <img className="w-full h-48" src={Confort.src}
              alt="Image" />
            <div className="px-6 py-4">
              <div className="mb-3 text-xl font-semibold tracking-tight text-green-600 uppercase">Cuisine Réconfortante</div>
              <p className="leading-normal text-gray-700">Découvrez des plats réconfortants, régal du Chef Retard, alliant chaleur du foyer, réconfort et délectation instantanée.</p>
            </div>
            <div className="flex items-center  p-4">
              <Link
                href={`/categories/cuisine-reconfortant`}
                className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300"
              >
                <button className="px-4 py-2 bg-green-600 text-green-50">Voir les recettes</button> 
              </Link>
            </div>
          </div>
          <div className="max-w-xs mx-4 mb-2 rounded-lg shadow-lg">
            <img className="w-full h-48" src={Express.src}
              alt="Image" />
            <div className="px-6 py-4">
              <div className="mb-3 text-xl font-semibold tracking-tight text-green-600 uppercase">Cuisine Express</div>
              <p className="leading-normal text-gray-700">Devenez un chef émérite grâce à ces recettes express qui transforment chaque retard en une opportunité de maîtriser l'art culinaire.</p>
            </div>
            <div className="flex items-center  p-4">
              <Link
                href={`/categories/cuisine-express`}
                className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300"
              >
                <button className="px-4 py-2 bg-green-600 text-green-50">Voir les recettes</button> 
              </Link>
            </div>
          </div>

          <div className="max-w-xs mx-4 mb-2 rounded-lg shadow-lg">
            <img className="w-full h-48" src={Vegetarien.src}
              alt="Image" />
            <div className="px-6 py-4">
              <div className="mb-3 text-xl font-semibold tracking-tight text-green-600 uppercase">Délices Végétariens</div>
              <p className="leading-normal text-gray-700">Une collection de recettes végétariennes créatives mettant en valeur la richesse des ingrédients d'origine végétale.</p>
            </div>
            <div className="flex items-center  p-4">
              <Link
                  href={`/categories/delices-vegetariens`}
                  className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300"
                >
                  <button className="px-4 py-2 bg-green-600 text-green-50">Voir les recettes</button> 
              </Link>            
            </div>
          </div>

          <div className="max-w-xs mx-4 mb-2 rounded-lg shadow-lg">
            <img className="w-full h-48" src={Dessert.src}
              alt="Image" />
            <div className="px-6 py-4">
              <div className="mb-3 text-xl font-semibold tracking-tight text-green-600 uppercase">Plaisirs Sucrés</div>
              <p className="leading-normal text-gray-700">Découvrez des desserts divins sans délai, où chaque saveur atteste que le temps n'entrave pas l'excellence sucrée.</p>
            </div>
            <div className="flex items-center  p-4">
              <Link
                  href={`/categories/plaisirs-sucres`}
                  className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300"
                >
                  <button className="px-4 py-2 bg-green-600 text-green-50">Voir les recettes</button> 
              </Link>
            </div>
          </div>
          

          

        </div>
      </div>
    </section>
      </div>
    </>
  )
}
