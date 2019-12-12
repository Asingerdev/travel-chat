import styled from 'styled-components';

const ChatContainer = styled.div`
    display: flex;
    margin: 0 auto;
    width: 750px;
    height: 800px;
    margin-top: 64px;
    color: white;
    height: 800px;
    border-radius: 5px;
    border: 3px solid lightblue;
`

const SideBar = styled.div`
    width: 260px;
    background: #444753;
`

const UserList = styled.ul`
    padding: 20px;
    height: 770px;
`

const User = styled.li`
    padding-bottom: 20px;
    list-style-type: none;
`

const UserAbout = styled.div`
    margin-top: 8px;
`

const ChatWindow = styled.div`
    width: 490px;
    background: #F2F5F8;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    color: #434651;
`

const ChatHeader = styled.header`
    padding: 20px;
    border-bottom: 2px solid white;
`

const ChatAbout = styled.div`
    padding-left: 10px;
    margin-top: 6px;
    font-weight: bold;
    font-size: 1.2em;
`

const ChatHistory = styled.div`
    padding: 30px 30px 20px;
    border-bottom: 2px solid white;
    overflow-y: scroll;
    height: 600px;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    background-color: white;
`

const ChatRow = styled.div`
    padding: 20px;
    width: 100%;
`

const ChatInput = styled.textarea`
    width: 100%;
    padding: 10px 20px;
    border: none;
    font-size: 1em;
    margin-bottom: 10px;
    border-radius: 5px;
    resize: none;
`

const ChatButton = styled.button`
    padding: 0 30px;
    color: #94C2ED;
    background-color: #F2F5F8;
    font-size: 1em;
    text-transform: uppercase;
    border: none;
    font-weight: bold;
    cursor: pointer;
    &:hover {
        color: darken(#94C2ED, 8%);
    }
`

export {
    ChatContainer,
    SideBar,
    UserList,
    User,
    UserAbout,
    ChatWindow,
    ChatHeader,
    ChatAbout,
    ChatHistory,
    ChatRow,
    ChatInput,
    ChatButton
}