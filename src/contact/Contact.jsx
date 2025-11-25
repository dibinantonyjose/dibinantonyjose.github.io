import {
  faGithub,
  faLinkedinIn,
  faStackOverflow,
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
      <ul role="navigation links" className="social-contact-list">
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
            href="https://stackoverflow.com/users/11405308/dibinantonyjose"
            target="_blank"
            rel="noreferrer"
            aria-label="Follow me on stack overflow"
          >
            <FontAwesomeIcon icon={faStackOverflow} />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
