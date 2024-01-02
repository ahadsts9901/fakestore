import React, { useState } from "react";
import "./Card.css";
import { BoxArrowInUpRight, Clipboard } from "react-bootstrap-icons";
import { useLocation, useNavigate } from "react-router-dom";
import OGTag from "../OG/OG";

const Card = (props) => {

  const [IsCopy, setIsCopy] = useState("Copy url")

  const navigate = useNavigate()

  let editedDesc = props.description.split(" ").slice(0, 15).join(" ");

  const copy = () => {
    let url = window.location.origin + "/" + props.id;
    navigator.clipboard.writeText(url)
    setIsCopy("Copied")
    setTimeout(() => {
      setIsCopy("Copy url")
    }, 1000)
  }

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
        <div className="buttonCont">
          <a onClick={() => navigate(`/${props.id}`)} className="cardButton btn btn-primary">
            <BoxArrowInUpRight /> See Product
          </a>
          <a onClick={() => copy()} className="cardButton btn btn-primary">
            <Clipboard /> {IsCopy}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
