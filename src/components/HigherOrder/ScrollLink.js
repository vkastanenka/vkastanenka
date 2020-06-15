// React
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-scroll";

// Link that smooth scrolls to a specified section
const ScrollLink = (props) => {
  return (
    <Link to={props.section} smooth={true} duration={500}>
      {props.children}
    </Link>
  );
};

ScrollLink.propTypes = {
  section: PropTypes.string.isRequired,
};

export default ScrollLink;
