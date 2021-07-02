import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <div>
      <nav>
        <h1>MusiVibe</h1>
        <button
          onClick={() => {
            setLibraryStatus(!libraryStatus);
          }}
        >
          Library
          <FontAwesomeIcon icon={faMusic} />
        </button>
      </nav>
    </div>
  );
};
export default Nav;
