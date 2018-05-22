import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class PageNotFound extends Component {
    render() {
        return (
            <div>
                <h1>Page Not Found</h1>
                <p>Sorry, there is nothing to see here.</p>
                <NavLink to={"/"}>
                    <button>
                        Back to Home
                    </button>
                </NavLink>
            </div>
        )
    }
}
export default PageNotFound;