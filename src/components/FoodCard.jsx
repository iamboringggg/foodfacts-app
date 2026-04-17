import { useNavigate } from "react-router-dom";

function FoodCard({ product }) {
  const navigate = useNavigate();

  return (
    <div
      className="food-card"
      onClick={() => navigate(`/product/${product.code}`)}
      style={{ cursor: "pointer" }}
    >
      <img src={product.image_small_url} />

      <h4>{product.product_name}</h4>

      <p>{product.brands}</p>

      <p>Calories: {product.nutriments?.energy_kcal ?? "N/A"}</p>
    </div>
  );
}

export default FoodCard;
