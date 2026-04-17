import { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!query.trim()) {
      setError("Enter something");
      return;
    }

    if (query.length < 2) {
      setError("Min 2 chars");
      return;
    }

    setError("");
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <button>Search</button>
      {error && <p>{error}</p>}
    </form>
  );
}

export default SearchBar;
