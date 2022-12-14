import { Link } from "react-router-dom"
import './HeroCard.css';

export const HeroCard = ( {id,superhero,publisher,alter_ego,first_appearance,
    characters} ) => {

    const heroImageUrl = `/assets/heroes/${id}.jpg`

    // const CharactersByHero = ( {alter_ego, characters} ) => {
    //     if (alter_ego === characters) return (<></>)
    //     return <p>{characters}</p>

            // return (alter_ego === characters)
            // ? <></>
            // : <p>{characters}</p>
    // }
       
   
    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">
                <div className="row no-gutters">
                    <div className="container-img">
                        <img src={heroImageUrl} className="img" alt={ superhero }/>
                    </div>

                    <div className="col-10">
                        <div className="card-body">
                            <h5 className="card-title">{ superhero }</h5>
                            <p className="card-text">{alter_ego}</p>
                            {
                            (alter_ego !== characters) 
                            && <p>{characters}</p>

                            // (alter_ego !== characters) 
                            //     ? <p>{characters}</p>
                            //     : null
                            } 
                            {/* <CharactersByHero alter_ego={alter_ego} characters={characters}/> */}
                            
                            <p className="card-text">
                                <small className="text-muted">{first_appearance}</small>
                            </p>

                            <Link to={`/hero/${ id }`}>
                                MASS..
                            </Link>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
    }

