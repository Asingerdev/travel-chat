import styled from 'styled-components';

export const SignUpForm = styled.form`
    width: 50%;
    margin: 60px auto;
    padding: 10px;
    position: relative;
    background: #faf6ff;
    border-radius: 5px;

    h1 {
        text-transform: uppercase;
        font-size: 1.5em;
        font-weight: bold;
        color: #6c6763;
        margin: 0px 10px 10px 10px;
        padding-bottom: 5px;
        border-bottom: 2px solid #EBE6E2;
    }

    p {
        padding: 0 10px;
    }

    label {
        display: block;
        padding: 0 0 5px 2px;
        text-transform: uppercase;
        font-weight: 400;
        font-size: .8em;
    }

    label i {
        display: inline-block;
        width: 10px;
    }

    input[type=text],
    input[type=password] {
        width: 100%;
        padding: 5px;
        margin-bottom: 5px;
        border: 3px solid #EBE6E2;
        border-radius: 5px;
        transition: all 0.3s ease-out;
        &:hover {
            border-color: #CCC;
        }
    }

    input[type=submit] {
        width: 30%;
        height: 40px;
        border-radius: 5px;
        margin-left: 35%;
        cursor: pointer;
        font-size: 1em;
        line-height: 40px;
        text-align: center;
        font-weight: bold;
        background: linear-gradient(#34a5cf, #2a8ac4);
        border: 1px solid #f4ab4c;
        color: #ffffff;
        &:hover {
            opacity: .8;
        }
    }
`