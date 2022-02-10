import React from "react";

export const FreeElement = ({free}) => {
    return (
        <>
            <div className="card w-100 text-center">
                <h3 className="font-game-name">{free.Name}</h3>
                <h5 className>
                    <span className="font-free-key">Open: </span>
                    <span className="font-free-value">{free.Open}</span>
                </h5>
                <h5 className>
                    <span className="font-free-key">Jodi: </span>
                    <span className="font-free-value">{free.Jodi}</span>
                </h5>
                <h5 className>
                    <span className="font-free-key">Patti: </span>
                    <span className="font-free-value">{free.Patti}</span>
                </h5>
                <h5 className>
                    <span className="font-free-key">Close: </span>
                    <span className="font-free-value">{free.Close}</span>
                </h5>
                <h5 className>
                    <span className="font-free-key">Passing: </span>
                    <span className="font-free-value">{free.Passing}</span>
                </h5>
            </div>
            <br/>
        </>

    )
}