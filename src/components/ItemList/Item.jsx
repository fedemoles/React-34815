import React from "react";
import MyButton from "../MyButton/MyButton";
import "./Item.css";

function Item(props) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={props.imgurl} alt={props.title} />
      </div>
      <div className="card-detail">
        <h3>{props.title}</h3>
        <p>u$s{props.price}</p>
      </div>
      <MyButton text="Ver Más" color="darkgrey" />
    </div>
  );
}

//<MyButton color="darkgrey"> Ver Más </MyButton> --> children

export default Item;
