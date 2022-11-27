import classNames from "classnames/bind";
import styles from "./Library.module.scss";

const cx = classNames.bind(styles);

function Library() {
  return (
    <div className={cx("title")}>Library function has not been update.</div>
  );
}
export default Library;
