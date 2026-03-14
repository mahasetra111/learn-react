import Card from "./components/card";
import "./App.css";
import ProductCard from "./components/ProductCard";
import produits from "./data/products";
import Conteur from "./components/Counter";

function App() {
  return (
    <div>

      {/* ===== PROJET 1 — Cartes de footballeurs ===== */}
      <section className="section">
        <h1 className="section-titre">Projet 1 — Cartes de footballeurs</h1>
        <div className="boutique">
          <Card
            image="https://img.a.transfermarkt.technology/portrait/header/342229-1682683695.jpg"
            nom="Kylian Mbappé"
            twit="@KMbappe"
            inst="@k.mbappe"
            bio="Prodige français du football mondial, Kylian Mbappé est connu pour sa vitesse fulgurante et son sens du but exceptionnel. Actuellement au Real Madrid, il est considéré comme le futur meilleur joueur du monde."
          />
          <Card
            image="https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg"
            nom="Cristiano Ronaldo"
            twit="@Cristiano"
            inst="@cristiano"
            bio="Cristiano Ronaldo est l'un des plus grands footballeurs de tous les temps avec plus de 900 buts en carrière. Actuellement à Al Nassr, il continue de repousser les limites du football mondial."
          />
          <Card
            image="https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg"
            nom="Lionel Messi"
            twit="@TeamMessi"
            inst="@leomessi"
            bio="Lionel Messi, champion du monde 2022 avec l'Argentine, est considéré par beaucoup comme le meilleur joueur de l'histoire du football. Aujourd'hui à l'Inter Miami, il continue d'enchanter le monde avec sa magie balle au pied."
          />
        </div>
      </section>

      {/* ===== PROJET 2 — Liste de produits ===== */}
      <section className="section">
        <h1 className="section-titre">Projet 2 — Liste de produits</h1>
        <h2 className="produits-titre">NOS PRODUITS</h2>
        <div className="produits-liste">
          {produits.map((produit) => (
            <ProductCard key={produit.id} nom={produit.nom} prix={produit.prix} />
          ))}
        </div>
      </section>

      {/* ===== PROJET 3 — Compteur ===== */}
      <section className="section">
        <h1 className="section-titre">Projet 3 — Compteur interactif</h1>
        <Conteur />
      </section>

    </div>
  );
}

export default App;