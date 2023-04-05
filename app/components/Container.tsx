/* ici on utilise le client, pas le serveur, pour le rendu de la page (c'est le cas par défaut),
* cette méthode est utilisée pour les pages qui ne nécessitent pas de SEO (Search Engine Optimization) 
* et qui ne sont pas indexées par les moteurs de recherche, comme les pages de connexion, d'inscription, etc.
* elle sert à améliorer les performances de l'application, car le serveur ne doit pas générer le code HTML
* de la page, mais le client le fait, ce qui permet d'éviter de générer du code HTML inutile
*/
'use client'; 
/* ici on importe le composant Container, qui est un composant de type fonctionnel (React.FC)
* qui prend en paramètre un objet de type ContainerProps qui est un objet qui contient une propriété
* children de type React.ReactNode, qui est un type qui représente tout ce qui peut être rendu dans React,
* c'est-à-dire des éléments, des tableaux, des chaînes de caractères, des nombres, des fragments, des portails, etc.
*/
interface ContainerProps {
    children: React.ReactNode;
}
const Container: React.FC<ContainerProps> = ({
    children
}) => {
    return (
        <div
            className="
                max-w-[2520px]
                mx-auto
                xl:px-20
                md:px-10
                sm:px-2
                px-4
            "
        >
            {children} 
        </div>
    );
}

export default Container;