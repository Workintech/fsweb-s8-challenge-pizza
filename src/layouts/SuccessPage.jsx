import Success from "../components/success/Success";

function SuccessPage({ totalPrice, size, bread, order }) {
  return (
    <div>
      <Success
        totalPrice={totalPrice}
        size={size}
        bread={bread}
        order={order}
      />
    </div>
  );
}

export default SuccessPage;
