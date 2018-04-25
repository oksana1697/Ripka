React component example:

```js
 <Fragment>
        <h1 className="user-details__title"> USERS</h1>
        <div className="user__block">
           <div className="user__container">
               <div className="user__name">
                 Oksana Oleniuk
               </div>
               <div className="user__info-container">
                 <img src="http://res.cloudinary.com/ucu/image/upload/c_scale,r_5,w_265/v1520958024/photo-event_vwr3vn.jpg"
            className="user__photo" />
                 <div className="user__info">
                   <p className="user__contacts">+38093123456</p>
                   <p className="user__location">Kyiv, Artioma 88</p>
                 </div>
               </div>
             </div>
             <div className="user__container">
                 <div className="user__name">
                   Oksana Oleniuk
                 </div>
                 <div className="user__info-container">
                   <img src="http://res.cloudinary.com/ucu/image/upload/c_scale,r_5,w_265/v1520958024/photo-event_vwr3vn.jpg"
              className="user__photo" />
                   <div className="user__info">
                     <p className="user__contacts">+38093123456</p>
                     <p className="user__location">Kyiv, Artioma 88</p>
                   </div>
                 </div>
               </div>
               <div className="user__container">
                   <div className="user__name">
                     Oksana Oleniuk
                   </div>
                   <div className="user__info-container">
                     <img src="http://res.cloudinary.com/ucu/image/upload/c_scale,r_5,w_265/v1520958024/photo-event_vwr3vn.jpg"
                className="user__photo" />
                     <div className="user__info">
                       <p className="user__contacts">+38093123456</p>
                       <p className="user__location">Kyiv, Artioma 88</p>
                     </div>
                   </div>
                 </div>
        </div>
    </Fragment>
```

Needed lib imports

```jsx static
import User from "../User/User";
import React from "react";
import { users } from "../../reducers/users";
```

Following custom styles used

```jsx static
import "../../../styles/user.less";
import "../../styles/user-details.less";
```

