import React from "react";
import "./Card.css";
import { Cart4 } from "react-bootstrap-icons";

const Card = (props) => {

  let editedDesc = props.description.split(" ").slice(0, 15).join(" ");

  return (
    <div className="card" style={{ width: "10rem" }}>
      <img
        className="cardImg card-img-top"
        src={props.image}
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{editedDesc}</p>
        <a href="#" className="cardButton btn btn-primary">
          <Cart4 /> Add To Cart
        </a>
      </div>
    </div>
  );
};

export default Card;
