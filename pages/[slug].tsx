import { useRouter } from 'next/router';

const PageDetailRecette = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Récupérez les données pour la recette spécifique en utilisant le slug
  // ...

  return (
    <div>
      <h1>Détails de la Recette</h1>
      <p>Slug de la recette : {slug}</p>
      {/* Affichez les détails de la recette ici */}
    </div>
  );
};

export default PageDetailRecette;