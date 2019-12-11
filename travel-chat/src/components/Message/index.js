import React from 'react';
import { StyledMessage } from './style'

const Message = (props) => {
    return (
        <StyledMessage>
            <span>
                {props.message.senderName}:
            </span>
            {props.message.content}
        </StyledMessage>
    )
}

export default Message