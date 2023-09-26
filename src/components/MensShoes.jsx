import { useEffect, useState } from 'react';
import axios from 'axios';
import './MensShoes.css';
import Loader from './Loader';
import MensShoesOne from './MensShoesOne';

const MensShoes = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');
  const [isLoader, setIsLoader] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          'https://dummyjson.com/products/category/mens-shoes'
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
      <div className="mensShoes-container">
        {!error &&
          products.map((product) => (
            <MensShoesOne key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

MensShoes.propTypes = {};

export default MensShoes;
