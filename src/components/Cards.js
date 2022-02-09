import React, {useEffect} from "react";
import './Cards.css';

const games = [];

export const Cards = () => {

  useEffect(() => {
    
  },[])

  return (
    <div className="cards">
      {/*<div className="row">*/}
        <div className="card w-100 text-center">
          <h4>Name</h4>
          <h2>Game</h2>
        </div> <br/>
        <div className="card w-100 text-center">
          <h4>Name</h4>
          <h2>Game</h2>
        </div> <br/>
        <div className="card w-100 text-center">
          <h4>Name</h4>
          <h2>Game</h2>
        </div> <br/>
        <div className="card w-100 text-center">
          <h4>Name</h4>
          <h2>Game</h2>
        </div> <br/>
        <div className="card w-100 text-center">
          <h4>Name</h4>
          <h2>Game</h2>
        </div> <br/>
      {/*</div>*/}
    </div>
  )
}

//
// export const Cards = () => {
// return (
//   <>
//   <div className="container mt-3">
//     <div className="row">
//       <div className="card-deck">
//         <div className="card mb-4" style="min-width: 18rem; max-width: 18rem;">
//           <img className="card-img-top" src="https://placehold.it/280x140/abc" alt="Card image cap" />
//             <div className="card-body">
//               <h5 className="card-title">Card title</h5>
//               <p className="card-text">This is a longer card <br/> with <br/> supporting <br/> text below <br/> as a natural
//                 lead-in to additional content. This content is a little bit longer.</p>
//               <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
//             </div>
//         </div>
//         <div className="card mb-4" style="min-width: 18rem; max-width: 18rem;">
//           <img className="card-img-top" src="https://placehold.it/280x140/bca" alt="Card image cap" />
//             <div className="card-body">
//               <h5 className="card-title">Card title</h5>
//               <p className="card-text">This card has supporting text below as a natural lead-in to additional
//                 content.</p>
//               <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
//             </div>
//         </div>
//         <div className="card mb-4" style="min-width: 18rem; max-width: 18rem;">
//           <img className="card-img-top" src="https://placehold.it/280x140/bb4" alt="Card image cap" />
//             <div className="card-body">
//               <h5 className="card-title">Card title</h5>
//               <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
//                 additional content. This <br/> card <br/> has <br/> even longer <br/> content <br/> than <br/> the
//                   first <br/> to show <br/> that equal height action.</p>
//               <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
//             </div>
//         </div>
//         <div className="card mb-4" style="min-width: 18rem; max-width: 18rem;">
//           <img className="card-img-top" src="https://placehold.it/280x140/54a" alt="Card image cap" />
//             <div className="card-body">
//               <h5 className="card-title">Card title</h5>
//               <p className="card-text">This is a longer card <br/> with <br/> supporting <br/> text below <br/> as a natural
//                 lead-in to additional content. This content is a little bit longer.</p>
//               <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
//             </div>
//         </div>
//         <div className="card mb-4" style="min-width: 18rem; max-width: 18rem;">
//           <img className="card-img-top" src="https://placehold.it/280x140/f0a" alt="Card image cap" />
//             <div className="card-body">
//               <h5 className="card-title">Card title</h5>
//               <p className="card-text">This card has supporting text below as a natural lead-in to additional
//                 content.</p>
//               <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
//             </div>
//         </div>
//         <div className="card mb-4" style="min-width: 18rem; max-width: 18rem;">
//           <img className="card-img-top" src="https://placehold.it/280x140/aa0" alt="Card image cap" />
//             <div className="card-body">
//               <h5 className="card-title">Card title</h5>
//               <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
//                 additional content. This <br/> card <br/> has <br/> even longer <br/> content <br/> than <br/> the
//                   first <br/> to show <br/> that equal height action.</p>
//               <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
//             </div>
//         </div>
//         <div className="card mb-4" style="min-width: 18rem; max-width: 18rem;">
//           <img className="card-img-top" src="https://placehold.it/280x140/f00" alt="Card image cap" />
//             <div className="card-body">
//               <h5 className="card-title">Card title</h5>
//               <p className="card-text">This is a longer card <br/> with <br/> supporting <br/> text below <br/> as a natural
//                 lead-in to additional content. This content is a little bit longer.</p>
//               <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
//             </div>
//         </div>
//         <div className="card mb-4" style="min-width: 18rem; max-width: 18rem;">
//           <img className="card-img-top" src="https://placehold.it/280x140/090" alt="Card image cap" />
//             <div className="card-body">
//               <h5 className="card-title">Card title</h5>
//               <p className="card-text">This card has supporting text below as a natural lead-in to additional
//                 content.</p>
//               <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
//             </div>
//         </div>
//         <div className="card mb-4" style="min-width: 18rem; max-width: 18rem;">
//           <img className="card-img-top" src="https://placehold.it/280x140/ff0" alt="Card image cap" />
//             <div className="card-body">
//               <h5 className="card-title">Card title</h5>
//               <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
//                 additional content. This <br/> card <br/> has <br/> even longer <br/> content <br/> than <br/> the
//                   first <br/> to show <br/> that equal height action.</p>
//               <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
//             </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   </>
// )
// }