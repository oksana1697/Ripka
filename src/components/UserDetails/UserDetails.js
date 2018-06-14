import React from "react"
import { NavLink, withRouter } from "react-router-dom"
import { branch, renderComponent, withHandlers, withProps } from "recompose"
import { connect } from "react-redux"

import { CLOUDINARY_URL } from "../../api/index"

import { compose } from "ramda"
import { withUser } from "../HOC/user"

import { deleteUser } from "../../actions/users"

import MapContainerUsers from "../MapContainer/MapContainerUsers"
import PageNotFound from "../PageNotFound/PageNotFound"

import "./UserDetails.scss"
import block from "../../helpers/BEM"
const b = block("UserDetails")

const UserDetails = ({ user, deleteUser, onDeleteSuccess }) => (
  <div className={b()}>
    <div className={b("settings")}>
      <NavLink className={b("settings-text")} to={"/users/edit/" + user.id}>
        Edit profile
      </NavLink>

      <button
        className={b("settings-text")}
        onClick={async () => {
          await deleteUser(user.id)
          onDeleteSuccess()
        }}
      >
        Delete profile
      </button>
    </div>
    <div className={b("header")}>
      <img alt="" className={b("photo")} src={`${CLOUDINARY_URL}w_170,h_170,q_90,c_fill,g_faces/${user.photo}.jpg`} />
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
          <MapContainerUsers users={[user.id]} />
        </div>
      </div>
    </div>
  </div>
)

const enhance = compose(
  withRouter,
  withHandlers({
    onDeleteSuccess: ({ history }) => () => history.push("/users")
  }),
  withProps(({ match }) => ({ id: match.params.id })),
  withUser,
  branch(({ user }) => !user, renderComponent(PageNotFound)),
  connect(null, { deleteUser })
)

export default enhance(UserDetails)
