import React, { FC } from "react";
import './footer.scss';
import vk from "../../assets/img/vk.png"; 
import teleg from "../../assets/img/teleg.png"; 
import inst from "../../assets/img/inst.png"; 

export const Footer: FC= () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__line">
            <div className="footer__column">
              <div className="footer__title">Компания</div>
              <div className="footer__link">О нас</div>
              <div className="footer__link">Наша команда</div>
              <div className="footer__link">Награды</div>
            </div>
            <div className="footer__column">
              <div className="footer__title">Разработка</div>
              <div className="footer__link">Новые возможности</div>
              <div className="footer__link">Веб-документация</div>
              <div className="footer__link">Инструменты</div>
            </div>
          <div className="footer__column">
            <div className="footer__title">Помощь проекту</div>
            <div className="footer__link">Поддержка</div>
            <div className="footer__link">Сообщить о баге</div>
          </div>
          </div>
          <div className="footer__line">
            <hr className="footer__hr"/>
          </div>
          <div className="footer__line">
            <div className="footer__socials">
              <a href="/" className="footer__link">
                <img src={inst} alt="" className="footer__social"/>
              </a>
              <a href="/" className="footer__link">
                <img src={teleg} alt="" className="footer__social"/>
              </a>
              <a href="/" className="footer__link">
                <img src={vk} alt="" className="footer__social"/>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;
