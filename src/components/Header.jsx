import './Header.css';

import PropTypes from 'prop-types';

const Header = ({ title }) => {
  return (
    <header className="header">
      <div className="header-container">
        <div>
          <h1 className="title-text">{title}</h1>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
