import classNames from "classnames/bind";
import styles from "./Box.module.scss";

const cx = classNames.bind(styles);

function Box({ image, nameSong, author }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("image")}>
        <img src={image} alt={nameSong} />
      </div>
      <h3 className={cx("name-song")}>{nameSong}</h3>
      <p className={cx("author")}>{author}</p>
    </div>
  );
}
export default Box;
