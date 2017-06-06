import React from 'react';
import {connect} from 'react-redux';
import Header from '../components/common/Header'

//import DevTools from '../components/DevTools';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                    {this.props.children}
                </div>
            </div>

        );
    }
}

App.propTypes = {
    children: React.PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(App);
