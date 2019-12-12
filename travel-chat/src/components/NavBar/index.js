import React from 'react'

import * as ROUTES from '../../constants/routes'

import { StyledNav, NavItem, Icon, StyledNavLink } from './style.js'

const NavBar = (props) => {
    return (
        <StyledNav>
            <NavItem>
                <Icon>Trip<span>Chat</span></Icon>
            </NavItem>
            <NavItem>
                <StyledNavLink to={ROUTES.HOME}>Home</StyledNavLink>
            </NavItem>
            {!props.currentUser &&
                <React.Fragment>
                    <NavItem>
                        <StyledNavLink to={ROUTES.LOGIN}>Login</StyledNavLink>
                    </NavItem>
                    <NavItem>
                        <StyledNavLink to={ROUTES.REGISTER}>Join</StyledNavLink>
                    </NavItem>
                </React.Fragment>
            }
            {props.currentUser &&
                <NavItem>
                    <StyledNavLink
                        onClick={props.doLogOutUser}
                        to={ROUTES.HOME}>
                        Logout
                    </StyledNavLink>
                </NavItem>
            }
        </StyledNav>
    )
}

export default NavBar
