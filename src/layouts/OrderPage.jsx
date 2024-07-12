import Order from "../components/order/Order";

function OrderPage({ selectSize, selectBread }) {
  return (
    <div>
      <Order selectBread={selectBread} selectSize={selectSize} />
    </div>
  );
}

export default OrderPage;
