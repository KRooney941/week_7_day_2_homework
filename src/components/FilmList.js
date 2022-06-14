import React from "react";
import Film from "./Film.js"

const FilmList = ({films}) => {
    const filmNodes = films.map((film) => {
        return (
            <Film film= {film} key={film.id}/>
        )
    })

    return (
        <>
            {filmNodes}
        </>
    )
} 

export default FilmList;
