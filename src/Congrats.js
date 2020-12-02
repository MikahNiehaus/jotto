import React from 'react';


// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
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