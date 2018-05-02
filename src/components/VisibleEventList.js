import { connect } from 'react-redux';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { fetchEvents } from '../actions/fetch';
import { getAllAvailableEvents } from '../reducers';
import EventContainer from './EventContainer/EventContainer';
import { getEventById } from '../reducers';

class VisibleEventList extends Component {
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const { fetchEvents } = this.props;
    fetchEvents();
  }

  render() {
    const { ...events } = this.props;
    return <EventContainer {...events} />;
  }
}

VisibleEventList = withRouter(
  connect(
    store => {
      const ids = getAllAvailableEvents(store);
      return {
        events: ids.map(id => getEventById(store, id)),
      };
    },
    { fetchEvents },
  )(VisibleEventList),
);

export default VisibleEventList;
