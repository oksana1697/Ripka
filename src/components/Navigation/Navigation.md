React component example:

```js
      <div>
          <div className="navigation__container">
            <h1 className="navigation__logo-content">Ripka</h1>
            <div className="navigation__search-bar">
              <button
                className="navigation__search-bar_filter"
                ><span>All categories</span>

              </button>
              <div className="navigation__search-bar_filter_content">
                <a href="#">Nonprofit</a>
                <a href="#">Children</a>
                <a href="#">Food&Drink</a>
              </div>
            </div>
              <button className="navigation__search-bar_submit" type="submit">
                 <i className="navigation__search-bar_submit-icon"/>
              </button>
            
              <div className="navigation__button_right" to="/addevent">
                <button className="navigation__button">POST AN EVENT
                </button>
            </div>
        </div>
        <label className="navigation_show-title">
                <h1 className="navigation__logo-content">Ripka</h1>
        </label>
        <input type="checkbox" id="show-menu" role="button" />

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

