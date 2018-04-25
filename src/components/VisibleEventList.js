import React, { Component } from "react";
import { v4 } from "uuid";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroller";

import EventContainer from "./EventContainer/EventContainer";
import { testFetchSliceEvents } from "../actions";
import { getAllAvailableEvents } from "../reducers";

class VisibleEventList extends Component {
  state = {
    items: 0,
    hasMoreItems: true
  };

  loadMore = async () => {
    const { items } = this.state;

    if (items === 12) {
      this.setState({ hasMoreItems: false });
    } else {
      await this.fetchData(this.state.items);
      this.setState(({ items }) => ({ items: items + 4 }));
    }
  };

  fetchData(offset) {
    return this.props.testFetchSliceEvents(offset);
  }

  render() {
    const {events} = this.props;
    return (
      <div>
        <div style={{ height: "600px", overflow: "auto" }}>
          <InfiniteScroll
            loadMore={this.loadMore}
            hasMore={this.state.hasMoreItems}
            loader= "Loading..."
            useWindow={true}
          >
            <EventContainer events = {events} onEventClick = {this.props.onEventClick} />
          </InfiniteScroll>{" "}
        </div>{" "}
      </div>
    );
  }
}

VisibleEventList = withRouter(
  connect(store => ({
    events: getAllAvailableEvents(store)
  }), { testFetchSliceEvents })(VisibleEventList)
);

export default VisibleEventList;
