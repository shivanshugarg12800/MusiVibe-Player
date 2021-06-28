import React from "react";
const LibrarySong = ({ song, songs, setCurrentSong, id }) => {
  // Event Handlers-------------------------
  const songChangeHandler = (e) => {
    // const selectedSong = songs.filter((state) => state.id === id);
    // console.log(e.target);
    setCurrentSong(song);
  };

  return (
    <div onClick={songChangeHandler} className="library-song">
      <img alt={song.name} src={song.cover} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};
export default LibrarySong;
