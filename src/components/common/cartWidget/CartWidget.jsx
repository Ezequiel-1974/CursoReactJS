import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);
  const total = getTotalQuantity();

  return (
    <Link to="/cart">
      <Badge badgeContent={total} showZero color="primary">
        <ShoppingCartIcon
          sx={{
            color: "#FFF",
            ml: 4,
            fontSize: 60,
          }}
        />
      </Badge>
    </Link>
  );
};

export default CartWidget;

