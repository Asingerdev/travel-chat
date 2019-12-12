import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const navBarHeight = '4em';
//set fixed height for navbar

const StyledNav = styled.nav`
    position: fixed;
    top: 0;
    z-index: 5;
    display: grid;
    grid-template-rows: none;
    grid-template-columns: 1fr auto auto auto;
    justify-items: start;
    text-align: right;
    overflow: hidden;
    width: 100%;
    color: #4D4D4D;
    height: ${navBarHeight};
    background-color: white;
`

const NavItem = styled.div`
    display: flex;
    align-items: center;
    margin: 12px 12px;
`

const Icon = styled.div`
    margin: 12px 12px;
    font-weight: bold;
    width: 10%;
    font-size: 1.5em;
    span {
        color: #86BB71;
    }
`

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: black;
    font-size: 1.2em;
    margin-right: 10px;
    &:hover {

    }
`

export {
    StyledNav, NavItem, Icon, StyledNavLink
}
