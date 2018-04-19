import {v4} from "node-uuid";
import {connect} from 'react-redux'
import React, {Component} from 'react'
import EventContainer from "./EventContainer";
import {withRouter} from "react-router-dom";
import InfiniteScroll from 'react-infinite-scroller';
import {testfetchSliceEvents} from "../actions/index";

class VisibleEventList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: 0,
            hasMoreItems: true
        }
    }
    loadMore() {
        if (this.state.items === 12) {

            this.setState({...this.state, hasMoreItems: false});
        } else {
            console.log("this.items", this.state.items)
            this.fetchData(this.state.items).then(newItems => {
                const items = this.state.items + 4;
                this.setState({items});

            });
        }
    }


    fetchData(num) {
        console.log(num)
        const {testfetchSliceEvents} = this.props;
        return testfetchSliceEvents(num)
    }

    render() {
        const {...rest} = this.props;
        return (
            <div>
                <div style={{height: '600px', overflow: 'auto'}}>
                    <InfiniteScroll
                        loadMore={this.loadMore.bind(this)}
                        hasMore={this.state.hasMoreItems}
                        loader={<div className="loader"> Loading...</div>}
                        useWindow={false}>
                        <EventContainer {...rest}/>
                        {/*<EventContainer events={this.state.events}/>*/}
                    </InfiniteScroll>{" "}
                </div>
                {" "}
            </div>
        )
    }
}

const getVisibleEvents = (store) => {
    // return {events: [...store.events]}
    return store
};

VisibleEventList = withRouter(connect(
    getVisibleEvents,
    {
        testfetchSliceEvents
    }
)(VisibleEventList));

export default VisibleEventList;
