import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

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

export default StyledNavLink
