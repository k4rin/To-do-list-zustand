import {
  Link,
  Outlet,
  NavLink
} from "react-router-dom";
import "./index.css";
import "./App.css";

export default function App() {
  return (
    <>
      <nav className= "navbar w-full flex  justify-between items-center p-4">
        {/*O NavLink facilita a exibição dos estados ativos.*/}
        <NavLink to="/list"> List </NavLink>
        <Link to="/create">Create</Link>
      </nav>
      <Outlet />
    </>
  );
}
