//VERSION A LA MAIN

// import SocialLink from "./SicialLinks";

// export default function Card({image ,nom ,twit,inst,bio}){
//     return(
//         <div>
//             <Avatar  photo={image} nom={nom}/>
//             <SocialLink twitter={twit}  instagram={inst}/>
//               <h1>Bio</h1>
//               <p>{bio}</p>


//         </div>

//     )
// }
// CORRIGER

import Avatar from "./Avatar";
import SocialLink from "./SocialLinks";

export default function Card({ image, nom, twit, inst, bio }) {
  return (
    <div className="card">
      <Avatar photo={image} nom={nom} />
      <p className="bio">{bio}</p>
      <SocialLink twitter={twit} instagram={inst} />
    </div>
  );
}