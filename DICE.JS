export default function Dice({ numSides }) {
  const roll = Math.floor(Math.random() * numSides);
  return (
    <h1>
      {numSides} sided Dice roll:{roll}
    </h1>
  );
}
