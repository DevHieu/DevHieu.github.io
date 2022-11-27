import { useContext } from "react";
import classNames from "classnames/bind";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/src/styles.scss";
import { Song } from "../../Context";

import styles from "./PlayerBar.module.scss";

const cx = classNames.bind(styles);

function PlayerBar() {
  const { song, handleSetSong } = useContext(Song);

  const handleClickNext = () => {
    handleSetSong(song.id + 1);
  };

  const handleClickPrev = () => {
    handleSetSong(song.id - 1);
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("left-player")}>
        <img className={cx("thumb-song")} src={song.image} alt={song.name} />
        <div className={cx("information-song")}>
          <p className={cx("name-song")}>{song.name}</p>
          <p className={cx("author-song")}>{song.author}</p>
        </div>
      </div>
      <AudioPlayer
        className={cx("right-player")}
        layout="stacked-reverse"
        style={{
          width: "80%",
        }}
        src={song.url}
        showSkipControls={true}
        showJumpControls={false}
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPrev}
      />
    </div>
  );
}

export default PlayerBar;
