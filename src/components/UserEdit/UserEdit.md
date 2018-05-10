React component example:

```js
 <div>
          <form className="add" onSubmit={this.handleSubmit}>
          
            <div className="add__title_container">
              <h1 className="add__title">Edit your profile</h1>
            </div>
            <div className="add__subtitle_container">
              <img src="http://res.cloudinary.com/ucu/image/upload/w_50,h_40/icon_event_debdmm.png" />
              <h1 className="add__subtitle">Profile Overview</h1>
            </div>

            <label className="add__input_container">
              <span className="add__field">YOUR NAME</span>
              <input
                className="add__input"
                placeholder="Name"
                value="Oksana Oleniuk"
              />
            </label>
            <label className="add__input_container">
              <span className="add__field">YOUR LOCATION</span>
              <input
                className="add__input"
                placeholder="Location"
                value="Lviv, Ukraine"
              />
            </label>
            <label className="add__input_container">
              <span className="add__field">YOUR CONTACTS</span>
              <input
                className="add__input"
                placeholder="Contacts"
                value="+390283496238"
              />
            </label>

            <label className="add__input_container">
              <span className="add__field">ABOUT YOU</span>
              <textarea
                className="add__textarea"
                placeholder="Description"
                value="Love children"
                required
              />
            </label>

            <label className="add__input_container">
              <span className="add__field">YOUR INTERESTS & GOALS</span>
              <input
                className="add__input"
                placeholder="Interests & Goals"
                value="Nonprofit"
              />
            </label>

           
            <div className="add__submit-container">
              <button className="add__submit">Save changes</button>
            </div>
            </form>
            </div>
```

Needed lib imports

```jsx static
import React, { Component } from 'react';
```

Following custom styles used

```jsx static
import '../../../styles/add.less';
```
