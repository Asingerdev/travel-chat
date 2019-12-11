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
    border: 5px solid blue;
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
    height: 650px;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
`



/* // const ChatWindow = styled.div`
//     display: flex;
//     flex-wrap: nowrap;
//     flex-direction: column;
//     width: 100%;
// `

// const ChatMessage = styled.div`
//     width: 100%;
//     padding: 0 20px;
// `

// const ChatRow = styled.div`
//     display: flex;
//     flex-wrap: nowrap;
//     width: 100%;
//     padding: 20px;
// `

// const ChatInput = styled.input`
//     width: 100%;
//     padding: 15px 20px;
//     border-radius: 5px 0 0 5px;
//     border: 1px solid #ddd;
//     box-sizing: border-box;
//     outline: 0;
//     &:focus {
//     background-color: rgba(245, 243, 243, 0.5);
//     }
// `

// const ChatButton = styled.button`
//     padding: 0 30px;
//     background-color: #000;
//     color: #fff;
//     border: 0;
//     border-radius: 0 5px 5px 0;
//     outline: 0;
//     cursor: pointer;
//     &:hover {
//     background-color: rgba(0, 0, 0, .8);
//     }
// ` */

export {
    ChatContainer,
    SideBar,
    UserList,
    User,
    UserAbout,
    ChatWindow,
    ChatHeader,
    ChatAbout,
    ChatHistory
}