import React from "react";
import Button from "react-bootstrap/Button";
import off30 from "../../assets/30off.png";
import pizzaImage from "../../assets/pizza.jpg";
import "./Order.css";

const Order = ({ name, price, quantity, childToParent, descount }) => {
  const displayDescount = descount ? (
    <img className="order-descount" src={off30} />
  ) : (
    ""
  );
  const priceDescount = descount ? (
    <div>
      <span className="order-price-descount">
        {" "}
        R$ {(price * quantity).toFixed(2)}
      </span>
      <span className="order-pizza-price">
        {" "}
        R$ {(price * quantity * 0.7).toFixed(2)}
      </span>
    </div>
  ) : (
    <span className="order-pizza-price">
      {" "}
      R$ {(price * quantity).toFixed(2)}
    </span>
  );

  return (
    <div className="order">
      <img className="image-order" src={pizzaImage} />
      <div className="informations-order">
        {displayDescount}
        <span className="order-pizza-name">{name}</span>
        {priceDescount}

        <div className="order-buttons">
          <Button
            variant="outline-secondary"
            onClick={() => childToParent(name, false)}
          >
            -
          </Button>

          <span className="order-pizza-quantity">{quantity}</span>

          <Button
            variant="outline-secondary"
            onClick={() => childToParent(name, true)}
          >
            +
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Order;
