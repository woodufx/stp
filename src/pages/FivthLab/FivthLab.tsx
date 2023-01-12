import React, { FC } from "react";
import Footer from "../../components/Footer/Footer";
import './fivthLab.scss'

export const FivthLab: FC= () => {
  return (
    <><div className="fivthLab">
      <div className="fivthLab__wrapper">
        <div className="fivthLab__inner">
          <div className="fivthLab__rem">
            <p>Заданный размер шрифта: 24px</p>
          </div>
        </div>
      </div>
    </div>
    <div className="fivthLab__main">
        Изменяемый по ширине блокadasdasdas
    </div>
    <div className="fivthLab__gray">
      <section></section>
      <article></article>
    </div>
    <div className="fivthLab__image">
      <img src="https://fikiwiki.com/uploads/posts/2022-02/1644928487_1-fikiwiki-com-p-kartinki-1280-na-720-1.jpg" alt="" /> 
      <h4>Текст по центру</h4>
      <button>по центру</button>
    </div>
    <article className="lastone">
      <div className="imgage__wrap">
      </div>
      <div className="btn_txt">
        <h5> Текст по центру</h5>
        <button> Кнопка</button>
      </div>
    </article>
    </>
  )
}

export default FivthLab;
