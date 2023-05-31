import Image from 'next/image';
import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <nav className="footer__content">
        <div className="footer__content__socials">
          <Image src="/img/logo.svg" width={39} height={31} alt="Logo" />
          <p className="footer__content__socials__made">
            <Image src="/img/icon-home.svg" width={14} height={14} alt="Home icon" /> Made with ♡ in
            NYC, NY
          </p>
          <div className="footer__content__socials__links">
            <a href="#">
              <Image src="/img/icon-instagram.svg" width={29} height={29} alt="Instagram icon" />
            </a>
            <a href="#">
              <Image src="/img/icon-yelp.svg" width={29} height={29} alt="Yelp icon" />
            </a>
            <a href="#">
              <Image src="/img/icon-linkedin.svg" width={29} height={29} alt="Linkedin icon" />
            </a>
            <a href="#">
              <Image src="/img/icon-facebook.svg" width={29} height={29} alt="Facebook icon" />
            </a>
            <a href="#">
              <Image src="/img/icon-twitter.svg" width={29} height={29} alt="Twitter icon" />
            </a>
          </div>
        </div>
        <div>
          <p className="footer__content__header">Products</p>
          <a href="#">Undergraduate Student Loans</a>
          <a href="#">Graduate Student Loans</a>
          <a href="#">International Student Loans</a>
          <a href="#">Student Loan Refinance</a>
          <a href="#">Parent Student Loan</a>
          <a href="#">Crest</a>
        </div>
        <div>
          <p className="footer__content__header">Company</p>
          <a href="#">Articles</a>
          <a href="#">Press</a>
          <a href="#">Stories</a>
          <a href="#">FAQs</a>
          <a href="#">Help Center</a>
          <a href="#">Contact Us</a>
          <a href="#">About</a>
        </div>
        <div>
          <p className="footer__content__header">Resources</p>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Branded Platform Service Agreement</a>
        </div>
      </nav>
      <p className="footer__copyright">© 2023 Sparrow Labs, Inc.</p>
    </footer>
  );
}
