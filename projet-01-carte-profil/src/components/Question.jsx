// import questions from "../data/question "

// export default Question ({question,reponse,onReponse}){
//   return(
//     <> 
    
//     <h2>{question} </h2>
//     {questions.map((reponse)=> 
//       <button key={questions.id} onClick={()=> onReponse(reponse)}>
//       {reponse}
//       </button>
//     )}
//     </>
//   )
// }




export default function Question({ question, reponses, onReponse }) {
  return (
    <div className="question-container">
      <h2 className="question-texte">{question}</h2>
      <div className="reponses-grid">
        {reponses.map((reponse) => (
          <button
            key={reponse}
            className="reponse-btn"
            onClick={() => onReponse(reponse)}
          >
            {reponse}
          </button>
        ))}
      </div>
    </div>
  );
}