import Success from "../components/success/Success";

function SuccessPage({ size, bread, order }) {
  return (
    <div>
      <Success size={size} bread={bread} order={order} />
    </div>
  );
}

export default SuccessPage;
