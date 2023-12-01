import sweetRecipesData from '@/data/sweetRecipesData'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Recette' })

export default function Recipe({ params }: { params: { slug: string } }) {
  const slug = decodeURI(params.slug)
  const recipe = sweetRecipesData.find((recipe) => recipe.slug === slug);
  if (!recipe) {
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
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">{longDescription}</p>
        </div>
        <section className="bg-white px-2 py-32 md:px-0">
          <div className="container mx-auto max-w-6xl items-center px-8 xl:px-5">
            <div className="flex flex-wrap items-center sm:-mx-3">
              <div className="w-full md:w-1/2 md:px-3">
                <div className="w-full space-y-4 pb-6 sm:max-w-md md:pb-0 lg:max-w-lg lg:space-y-4 lg:pr-0 ">
                  <h2 className="text-4xl text-green-600">Ingrédients</h2>
                  <ul className="max-w-md list-inside list-disc space-y-1 text-gray-500  dark:text-gray-400">
                    {ingredients.map((ingredient, index) => (
                      <li key={index}>
                        {ingredient.quantity} {ingredient.unit} {ingredient.name}
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="h-auto w-full overflow-hidden rounded-md shadow-xl sm:rounded-xl">
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
