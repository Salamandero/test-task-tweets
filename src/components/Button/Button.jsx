import PropTypes from "prop-types";

export default function Button(props) {
  return <button>{props.children}</button>;
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  //   children: PropTypes.element.isRequired,
};
