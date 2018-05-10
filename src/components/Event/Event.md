React component example:

```js
   <div className="event__container ">
          <div>
              <img src="http://res.cloudinary.com/ucu/image/upload/c_scale,r_5,w_265/v1520958024/photo-event_vwr3vn.jpg" className="event__photo"/>
          </div>
          <div className="event__info">
              <p className="event__name">Charity event</p>
              <p className="event__organization">Vidlunnia</p>
              <div className="event__location-block">
                  <img className="event__icon-location"/>
                  <p className="event__location">Kyiv, Ukraine</p>
              </div>
          </div>
          <div>          
                  <button className="event__btn">Show more</button>
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
import "../../../styles/event.less";
```

