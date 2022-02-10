import React from "react";
import {FreeElement} from "./FreeElement";

export const Games = ({games, freeItems}) => {
    return (
        <>
            <div className="cards">
                {
                    games.map(game => (
                        <div key={game.Name}>
                            <div className="card w-100 text-center">
                                <h3 className="font-game-name">{game.Name.toUpperCase()}</h3>
                                <h2 className="font-game-value"><strong>{game.Game}</strong></h2>
                            </div>
                            <br/>
                        </div>
                    ))
                }
            </div>
            <h2 className="text-center font-free-key">Free Games</h2>
            <div className="cards">
                {
                    freeItems.map(free => (
                        <div key={free.Name}>
                            <FreeElement free={free} />
                        </div>
                    ))
                }
                {/*</div>*/}
            </div>
        </>
    )
}