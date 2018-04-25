React component example:

```js
 <div className="event__container">
    <div>
      <img src={photo} className="event__photo" />
    </div>
    <p className="event__location">Ukraine</p>
    <div
      to={"/" + id}
      activeStyle={{
        textDecoration: "none",
        color: "black"
      }}
      className="event__name"
    >
      Прибирання парку
    </div>
    <p className="event__organization">Відлуння</p>
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

