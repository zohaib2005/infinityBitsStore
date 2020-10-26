import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import "./imagesList.scss";
import ProductsList from "./products/productsList";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "700px",
    width: "100%",
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
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
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
      <CardMedia className="cover" />

      <div className={classes.details}>
        <div className="sideTextContainer">
          <ProductsList />
        </div>
      </div>
    </div>
  );
}
