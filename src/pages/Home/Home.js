import { useContext } from "react";
import { Song } from "../../Context";
import Box from "../../components/Box/Box";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);

function Home() {
  const { DataSongs, handleSetSong } = useContext(Song);
  const handlePlaySongs = (id) => {
    handleSetSong(id);
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("header-title")}>
        <h1 className={cx("header")}>Hello</h1>
        <h2 className={cx("title")}>how are you felling today?</h2>

        <h3 className={cx("title")}>Recommended for you</h3>
      </div>
      <div className={cx("list-music")}>
        {DataSongs.map((value) => (
          <div
            key={value.id}
            className={cx("box-music")}
            onClick={() => handlePlaySongs(value.id)}
          >
            <Box
              id={value.id}
              image={value.image}
              nameSong={value.name}
              author={value.author}
              url={value.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Home;
