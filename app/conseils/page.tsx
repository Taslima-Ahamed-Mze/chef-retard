import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Conseils' })

export default function Projects() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Conseils du chef
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Découvrez les astuces du Chef Retard pour une cuisine savoureuse malgré le temps restreint. Planifiez vos repas à l'avance pour éviter le stress de dernière minute, permettant au chef en vous de s'exprimer pleinement. Optez pour des ingrédients frais et de qualité, faisant preuve de la prévoyance d'un véritable chef, même en cas de retard.          </p>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Explorez de nouvelles recettes simples et délicieuses, transformant chaque repas en une expérience culinaire digne d'un chef accompli. N'ayez pas peur d'expérimenter avec les saveurs, car le vrai chef sait tirer parti des imprévus pour créer des plats exceptionnels.
          </p>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Priorisez une alimentation équilibrée et nutritive, signe du savoir-faire du Chef Retard qui sait combiner santé et plaisir gustatif. Enfin, accordez-vous le temps nécessaire pour savourer chaque bouchée, car même en cas de retard, la patience et la dégustation consciente sont les marques d'un vrai chef.
          </p>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Épatez vos convives en adoptant des techniques de présentation dignes d'un chef professionnel. Même en cas de retard, la créativité du Chef Retard transparaît dans la disposition artistique des assiettes. Utilisez des herbes fraîches ou des sauces savamment versées pour ajouter une touche visuelle à vos plats, transformant chaque repas en une œuvre d'art gastronomique.
          </p>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Le Chef Retard mise sur la simplicité pour apporter des saveurs inoubliables à chaque plat. Oubliez la complexité excessive et concentrez-vous sur l'essentiel. Choisissez des combinaisons d'ingrédients subtiles mais puissantes, dévoilant la maîtrise du chef qui sait marier les saveurs avec élégance, même dans les moments où le temps joue contre lui.
          </p>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Cultivez une attitude positive dans votre cuisine, car le Chef Retard sait que l'état d'esprit influe sur le goût des plats. Transformez chaque défi en opportunité créative et relevez les imprévus avec calme et détermination. Ainsi, chaque repas devient une expression de la philosophie du Chef Retard, prônant la passion et la persévérance dans l'art culinaire, malgré les retards éventuels.
          </p>
        </div>
        
      </div>
    </>
  )
}