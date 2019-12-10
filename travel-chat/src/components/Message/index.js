import React from 'react';
import { StyledMessage } from './style'

const Message = (props) => {
    return (
        <StyledMessage>
            <span className="author">
                {props.message.displayName}:
            </span>
            {props.message.message}
        </StyledMessage>
    )
}

export default Message