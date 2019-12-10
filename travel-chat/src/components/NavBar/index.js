import React from 'react'

import * as ROUTES from '../../constants/routes'

import { StyledNav, StyledNavLink } from './style.js'

const NavBar = (props) => {
    return (
        <StyledNav>
            <ul>
                <li><StyledNavLink to={ROUTES.HOME}>Home</StyledNavLink></li>
                <li><StyledNavLink to={ROUTES.CITIES}>Cities</StyledNavLink></li>
                {!props.currentUser &&
                    <React.Fragment>
                        <li><StyledNavLink to={ROUTES.LOGIN}>Login</StyledNavLink></li>
                        <li><StyledNavLink to={ROUTES.REGISTER}>Register</StyledNavLink></li>
                    </React.Fragment>
                }
                {props.currentUser &&
                    <li><StyledNavLink onClick={props.doLogOutUser} to={ROUTES.HOME}>Logout</StyledNavLink></li>
                }
            </ul>
        </StyledNav>
    )
}

export default NavBar