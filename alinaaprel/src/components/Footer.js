import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__group">
        <a className="footer__link" href="https://www.linkedin.com/in/alina-aprel-976878167/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a className="footer__link" href="https://career.habr.com/alinaaprel" target="_blank" rel="noreferrer">Хабр Карьера</a>
        <a className="footer__link footer_github" href="https://github.com/AlinaAprel" target="_blank" rel="noreferrer">https://github.com/AlinaAprel</a>
        <p className="footer__link footer_mail">alinaaprel.frontenddev@gmail.com</p>
      </div>
      <p className="footer__author">© 2023 Alina Aprel</p>
    </div>
  );
}

export default Footer;