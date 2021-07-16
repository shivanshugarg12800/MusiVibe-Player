import React, { useState, useRef } from "react";

// import styles
import "./styles/app.scss";

// import components
import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library";
import Nav from "./components/Nav";
import data from "./data";
import Bubble from "./components/Bubble";
function App() {
  // ----------------------REFERENCES-------------------------
  const audioRef = useRef(null);

  // -------------------------STATES------------------------------
  // since it returns an array of the objects we set the current song as the first object from the array
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);

  //--------------------------- FUNCTIONS --------------------
  const timeHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    const roundedTime = Math.round(currentTime);
    const roundedDuration = Math.round(duration);
    const animationPercentage = Math.round(
      (roundedTime / roundedDuration) * 100
    );
    setSongInfo({
      ...songInfo,
      currentTime,
      duration,
      animationPercentage,
    });
  };

  const songEndHandler = async () => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    let n = songs.length;
    await setCurrentSong(
      currentIndex === n - 1 ? songs[0] : songs[currentIndex + 1]
    );
    if (isPlaying) audioRef.current.play();
  };

  return (
    <div className={`App ${libraryStatus ? `library-active` : ""}`}>
      <Bubble isPlaying={isPlaying} libraryStatus={libraryStatus} />
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        audioRef={audioRef}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        songs={songs}
        setSongs={setSongs}
        setCurrentSong={setCurrentSong}
      />
      <Library
        songs={songs}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      />
      <audio
        onLoadedMetadata={timeHandler}
        onTimeUpdate={timeHandler}
        ref={audioRef}
        src={currentSong.audio}
        onEnded={songEndHandler}
      ></audio>
    </div>
  );
}

export default App;
