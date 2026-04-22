import { useState } from "react";
import axios from "axios";

function useFoodSearch() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchFood = async (query) => {
    setLoading(true);
    setError(null);

    try {
      const res = await axios.get(
        "https://world.openfoodfacts.org/cgi/search.pl",
        {
          params: {
            search_terms: query,
            search_simple: 1,
            action: "process",
            json: 1,
            page_size: 10,
          },
        },
      );

      const filtered = res.data.products
        .filter((p) => p.product_name && p.nutriments)
        .map((p) => ({
          ...p,
          id: p.code,
        }));

      setResults(filtered);
    } catch (err) {
      console.error(err);

      if (err.response) {
        setError(`Server error: ${err.response.status}`);
      } else if (err.request) {
        setError("Network error. Check connection.");
      } else {
        setError("Something went wrong.");
      }

      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return { results, loading, error, searchFood };
}

export default useFoodSearch;
