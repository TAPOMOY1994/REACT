import "./DiceRoll.css";
import Die from "./Die";
export default function DiceRoll() {
  return (
    <div className="DiceRoll">
      <Die />
      <Die />
      <Die />
    </div>
  );
}
