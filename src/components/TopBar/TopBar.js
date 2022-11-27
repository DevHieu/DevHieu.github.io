import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./TopBar.module.scss";
import { LeftArrow, RightArrow } from "../Icons/Icons";
import Button from "../Button/Button";

const cx = classNames.bind(styles);

function TopBar() {
  const navigate = useNavigate();
  return (
    <div className={cx("wrapper")}>
      <div className={cx("topbar-arrow")}>
        <button onClick={() => navigate(-1)} className={cx("arrow")}>
          <LeftArrow />
        </button>
        <button onClick={() => navigate(1)} className={cx("arrow")}>
          <RightArrow />
        </button>
      </div>
      <div className={cx("login-register")}>
        <Button none to="/login-register">
          Đăng kí
        </Button>
        <Button to="/login-register">Đăng nhập</Button>
      </div>
    </div>
  );
}
export default TopBar;
