import { Route } from "react-router-dom";
import Todo from "./pages/TodoPage.js";
import "./assets/css/App.css";

function App() {
  return (
    <div className="App ">
      <Route path="/" component={Todo} exact />
    </div>
  );
}

export default App;
