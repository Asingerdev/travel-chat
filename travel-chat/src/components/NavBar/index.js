import React from 'react'

import * as ROUTES from '../../constants/routes'

import StyledNavLink from './style.js'

const NavBar = () => {
    return (
        <div>
            <StyledNavLink to={ROUTES.HOME}>Home</StyledNavLink>
            <StyledNavLink to={ROUTES.LOGIN}>Login</StyledNavLink>
            <StyledNavLink to={ROUTES.REGISTER}>Register</StyledNavLink>
            <StyledNavLink to={ROUTES.CITIES}>Cities</StyledNavLink>
        </div>
    )
}

export default NavBar