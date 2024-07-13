function Success({ size, bread, order }) {
  return (
    <div>
      <div>{order.size}</div>
      <div>{order.thin}</div>
      <div>{order.name}</div>
      <div>{order.notes}</div>
      <div>{order.material}</div>
    </div>
  );
}

export default Success;
