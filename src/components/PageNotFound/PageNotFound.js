import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import '../../../styles/page-not-found.less'
import '../../../styles/common.less'

class PageNotFound extends Component {
    render() {
        return (
            <div className='page-not-found'>
                <h1 className='page-not-found__title'>404</h1>
                <h2 className='page-not-found__sub-title'>Page not found</h2>
                <p><span>Whoops!</span> Unfortunately there is nothing here...</p>
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