React component example:

```js
      <form className="add__user">
           <div className="add__user_block">
             <div className="add__user_container">
               <h1 className="add__user_title">Join Ripka</h1>
             </div>
             <label className="add__user_input_container">
               <input
                 required
                 className="add__input"
                 placeholder="First Name"
               />
               <input
                 required
                 className="add__input"
                 placeholder="Last Name"
               />
             </label>
             <label className="add__user_input_container">
               <input
                 required
                 className="add__input"
                 placeholder="Location"
               />
             </label>
             <label className="add__user_input_container">
               <input
                 required
                 className="add__input"
                 placeholder="Contacts"
               />
             </label>
             <label className="add__user_input_container">
               <textarea
                 className="add__textarea"
                 placeholder="About Me"
                 required
               />
             </label>
             <label className="add__user_input_container">
               <input
                 className="add__input"
                 placeholder="Interests & Goals"
                 required
               />
             </label>
           
             <label className="add__user_input_container">
               <button className="add__user_button">Add User</button>
             </label>
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
