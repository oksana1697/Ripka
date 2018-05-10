React component example:

```js
<form className="add">
        <div className="add__title_container">
          <h1 className="add__title">Add event details</h1>
        </div>
        <div className="add__subtitle_container">
          <img src="http://res.cloudinary.com/ucu/image/upload/w_50,h_40/icon_event_debdmm.png" />
          <h1 className="add__subtitle">Event Overview</h1>
        </div>

        <label className="add__input_container">
          <span className="add__field">Event name</span>
          <input
            className="add__input"
            placeholder="Event Name"/>
        </label>
        <div className="add__input_container">
          <p className="add__field">ORGANIZATION NAME</p>
          <input
            className="add__input"
            placeholder="Organization Name"/>
        </div>
        <div className="add__input_container">
          <p className="add__field">LOCATION</p>
          <input
            className="add__input"
            placeholder="Location"/>
        </div>
        <div className="add__input_container">
          <p className="add__field">CONTACTS</p>
          <input
            className="add__input"
            placeholder="Contacts"/>
        </div>

        <div className="add__input_container">
          <span className="add__field">EVENT DESCRIPTION & REQUIREMENTS</span>
          <textarea
            className="add__textarea"
            placeholder="Description"/>
        </div>
        <div className="add__submit-container">
              <button className="add__submit">Add Event</button>
        </div>
      </form>
```

Needed lib imports

```jsx static
import React, { Component } from 'react';
import { addEvent } from '../../actions/add';
import { connect } from 'react-redux';
```

Following custom styles used

```jsx static
import '../../../styles/add.less';
import '../../../styles/common.less';
import '../../../styles/react-datetime-picker.less';
```
