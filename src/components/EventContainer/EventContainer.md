React component example:

```js
<div className="event__block">

      <div className="event__container">
          <div>
            <img src= "http://res.cloudinary.com/ucu/image/upload/c_scale,r_5,w_265/v1520958024/photo-event_vwr3vn.jpg"
       className="event__photo" />
          </div>
          <p className="event__location">Ukraine</p>
          <div className="event__name">
            Прибирання парку
          </div>
          <p className="event__organization">Відлуння</p>
        </div>

        <div className="event__container">
            <div>
              <img src= "http://res.cloudinary.com/ucu/image/upload/c_scale,r_5,w_265/v1520958024/photo-event_vwr3vn.jpg"
         className="event__photo" />
            </div>
            <p className="event__location">Ukraine</p>
            <div className="event__name">
              Прибирання парку
            </div>
            <p className="event__organization">Відлуння</p>
          </div>

          <div className="event__container">
              <div>
                <img src= "http://res.cloudinary.com/ucu/image/upload/c_scale,r_5,w_265/v1520958024/photo-event_vwr3vn.jpg"
           className="event__photo" />
              </div>
              <p className="event__location">Ukraine</p>
              <div className="event__name">
                Прибирання парку
              </div>
              <p className="event__organization">Відлуння</p>
            </div>

    </div>

```

Needed lib imports

```jsx static
import Event from "../Event/Event";
import React, { Fragment } from "react";
import Cover from "../Cover/Cover";
```

Following custom styles used

```jsx static
import "../../../styles/event.less";
```

