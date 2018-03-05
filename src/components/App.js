import React from 'react'
import Footer from './Footer'
import AddEvent from '../containers/AddEvent'
import VisibleEventList from '../reducers/VisibleEventList'

const App = () => (
    <div>
        <AddEvent />
        <VisibleEventList/>
        <Footer/>
    </div>
);

export default App