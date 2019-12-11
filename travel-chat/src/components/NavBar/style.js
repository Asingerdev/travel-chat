import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const navBarHeight = '4em';
//set fixed height for navbar

const StyledNav = styled.nav`
    position: fixed;
    top: 0;
    z-index: 5;
    display: block;
    overflow: hidden;
    width: 100%;
    height: ${navBarHeight};
    background-color: black;


    ul {
        list-style-type: none;
        display: flex;
        flex-direction: row;
        list-style-type: none;
        margin: 12px 12px;
        position: absolute;
    }

    li {
        list-style-type: none;
    }
`

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: black;
    font-size: 1.5em;
    padding: .5em;
    &:hover {
        border: 1px inset black;
        background-color: lightgreen;
    }
`

export {
    StyledNav, StyledNavLink
}
