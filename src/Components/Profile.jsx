import dp from "../assets/profile.jpg";
import camera from "../assets/camera.svg";
import dots from "../assets/dots.svg";
import share from "../assets/share.svg";
import { useState } from "react";

const Profile = () => {
  const [isMore, setIsMore] = useState(false);
  return (
    <header>
      <div className="profile">
        <img src={dp} alt="Profile picture" id="profile__img" />
        <img src={camera} alt="camera icon" className="cam-icon" />
      </div>

      <h3 id="twitter">James_O</h3>
      <p id="slack" className="hidden">
        james-o
      </p>

      <div className="more">
        {isMore && <div className="tooltip">Share Link</div>}
        <img
          src={share}
          alt="share"
          className="share_btn"
          onClick={(e) => setIsMore(!isMore)}
        />
        <img
          src={dots}
          alt="dots"
          className="more_btn"
          onClick={(e) => setIsMore(!isMore)}
        />
      </div>
    </header>
  );
};

export default Profile;
