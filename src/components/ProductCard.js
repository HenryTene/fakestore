import { useState } from "react";
import ProductDetail from "./ProductDetail.js";

function ProductCard(props) {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="box" key={props.element.id}>
        <div className="content">
          <img src={props.element.image} alt="product" />
          <h5> {props.element.title}</h5>
          <button className="button" onClick={() => setShow(!show)}>
            Go to Detail
          </button>
        </div>
      </div>
      {show ? <ProductDetail element={props.element} /> : null}
    </>
  );
}
export default ProductCard;
