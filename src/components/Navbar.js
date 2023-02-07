import { BiHome,BiCart } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar(){
  const {cartProductIds} = useSelector(state=>state.cart);

  return(
    <nav>
      <ul>
        <li><Link to="/"><BiHome /></Link></li>
        <li>
          <Link to="/cart"><BiCart />
            <span>{cartProductIds.length}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;