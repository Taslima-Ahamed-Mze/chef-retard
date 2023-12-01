import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Contact' })

export default function Projects() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Bienvenue sur notre Page de Contact !
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Cher(e) amateur(trice) de saveurs et de découvertes culinaires, Nous sommes ravis que 
            vous ayez décidé de prendre contact avec nous. Chez Chef Retard, chaque interaction est 
            une occasion de partager notre passion pour la cuisine et d'enrichir notre communauté.
            Que vous ayez une question sur une recette, une suggestion gourmande, ou simplement 
            l'envie de discuter cuisine, n'hésitez pas à nous écrire. Vos messages sont comme des 
            épices dans notre marmite, et nous sommes impatients de les savourer. Notre équipe 
            dévouée s'efforce de répondre à chaque message avec le même enthousiasme que nous 
            mettons dans nos casseroles. Merci de faire partie de cette aventure culinaire avec Chef 
            Retard.
          </p>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Restons connectés ! Suivez-nous sur Facebook et Instagram pour des actualités, des 
            astuces culinaires, et bien sûr, des moments gourmands en direct.Nous avons hâte de 
            partager encore plus de délices avec vous ! Bien à vous, L'équipe Chef Retard          
          </p>
        </div>
      </div>
    </>
  )
}