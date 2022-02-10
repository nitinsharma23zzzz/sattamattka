import React, {useEffect, useState} from "react";
import {Games} from "./Games";
import {Loader} from "./loader/Loader";

class Game {
    constructor() {
        this.Name = "Name";
        this.Game = "Game";
    }
}

class FreeItem {
    constructor() {
        this.Name = "Name"
        this.Open = "Open"
        this.Jodi = "Jodi"
        this.Patti = "Patti"
        this.Close = "Close"
        this.Passing = "Passing"
    }
}

export const Cards = () => {

    const [games, setGames] = useState([new Game()]);
    const [freeItems, setFreeItems] = useState([new FreeItem()]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const URL = "https://opensheet.elk.sh/1KQucnkT95LGJq5TBlUGNMWre9nND1Uw-CY-acCeob0Q";
        fetch(`${URL}/Game`)
            .then(res => res.json())
            .then(res => {
                setGames(res);
            })
            .catch(e => {
                console.log(e)
            })
        fetch(`${URL}/Free`)
            .then(res => res.json())
            .then(res => {
                setFreeItems(res);
                setLoading(false);
            })
            .catch(e => {
                console.log(e)
            })
    }, [])

    return (
        loading
            ? <Loader/>
            : <Games games={games} freeItems={freeItems}/>
    )
}
