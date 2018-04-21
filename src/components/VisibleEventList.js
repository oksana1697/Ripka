import React, { Component } from "react";
import { v4 } from "uuid";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroller";

import EventContainer from "./EventContainer";
import { testFetchSliceEvents } from "../actions";

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
    return (
      <div>
        <div style={{ height: "600px", overflow: "auto" }}>
          <InfiniteScroll
            loadMore={this.loadMore}
            hasMore={this.state.hasMoreItems}
            loader={<div key={1} className="loader"> Loading...</div>}
            useWindow={true}
          >
            <EventContainer {...this.props} />
          </InfiniteScroll>{" "}
        </div>{" "}
      </div>
    );
  }
}

VisibleEventList = withRouter(
  connect(store => store, { testFetchSliceEvents })(VisibleEventList)
);

export default VisibleEventList;
