import Order from "../components/order/Order";

function OrderPage({ size, bread, selectSize, selectBread, finalOrder }) {
  return (
    <div>
      <Order
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
