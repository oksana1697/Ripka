React component example:

```js
<div className="user-details__main-container">
  <div className="user-details__big">
    <div className="user-details__mn">
    </div>
  </div>
  <div className="user-details__info">
    <div className="user-details__in">
      <div className="user-details__title-info">
        <img className="user-details__icon-paper" />
        <h4 className="user-details__subt">Cool person</h4>
        <hr className="user-details__hr" />
      </div>
      <div className="user-details__info-cont">
        <h6 className="user-details__story-title">Story</h6>
        <p className="user-details__story">I like animals</p>
      </div>
    </div>
    <div className="user-details__in">
      <div className="user-details__title-info">
        <img className="user-details__icon-contact" />
        <h4 className="user-details__subt">Contacts</h4>
        <hr className="user-details__hr" />
      </div>
      <div className="user-details__info-cont">
        <h6 className="user-details__story-title">Phone number</h6>
        <p className="user-details__story">+30967584756</p>
      </div>
    </div>
    <div className="user-details__in">
      <div className="user-details__title-info">
        <img className="user-details__icon-location" />
        <h4 className="user-details__subt">Location</h4>
        <hr className="user-details__hr" />
      </div>
      <div className="user-details__info-cont">
        <h6 className="user-details__story-title">Region, city</h6>
        <p className="user-details__story">Kyiv, Ukraine</p>
      </div>
    </div>
  </div>
</div>
```

Needed lib imports

```jsx static
import React, { Component } from 'react';
```

Following custom styles used

```jsx static
import '../../styles/user-details.less';
```
