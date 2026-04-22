import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../store/savedSlice";
import { Container, Button } from "@mui/material";

function DetailPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const saved = useSelector((s) => s.saved.items);

  const product = state?.product;
  if (!product) return <p>No product</p>;

  const isSaved = saved.some((p) => p.id === product.id);

  return (
    <Container>
      <Button onClick={() => navigate(-1)}>Back</Button>

      <h2>{product.product_name}</h2>

      <Button
        onClick={() =>
          isSaved
            ? dispatch(removeItem(product.id))
            : dispatch(addItem(product))
        }
      >
        {isSaved ? "Remove" : "Save"}
      </Button>
    </Container>
  );
}

export default DetailPage;
