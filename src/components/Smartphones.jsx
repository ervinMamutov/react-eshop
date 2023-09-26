import { useEffect, useState } from 'react';
import axios from 'axios';
import './Smartphones.css';
import Loader from './Loader';
import Smartphone from './Smartphone';

const Smartphones = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');
  const [isLoader, setIsLoader] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          'https://dummyjson.com/products/category/smartphones'
        );
        if (res.status === 200) {
          setProducts(res.data.products);
        }
      } catch (err) {
        setError(err);
      } finally {
        setIsLoader(false);
      }
    };
    getProducts();
  }, []);

  console.log(products);
  return (
    <>
      {isLoader && <Loader />}
      {error && <p>{error}</p>}
      <div className="smartphones-container">
        {!error &&
          products.map((product) => (
            <Smartphone key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

Smartphones.propTypes = {};

export default Smartphones;
