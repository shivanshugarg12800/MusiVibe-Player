import React, { useState } from "react";

// import styles
import "./styles/app.scss";

// import components
import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library";
import data from "./util";
function App() {
  // state
  const [songs, setSongs] = useState(data());
  // since it returns an array of the objects we set the current song as the first object from the array
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
      />
      <Library songs={songs} setCurrentSong={setCurrentSong} />
    </div>
  );
}

export default App;
