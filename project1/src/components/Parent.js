function Parent(props) {
  console.log(props);
  console.log(props.data);
  console.log(props.forX);
  console.log(props.forY);
  return (
    <>
      <p>Name is {props.data.name}</p>
    </>
  );
}

export default Parent;
