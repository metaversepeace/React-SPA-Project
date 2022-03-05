import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import Reservations from "./components/Reservations";
import Services from "./components/Services";


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>

     <Route path="/" element={<App />}>

      <Route path="About" element={<About />} />
      <Route path="Gallery" element={<Gallery />} />
      <Route path="Home" element={<Home />} />
      <Route path="Reservations" element={<Reservations />} />
      <Route path="Services" element={<Services />} />
      
     </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);