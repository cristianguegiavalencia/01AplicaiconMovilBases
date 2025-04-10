import "./App.css";
import { Counter } from "./components/Counter";

function App() {
  return(
    <>
    <div className="flex flex-col justify-center items-center h-svh w-svw">
      <h1 className="text-4xl mb-5">React Counter</h1>
      <Counter />
    </div>
  </>
  );


}

export default App;
