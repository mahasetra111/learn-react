// export default function TodoInput({Input,SetInput,OnAjoute}){
//     return(
//         <>
//         <input 
//         value={Input}
//         onChange={(e)=>SetInput(e.target.value)}
        
//          />
//          <button
//          onClick={()=>OnAjoute()}
//          >Ajouter</button>

//         </>
//     )
// }
    
export default function TodoInput({ Input, SetInput, OnAjoute }) {
  return (
    <div className="todo-input-wrapper">
      <input
        className="todo-input"
        value={Input}
        onChange={(e) => SetInput(e.target.value)}
        placeholder="Entrez une tâche..."
      />
      <button className="todo-btn-ajouter" onClick={() => OnAjoute()}>
        Ajouter
      </button>
    </div>
  );
}