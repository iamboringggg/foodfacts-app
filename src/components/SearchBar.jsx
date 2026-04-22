import { TextField, Button, Box } from "@mui/material";
import { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) onSearch(query);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", gap: 1 }}
    >
      <TextField
        fullWidth
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button type="submit" variant="contained">
        Search
      </Button>
    </Box>
  );
}

export default SearchBar;
