import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Card from "../../components/Card/Card";
import Navbar from "../../components/Navbar/Navbar";
import Order from "../../components/Order/Order";
import "./Home.css";

const Home = () => {
  const [pizzas, setPizzas] = useState([]); // Lista das pizzas que vem no axios
  const [orderPizza, setOrderPizza] = useState([]); // Todas as pizzas separadas
  const [reduceOrderPizza, setReduceOrderPizza] = useState([]); // Juntando as pizzas iguais
  const [descount, setDescount] = useState("");
  const [show, setShow] = useState(false);

  // Toast depois que finaliza o pedido
  const notify = (time) =>
    toast.success(`Seu pedido chegará em ${time} minutos !`);

  // Get Pizzas utilizando Axios
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("./server/pizzas.json");
        setPizzas(response.data);
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      }
    };

    fetchData();
  }, []);

  // Atualiza a lista reduzida sempre que a lista total é alterada
  useEffect(() => {
    const counter = orderPizza.reduce((acc, pizza) => {
      const key = `${pizza.name}_${pizza.price}`;
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});

    const novaLista = Object.entries(counter).map(([key, quantity]) => {
      const [name, price] = key.split("_");
      return { name, price: parseInt(price), quantity };
    });
    setReduceOrderPizza(novaLista);
  }, [orderPizza]);

  // Use effect depois do pegar as informações das pizzas pelo Axios
  useEffect(() => {
    if (pizzas.length)
      setDescount(pizzas[Math.floor(Math.random() * (5 - 0) + 0)].name);
  }, [pizzas]);

  // Faz os cards alterar a Home, alterando a lista de carrinho
  const cardToHome = (childData) => {
    let pizza = pizzas.find((p) => p.name == childData);
    setOrderPizza([...orderPizza, pizza]);
  };

  // Faz os botões na lista de pedidos alterarem as informações da Home, alterando o Modal
  const orderToHome = (name, option) => {
    if (option) {
      let pizza = pizzas.find((p) => p.name == name);
      setOrderPizza([...orderPizza, pizza]);
    } else {
      // Removendo pelo final, pra não alterar a lista durante as remoções/adições na lista de pedidos
      let index = [...orderPizza].reverse().findIndex((p) => p.name == name);
      setOrderPizza((orderPizza) =>
        orderPizza.filter((pizza, i) => i !== orderPizza.length - 1 - index)
      );
    }
  };

  // Função que faz o botão do carrinho abrir o Modal aqui na Home
  const navbarToHome = () => {
    if (orderPizza.length) openModal();
  };

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const openModal = () => {
    handleShow();
  };

  // Finaliza o Pedido
  const closeOrder = () => {
    const fetchData = async () => {
      try {
        const response = await axios.get("./server/order.json");
        notify(response.data.deliveryTime / 60000);
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      }
    };
    fetchData();
    handleClose();
  };

  // Limpa a Lista de Pedidos
  const clearOrders = () => {
    setOrderPizza([]);
  }

  return (
    <>
      <div>
        <Navbar number={orderPizza.length} childToParent={navbarToHome} />
        <div className="list-pizza">
          {pizzas.map((pizza, index) => (
            <Card
              key={index}
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              childToParent={cardToHome}
              descount={pizza.name == descount}
            />
          ))}
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Lista de Pedidos </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="order-pizza">
            {reduceOrderPizza.map((pizza, index) => (
              <Order
                key={index}
                name={pizza.name}
                price={pizza.price}
                quantity={pizza.quantity}
                childToParent={orderToHome}
                descount={pizza.name == descount}
              />
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            disabled={!orderPizza.length}
            variant="outline-warning"
            onClick={() => {
              clearOrders();
            }}
          >
            Limpar
          </Button>
          <Button
            disabled={!orderPizza.length}
            variant="outline-danger"
            onClick={() => {
              closeOrder();
            }}
          >
            Finalizar Pedido
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer autoClose={10000} closeButton={true} limit={1} />
    </>
  );
};

export default Home;
