import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import TopBar from "./components/TopBar/TopBar";
import PlayerBar from "./components/PlayerBar/PlayerBar";
import { publicRouters } from "./routers/router";
import "./App.css";
import DataSongs from "./data/songs.json";
import { Song } from "./Context.js";

function App() {
  const [song, setSong] = useState(DataSongs[0]);

  const handleSetSong = (id) => {
    const idSong = DataSongs.find((data) => data.id === id);
    if (!idSong) {
      setSong(DataSongs[0]);
      alert("the songs is over!");
    } else {
      setSong(idSong);
    }
  };

  return (
    <BrowserRouter>
      <Song.Provider value={{ DataSongs, song, handleSetSong }}>
        <div className="app">
          <TopBar />
          <Navbar />
          <Routes>
            {publicRouters.map((route, index) => {
              const Page = route.component;

              return <Route key={index} path={route.path} element={<Page />} />;
            })}
          </Routes>
          <PlayerBar />
        </div>
      </Song.Provider>
    </BrowserRouter>
  );
}

export default App;
