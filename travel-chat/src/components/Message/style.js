import styled from 'styled-components';

export const StyledMessage = styled.div`
    position: relative;
    color: white;
    text-align: left;
    background: #86BB71;
    padding: 18px 20px;
    line-height: 26px;
    font-size: 1em;
    border-radius: 7px;
    margin-bottom: 30px;
    width: 90%;
    :nth-child(even) {
        background: #94C2ED;
    }

    span {
        font-weight: 600;
        margin-right: 10px;
        color: darkblue;
    }
`
