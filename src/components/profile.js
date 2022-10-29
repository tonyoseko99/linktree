import react from "react";
import profile from "../assets/profileImage.png";
function Profile() {
  return (
    <div className="container" id="profile-container">
      <div class="text-center">
        <img
          src={profile}
          class="rounded"
          alt="profile"
          id="profile__img"
        ></img>
        <div id="slack">Tonny Oseko</div>
      </div>
    </div>
  );
}

export default Profile;
