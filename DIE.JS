function Die() {
  const roll = Math.floor(Math.random() * 6) + 1;
  return <h1 className="Die">Die roll : {roll}</h1>;
}

export default Die;
