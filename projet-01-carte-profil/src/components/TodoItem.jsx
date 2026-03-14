// export default function TodoItem({texte , OnSuprimer}){
//     return(
//         <>
//         <p>{texte}</p>
//         <button 
//         onClick={()=>OnSuprimer()}
//          >
//             Suprimer
//         </button>
        
//         </>
//     )
// }
export default function TodoItem({ texte, OnSuprimer }) {
  return (
    <div className="todo-item">
      <p>{texte}</p>
      <button className="todo-btn-supprimer" onClick={() => OnSuprimer()}>
        Supprimer
      </button>
    </div>
  );
}