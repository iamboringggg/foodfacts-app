import { AppBar, Toolbar, Typography, Button, Badge } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function NavBar() {
  const count = useSelector((state) => state.saved.items.length);

  return (
    <AppBar position="sticky">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6">🥗 FoodFacts</Typography>

        <div>
          <Button component={NavLink} to="/" color="inherit">
            Search
          </Button>

          <Button
            component={NavLink}
            to="/saved"
            color="inherit"
            startIcon={
              <Badge badgeContent={count} color="secondary">
                <BookmarkIcon />
              </Badge>
            }
          >
            Saved
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
