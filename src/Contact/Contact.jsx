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
      <ul role="main navigation links">
        <li>
          <a
            href="https://www.linkedin.com/in/dibinantonyjose/"
            target="_blank"
            rel="noreferrer"
            aria-label="Connect with me on linkedin"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/dibinantonyjose"
            target="_blank"
            rel="noreferrer"
            aria-label="Follow me on github"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/dibinantonyjose"
            target="_blank"
            rel="noreferrer"
            aria-label="Connect with me on twitter"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li>
          <a
            href="https://stackoverflow.com/users/11405308/dibinantonyjose"
            target="_blank"
            rel="noreferrer"
            aria-label="Follow me on stack overflow"
          >
            <FontAwesomeIcon icon={faStackOverflow} />
          </a>
        </li>
        <li>
          <a
            href="https://www.goodreads.com/dibinantonyjose"
            target="_blank"
            rel="noreferrer"
            aria-label="Follow me on good reads"
          >
            <FontAwesomeIcon icon={faGoodreads} />
          </a>
        </li>
        <li>
          <a
            href="https://www.imdb.com/user/ur144606862/"
            target="_blank"
            rel="noreferrer"
            aria-label="Follow me on imdb"
          >
            <FontAwesomeIcon icon={faImdb} />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/dibinantonyjose/"
            target="_blank"
            rel="noreferrer"
            aria-label="Connect with me on instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
