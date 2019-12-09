import React from 'react'

import * as ROUTES from '../../constants/routes'

import NavLink from './style.js'

const NavBar = () => {
    return (
        <div>
            <NavLink to={ROUTES.HOME}>Home</NavLink>
            <NavLink to={ROUTES.LOGIN}>Login</NavLink>
            <NavLink to={ROUTES.SIGN_UP}>Signup</NavLink>
            <NavLink to={ROUTES.CITIES}>Cities</NavLink>
        </div>
    )
}

export default NavBar