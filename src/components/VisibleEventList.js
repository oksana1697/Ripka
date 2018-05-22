import { connect } from 'react-redux';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { fetchEvents, fetchPaginateEvents } from '../actions/fetch';
import { getAllAvailableEvents, getEventById } from '../reducers';
import EventContainer from './EventContainer/EventContainer';

class VisibleEventList extends Component {
  state = {
    page: 0,
  };
  componentDidMount() {
    let { currentPage } = this.props;
    this.fetchData(currentPage);
  }

  fetchData(currentPage) {
    const { fetchPaginateEvents } = this.props;
    if (!currentPage) {
      currentPage = 1;
    }
    fetchPaginateEvents(currentPage);
  }

  moveForward() {
    let { currentPage } = this.props;
    this.fetchData(currentPage + 1);
  }

  moveBack() {
    let { currentPage } = this.props;
    this.fetchData(currentPage - 1);
  }

  render() {
    const { ...events } = this.props;
    return (
      <div>
        <EventContainer {...events} />
        <div className="event__pagination">
          <button
            className="event__pagination_nav"
            onClick={() => this.moveBack()}
          >
            &laquo;
          </button>
          <button
            className="event__pagination_nav"
            onClick={() => this.moveForward()}
          >
            &raquo;
          </button>
        </div>
      </div>
    );
  }
}

VisibleEventList = withRouter(
  connect(
    store => {
      const ids = getAllAvailableEvents(store);
      return {
        events: ids.map(id => getEventById(store, id)),
        currentPage: store.events.currentPage,
      };
    },
    {
      fetchPaginateEvents,
    },
  )(VisibleEventList),
);

export default VisibleEventList;
