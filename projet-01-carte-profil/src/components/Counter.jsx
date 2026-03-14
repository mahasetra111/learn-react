// import { useState } from "react"

// export  default function Conteur(){
//     const[Count ,SetCount]=useState(0)
//     return(
//         <>
//         <h2>Conter : {Count}</h2>
//         <button  onClick={()=>SetCount(Count + 1)}> +

//         </button>
//       <button  onClick={() => SetCount(Count > 0 ? Count - 1 : 0)}> -

//         </button>
//           <button  onClick={()=> SetCount(0)}> Reset

//         </button>



//         </>

//     )
// }


import { useState } from "react";


export default function Counter() {
  const [Count, SetCount] = useState(0);
  return (
    <div className="counter-container">
      <div className="counter-card">
        <p className="counter-title">Compteur</p>
        <h2 className="counter-value">{Count}</h2>
        <div className="counter-buttons">
          <button className="btn btn-moins" onClick={() => SetCount(Count > 0 ? Count - 1 : 0)}>−</button>
          <button className="btn btn-plus"  onClick={() => SetCount(Count + 1)}>+</button>
          <button className="btn btn-reset" onClick={() => SetCount(0)}>Reset</button>
        </div>
      </div>
    </div>
  );
}