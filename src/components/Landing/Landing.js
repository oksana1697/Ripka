import React, { Component } from "react"
import { Link } from "react-router-dom"

import block from "../../helpers/BEM"
import "./Landing.scss"
const b = block("Landing")

/**
 * Represents view of Landing with static image.
 */
class Landing extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <span className={b("cover-img")} />
        <div className={b("registration")}>
          <span className={b("icon", ["check"])} />
          <div className={b("registration-container")}>
            <div>
              <h3 className={b("text")}>Become a priority Volunteer</h3>
              <span className={b("additional")}>
                Increase your odds of an interview by 50%
              </span>
            </div>
          </div>
          <Link to="/adduser">
            <button className={b("registration-button")}>Get Started</button>
          </Link>
        </div>
        <div className={b("category-container")}>
          <div className={b("category")}>
            <div className={b("item")}>
              <span className={b("icon", ["education"])} />
            </div>
            <h5 className={b("category-title")}>Education</h5>
          </div>
          <div className={b("category")}>
            <div className={b("item")}>
              <span className={b("icon", ["food"])}  />
            </div>
            <h5 className={b("category-title")}>Food&Drink</h5>
          </div>
          <div className={b("category")}>
            <div className={b("item")}>
              <span className={b("icon", ["nonprofit"])} />
            </div>
            <h5 className={b("category-title")}>Nonprofit</h5>
          </div>
          <div className={b("category")}>
            <div className={b("item")}>
              <span className={b("icon", ["education"])}  />
            </div>
            <h5 className={b("category-title")}>Education</h5>
          </div>
          <div className={b("category")}>
            <div className={b("item")}>
              <span className={b("icon", ["food"])} />
            </div>
            <h5 className={b("category-title")}>Food&Drink</h5>
          </div>
          <div className={b("category")}>
            <div className={b("item")}>
              <span className={b("icon", ["nonprofit"])} />
            </div>
            <h5 className={b("category-title")}>Nonprofit</h5>
          </div>
          <div className={b("category")}>
            <div className={b("item")}>
              <span className={b("icon", ["education"])}  />
            </div>
            <h5 className={b("category-title")}>Education</h5>
          </div>
          <div className={b("category")}>
            <div className={b("item")}>
              <span className={b("icon", ["food"])}  />
            </div>
            <h5 className={b("category-title")}>Food&Drink</h5>
          </div>
          <div className={b("category")}>
            <div className={b("item")}>
              <span className={b("icon", ["nonprofit"])} />
            </div>
            <h5 className={b("category-title")}>Nonprofit</h5>
          </div>
          <div className={b("category")}>
            <div className={b("item")}>
              <span className={b("icon", ["education"])}  />
            </div>
            <h5 className={b("category-title")}>Education</h5>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing
