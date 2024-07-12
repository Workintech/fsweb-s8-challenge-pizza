import Order from "../components/order/Order";

function OrderPage({ selectSize }) {
  return (
    <div>
      <Order selectSize={selectSize} />
    </div>
  );
}

export default OrderPage;
