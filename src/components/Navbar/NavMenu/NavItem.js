import { NavLink } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./NavItems.module.scss";

const cx = classNames.bind(styles);

function NavItem({ title, icon, activeIcon, to }) {
  return (
    <NavLink
      to={to}
      className={(nav) => cx("wrapper", { active: nav.isActive })}
    >
      <div className={cx("item-icon")}>{icon}</div>
      <div className={cx("item-activeIcon")}>{activeIcon}</div>
      <h3 className={cx("item-title")}>{title}</h3>
    </NavLink>
  );
}
export default NavItem;
