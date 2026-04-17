import { useState } from "react";
import SearchBar from "./components/SearchBar";
import FoodList from "./components/FoodList";

function App() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false); // 👈 IMPORTANT

  const handleSearch = async (query) => {
    setLoading(true);
    setSearched(true);

    try {
      const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(
        query,
      )}&json=1&page_size=10`;

      const response = await fetch(url);
      const data = await response.json();

      const filtered = data.products.filter(
        (p) => p.product_name && p.product_name.trim() !== "",
      );

      setResults(filtered);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>🥗 FoodFacts</h1>

      <SearchBar onSearch={handleSearch} />

      {loading && <p>Loading...</p>}

      {!loading && !searched && (
        <p>Search for a food above to see its nutrition info.</p>
      )}

      <FoodList products={results} loading={loading} />
    </div>
  );
}

export default App;
