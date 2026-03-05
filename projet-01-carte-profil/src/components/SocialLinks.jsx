// export default function SocialLink({twitter,instagram}){
//     return(
//         <div>

//             <h4>{twitter}</h4>
//              <h4>{instagram}</h4>
            
//         </div>
//     )
// }
//CORRIGER
export default function SocialLink({ twitter, instagram }) {
  return (
    <div className="socials">
      <span>🐦 {twitter}</span>
      <span>📸 {instagram}</span>
    </div>
  );
}