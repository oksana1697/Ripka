React component example:

```js
<div className="user__container">
    <div
      to={"/" + user_name}
      activeStyle={{
        textDecoration: "none",
        color: "black"
      }}
      className="user__name"
    >
      Oksana Oleniuk
    </div>
    <div className="user__info-container">
      <img src={user_photo} className="user__photo" />
      <div className="user__info">
        <p className="user__contacts">+38093123456</p>
        <p className="user__location">Kyiv, Artioma 88</p>
      </div>
    </div>
  </div>
```

Needed lib imports

```jsx static
import React, { Component } from "react";
```

Following custom styles used

```jsx static
import "../../../styles/user.less";
```

