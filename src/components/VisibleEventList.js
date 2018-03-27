// import {connect} from 'react-redux'
// import React, {Component} from 'react'
// import EventContainer from "./EventContainer";
// import {withRouter} from "react-router-dom";
// import {fetchEvents} from "../actions/index";
//
// class VisibleEventList extends Component {
//
//     componentDidMount() {
//         this.fetchData()
//     }
//
//     fetchData() {
//         const {fetchEvents} = this.props;
//         fetchEvents();
//     }
//
//     render() {
//         const {...rest} = this.props;
//         console.log("Render:", {...rest})
//         return (
//             <EventContainer
//                 {...rest}
//             />
//         )
//     }
// }
//
// const getVisibleEvents = (events) => {
//     return events
// };
//
// VisibleEventList = withRouter(connect(
//     getVisibleEvents,
//     {
//         fetchEvents
//     }
// )(VisibleEventList));
//
// export default VisibleEventList;



import {connect} from 'react-redux'
import React, {Component} from 'react'
import EventContainer from "./EventContainer";
import {withRouter} from "react-router-dom";
import {fetchEvents} from "../actions/index";
import {fetchSliceEvent} from '../api/index';

import InfiniteScroll from 'react-infinite-scroller';
class VisibleEventList extends Component {
    constructor(props){
        super(props);
        this.state = {
            events: [],
            items: 0,
            hasMoreItems: true
        }
    }
    // showItems() {
    //     const items = [];
    //     for (let i = 0; i < this.state.items; i++) {
    //         items.push( {i} );
    //     }
    //     console.log(items)
    //     return items;
    // }

    loadMore() {
        if(this.state.items === 100){
            this.setState({...this.state, hasMoreItems: false});
            console.log("finished",this.state.hasMoreItems)
        }else{
            console.log("State before",this.state);
            const items =   this.state.items + 4;
            // this.setState({items});
            console.log("State after",this.state);
            // const newItems=this.fetchData(this.setState.items);
            this.fetchData(items).then(newItems => {
                this.setState({...this.state, events : [...this.state.events, ...newItems], items});
                // this.setState(...this.state, [...this.state.events].concat(newItems))
                    // this.setState({hasMoreItems:false})
                console.log(newItems)
                console.log('state',this.state);
            });


        }

    }

    fetchData(num) {
        console.log("NUM:", num)
        // const {fetchSliceEvent} = this.props;
        return fetchSliceEvent(num);
    }

    render() {

        return (
            <div>
                <div style={{height:'800px', overflow:'auto'}}>
                    <InfiniteScroll
                        loadMore={this.loadMore.bind(this)}
                        hasMore={this.state.hasMoreItems}
                        loader={<div className="loader"> Loading...</div>}
                        useWindow={false}>
                        <EventContainer events={this.state.events}/>
                    </InfiniteScroll>{" "}
                </div>{" "}
            </div>
        )
    }
}

const getVisibleEvents = (events) => {
    return events
};

VisibleEventList = withRouter(connect(
    getVisibleEvents,
    {
        fetchEvents
    }
)(VisibleEventList));

export default VisibleEventList;

