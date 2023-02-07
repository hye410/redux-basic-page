import { useSelector,useDispatch } from 'react-redux';
import productList from '../productList.json';
import './Home.css';
import { addToCart, removeFromCart } from '../redux/CartSlice';

function Home(){
  // console.log(productList.products)
  // let state = useSelector(state => state.cart);
  // console.log(state)
  // console.log(state.cartProductIds)
  let dispatch = useDispatch();
  //구조분해할당 cartProductIds만 가지고 올거라서,,
  const {cartProductIds} = useSelector(state => state.cart);
  // console.log(cartProductIds);
  return(
    <div id="home">
      {productList.products.map(product => {
        return(
          <figure key={product.id}>
            <img src={product.imageUrl} alt={product.name} />
            <figcaption>
              <dl>
                <dt>{product.name}</dt>
                <dd>${product.price}</dd>
                <dd>
                  {
                  !cartProductIds.includes(product.id) && 
                  (<button 
                  type="button"
                  onClick={()=>dispatch(addToCart(product.id))}>
                    Add to Cart
                  </button>)
                  }
                  {
                  cartProductIds.includes(product.id) && 
                  (<button 
                  type="button"
                  onClick={()=>dispatch(removeFromCart(product.id))}>
                    Remove from Cart
                  </button>)
                  }
                </dd>
              </dl>
            </figcaption>
          </figure>
        )
      }
      )}
    </div>
  )
}

export default Home;