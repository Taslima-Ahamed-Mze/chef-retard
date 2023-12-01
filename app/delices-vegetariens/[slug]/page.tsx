import vegetarianRecipesData from '@/data/vegetarianRecipesData';
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'
import Link from '@/components/Link'
import categoriesData from '@/data/categoriesData'
import { useRouter } from 'next/navigation'




export const metadata = genPageMetadata({ title: 'Recette' })

export default function Recipe({ params}: { params: { slug: string } }) {
  const slug  = decodeURI(params.slug)
  const recipe = vegetarianRecipesData.find((recipe) => recipe.slug === slug);
  if (!recipe) {
    // Vous pouvez afficher un message ou rediriger vers une page d'erreur 404
    return (
      <div>
        <p>Recette non trouvée</p>
      </div>
    );
  }
  const { title, longDescription, ingredients, imgSrc } = recipe;

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {title}
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {longDescription}
          </p>
        </div>
        <section className="px-2 py-32 bg-white md:px-0">
            <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
                <div className="flex flex-wrap items-center sm:-mx-3">
                <div className="w-full md:w-1/2 md:px-3">
                    <div className="w-full pb-6 space-y-4 sm:max-w-md lg:max-w-lg lg:space-y-4 lg:pr-0 md:pb-0">
                    
                    
                        <h2 className="text-4xl text-green-600">Ingrédients</h2>
                        <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                            {ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient.quantity} {ingredient.unit} {ingredient.name}</li>
                            ))}
                        </ul>
                    
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                    <img src={imgSrc} alt={title} />
                    </div>
                </div>
                </div>
            </div>
        </section>
      </div>
    </>
  )
}
