import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher'
import { HeroCard } from './HeroCard'

export const HeroList = ( { publisher }) => {
  
  // const heroes = getHeroesByPublisher( publisher )
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])
    
  return (
      <div className="d-flex flex-wrap animate__animated animate__fadeIn">
           {
            heroes.map( el => {
                return <HeroCard 
                key={el.id} 
                {...el}
                />
            })
           }
        </div>
  )
}
