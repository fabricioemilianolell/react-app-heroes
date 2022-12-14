import { heroes } from "../data/heroes"


export const getHeroById = (id) => {
  
   return heroes.find( el => el.id === id)
}
