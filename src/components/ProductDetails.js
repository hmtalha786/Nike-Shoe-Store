import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../DataContext";
import { CartContext } from "../CartContext";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 40,
    marginTop: 20,
    marginLeft: 50,
    marginRight: 50,
    color: theme.palette.text.secondary,
    fontSize: 18,
  },
  img: {
    maxWidth: "30%",
  },
  div: {
    textAlign: "center",
  },
}));

const ProductDetails = () => {
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

  const { productID } = useParams();
  return (
    <div className={classes.root}>
      <Grid container spacing={0} className={classes.grid}>
        <Grid item sm={12}>
          
            <h2>{data[productID].name}</h2>
            <h2>${data[productID].price}</h2>
            <hr />
            <p>{data[productID].detail}</p>
            <div className={classes.div}>
              <span><img src={data[productID].img2} alt={productID} className={classes.img} /></span>
              <span><img src={data[productID].img} alt={productID} className={classes.img} /></span>
              <br/><br/>
              <Button className={classes.button} onClick={() => handleAddition(productID)} variant="outlined" color="primary">
                Add to Cart
              </Button>
            </div>
          
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductDetails;
