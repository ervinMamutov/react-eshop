import './Smartphone.css';
import PropTypes from 'prop-types';

const Smartphone = ({ product }) => {
  console.log(product.title);
  return (
    <div className="product-container">
      <div className="title">
        <h2 className="title-text">{product.title}</h2>
        <h3 className="brand">
          <span className="span-brand">brand:</span> {product.brand}
        </h3>
      </div>
      <div className="images-container">
        <img className="image" src={product.images[0]} alt={product.title} />
      </div>
      <div className="price-description-container">
        <div className="price">$ {product.price}</div>
        <h4 className="description">{product.description}</h4>
      </div>
    </div>
  );
};

Smartphone.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    images: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }),
};

export default Smartphone;
