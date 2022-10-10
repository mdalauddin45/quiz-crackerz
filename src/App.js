// import logo from "./logo.svg";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Routes";

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
