import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../store/savedSlice";
import { Grid, Button } from "@mui/material";

function SavedPage() {
  const saved = useSelector((s) => s.saved.items);
  const dispatch = useDispatch();

  return (
    <Grid container spacing={2}>
      {saved.map((p) => (
        <Grid item xs={12} sm={6} md={4} key={p.id}>
          <h3>{p.product_name}</h3>
          <Button onClick={() => dispatch(removeItem(p.id))}>Remove</Button>
        </Grid>
      ))}
    </Grid>
  );
}

export default SavedPage;
