React component example:

```js

<div className="navigation__container">
          <div style={{ textDecoration: "none" }} to="/">
            <h1 className="navigation__logo-content">Ripka</h1>
          </div>
          <div className="navigation__button" to="/addevent">
            <button className="navigation__button_content">
              POST AN EVENT
            </button>
          </div>
          <div className="navigation__button" to="/adduser">
            <button className="navigation__button_content">FAKE SIGN UP</button>
          </div>
        </div>
```

Needed lib imports

```jsx static
import React, { Component } from "react";
import { Link } from "react-router-dom";
```

Following custom styles used

```jsx static
import "../../../styles/navigation.less";
```

