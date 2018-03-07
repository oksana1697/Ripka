import React from 'react'
import Footer from './Footer'
import Event from './App'
import AddEvent from '../containers/AddEvent'
import VisibleEventList from '../reducers/VisibleEventList'
import { HashRouter, Route, Switch } from 'react-router-dom'

const App = () => (
    <div>
        <AddEvent />
            {/*<Switch>*/}
                {/*<Route exact path='/' component={VisibleEventList}/>*/}
                {/*<Route exact path='/:eventName' component={Event}/>*/}
            {/*</Switch>*/}
            <VisibleEventList/>
        <Footer/>
    </div>
);

export default App