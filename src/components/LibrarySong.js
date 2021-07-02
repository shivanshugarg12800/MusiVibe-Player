import React from "react";
const LibrarySong = ({
  audioRef,
  song,
  songs,
  setCurrentSong,
  isPlaying,
  id,
  setSongs,
}) => {
  // Event Handlers-------------------------
  const songChangeHandler = (e) => {
    // const selectedSong = songs.filter((state) => state.id === id);
    // console.log(e.target);
    setCurrentSong(song);
    // change the active state of the song
    const newSong = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSong);
    //check if the song is playing or not
    //if not then it waits till the song loads and it plays
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then((audio) => {
          audioRef.current.play();
        });
      }
    }
  };

  return (
    <div
      onClick={songChangeHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img alt={song.name} src={song.cover} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};
export default LibrarySong;
