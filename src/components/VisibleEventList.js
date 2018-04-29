// import React, { Component } from "react";
// import { v4 } from "uuid";
// import { connect } from "react-redux";
// import { withRouter } from "react-router-dom";
// import InfiniteScroll from "react-infinite-scroller";
//
// import { testFetchSliceEvents } from "../actions";
// import { getAllAvailableEvents } from "../reducers";
// import EventContainer from "./EventContainer/EventContainer";
//
// class VisibleEventList extends Component {
//     state = {
//         items: 0,
//         hasMoreItems: true
//     };
//
//     loadMore = async () => {
//         const { items } = this.state;
//
//         if (items === 12) {
//             this.setState({ hasMoreItems: false });
//         } else {
//             await this.fetchData(this.state.items);
//             this.setState(({ items }) => ({ items: items + 4 }));
//         }
//     };
//
//     fetchData(offset) {
//         return this.props.testFetchSliceEvents(offset);
//     }
//
//     render() {
//         const {events} = this.props;
//         return (
//             <div>
//                 <div style={{ height: "600px", overflow: "auto" }}>
//                     <InfiniteScroll
//                         loadMore={this.loadMore}
//                         hasMore={this.state.hasMoreItems}
//                         loader= "Loading..."
//                         useWindow={true}
//                     >
//                         <EventContainer events = {events} onEventClick = {this.props.onEventClick} />
//                     </InfiniteScroll>{" "}
//                 </div>{" "}
//             </div>
//         );
//     }
// }
//
// VisibleEventList = withRouter(
//     connect(store => ({
//         events: getAllAvailableEvents(store)
//     }), { testFetchSliceEvents })(VisibleEventList)
// );
//
// export default VisibleEventList;



import { connect } from "react-redux";
import React, { Component } from "react";
import UserContainer from "./UserContainer/UserContainer";
import { withRouter } from "react-router-dom";
import {fetchEvents, fetchUsers} from "../actions";

import {getAllAvailableEvents, getAllAvailableUsers} from "../reducers";
import EventContainer from "./EventContainer/EventContainer";

class VisibleEventList extends Component {
    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        const { fetchEvents } = this.props;
        fetchEvents();
    }

    render() {
        const {...events} = this.props;
        console.log("users",this.props);
        return <EventContainer  {...events}
        />;

    }
}

VisibleEventList = withRouter(
    connect(store => ({
        events: getAllAvailableEvents(store)
    }), { fetchEvents })(VisibleEventList)
);

export default VisibleEventList;