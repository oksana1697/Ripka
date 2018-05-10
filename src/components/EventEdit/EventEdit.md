React component example:

```js
<form className="add">
  <div className="add__title_container">
    <h1 className="add__title">Edit event details</h1>
  </div>
  <div className="add__subtitle_container">
    <img src="http://res.cloudinary.com/ucu/image/upload/w_50,h_40/icon_event_debdmm.png" />
    <h1 className="add__subtitle">Event Overview</h1>
  </div>

  <label className="add__input_container">
    <span className="add__field">Event name</span>
    <input
      className="add__input"
      placeholder="Event Name"
      value="Волонтерство в парку"
    />
  </label>
  <label className="add__input_container">
    <span className="add__field">ORGANIZATION NAME</span>
    <input
      className="add__input"
      placeholder="Organization Name"
      value="Відлуння"
    />
  </label>
  <label className="add__input_container">
    <span className="add__field">LOCATION</span>
    <input
      className="add__input"
      placeholder="Location"
      value="Kyiv, Ukraine"
    />
  </label>
  <label className="add__input_container">
    <span className="add__field">CONTACTS</span>
    <input className="add__input" placeholder="Contacts" value="Street, 2" />
  </label>

  <label className="add__input_container">
    <span className="add__field">EVENT DESCRIPTION & REQUIREMENTS</span>
    <textarea
      className="add__textarea"
      placeholder="Description"
      value=" Добрі справи 2018'- фестиваль, що має за мету зібрати в одному місці велику лькість людей які займаються благодійністтю та роблять добрі справи.Зокрема це будуть громадські організації та благодійні фонди,а також ініціативні групи чи люди які своїми соціальними проектами чидобрими вчинками зробили великий внесок в скарбницю добрих справ"
      required
    />
  </label>
  <div className="add__submit-container">
    <button className="add__submit">Save changes</button>
  </div>
</form>
```

Needed lib imports

```jsx static
import React, { Component } from 'react';
```

Following custom styles used

```jsx static
import '../../styles/add.less';
```
