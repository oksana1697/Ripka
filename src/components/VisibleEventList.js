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


import {v4} from "node-uuid";
import {connect} from 'react-redux'
import React, {Component} from 'react'
import EventContainer from "./EventContainer";
import {withRouter} from "react-router-dom";
import {fetchSliceEvent} from '../api/index';
import InfiniteScroll from 'react-infinite-scroller';
import {fetchEvents} from "../actions/index";
class VisibleEventList extends Component {
    constructor(props){
        super(props);
        this.state = {
            events: [],
            items: 0,
            hasMoreItems: true
        }
    }
    // componentWillUpdate(){
    //     this.setState({...this.state, events: [...this.state.events,...this.props.events]})
    // }
       loadMore() {
        if(this.state.items === 100){
            this.setState({...this.state, hasMoreItems: false});
            console.log("finished",this.state.hasMoreItems)
        }else{
            console.log("State before",this.state);
            const items =  this.state.items + 4;
            console.log("State after",this.state);
            this.fetchData(items).then(newItems => {
                this.setState({...this.state, events : [...this.state.events, ...newItems], items});
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
                <div style={{height:'600px', overflow:'auto'}}>
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

const getVisibleEvents = (store) => {
    // return {events: [...store.events]}
    return store
};

VisibleEventList = withRouter(connect(
    getVisibleEvents,
    {
        fetchEvents
    }
)(VisibleEventList));

export default VisibleEventList;
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
//                     // state.events.forEach((event)=>{ //FIXME it is posiable that state has not changed by that moment
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


