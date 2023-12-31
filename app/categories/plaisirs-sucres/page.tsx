import sweetRecipesData from '@/data/sweetRecipesData'
import { genPageMetadata } from 'app/seo'
import Link from '@/components/Link'
import Image from 'next/image'

export const metadata = genPageMetadata({ title: 'Plaisirs sucrés' })

export default function Projects() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Recettes sucrées
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Plongez dans l'expérience sucrée du Chef Retard, une fusion délectable de saveurs et de
            textures qui transcende le temps. Réveillez vos papilles avec cette création sucrée, un
            équilibre parfait de douceurs qui apporte réconfort et satisfaction. Succombez à cette
            délicieuse tentation du chef, créant des souvenirs gustatifs inoubliables malgré le
            léger retard.
          </p>
        </div>
        <section className="mt-8 bg-white">
          <div className="container mx-auto w-full px-5 py-6">
            <div className="grid gap-y-6 lg:grid-cols-3">
              {sweetRecipesData.map((d, index) => (
                <div key={index} className="mx-4 mb-2 max-w-xs flex-1 rounded-lg shadow-lg">
                  <Image
                    src={d.imgSrc}
                    alt={d.title}
                    layout="responsive"
                    width={500}
                    height={300}
                    objectFit="cover"
                  />
                  <div className="px-6 py-4">
                    <div className="mb-3 text-xl font-semibold uppercase tracking-tight text-green-600 ">
                      {d.title}
                    </div>
                    <p className="leading-normal text-gray-700">{d.description}</p>
                  </div>
                  <div className="flex items-center  p-4">
                    <Link
                      href="/plaisirs-sucres/[slug]"
                      as={`/plaisirs-sucres/${d.slug}`}
                      className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300"
                    >
                      <button className="bg-green-600 px-4 py-2 text-green-50">
                        Lire la recette
                      </button>
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
