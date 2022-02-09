import React from "react";
import '../cards/Cards.css'

export const Games = ({games, freeItems}) => {
  return (
    <>
      <div className="cards">
        {
          games.map(game => (
            <div key={game.Name}>
              <div className="card w-100 text-center">
                <h3 className="font-lobster">{game.Name}</h3>
                <h2><strong>{game.Game}</strong></h2>
              </div>
              <br/>
            </div>
          ))
        }
        {/*</div>*/}
      </div>
      <h2 className="text-center">Free Games</h2>
      <div className="cards">
        {
          freeItems.map(free => (
            <div key={free.Name}>
              <div className="card w-100 text-center">
                <h3 className="font-lobster">{free.Name}</h3>
                <h4>{free.Open}</h4>
                <h4>{free.Jodi}</h4>
                <h4>{free.Patti}</h4>
                <h4>{free.Close}</h4>
                <h4>{free.Passing}</h4>
              </div>
              <br/>
            </div>
          ))
        }
        {/*</div>*/}
      </div>
    </>
  )
}