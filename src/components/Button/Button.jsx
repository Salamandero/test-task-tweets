import PropTypes from "prop-types";

const Button = ({ children }) => {
  return <button>{children}</button>;
};

export default Button;

Button.propTypes = {
  children: PropTypes.string.isRequired,
  //   children: PropTypes.element.isRequired,
};
