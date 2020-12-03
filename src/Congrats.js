import React from 'react';
import PropTypes from 'prop-types'

// eslint-disable-next-line import/no-anonymous-default-export
const Congrats = (props) => {
        if(props.success){
            return(
            <div data-testid="component-congrats">
            <span data-testid="congrats-message">
              Congratulations! You guessed  DA WOLDO!
            </span>
            </div>
            );
        }
        else{
            return(
        <div data-testid="component-congrats"></div>
            );
        }
}

Congrats.PropTypes = {
    success: PropTypes.bool.isRequired,
};

export default Congrats;