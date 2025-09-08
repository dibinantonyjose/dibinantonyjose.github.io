import profilePic from "../assets/profile-picture.jpg";
import "./Landing.css";

function Landing() {
  return (
    <section>
      <div className="landing">
        <img src={profilePic} alt="profile-picture" />
        <p>Backend / Thinker / Tinkerer</p>
      </div>
    </section>
  );
}

export default Landing;
