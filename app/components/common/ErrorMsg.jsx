import React from 'react';

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
    msg: React.PropTypes.string.isRequired,
};

export default ErrorMsg;