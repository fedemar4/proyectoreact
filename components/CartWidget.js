import React from 'react';
import './CartWidget.css';
const CartWidget = () => {

  const itemCount = 5;

  return (
    <div className="cart-widget">
      <FontAwesomeIcon icon={faShoppingCart} size="2x" /> {/* Ícono del carrito */}
      {itemCount > 0 && <span className="item-count">{itemCount}</span>} {/* Notificación con número */}
    </div>
  );
};

export default CartWidget;
