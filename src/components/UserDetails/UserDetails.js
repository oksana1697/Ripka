import React, { Component } from "react"
import { NavLink, withRouter } from "react-router-dom"

import { CLOUDINARY_URL } from "../../api/index"
import MapContainerUsers from "../MapContainer/MapContainerUsers"
import PageNotFound from "../PageNotFound/PageNotFound"

import "./UserDetails.scss"
import "../User/User.scss"
import "../../styles/common.scss"
import "../../styles/map.scss"
import block from "../../helpers/BEM"
import { withProps } from "recompose"
import { compose } from "ramda"
import withUser from "../HOC/withUser"

const b = block("UserDetails")

class UserDetails extends Component {
  render() {
    let props = this.props
    const { user } = this.props
    if (!user) {
      return <PageNotFound />
    }
    return (
      <div className={b()}>
        <div className={b("settings")}>
          <div className={b("settings-button")}>
            <NavLink to={"/users/edit/" + user.id}>
              <span className={b("icon", ["edit"])} />
              <button className={b("settings-text")}>Edit event</button>
            </NavLink>
          </div>
          <div className={b("settings-button")}>
            <span className={b("icon", ["delete"])} />
            <button
              className={b("settings-text")}
              onClick={() => {
                props.deleteUser(user.id)
                this.props.onSuccess()
              }}
            >
              Delete event
            </button>
          </div>
        </div>
        <div className={b("header")}>
          <img
            alt=""
            className={b("photo")}
            src={`${CLOUDINARY_URL}w_170,h_170,q_90,c_fill,g_faces/${user.photo}.jpg`}
          />
          <h1 className={b("name")}>{user.name}</h1>

          <div className={b("options")}>
            <button className={b("option-button")}>
              <span className={b("icon", ["heard"])} />
              <p>Bookmark</p>
            </button>
            <button className={b("option-button")}>
              <span className={b("icon", ["flag"])} />
              <p>Report</p>
            </button>
          </div>
        </div>
        <div className={b("details")}>
          <div className={b("details-title")}>
            <span className={b("icon", ["paper"])} />
            <h4>About {user.name}</h4>
          </div>
          <div className={b("info-container")}>
            <h6 className={b("story-title")}>Story</h6>
            <p className={b("story")}>{user.description}</p>
          </div>

          <div className={b("details-title")}>
            <span className={b("icon", ["contact"])} />
            <h4>Contacts</h4>
          </div>
          <div className={b("info-container")}>
            <h6 className={b("story-title")}>Phone number</h6>
            <p className={b("story")}>{user.contacts}</p>
          </div>

          <div className={b("details-title")}>
            <span className={b("icon", ["location"])} />
            <h4>Location</h4>
          </div>
          <div className={b("info-container")}>
            <h6 className={b("story-title", ["location"])}>City, country</h6>
            <p className={b("story", ["location"])}>{user.location}</p>
            <div className="map__container">
              <MapContainerUsers users={[user]} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const enhance = compose(withRouter, withProps(({ match }) => ({ id: Number(match.params.id) })), withUser)

export default enhance(UserDetails)
