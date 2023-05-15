import "./App.css";
import { Count } from "./components/useCounter/Count";
import { Input } from "./components/useInput/Input";
import { TimerComponent } from "./components/useTimer/Timer";

function App() {
  return (
    <div className="App">
      <Count />
      <TimerComponent />
      <Input type="email" />
      <Input type="password" />
    </div>
  );
}

export default App;
