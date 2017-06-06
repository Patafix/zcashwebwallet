import React from 'react';
import PropTypes from 'prop-types';

/**
 * @return {null|XML}
 */
const ErrorMsg = function (props) {
    if (props.msg) {
        return (
            <p className="notice bg-danger">
                {props.msg}
            </p>
        )
    }
    return null;
};

ErrorMsg.propType = {
    msg: PropTypes.string.isRequired,
};

export default ErrorMsg;