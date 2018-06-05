import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import '../../styles/common.scss'
import './PageNotFound.scss'
import block from "../../helpers/BEM"
const b = block("PageNotFound")


class PageNotFound extends Component {
    render() {
        return (
            <div className={b()}>
                <h1 className={b('title')}>404</h1>
                <h2 className={b('sub-title')}>Page not found</h2>
                <p className={b('text')}><span className={b('text', ['uppercase'])}>Whoops!</span> Unfortunately there is nothing here...</p>
                <Link to="/">
                    <button className={b('home-btn')}>
                        Back to Home
                    </button>
                </Link>
            </div>
        )
    }
}

export default PageNotFound;
