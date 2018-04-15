// import {connect} from 'react-redux'
// import React, {Component} from 'react'
// import EventContainer from "./EventContainer";
// import {withRouter} from "react-router-dom";
// // import {fetchEvents} from "../actions/index";
// import {testfetchSliceEvents} from "../actions/index";
//
// class VisibleEventList extends Component {
//
//     componentDidMount() {
//         console.log("didMount/this.fetchData",this.fetchData())
//         this.fetchData()
//     }
//
//     fetchData() {
//         // const {fetchEvents} = this.props;
//         // fetchEvents();
//         const{testfetchSliceEvents} = this.props;
//         testfetchSliceEvents()
//         console.log("fetchData/test",testfetchSliceEvents)
//     }
//
//     render() {
//         const {...rest} = this.props;
//         console.log("{...rest}", {...rest})
//         console.log("this.props", this.props)
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
//         testfetchSliceEvents
//     }
// )(VisibleEventList));
//
// export default VisibleEventList;

import {v4} from "node-uuid";
import {connect} from 'react-redux'
import React, {Component} from 'react'
import EventContainer from "./EventContainer";
import {withRouter} from "react-router-dom";
// import {fetchSliceEvents} from '../api/index';
import InfiniteScroll from 'react-infinite-scroller';
import {testfetchSliceEvents} from "../actions/index";
import Event from "./Event";

class VisibleEventList extends Component {
    constructor(props){
        super(props);
        this.state = {
            // events: [],
            items: 0,
            hasMoreItems: true
        }
    }

    // shouldComponentUpdate(prevProps, newProps) {
    //     console.log('prevProps', prevProps);
    //     console.log('prevProps', newProps);
    //
    // }

    // componentDidMount() {
    //     this.fetchData()
    // }
    loadMore() {
        if(this.state.items === 16){
            this.setState({...this.state, hasMoreItems: false});
        }else{
console.log('-----', this.props);
            this.fetchData(this.state.items).then(newItems => {
                console.log("this.props", this.props);
                const items =  this.state.items + 4;
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
        console.log("REST:", {...rest})
        // console.log("STATE", this.state.events)
        return (
            <div>
                <div style={{height:'600px', overflow:'auto'}}>
                    <InfiniteScroll
                        loadMore={this.loadMore.bind(this)}
                        hasMore={this.state.hasMoreItems}
                        loader={<div className="loader"> Loading...</div>}
                        useWindow={false}>
                        <EventContainer {...rest}/>
                        {/*<EventContainer events={this.state.events}/>*/}
                    </InfiniteScroll>{" "}
                </div>{" "}
            </div>
        )
    }
}

const getVisibleEvents = (store) => {
    // return {events: [...store.events]}
    return store
};
//
VisibleEventList = withRouter(connect(
    getVisibleEvents,
    {
        testfetchSliceEvents
    }
)(VisibleEventList));

export default VisibleEventList;






//
// const getEvents = (dispatch, ownProps) =>{
//
//     return {
//         loadMore(state, setState) {
//             if (flag) return;
//             // if(this.state.items === 100){
//             // console.log(state, setState);
//             console.log('items', state.items);
//             if(state.items === 8){
//                 setState({...state, hasMoreItems: false});
//             }else{
//                 const items = state.items + 4;
//                 fetchSliceEvent(items).then(newItems => {
//                     console.log('newItems', newItems);
//                     setState({...state, events : [...state.events, ...newItems], items});
//                     // console.log('STATE',state);
//                     // console.log('ITEMS',state.items)
//                     // console.log('EVENT',state.events)
//                     // state.events.forEach((event)=>{
//                     //     console.log('3',event);
//                     //     dispatch(addEvent(event))
//                     // })
//                     // dispatch(addEvent(event));
//
//                 });
//             }
//         }
//
//     }
// };


