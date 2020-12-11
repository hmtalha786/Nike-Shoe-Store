import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../CartContext";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Badge from '@material-ui/core/Badge';
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(2),
  },
  button: {
    color: "rgb(0,0,0)",
    padding: "10px 30px",
    fontSize: 15,
    fontWeight: 400,
  },
  appBar: {
    backgroundColor: "rgb(255, 255, 255)",
  },
  logo: {
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

export default function Header() {
  const classes = useStyles();
  const navigate = useNavigate();
  const { items } = useContext(CartContext);
  const cartItems = () => {
    if (items.length > 0) {
      return items.length;
    }
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <img onClick={() => navigate("/")} className={classes.logo}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/300px-Logo_NIKE.svg.png"
              width="70px" height="20px" alt="Adidas"
            />
          </Typography>
          <Button className={classes.button} onClick={() => navigate("/")}>
            <strong>Home</strong>
          </Button>
          <Button className={classes.button} onClick={() => navigate("Products")}>
            <strong>Products</strong>
          </Button>
          <Button className={classes.button} onClick={() => navigate("LimitedEdition")}>
            <strong>Limited Edition</strong>
          </Button>
          <Button className={classes.button} onClick={() => navigate("Men")}>
            <strong>Men</strong>
          </Button>
          <Button className={classes.button} onClick={() => navigate("Women")}>
            <strong>Women</strong>
          </Button>
          <Button className={classes.button} onClick={() => navigate("Kids")}>
            <strong>Kids</strong>
          </Button>
          <Button className={classes.button} onClick={() => navigate("Sale")}>
            <strong>Sale</strong>
          </Button>
          <Button className={classes.button} onClick={() => navigate("Login")}>
            <strong>Login / Register</strong>
          </Button>
          <Button className={classes.button} onClick={() => navigate("Cart")}>
            <Badge badgeContent={cartItems()} color="secondary">
            <ShoppingCartOutlinedIcon />
            </Badge>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
