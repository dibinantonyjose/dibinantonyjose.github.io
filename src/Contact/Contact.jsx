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
        Feel free to reach out to me at{" "}
        <a href="mailto:dibinantonyjose@gmail.com">dibinantonyjose@gmail.com</a>{" "}
        or connect with me on the socials below — always happy to chat,
        collaborate, or just exchange ideas.
      </p>
      <div className="contact-list">
        <a
          href="https://www.linkedin.com/in/dibinantonyjose/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a
          href="https://github.com/dibinantonyjose"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://twitter.com/dibinantonyjose"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          href="https://stackoverflow.com/users/11405308/dibinantonyjose"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faStackOverflow} />
        </a>
        <a
          href="https://www.goodreads.com/dibinantonyjose"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGoodreads} />
        </a>
        <a
          href="https://www.imdb.com/user/ur144606862/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faImdb} />
        </a>
        <a
          href="https://www.instagram.com/dibinantonyjose/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </section>
  );
}

export default Contact;
