import styled from 'styled-components';

const ChatWindow = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    width: 100%;
`

const ChatMessage = styled.div`
    width: 100%;
    padding: 0 20px;
`

const ChatRow = styled.div`
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    padding: 20px;
`

const ChatInput = styled.input`
    width: 100%;
    padding: 15px 20px;
    border-radius: 5px 0 0 5px;
    border: 1px solid #ddd;
    box-sizing: border-box;
    outline: 0;
        &:focus {
        background-color: rgba(245, 243, 243, 0.5);
    }
`

const ChatButton = styled.button`
    padding: 0 30px;
    background-color: #000;
    color: #fff;
    border: 0;
    border-radius: 0 5px 5px 0;
    outline: 0;
    cursor: pointer;
        &:hover {
        background-color: rgba(0, 0, 0, .8);
    }
`

export {
    ChatWindow,
    ChatMessage,
    ChatRow,
    ChatInput,
    ChatButton
}