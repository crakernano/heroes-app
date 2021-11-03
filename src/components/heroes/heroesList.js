import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher"
import { SearchScreen } from "../search/SearchScreen";
import { HeroCard } from "./HeroCard"

export const HeroList = ({publisher}) => {
    const heroes = getHeroesByPublisher( publisher);

    return (
        <div className="card-columns animate__animated animate__fadeIn">
           {
               heroes.map( hero => (

                   <HeroCard
                        key={ hero.id }
                        { ...hero }
                    />
               ))
           }
        </div>
    )
}