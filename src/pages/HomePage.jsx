import {
  Container,
  Grid,
  CircularProgress,
  Box,
  Typography,
} from "@mui/material";
import useFoodSearch from "../hooks/useFoodSearch";
import FoodCard from "../components/FoodCard";
import SearchBar from "../components/SearchBar";
import ErrorMessage from "../components/ErrorMessage";

function HomePage() {
  const { results, loading, error, searchFood } = useFoodSearch();

  return (
    <Container sx={{ mt: 4 }}>
      <SearchBar onSearch={searchFood} />

      {/* ERROR */}
      {error && <ErrorMessage message={error} />}

      {/* LOADING */}
      {loading && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <CircularProgress />
        </Box>
      )}

      {/* EMPTY STATE */}
      {!loading && results.length === 0 && !error && (
        <Typography sx={{ mt: 3, textAlign: "center" }}>
          Search for a food to see results
        </Typography>
      )}

      {/* RESULTS */}
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {results.map((p) => (
          <Grid item xs={12} sm={6} md={4} key={p.id}>
            <FoodCard product={p} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default HomePage;
