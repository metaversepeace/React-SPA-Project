import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>

      <h1>The Turkish Bath</h1>

      <nav
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
      }}
      >
        <Link to="/Home">Home</Link>
        <Link to="/About">About Us</Link>
        <Link to="/Services">Services</Link>
        <Link to="/Gallery">Gallery</Link>
        <Link to="/Reservations">Reservations</Link>
        
      </nav>
      <Outlet />
    </div>
  );
}



