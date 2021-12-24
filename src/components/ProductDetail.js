function ProductDetail(props) {
  return (
    <>
      <div key={props.element.id}>
        <div>
          <img src={props.element.image} alt="product" />
          <h5> {props.element.title}</h5>
          <p>{props.element.price}</p>
          <p>{props.element.description}</p>
          <p>{props.element.category}</p>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
