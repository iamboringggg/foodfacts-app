import { useNavigate } from "react-router-dom";

function SavedPage({ saved, dispatch }) {
  const navigate = useNavigate();

  if (saved.length === 0) {
    return <p>No saved items</p>;
  }

  return (
    <div className="page">
      <h2>Saved Items ({saved.length})</h2>

      {saved.map((p) => (
        <div key={p.code}>
          <h4>{p.product_name}</h4>
          <p>{p.brands}</p>

          <button onClick={() => navigate(`/product/${p.code}`)}>View</button>

          <button onClick={() => dispatch({ type: "REMOVE", code: p.code })}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default SavedPage;
