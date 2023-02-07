import { BiCart } from "react-icons/bi";
import { useSelector,useDispatch } from "react-redux";
import productList from '../productList.json';
import './Cart.css';
import {removeFromCart,clearAllItems} from '../redux/CartSlice';

function Cart(){
  let dispatch = useDispatch();
  const {cartProductIds} = useSelector(state => state.cart);

  // console.log(cartProductIds)

  const ProductData = productList.products.filter(
    product => cartProductIds.includes(product.id)
  );

    // console.log(ProductData);

  return(
    <div id="cart">
      <h3>Item in Cart</h3>
      <div className="boxCart">
        {//productList.products//
        ProductData.map(product => {
          return(
            <figure key={product.id}>
              <img src={product.imageUrl} alt={product.name} />
              <figcaption>
                <dl>
                  <dt>{product.name}</dt>
                  <dd>{product.detail}</dd>
                  <dd>
                    <button 
                    type="button"
                    onClick={()=>dispatch(removeFromCart(product.id))}
                    >Romove from Cart
                    </button>
                  </dd>
                </dl>
              </figcaption>
            </figure>
           )
          })
         }
      </div>
      <footer>
        <p>
          <button 
          type="button"
          onClick={()=>dispatch(clearAllItems())}>
            비우기
          </button>
        </p>
        {
          ProductData.length < 1 &&
          <div>
            <BiCart />
            <p>
              장바구니가 비었습니다.<br />
              카트에 항목을 추가하지 않았습니다.
            </p>
          </div>
        }
      </footer>
    </div>
  )
}

export default Cart;