import styled from 'styled-components';

export const StyledMessage = styled.div`
    position: relative;
    padding: 10px 60px 10px 20px;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.6);
    background-color: rgba(0, 0, 0, 0.5);
    text-align: left;
    line-height: 1.7;
    :nth-child(even) {
        background-color: rgba(0, 0, 0, 0.25);
    }

    span.author {
        font-weight: 600;
        margin-right: 10px;
        color: rgba(0, 0, 0, 1);
    }
`