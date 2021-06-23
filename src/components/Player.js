import React, { useRef } from "react";
// useRef is used to grab the html elements by adding a reference to that
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleRight,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";
const Player = ({ currentSong }) => {
  // refrences
  const audioRef = useRef(null);
  // Event handlers
  const songPlayHandler = () => {
    console.log(audioRef);
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>Start Time</p>
        <input type="range" />
        <p>End Time</p>
      </div>
      <div className="play-control">
        {/* icon is a prop that is passed on to the component FontAwesomeIcon */}
        <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
        <FontAwesomeIcon
          onClick={songPlayHandler}
          className="play"
          size="2x"
          icon={faPlay}
        />
        <FontAwesomeIcon
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
        />
      </div>
      <audio ref={audioRef} src={currentSong.audio}></audio>
    </div>
  );
};
export default Player;
