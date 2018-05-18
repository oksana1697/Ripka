import { connect } from 'react-redux';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { searchEvents } from '../../actions/search';
import {getAllAvailableEvents, getEventById} from "../../reducers";
import EventContainer from "../EventContainer/EventContainer";

class SearchEvents extends Component {
    state = {
        filter: '',
    };

    handleSubmit = ev => {
        ev.preventDefault();
        const { searchEvents } = this.props;
        const { filter } = this.state;
        console.log("this.state",this.state);
        //searchEvents(filter);
        // this.setState({ formSubmitted: true });
    };

    changeHandler = property => ev => {
        const { value } = ev.target;
        const { searchEvents } = this.props;
        console.log("change Handler:", property, ev.target.value);
        const { eventsTest } = searchEvents(ev.target.value);
        this.setState({ [property]: value });
    };


  render() {
    const { foundEvents } = this.props;
    console.log("foundEvents:",foundEvents);
    const {filter, formSubmitted} = this.state;

    const getPopupItems = () => foundEvents.map(event => (<a href="#">{event.name}</a>));
    return (
      <div>
          <form>
              {formSubmitted && <div className="add-event__carpet" />}
              <div className="navigation__search-bar">
          <input
              value={filter}
              onChange={this.changeHandler('filter')}
              placeholder="Search by key word"
            className="navigation__search-bar_filter"
          />
          <div className="navigation__search-bar_filter_content">
              {getPopupItems()}
            {/*<a href="#">Nonprofit</a>*/}
            {/*<a href="#">Children</a>*/}
            {/*<a href="#">Food&Drink</a>*/}
          </div>
        </div>
        <button onChange={this.handleSubmit} className="navigation__search-bar_submit" type="submit">
          <i className="navigation__search-bar_submit-icon" />
        </button>
          </form>
        {/*<EventContainer {...searchEvents} />;*/}
      </div>
    );
  }
}

SearchEvents = withRouter(
  connect(
    store => {
      // const ids = getAllAvailableEvents(store);
      const foundEvents = store.events.searchEvents;
      console.log("Store", store);
      return {
        // events: ids.map(id => getEventById(store, id)),
          foundEvents
      };
    },
    { searchEvents },
  )(SearchEvents),
);

export default SearchEvents;
