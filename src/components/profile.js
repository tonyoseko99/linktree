import react from "react";
import profile from "../assets/profile-pic.png";
function Profile() {
  return (
    <div className="container">
      <div class="text-center">
        <img
          src={profile}
          class="rounded"
          alt="profile"
          id="profile__img"
        ></img>
      </div>
    </div>
  );
}

export default Profile;
