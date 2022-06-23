import { BrowserRouter } from "react-router-dom";
import { RoutePaths } from "./RoutePaths";
import "./App.css";


export const App = () => {
  return (
    <BrowserRouter>
      <RoutePaths/>
    </BrowserRouter>
  );
};
