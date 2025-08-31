import {
  faGithub,
  faGoodreads,
  faImdb,
  faInstagram,
  faLinkedinIn,
  faStackOverflow,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Contact.css";

function Contact() {
  return (
    <section>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, assumenda
        voluptas! Asperiores quas facilis dolorum eligendi!
      </p>
      <div className="contact-list">
        <a href="">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a href="">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="">
          <FontAwesomeIcon icon={faStackOverflow} />
        </a>
        <a href="">
          <FontAwesomeIcon icon={faGoodreads} />
        </a>
        <a href="">
          <FontAwesomeIcon icon={faImdb} />
        </a>
        <a href="">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </section>
  );
}

export default Contact;
