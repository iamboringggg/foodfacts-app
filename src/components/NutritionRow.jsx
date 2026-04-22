import { Box, Typography, Divider } from "@mui/material";

function NutritionRow({ label, value, unit }) {
  if (!value) return null;

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography>{label}</Typography>
        <Typography>
          {value}
          {unit}
        </Typography>
      </Box>
      <Divider />
    </>
  );
}

export default NutritionRow;
