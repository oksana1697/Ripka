React component example:

```js
<div>
                    <div className="event-details__big">
                        <div className="event-details__mn">
                            <h1 className="event-details__name">"The Good Things 2018 Festival needs a logo"</h1>
                            <h2 className="event-details__organization">Vidlunnia</h2>
                            <div className="event-details__location-block">
                                <img className="event-details__icon-location"/>
                                <p className="event-details__location">Kyiv, Ukraine</p>
                            </div>
                            <div className="event-details__block-row">
                                <button className="event-details__button-bookmark">
                                    <img className="event-details__icon-heard"/>
                                    <span className="event-details__button-descr">Bookmark</span>
                                </button>

                                <button className="event-details__button-report">
                                    <img className="event-details__icon-flag"/>
                                    <span className="event-details__button-descr">Report</span>
                                </button>
                            </div>
                        </div>
                    </div>
      <div className="event-details__info">
                        <div className="event-details__left">
                            <div className="event-details__in">
                                <div className="event-details__title-info">
                                    <img className="event-details__icon-push-pin"/>
                                    <h4 className="event-details__subt">Event Overview</h4>
                                    <hr className="event-details__hr"/>
                                </div>
                            
                                <div className="event-details__info-cont">
                                    <h6 className="event-details__story-title">Categories</h6>
                                    <p className="event-details__story">Nonprofit</p>
                                </div>
                                <div className="event-details__info-cont">
                                    <h6 className="event-details__story-title">Organization</h6>
                                    <p className="event-details__story">Vidlunnia</p>
                                </div>
                            </div>
                            <div className="event-details__in">
                                <div className="event-details__title-info">
                                    <img className="event-details__icon-legal-paper"/>
                                    <h4 className="event-details__subt">Event description</h4>
                                    <hr className="event-details__hr"/>
                                </div>
                                <div className="event-details__info-cont">
                                    <p className="event-details__description">Добрі справи 2018'- фестиваль, що має за мету зібрати в одному місці велику кулькість людей </p>
                                </div>
                            </div>
                        </div>
                        <div className="event-details__right">
                            <img className="event-details__photo" src="http://res.cloudinary.com/ucu/image/upload/c_scale,r_5,w_265/v1520958024/photo-event_vwr3vn.jpg"/>
                            <div className="event-details__in">
                                <div className="event-details__title-info">
                                    <img className="event-details__icon-location"/>
                                    <h4 className="event-details__subt">Location</h4>
                                    <hr className="event-details__hr"/>
                                </div>
                                <div className="event-details__info-cont">
                                    <h6 className="event-details__story-title">Region, city</h6>
                                    <p className="event-details__story">"Kyiv, Ukraine</p>
                                </div>
                            </div>
                            <div className="event-details__in">
                                <div className="event-details__title-info">
                                    <img className="event-details__icon-contact"/>
                                    <h4 className="event-details__subt">Contacts of organization</h4>
                                    <hr className="event-details__hr"/>
                                </div>
                                <div className="event-details__info-cont">
                                    <h6 className="event-details__story-title">Phone number</h6>
                                    <p className="event-details__story">+380932230489</p>
                                </div>
                            </div>
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
import "../../../styles/event-details.less";
```

