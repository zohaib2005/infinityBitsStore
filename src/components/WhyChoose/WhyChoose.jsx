import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import "./WhyChoose.scss";
import ProductsList from "./products/productsList";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "50px",
    display: "flex",
    height: "703px",
    width: "96%",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: "50px",
    width: "50%",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: "35%",
  },

  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function ImagesList() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <CardMedia className="coverImage" />
      <div className={classes.details}>
        <div className="sideContainerText">
          <ProductsList />
        </div>
      </div>
    </div>
  );
}
