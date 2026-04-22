import { Card, CardContent, Typography, CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

function FoodCard({ product }) {
  const navigate = useNavigate();

  return (
    <Card>
      <CardActionArea
        onClick={() =>
          navigate(`/product/${product.id}`, { state: { product } })
        }
      >
        <CardContent>
          <Typography variant="h6">
            {product.product_name || "Unknown"}
          </Typography>
          <Typography color="text.secondary">{product.brands}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default FoodCard;
