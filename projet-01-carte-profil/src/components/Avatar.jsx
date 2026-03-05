
// VERSION A LA MAIN
// export default function Card({photo,nom}){
//     return(
//         <div>
//             <img src={photo} alt="" />
//             <h3>{nom}</h3>

//         </div>
//     )
// } 
// VERSION CORRIGER

export default function Avatar({ photo, nom }) {
  return (
    <div className="avatar">
      <img src={photo} alt={nom} />
      <h3>{nom}</h3>
    </div>
  );
}