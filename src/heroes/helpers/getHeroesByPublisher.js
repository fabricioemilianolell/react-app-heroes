import { heroes } from "../data/heroes";



export const getHeroesByPublisher = (publisher) => {

    const validPublished = ["DC Comics", "Marvel Comics"];
 
    if ( !validPublished.includes(publisher) ) {
        throw new Error(`${ publisher } no existe`)
    } 

    return heroes.filter(el => el.publisher === publisher);

}

