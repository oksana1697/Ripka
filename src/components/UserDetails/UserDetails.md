React component example:

```js
 <div>
        <div className="user-details__title_container">
          <div className="user-details__block-column">
            <h1 className="user-details__title">Oksana Oleniuk</h1>
            <h2 className="user-details__subtitle">
              Ukraine, Kyiv
            </h2>
          </div>
        </div>
        <div className="user-details__title_container">
          <div className="user-details__block-row">
            <button className="user-details__button">
              <img className="user-details__icon-heard" />
              <span className="user-details__button-descr">Bookmark</span>
            </button>
            <button className="user-details__button">
              <img className="event-details__icon-flag" />
              <span className="user-details__button-descr">Report</span>
            </button>
          </div>
        </div>
        <div className="user-details__block-column">
          <div className="user-details__subtitle_container">
            <img className="user-details__icon-paper" />
            <h1 className="user-details__subtitle">Event Overview</h1>
          </div>
          <div className="user-details__container">
            <p className="user-details__content">
              :)
            </p>
            <div className="user-details__subtitle_container">
              <img className="user-details__icon-calendar" />
              <h1 className="user-details__subtitle">Date & time</h1>
            </div>
            {/*<p className="user-details__content">{currentEvent.date.toFormat("yyyy LLL dd")}</p>*/}
            {/*<p className="user-details__content">{currentEvent.date.toFormat("HH:mm")}</p>*/}
            <div className="user-details__subtitle_container">
              <img className="user-details__icon-contact" />
              <h1 className="user-details__subtitle">Contacts</h1>
            </div>
            <p className="user-details__content">+38093123456</p>
          </div>
        </div>
      </div>
```

Needed lib imports

```jsx static
import React, { Component } from "react";
```

Following custom styles used

```jsx static
import "../../../styles/user-details.less";
```

