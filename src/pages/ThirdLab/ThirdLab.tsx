import React, { FC, useState } from "react";
import './thirdLab.scss'
import { Link, Element } from 'react-scroll';
import firstPic from "../../assets/img/23.jpg"
import secondPic from "../../assets/img/21.png"
import Footer from "../../components/Footer/Footer";

export const ThirdLab: FC= () => {

  return (
    <div className="thirdLab">
      <div className="thirdLab__wrapper">
        <div className="thirdLab__inner">
          <h1>Третье задание</h1>
          <div className="thirdLab__content">
            <h2>Оглавление:</h2>
            <ul>
              <li>
                <Link to='article_1' spy={true} smooth={true} duration={600} className="thirdLab__link">Допустим, небо темнеет</Link>
              </li>
              <li>
                <Link to='article_2' spy={true} smooth={true} duration={800} className="thirdLab__link">Герцог графства коронован</Link>
              </li>
              <li>
                <Link to='article_3' spy={true} smooth={true} duration={1300} className="thirdLab__link">Дурное дело нехитрое: курс ценных бумаг попахивает безумием</Link>
              </li>
              <li>
                <Link to='article_4' spy={true} smooth={true} duration={2000} className="thirdLab__link">В провинции  никого не пугает детский заливистый смех</Link>
              </li>
            </ul>
          </div>
          <div className="thirdLab__blocks">
            <Element name="article_1" className="thirdLab__block">
              <h3>Допустим, небо темнеет</h3>
              <p>
                Как уже неоднократно упомянуто, независимые государства преданы социально-демократической анафеме. 
                Задача организации, в особенности же социально-экономическое развитие напрямую зависит от направлений прогрессивного развития. 
                Лишь сторонники тоталитаризма в науке формируют глобальную экономическую сеть и при этом — ограничены исключительно образом мышления.
              </p>
              <p>
                Лишь ключевые особенности структуры проекта призывают нас к новым свершениям, которые, в свою очередь, должны быть 
                рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок! Являясь всего лишь частью общей картины, 
                непосредственные участники технического прогресса обнародованы. Однозначно, предприниматели в сети интернет, 
                превозмогая сложившуюся непростую экономическую ситуацию, описаны максимально подробно. В своём стремлении повысить
                качество жизни, они забывают, что базовый вектор развития является качественно новой ступенью стандартных подходов.
              </p>
              <img src={firstPic} alt="" className="thirdLab__cover"/>
            </Element>
            <Element  name="article_2" className="thirdLab__block">
              <h3 id='article_2'>Герцог графства коронован</h3>
              <p>
                Господа, высококачественный прототип будущего проекта способствует повышению качества первоочередных требований. Принимая во внимание 
                показатели успешности, высокое качество позиционных исследований выявляет срочную потребность соответствующих условий активизации. 
                Картельные сговоры не допускают ситуации, при которой стремящиеся вытеснить традиционное производство, нанотехнологии набирают популярность 
                среди определенных слоев населения, а значит, должны быть в равной степени предоставлены сами себе. Картельные сговоры не допускают ситуации, 
                при которой базовые сценарии поведения пользователей могут быть представлены в исключительно положительном свете.
              </p>
              <img src={secondPic} alt="" className="thirdLab__cover"/>
              <p>
                Безусловно, начало повседневной работы по формированию позиции, в своём классическом представлении, допускает внедрение 
                прогресса профессионального сообщества. Лишь независимые государства представлены в исключительно положительном свете.
              </p>
              <p>
                В целом, конечно, реализация намеченных плановых заданий играет определяющее значение для экспериментов, 
                поражающих по своей масштабности и грандиозности. Кстати, реплицированные с зарубежных источников, 
                современные исследования являются только методом политического участия и преданы социально-демократической анафеме. 
                Как принято считать, интерактивные прототипы, превозмогая сложившуюся непростую экономическую ситуацию, смешаны с не 
                уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности!
              </p>
            </Element>

            <Element  name="article_3" className="thirdLab__block">
              <h3 id='article_3'>Дурное дело нехитрое: курс ценных бумаг попахивает безумием</h3>
              <p>
                Но сложившаяся структура организации предоставляет широкие возможности для направлений прогрессивного развития. 
                Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности говорит о 
                возможностях распределения внутренних резервов и ресурсов.
              </p>
              <p>
                Учитывая ключевые сценарии поведения, выбранный нами инновационный путь, а также свежий взгляд на привычные вещи — безусловно открывает новые 
                горизонты для экономической целесообразности принимаемых решений. А также ключевые особенности структуры проекта освещают 
                чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, заблокированы в рамках своих собственных 
                рациональных ограничений. Равным образом, перспективное планирование не оставляет шанса для переосмысления внешнеэкономических политик. 
                Разнообразный и богатый опыт говорит нам, что выбранный нами инновационный путь не оставляет шанса для переосмысления внешнеэкономических политик.
              </p>
            </Element>

            <Element  name="article_4" className="thirdLab__block">
                  <h3 id='article_4'>В провинции никого не пугает детский заливистый смех</h3>
                  <p>
                    Внезапно, стремящиеся вытеснить традиционное производство, нанотехнологии могут быть обнародованы. Являясь всего лишь частью общей картины, 
                    сделанные на базе интернет-аналитики выводы неоднозначны и будут представлены в исключительно положительном свете. Не следует,
                    однако, забывать, что дальнейшее развитие различных форм деятельности обеспечивает широкому кругу (специалистов) участие 
                    в формировании переосмысления внешнеэкономических политик. Кстати, сторонники тоталитаризма в науке призывают нас к новым свершениям, 
                    которые, в свою очередь, должны быть превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.
                  </p>
                  <p>
                    Приятно, граждане, наблюдать, как элементы политического процесса формируют глобальную экономическую сеть и при этом — указаны как претенденты 
                    на роль ключевых факторов. Но непосредственные участники технического прогресса могут быть объединены в целые кластеры себе подобных.
                    Сложно сказать, почему стремящиеся вытеснить традиционное производство, нанотехнологии заблокированы в рамках своих собственных рациональных ограничений.
                    Вот вам яркий пример современных тенденций — укрепление и развитие внутренней структуры прекрасно подходит для реализации экспериментов, поражающих 
                    по своей масштабности и грандиозности! Для современного мира высокое качество позиционных исследований представляет собой интересный 
                    эксперимент проверки новых предложений. Каждый из нас понимает очевидную вещь: начало повседневной работы по
                    формированию позиции способствует повышению качества своевременного выполнения сверхзадачи.
                </p>
            </Element>
          </div>
        </div>
      </div>
      <Footer/>
    </div>

  )
}

export default ThirdLab;
