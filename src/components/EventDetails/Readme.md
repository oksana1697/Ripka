React component example:

```js
 <div>
        <div className="event-details__title_container">
          <div className="event-details__block-column">
            <h1 className="event-details__title">Волонтерство в парку</h1>
            <h2 className="event-details__subtitle">Відлуння</h2>
            <p className="event-details__location">Стрийський Парк</p>
          </div>
        </div>
        <div className="event-details__title_container">
          <div className="event-details__block-row">
            <button className="event-details__button">
              <img className="event-details__icon-heard" />
              <span className="event-details__button-descr">Bookmark</span>
            </button>
            <button className="event-details__button">
              <img className="event-details__icon-flag" />
              <span className="event-details__button-descr">Report</span>
            </button>
          </div>
        </div>
        <div className="event-details__block-column">
          <div className="event-details__subtitle_container">
            <img className="event-details__icon-paper" />
            <h1 className="event-details__subtitle">Event Overview</h1>
          </div>
          <div className="event-details__container">
            <p className="event-details__content">
            Добрі справи 2018'- фестиваль, що має за мету зібрати в одному місці велику
            кулькість людей які займаються благодійністтю та роблять добрі справи.
            Зокрема це будуть громадські організації та благодійні фонди,
            а також ініціативні групи чи люди які своїми соціальними проектами чи
             добрими вчинками зробили великий внесок в скарбницю добрих справ і
              заслуговують розказати про себе і залучити до своєї діяльності як можна більше
               людей з числа гостей фестивалю. А ще на всіх гостей фестивалю чекатиме сюрприз в формі
                інтерактивнлї гри, в якій зможе взяти участь кожен і виграти подарунки від наших спонсорів та партнерів.</p>
            <div className="event-details__subtitle_container">
              <img className="event-details__icon-calendar" />
              <h1 className="event-details__subtitle">Date & time</h1>
            </div>
            {/*<p className="event-details__content">{currentEvent.date.toFormat("yyyy LLL dd")}</p>*/}
            {/*<p className="event-details__content">{currentEvent.date.toFormat("HH:mm")}</p>*/}
            <div className="event-details__subtitle_container">
              <img className="event-details__icon-contact" />
              <h1 className="event-details__subtitle">Contacts</h1>
            </div>
            <p className="event-details__content">+38093123456</p>
          </div>
          <button
            className="event-details__button-delete">
            Delete event
          </button>
        </div>
      </div>
```

Needed lib imports

```jsx static
import React, { Component } from "react";
```

Following custom styles used

```jsx static
import "../../styles/event-details.less";
```

