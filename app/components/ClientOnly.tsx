'use client';

import { useState, useEffect } from "react";

interface ClientOnlyProps {
    children: React.ReactNode;
}

const ClientOnly: React.FC<ClientOnlyProps> = ({
    children
}) => {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) {
        return null;
    }

    return ( 
        <>
            {children}
        </>
    );
}
/* 
* Ce composant permet de ne pas afficher le composant enfant lors du rendu côté serveur.
* Il est utilisé pour les composants qui ne peuvent pas être rendus côté serveur, comme
* les composants qui utilisent des API du navigateur, comme le composant <NavigationBar />.
 */
export default ClientOnly;