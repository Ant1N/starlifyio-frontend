import React from 'react';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__text-container">
          <p>
            Entiros is the leading system integration company in Sweden. With
            openness as the constant objective, Entiros challenge the
            integration industry and create connectivity for global enterprises.
            Entiros service and product portfolio facilitate a fully integrated
            business, from agile integration delivery to certifying integrators
            and providing state-of-the-art integration organization and
            visualization software. Because openness enables innovation.
          </p>
          <ul>
            <li>
              <a href="https://careers.entiros.se/">Careers</a>
            </li>
            <li>
              <a href="/about">About us</a>
            </li>
            <li>
              <a href="https://entiros.se/legal/customer">Legal stuff</a>
            </li>
            <li>
              <a href="https://entiros.se/resources">Resources</a>
            </li>
            <li>
              <a href="mailto:isak.antin@entiros.se">Contact us</a>
            </li>
          </ul>
        </div>
        <div className="footer__bottom">
          <p>
            Made with <FontAwesomeIcon icon={faHeart} /> in Sweden
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
