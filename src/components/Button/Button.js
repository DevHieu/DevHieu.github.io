// // import { useState } from "react";
// import { Link } from "react-router-dom";
// import classNames from "classnames/bind";
// import styles from "./Button.module.scss";

// const cx = classNames.bind(styles);

// function Button({
//   green = false,
//   outline = false,
//   to,
//   href,
//   onClick,
//   children,
//   ...rest
// }) {
//   let Component = "button";
//   const classes = cx("wrapper", { green, outline });
//   const props = { ...rest };

//   if (to) {
//     Component = Link;
//   } else if (href) {
//     Component = "a";
//   }

//   return (
//     <Component className={classes} onClick={onClick} {...props}>
//       <span className={cx("children")}>{children}</span>
//     </Component>
//   );
// }
// export default Button;
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  onClick,
  children,
  green = false,
  outline = false,
  none = false,
  ...rest
}) {
  let Component = "button";
  const classes = cx("default", { green, outline, none });

  const props = {
    onClick,
    ...rest,
  };

  if (to) {
    Component = Link;
    props.to = to;
  } else if (href) {
    Component = "a";
    props.href = href;
  }

  return (
    <Component className={classes} {...props} onClick={onClick}>
      <span className={cx("children")}>{children}</span>
    </Component>
  );
}

Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  green: PropTypes.bool,
  outline: PropTypes.bool,
  none: PropTypes.bool,
};

export default Button;
