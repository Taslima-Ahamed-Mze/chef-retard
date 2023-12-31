import Link from '@/components/Link'
import Chef from '@/data/chef.webp'
import Pasta from '@/data/pasta.webp'
import Beef from '@/data/beef.webp'
import Veloute from '@/data/veloute.webp'
import Image from 'next/image'

export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            L'art culinaire à son propre rythme!
          </h1>
        </div>
        <section className="bg-white px-2 py-32  md:px-0">
          <div className="container mx-auto max-w-6xl items-center px-8 xl:px-5">
            <div className="flex flex-wrap items-center sm:-mx-3">
              <div className="w-full md:w-1/2 md:px-3">
                <p className="mx-auto text-base text-gray-500 sm:max-w-md md:max-w-3xl lg:text-xl">
                  Bienvenue dans l'univers gourmand du Chef Retard, où l'art culinaire se dévoile
                  avec une touche décontractée, empreinte de délices et parsemée d'une pointe
                  d'humour. Dans ce monde savoureux, le Chef Retard célèbre la beauté de la cuisine
                  sans précipitation, transformant chaque recette en une expérience délicieusement
                  unique.
                </p>
                <p className="mx-auto text-base text-gray-500 sm:max-w-md md:max-w-3xl lg:text-xl">
                  Le Chef Retard, maestro culinaire atypique, apporte une nouvelle dimension à
                  l'attente, transformant le concept de retard en une célébration de la patience
                  dans la préparation des mets. Dans ses créations, le temps devient un ingrédient à
                  part entière, mêlant saveurs et textures dans une danse gastronomique qui laisse
                  présager une délectation certaine.
                </p>
                <p className="mx-auto text-base text-gray-500 sm:max-w-md md:max-w-3xl lg:text-xl">
                  C'est ici que l'attente devient une anticipation joyeuse, où chaque plat est une
                  promesse d'excitation gustative. Le Chef Retard s'engage à révéler le meilleur de
                  chaque ingrédient, à permettre aux saveurs de se marier harmonieusement, sans hâte
                  excessive.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <div className="h-auto w-full overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                  <Image
                    src={Chef}
                    alt="Le Chef"
                    layout="responsive"
                    width={500}
                    height={300}
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pb-12 pt-4">
          <div className="my-8 text-center">
            <h2 className="text-3xl font-bold ">
              Découvrez l'art culinaire décontracté avec les recettes savoureuses du Chef Retard
            </h2>
          </div>
          <div className="container mx-auto grid gap-4 lg:grid-cols-3">
            <div className="w-full rounded">
              <Image src={Pasta} alt="Pattes du chef" className="h-80 w-full object-cover" />
            </div>
            <div className="w-full rounded">
              <Image src={Beef} alt="Assiète boeuf du chef" className="h-80 w-full object-cover" />
            </div>
            <div className="w-full rounded">
              <Image src={Veloute} alt="veloute du chef" className="h-80 w-full object-cover" />
            </div>
          </div>
        </section>
        <section className="pb-12 pt-4">
          <p>
            <Link
              href="/categories/cuisine-reconfortante"
              className="text-base font-medium leading-6 text-green-600 hover:text-green-600 dark:hover:text-green-600"
            >
              Voir nos recettes réconfortantes
            </Link>
          </p>
          <p>
            <Link
              href="/categories/cuisine-express"
              className="text-base font-medium leading-6 text-green-600 hover:text-green-600 dark:hover:text-green-600"
            >
              Voir nos recettes express
            </Link>
          </p>
          <p>
            <Link
              href="/categories/delices-vegetariens"
              className="text-base font-medium leading-6 text-green-600 hover:text-green-600 dark:hover:text-green-600"
            >
              Voir nos recettes Végétariennes
            </Link>
          </p>
          <p>
            <Link
              href="/categories/plaisirs-sucres"
              className="text-base font-medium leading-6 text-green-600 hover:text-green-600 dark:hover:text-green-600"
            >
              Voir nos recettes sucrées
            </Link>
          </p>
        </section>
      </div>
    </>
  )
}
