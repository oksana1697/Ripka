React component example:

```js
 <form className="add">
         <div className="add__title_container">
           <h1 className="add__title">Create your profile</h1>
         </div>
         <div className="add__subtitle_container">
           <img src="http://res.cloudinary.com/drzw6h31n/image/upload/c_scale,h_50,w_50/v1522888001/resume_1_zvj4fa.png" />
           <h1 className="add__subtitle">Profile Overview</h1>
         </div>
 
         <label className="add__input_container">
           <span className="add__field">YOUR NAME</span>
           <input
             className="add__input"
             placeholder="Name"
           />
         </label>
         <label className="add__input_container">
           <span className="add__field">YOUR LOCATION</span>
           <input
             className="add__input"
             placeholder="Location"
           />
         </label>
         <label className="add__input_container">
           <span className="add__field">YOUR CONTACTS</span>
           <input
             className="add__input"
             placeholder="Contacts"
           />
         </label>
         <label className="add__input_container">
           <span className="add__field">ABOUT YOU</span>
           <textarea
             className="add__textarea"
             placeholder="About"
           />
         </label>
         <label className="add__input_container">
           <span className="add__field">YOUR INTERESTS & GOALS</span>
           <input
             className="add__input"
             placeholder="Interests & Goals"
           />
         </label>
         <div className="add__submit-container">
             <button className="add__submit">Add User</button>
         </div>
       </form>
```

Needed lib imports

```jsx static
import React, { Component } from 'react';
import { addUser } from '../../actions/add';
import { connect } from 'react-redux';
```

Following custom styles used

```jsx static
import '../../../styles/common.less';
import '../../../styles/add.less';
```
