import React from 'react';
import { ProductContext } from '../context/products';

export default function Products() {
  const { loading, products } = React.useContext(ProductContext);

  return <h1>hello from products page </h1>;
}