import React from "react";

import classes from "./PizzaImage.module.css";
import realPizzaImage from "../../assets/pizza.jpg";

const pizzaImage = (props) => (
  <div className={classes.PizzaImage}>
    <img src={realPizzaImage} className={classes.PizzaImg} />
  </div>
);

export default pizzaImage;
