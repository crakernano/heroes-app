import React from "react"
import { Redirect, Switch, Route } from "react-router-dom/cjs/react-router-dom.min"
import { marvelScreen } from "../components/marvel/marvelScreen"
import { HeroesScreen } from "../components/heroes/heroesScreen"
import { dcScreen } from "../components/dc/DcScreen"
import { Navbar } from "../components/NavBar"
import { SearchScreen } from "../components/search/SearchScreen"

export const DashboardRoutes = () =>{
    return (
        <>
            <Navbar />
            <div className="container mt-2">
                <Switch>
                    <Route exact path="/marvel" component={marvelScreen} />
                    <Route exact path="/hero/:heroeId" component={HeroesScreen} />
                    <Route exact path="/dc" component={dcScreen} />
                    <Route exact path="/search" component={SearchScreen} />

                    <Redirect to="/marvel" component={marvelScreen} />
                </Switch>
            </div>
        </>
    )
}