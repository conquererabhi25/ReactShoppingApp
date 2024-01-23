import CartItem from '../CartItem'
import CartContext from '../../context/CartContext'
import CartSummary from '../CartSummary'

import './index.css'

const CartListView = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeCartItem, removeAllCartItems} = value
      const clearCart = () => {
        removeAllCartItems()
      }

      return (
        <div>
          <div className="displayButton-container">
            <button
              type="button"
              className="remove-all-button"
              onClick={clearCart}
            >
              Remove All
            </button>
          </div>

          <ul className="cart-list">
            {cartList.map(eachCartItem => (
              <CartItem key={eachCartItem.id} cartItemDetails={eachCartItem} />
            ))}
          </ul>
          <CartSummary />
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartListView
