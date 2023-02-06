import { BiHome,BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar(){
  return(
    <nav>
      <ul>
      <li><Link to="/"><BiHome /></Link></li>
      <li><Link to="/cart"><BiCart /><span>4</span></Link></li>
      </ul>
    </nav>
  );
};
export default Navbar;