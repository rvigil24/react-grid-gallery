import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";

import "./global.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default App;
