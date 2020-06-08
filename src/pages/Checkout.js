import React from 'react';
import { CartContext } from '../context/cart';
import { UserContext } from '../context/user';
import { useHistory } from 'react-router-dom';
import EmptyCart from '../components/Cart/EmptyCart';

import submitOrder from '../strapi/submitOrder';

// react-stripe-elements

export default function Checkout(props) {
  const { cart, total, clearCart } = React.useContext(CartContext);
  const { user, showAlert, hideAlert, alert } = React.useContext(UserContext);

  const history = useHistory();

  // state value
  const [name, setName] = React.useState('');
  const [error, setError] = React.useState('');
  const isEmpty = !name || alert.show;

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  if (cart.length < 1) return <EmptyCart />;

  return <h1>hello from checkout page</h1>;
}
