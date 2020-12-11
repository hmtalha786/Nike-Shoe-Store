import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../DataContext";
import { CartContext } from "../CartContext";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: "center",
    marginBottom: 70,
    maxWidth: "100%",
  },
  list: {
    listStyleType: "none",
  },
  link: {
    color: theme.palette.text.secondary,
    textDecoration: "none",
  },
  grid: {
    maxWidth: "100%",
  },
  img: {
    maxWidth: "80%",
  },
  heading: {
    fontFamily: "'Sacramento', cursive",
    fontStyle: "italic",
    fontSize: 60,
    opacity: 0.6,
    marginBottom: 20,
    marginTop: 50,
  },
  ul: {
    paddingLeft: 25,
  },
}));

const ProductList = () => {
  const data = useContext(DataContext);
  const classes = useStyles();
  const { addItem, items } = useContext(CartContext);

  const handleAddition = (event) => {
    if (!items.find((item) => item.productID === event)) {
      const productObj = {
        productID: event,
        quantity: 1,
      };
      addItem(productObj);
    }
  };

  return (
    <div className={classes.root}>
      <h1 className={classes.heading}>Kids Collection</h1>
      <ul className={classes.ul}>
        <Grid container spacing={3} className={classes.grid}>
          {Object.entries(data).map(([productID, { name, img2, price }]) => {
            return (
              <Grid item xs={12} sm={6} md={4} >
                <li key={productID} className={classes.list}>
                  <Link to={productID} className={classes.link}>
                    <h3>{name}</h3>
                    <h3>${price}</h3>
                    <img className={classes.img} src={img2} alt={name} />
                  </Link>
                  <Button className={classes.button} onClick={() => handleAddition(productID)} variant="outlined" color="primary">
                    Add to Cart
                  </Button>
                </li><br/><br/>
              </Grid>
            );
          })}
        </Grid>
      </ul>
    </div>
  );
};

export default ProductList;
