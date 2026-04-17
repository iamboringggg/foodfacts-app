import FoodCard from "./FoodCard";

function FoodList({ products, loading }) {
  if (loading) return null;

  if (products.length === 0) {
    return <p>No results found. Try a different search.</p>;
  }

  return (
    <div className="food-list">
      {products.map((product) => (
        <FoodCard key={product.code} product={product} />
      ))}
    </div>
  );
}

export default FoodList;
