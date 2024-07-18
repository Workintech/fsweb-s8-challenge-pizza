import Order from "../components/order/Order";

function OrderPage({
  validate,
  validation,
  order,
  price,
  size,
  bread,
  selectSize,
  selectBread,
  finalOrder,
}) {
  return (
    <div>
      <Order
        validation={validation}
        validate={validate}
        order={order}
        price={price}
        size={size}
        bread={bread}
        finalOrder={finalOrder}
        selectBread={selectBread}
        selectSize={selectSize}
      />
    </div>
  );
}

export default OrderPage;
