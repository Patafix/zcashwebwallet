import React from 'react';

/**
 * @return {null|XML}
 */
const Header = function (props) {
        return <nav className="navbar navbar-inverse" role="navigation">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"/>
                        <span className="icon-bar"/>
                        <span className="icon-bar"/>
                    </button>
                    <a className="navbar-brand" href="#">ZCash Browser Side  Wallet</a>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li>
                            <a href="#">FAQ</a>
                        </li>
                    </ul>
                    <p className="navbar-text navbar-right">Open source <a href="#" className="navbar-link">Github</a></p>
                </div>
            </div>
        </nav>
};

export default Header;