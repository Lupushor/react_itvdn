import "./App.css";
import Parent from "./components/Parent";

function App() {
  let user = {
    name: "Jahn",
    surname: "Smith",
  };

  let x = 1;
  let y = [1, 2, 3, 4, 5];

  return (
    <>
      <h1>Text text</h1>
      <p>drsabrbkoulm87;m97nevrg365ni7l78b</p>

      <Parent data={user} forX={x} forY={y} />
    </>
  );
}

export default App;
