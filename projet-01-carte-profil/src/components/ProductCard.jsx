export default function ProductCard({ nom, prix }) {
  return (
    <div className="produit-card">
      <h3>{nom}</h3>
      <p>{prix}</p>
    </div>
  );
}