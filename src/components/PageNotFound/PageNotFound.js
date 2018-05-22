import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class PageNotFound extends Component {
    render() {
        return (
            <div>
                <h1>404</h1>
                <h2>Page not found</h2>
                <p>Whoops!</p>
                <p>Unfortunately there is nothing here...</p>
                <Link to="/">
                    <button>
                        Back to Home
                    </button>
                </Link>
            </div>
        )
    }
}

export default PageNotFound;