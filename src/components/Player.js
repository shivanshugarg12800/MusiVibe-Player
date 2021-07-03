/*
This file renders the player which is used to play/pause skip the current playing song
1. using the font awesome icons
2. using the current song to get the details of the current song playing
3. using the useRef hook to make changes to the html tag which we could have otherwise called in via 
   docuement model in plain javascript
4. 
*/

import React, { useEffect } from "react";
import { playAudio } from "../util";
// useRef is used to grab the html elements by adding a reference to that
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleRight,
  faAngleLeft,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
const Player = ({
  audioRef,
  currentSong,
  setCurrentSong,
  isPlaying,
  setIsPlaying,
  songInfo,
  songs,
  setSongs,
  setSongInfo,
}) => {
  //------------------USE EFFECTS----------------------------
  useEffect(() => {
    const newSong = songs.map((song) => {
      if (song.id === currentSong.id) {
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
  }, [currentSong]);

  //--------------------- Event handlers-------------------------
  const songPlayHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };
  // function to format the time of audio tag
  const formatTime = (seconds) => {
    let minutes = Math.floor(seconds / 60);
    minutes = minutes >= 10 ? minutes : "0" + minutes;
    seconds = Math.floor(seconds % 60);
    seconds = seconds >= 10 ? seconds : "0" + seconds;
    return minutes + ":" + seconds;
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    // load the previous songsInfo and then set the currentTime
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const skipTrackHandler = (direction) => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    let n = songs.length;
    if (direction === "back") {
      setCurrentSong(
        currentIndex === 0 ? songs[n - 1] : songs[currentIndex - 1]
      );
    } else {
      setCurrentSong(
        currentIndex === n - 1 ? songs[0] : songs[currentIndex + 1]
      );
    }
    playAudio(isPlaying, audioRef);
  };

  const trackAnimation = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{formatTime(songInfo.currentTime)}</p>
        <div
          style={{
            background: `linear-gradient( to right, ${currentSong.color[0]},${currentSong.color[1]})`,
          }}
          className="track"
        >
          <input
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            onChange={dragHandler}
            type="range"
          />
          <div style={trackAnimation} className="track-animation"></div>
        </div>
        <p>{songInfo.duration ? formatTime(songInfo.duration) : "0:00"}</p>
      </div>
      <div className="play-control">
        {/* icon is a prop that is passed on to the component FontAwesomeIcon */}
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("back")}
          className="skip-back"
          size="2x"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={songPlayHandler}
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("forward")}
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
        />
      </div>
    </div>
  );
};
export default Player;
