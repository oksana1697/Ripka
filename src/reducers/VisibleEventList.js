import {connect} from 'react-redux'
import React, {Component} from'react'
import EventContainer from "../components/EventContainer";
import {withRouter} from "react-router-dom";
import {fetchEvents} from "../actions";
class VisibleEventList extends Component {

    componentDidMount(){
        this.fetchData()
    }
    fetchData(){
        const  {fetchEvents} = this.props;
        fetchEvents();
    }
    render(){
        const { ...rest} =  this.props;
        console.log("Render:",{...rest})
        return (
            <EventContainer
                {...rest}
            />
        )
    }
}
const getVisibleEvents = (events) =>{
    return events
};

VisibleEventList = withRouter(connect(
    getVisibleEvents,
    {
        fetchEvents
    }
)(VisibleEventList));

export default VisibleEventList;
   // to cxomponets


// import InfiniteScroll from "react-infinite-scroller";
// class VisibleEventList extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             items: 2,
//             hasMoreItems: true
//         }
//     }
//
//     componentDidMount(){
//         // Detect when scrolled to bottom.
//         this.refs.myscroll.addEventListener("scroll", () => {
//             if (
//                 this.refs.myscroll.scrollTop + this.refs.myscroll.clientHeight >=
//                 this.refs.myscroll.scrollHeight
//             ) {
//                 this.loadMore();
//             }
//         });
//     }
//     showItems() {
//         var items = [];
//         for (var i = 0; i < this.state.items; i++) {
//             items.push(<li key={i}>Item {i}</li>);
//         }
//         return items;
//     }
//
//     loadMore() {
//         if(this.state.items===200){
//
//             this.setState({ hasMoreItems: false});
//         }else{
//             setTimeout(() => {
//                 this.setState({ items: this.state.items + 20});
//             }, 2000);
//         }
//
//     }
//
//     fetchData(){
//         const  {fetchEvents} = this.props;
//         fetchEvents()
//     }
//     render(){
//         const { ...rest} =  this.props;
//         console.log("Render:",{...rest})
//         return (
//             //<EventContainer
//                //   {...rest}
//             // />
//
//             <InfiniteScroll
//                 loadMore={this.loadMore.bind(this)}
//                  hasMore={this.state.hasMoreItems}
//             loader={<div className="loader"> Loading... </div>}
//             useWindow={false}>
//             {this.showItems()}{" "}
//     </InfiniteScroll>
//
//
//
//         )
//     }
// }
// const getVisibleEvents = (events) =>{
//     return events
// };
//
// VisibleEventList = withRouter(connect(
//     getVisibleEvents,
//     fetchEvents
// )(VisibleEventList));
//
// export default VisibleEventList;




