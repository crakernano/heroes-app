import React from "react"
import { HeroList } from "../heroes/heroesList"

export const dcScreen = () =>{
    return (
        <>
        <div>
            <h1>DC</h1>
            <hr/>
            <HeroList publisher="DC Comics" />
        </div>
        </>
    )
}