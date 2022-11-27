import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import Logo from "../Logo";
import styles from "./Navbar.module.scss";
import { NavItem } from "./NavMenu";
import "tippy.js/dist/tippy.css";
import {
  HomeIcon,
  HomeActiveIcon,
  SearchIcon,
  SearchActiveIcon,
  LibraryIcon,
  LibraryActiveIcon,
  CreatePlaylistIcon,
  LikedSongsIcon,
} from "../Icons/Icons";

const cx = classNames.bind(styles);

function Navbar() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("logo")}>
          <Link to="/" className={cx("logo-container")}>
            <Logo />
          </Link>
        </div>
        <div className={cx("nav-menu")}>
          <NavItem
            title="Home"
            icon={<HomeIcon />}
            activeIcon={<HomeActiveIcon />}
            to="/"
          />
          <NavItem
            title="Search"
            icon={<SearchIcon />}
            activeIcon={<SearchActiveIcon />}
            to="/search"
          />
          <NavItem
            title="Library"
            icon={<LibraryIcon />}
            activeIcon={<LibraryActiveIcon />}
            to="/library"
          />
        </div>
        <div className={cx("nav-playlist")}>
          <div className={cx("create-playlist")}>
            <div className={cx("create-icon")}>
              <CreatePlaylistIcon />
            </div>
            <h3 className={cx("playlist-title")}>Create Playlist</h3>
          </div>
          <div className={cx("liked-songs")}>
            <div className={cx("liked-icon")}>
              <LikedSongsIcon />
            </div>
            <h3 className={cx("playlist-title")}>Liked Songs</h3>
          </div>
        </div>
      </div>
      {/* <div className={cx("information")}>
        <a
          className={cx("info-title")}
          href="https://www.spotify.com/legal/cookies-policy/"
        >
          Cookie
        </a>
        <a
          className={cx("info-title")}
          href="https://www.spotify.com/legal/privacy-policy/"
        >
          Privacy
        </a>
      </div> */}
    </div>
  );
}
export default Navbar;
