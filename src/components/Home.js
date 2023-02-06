import { useSelector,useDispatch } from 'react-redux';
import productList from '../productList.json';
import './Home.css';
import { addToCart, removeFromCart, clearAllItems } from '../redux/CartSlice';

function Home(){
  // console.log(productList.products)
  let state = useSelector(state => state.cart);
  // console.log(state)
  // console.log(state.cartProductIds)
  let dispatch = useDispatch();
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
                  <button 
                  type="button"
                  onClick={()=>dispatch(addToCart(product.id))}
                  >추가</button>
                  <button type="button">삭제</button>
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