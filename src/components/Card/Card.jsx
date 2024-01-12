import React from "react";
import Button from "react-bootstrap/Button";
import off30 from "../../assets/30off.png";
import pizzaImage from "../../assets/pizza.jpg";
import "./Card.css";

const Card = ({ name, price, ingredients, childToParent, descount }) => {
  
  const displayDescount = descount ? (
    <img className="descount" src={off30} />
  ) : (
    ""
  );

  const priceDescount = descount ? (
    <div>
      <span className="price-descount">
        {" "}
        R$ {(price).toFixed(2)}
      </span>
      <span className="pizza-price">
        {" "}
        R$ {(price * 0.7).toFixed(2)}
      </span>
    </div>
  ) : (
    <span className="pizza-price">
      {" "}
      R$ {(price).toFixed(2)}
    </span>
  );

  return (
    <div className="card">
      <img className="image-pizza" src={pizzaImage} />
      <div className="informations">
        {displayDescount}
        <span className="pizza-name">{name}</span>
        {priceDescount}
        <div>
          <span>Ingredientes:</span>
          <div className="ingredients">
            {ingredients.map((ingredient, index) => (
              <div className="pizza-ingredient" key={index}>
                <span>{ingredient}</span>
                {index == ingredients.length - 1 ? "." : ","}&nbsp;
              </div>
            ))}
          </div>
        </div>
        <Button variant="outline-secondary" onClick={() => childToParent(name)}>
          Adicionar ao Carrinho
        </Button>
      </div>
    </div>
  );
};

export default Card;
