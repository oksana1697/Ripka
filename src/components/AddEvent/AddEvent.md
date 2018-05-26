React component example:

```js
  <div>
        <form className="add" >
          <div className="add__title_container">
            <div className="add__subtitle_overview">
            <h5 className="add__subtitle_overview-grey">
                 2.Business Profile  3.Promote Job
            </h5>
            </div>
            <h1 className="add__title">Add event details</h1>
          </div>
          <div className="add__subtitle_container">
            <img className="add__icon_push-pin" />
            <h1 className="add__subtitle">Event Overview</h1>
          </div>

          <label className="add__input_container">
            <span className="add__field">Event name</span>
            <input required
              className="add__input"
              placeholder="Event Name"
            />
          </label>
          <div className="add__input_container">
            <p className="add__field">ORGANIZATION NAME</p>
            <input required
              className="add__input"
              placeholder="Organization Name"
            />
          </div>

          <div className="add__input_container">
            <p className="add__field">EVENT CATEGORIES</p>
            <div>
              <button className="add__categories">Nonprofit</button>
              <button className="add__categories">Food&Drink</button>
              <button className="add__categories">Children</button>
              <button className="add__categories">Medicine</button>
              <button className="add__categories">Military</button>
              <button className="add__categories">Nonprofit</button>
              <button className="add__categories">Food&Drink</button>
              <button className="add__categories">Children</button>
              <button className="add__categories">Medicine</button>
              <button className="add__categories">Military</button>
            </div>
          </div>

          <div className="add__input_container">
            <p className="add__field">LOCATION</p>
            <input required
              className="add__input"
              placeholder="Location"
            />
          </div>
          <div className="add__input_container">
            <p className="add__field">CONTACTS</p>
            <input required
              className="add__input"
              placeholder="Contacts"
            />
          </div>

          <div className="add__subtitle_container">
            <img className="add__icon_legal-paper" />
            <h1 className="add__subtitle">Event Details</h1>
          </div>
          <div className="add__input_container">
            <span className="add__field">EVENT DESCRIPTION</span>
            <textarea
              className="add__textarea"
              placeholder="Description"
              required
            />
          </div>
          <div className="add__submit-container">
            <button className="add__submit">Add Event</button>
          </div>
        </form>
      </div>
```

Needed lib imports

```jsx static
import React, { Component } from 'react';
import { addEvent } from '../../actions/add';
import { connect } from 'react-redux';
```

Following custom styles used

```jsx static
import '../../styles/add.less';
import '../../styles/common.less';
import '../../styles/react-datetime-picker.less';
```
