import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [cart, setCart] = useState(0);
  const details = [
    {
      image:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MKU83_VW_34FR+watch-41-alum-midnight-nc-8s_VW_34FR_WF_CO_GEO_IN?wid=750&hei=712&trim=1,0&fmt=p-jpg&qlt=95&.v=1632171038000,1661971867159",
      productname: "Watch",
      price: "$10",
    },
    {
      image:
        "https://www.cellularline.com/medias/webPResize700x700-webPConversionMediaFormat-PBESSENCE20000K-01-MAIN-HR.webp?context=bWFzdGVyfHJvb3R8MTAxMjcwfGltYWdlL3dlYnB8aGQ3L2g4OS85Njk3ODQzMTE4MTEwLndlYnB8NDJjMmMwOWYzNjY1MGFiMDhmNDZkNjQyMWJkYjUxNWIwMzI0MjkwNmI5MDhjMDMyZDk5ZjM1ODQ4OGE3ZDJlZQ",
      productname: "Power Bank",
      price: "$10",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgzt69gbzHPA6eBOSYSer06h_SH1df3X1CbQ&usqp=CAU",
      productname: "Television",
      price: "$500",
    },
    {
      image:
        "https://www.marshallheadphones.com/on/demandware.static/-/Sites-zs-master-catalog/default/dw7087b641/images/marshall/speakers/stanmore-ii-bt/black/high-res/pos-marshall-stanmore-ii-bt-black-01.png",
      productname: "Speaker",
      price: "$40",
    },
    {
      image:
        "https://media.wired.com/photos/631bb97dd884b4dcc94164e3/2:1/w_2399,h_1199,c_limit/How-to-Choose-a-Laptop-Gear-GettyImages-1235728903.jpg",
      productname: "Laptop",
      price: "$1000",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFLP8fQ0vYntEi_d6tUziqjY6yBJ0WhXLnWA&usqp=CAU",
      productname: "Mobile Phone",
      price: "$100",
    },
    {
      image:
        "data:image/jpeg;base64,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",
      productname: "Washing machine",
      price: "$400",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScb6vodhmpibvDy_GEz0Oe6XEwHe8N1roeSA&usqp=CAU",
      productname: "Microwave Oven",
      price: "$200",
    },
  ];
  const cartValueAdd = () => {
    setCart(cart + 1);
  };
  const cartValueRemove = () => {
    setCart(cart - 1);
  };
  return (
    <div className="App">
      <div className="header">
        <h1>
          Slip<label>Kart</label>
        </h1>
        <input placeholder="search Items" type="text" />
        <button className="btn btn-dark">Cart ({cart})</button>
      </div>

      <div className="main-container">
        <div className="row">
          {details.map((product) => (
            <Items
              cartValueAdd={cartValueAdd}
              cartValueRemove={cartValueRemove}
              product={product}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

const Items = ({ cartValueAdd, cartValueRemove, product }) => {
  const [isDisabled, setIsDisabled] = useState(true);
  {
    isDisabled ? "enable" : "disable";
  }
  return (
    <div className=" col-lg-3 col-md-6 col-sm-12">
      <div className="card">
        <div className="card-header">
          <img
            className=" img  card-img-top"
            src={product.image}
            alt={product.productname}
          />
        </div>
        <div className="card-body">
          <div className="namePrice">
            <h2>{product.productname}</h2>
            <p>{product.price}</p>
          </div>

          <div className="buttoncontainer">
            <button
              className=" btn btn-primary"
              id={isDisabled ? "enabled" : "disabled"}
              onClick={() => {
                cartValueAdd();
                setIsDisabled(!isDisabled);
              }}
            >
              Add to cart
            </button>
            <button
              className="btn btn-primary"
              id={isDisabled ? "disabled" : "enabled"}
              onClick={() => {
                cartValueRemove();
                setIsDisabled(!isDisabled);
              }}
            >
              Remove from cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};