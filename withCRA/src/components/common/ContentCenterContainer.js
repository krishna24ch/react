import React from 'react';
import PropTypes from 'prop-types';
import './common.scss';

export const ContentCenterContainer = ({children}) => {
    return (
        <div className="align-center">
            {children}
        </div>
    )
};

ContentCenterContainer.propTypes = {
    children: PropTypes.node.isRequired,    
}