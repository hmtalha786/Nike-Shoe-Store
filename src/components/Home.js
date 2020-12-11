import React, { useContext } from "react";
import Carousel from "react-material-ui-carousel";
import { DataContext } from "../DataContext";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: "center",
  },
  corousal: {
    marginTop: 2,
    paddingTop: 30,
    paddingBottom: 20,
    backgroundColor: "rgb(245,245,245)",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "rgb(245,245,245)",
    boxShadow: "0 0",
    fontStyle: "italic",
    fontWeight: "light",
    color: "rgb(89, 89, 89)",
  },
  image: {
    maxWidth: "100%",
  },
  img: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "50px",
    maxWidth: "70%"
  },
  title: {
    fontWeight: 600,
    fontSize: 60,
    fontFamily: "'Sacramento', cursive",
    fontStyle: "italic",
    opacity: 0.7,
    "&:hover": {
      cursor: "pointer",
    },
  },
  list: {
    listStyleType: "none",
  },
  div: {
    marginTop: 70,
    marginBottom: 70,
    fontStyle: "italic",
  },
}));

const Home = (props) => {
  const data = useContext(DataContext);
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.root}>
      <Carousel className={classes.corousal}>
        {Object.entries(data).map(([productID, { name, img, img2 }]) => {
          return (
            <li key={productID} className={classes.list}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={5}>
                  <Paper className={classes.paper}>
                    <h1>{name}</h1>
                    <p>{data[productID].detail}</p>
                    <div className={classes.img}>
                      <img className={classes.image} src={img} alt={name} />
                    </div>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={7}>
                  <Paper className={classes.paper}>
                    <div className={"imgLoad"}>
                      <img className={classes.image} src={img2} alt={name} />
                    </div>
                  </Paper>
                </Grid>
              </Grid>
            </li>
          );
        })
        }
      </Carousel>

      <div className={classes.div}>
        <span onClick={() => { navigate("products"); }} className={classes.title}>
          Our Best Sellings
        </span>
        <div className={classes.root}>
          {Object.entries(data).map(([productID, { name, img2 }]) => {
            return (
              <Grid container direction="row" justify="center" alignItems="center" spacing={3}>
                <Grid item xs={3}>
                  <span>
                    <h3>{name}</h3>
                    <img className={classes.image} src={img2} alt={name} />
                  </span>
                </Grid>
              </Grid>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
