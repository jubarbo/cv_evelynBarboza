import { useState } from "react";
import "../Card/Card.css";
import Button from "../Button/Button";

const Card = ({ textCard, titulo, txtBtn, children }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <section className="card">
        <div className="card-text">
          <h1>{titulo}</h1>
          <p>{textCard}</p>
          {clicked && (
            <p className="extra-text">
              rem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s...
            </p>
          )}
        </div>
        <div className="card-button">
          <Button text={txtBtn} onClick={handleClick} />
        </div>
        {children}
      </section>
    </>
  );
};

export default Card;
