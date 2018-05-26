import React, { Component } from "react"

import "../../styles/category.scss"
import { Link } from "react-router-dom"
import Footer from "../Footer/Footer"
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
        <span className="category__image" />
        <div className="category__subnavigation_container">
          <span className="category__item-icon-check" />
          <div className="category__subnavigation_inline">
            <div>
              <h3 className="category__subnavigation">Become a priority Volunteer</h3>
              <span className="category__subnavigation_span">
                Increase your odds of an interview by 50%
              </span>
            </div>
          </div>
          <Link to="/adduser">
            <button className="category__subnavigation_button">Get Started</button>
          </Link>
        </div>
        <div className="category__container">
          <div className="category__item">
            <div className="category__item-icon">
              <span className="category__item-icon-education" />
            </div>
            <h5 className="category__item-title">Education</h5>
          </div>
          <div className="category__item">
            <div className="category__item-icon">
              <span className="category__item-icon-food" />
            </div>
            <h5 className="category__item-title">Food&Drink</h5>
          </div>
          <div className="category__item">
            <div className="category__item-icon">
              <span className="category__item-icon-nonprofit" />
            </div>
            <h5 className="category__item-title">Nonprofit</h5>
          </div>
          <div className="category__item">
            <div className="category__item-icon">
              <span className="category__item-icon-education" />
            </div>
            <h5 className="category__item-title">Education</h5>
          </div>
          <div className="category__item">
            <div className="category__item-icon">
              <span className="category__item-icon-food" />
            </div>
            <h5 className="category__item-title">Food&Drink</h5>
          </div>
          <div className="category__item">
            <div className="category__item-icon">
              <span className="category__item-icon-nonprofit" />
            </div>
            <h5 className="category__item-title">Nonprofit</h5>
          </div>
          <div className="category__item">
            <div className="category__item-icon">
              <span className="category__item-icon-education" />
            </div>
            <h5 className="category__item-title">Education</h5>
          </div>
          <div className="category__item">
            <div className="category__item-icon">
              <span className="category__item-icon-food" />
            </div>
            <h5 className="category__item-title">Food&Drink</h5>
          </div>
          <div className="category__item">
            <div className="category__item-icon">
              <span className="category__item-icon-nonprofit" />
            </div>
            <h5 className="category__item-title">Nonprofit</h5>
          </div>
          <div className="category__item">
            <div className="category__item-icon">
              <span className="category__item-icon-education" />
            </div>
            <h5 className="category__item-title">Education</h5>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Landing
