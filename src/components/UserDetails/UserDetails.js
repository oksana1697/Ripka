import React, { Component } from "react"
import {NavLink, withRouter} from "react-router-dom"

import { CLOUDINARY_URL } from "../../api/index"
import MapContainerUsers from "../MapContainer/MapContainerUsers"
import PageNotFound from "../PageNotFound/PageNotFound"

import "./UserDetails.scss"
import "../User/User.scss"
import "../../styles/common.scss"
import "../../styles/map.scss"
import block from '../../helpers/BEM'
import {withProps} from "recompose";
import {compose} from "ramda";
import withUser from "../HOC/withUser";

const b = block('UserDetails')

class UserDetails extends Component {
  render() {
    let props = this.props
    const { user } = this.props
    if (!user) {
      return <PageNotFound />
    }
    return (
      <div className={b()}>
        <div className={b("main-container")}>
          <div className={b("subnav")}>
            <div className={b("left")}>
              <div className={b("edit")}>

                <NavLink to={"/users/edit/" + user.id}>
                  <button className={b("btn")}>
                    <span className={b("icon", ['edit'])} />
                    Edit user
                  </button>
                </NavLink>
              </div>
              <div className={b("delete")}>
                <button
                  className={b("btn")}
                  onClick={() => {
                    props.deleteUser(user.id)
                    this.props.onSuccess()
                  }}
                >
                  <span className={b("icon",["delete"])} />
                  Delete user
                </button>
              </div>
            </div>
          </div>
          <div className={b("big")}>
            <img
              alt=""
              className={b("photo")}
              src={`${CLOUDINARY_URL}w_170,h_170,q_90,c_fill,g_faces/${user.photo}.jpg`}
            />
            <h1 className={b("name")}>{user.name}</h1>

            <div className={b("block-row")}>
              <button className={b("button")}>
                <span className={b("icon", ["heard"])} />
                <span className={b("button-descr")}>Bookmark</span>
              </button>
              <button className={b("button")}>
                <span className={b("icon",["flag"])} />
                <span className={b("button-descr")}>Report</span>
              </button>
            </div>
          </div>
          <div className={b("info")}>
            <div className={b("in")}>
              <div className={b("title-info")}>
                <span className={b("icon", ["paper"])} />
                <h4 className={b("subt")}>About {user.name}</h4>
                <hr className={b("hr")} />
              </div>
              <div className={b("info-cont")}>
                <h6 className={b("story-title")}>Story</h6>
                <p className={b("story")}>{user.description}</p>
              </div>
            </div>
            <div className={b("in")}>
              <div className={b("title-info")}>
                <span className={b("icon", ["contact"])} />
                <h4 className={b("subt")}>Contacts</h4>
                <hr className={b("hr")} />
              </div>
              <div className={b("info-cont")}>
                <h6 className={b("story-title")}>Phone number</h6>
                <p className={b("story")}>{user.contacts}</p>
              </div>
            </div>
            <div className={b("in")}>
              <div className={b("title-info")}>
                <span className={b("icon", ["location"])} />
                <h4 className={b("subt")}>Location</h4>
                <hr className={b("hr")} />
              </div>
              <div className={b("info-cont")}>
                <h6 className={b("story-title", ["location"])}>
                  City, country
                </h6>
                <p className={b("story", ["location"])}>{user.location}</p>
                <div className="map__container">
                  <MapContainerUsers users={[user]} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const enhance = compose(withRouter, withProps(({ match }) => ({ id: Number(match.params.id) })), withUser)

export default enhance(UserDetails)
