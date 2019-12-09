import React from 'react'
import { NavLink } from 'react-router-dom'

import * as ROUTES from '../../constants/routes'

import './style.css'

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