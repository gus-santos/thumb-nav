// Links need text for screen readers
import { useState } from 'react';
import './Nav.css';

import NavLink from '../NavLink/NavLink';

function Nav() {
    const [navSide, setNavSide] = useState("false");

    const changeSide = () => {
        setNavSide(!navSide);
    };

    return (
        <nav className="nav">
            <ul className={`nav__menu menu menu--${navSide ? "right" : "left"}`} onClick={changeSide}>
                <NavLink name="save" link="./" />
                <NavLink name="back" link="./" />
                <NavLink name="next" link="./" />
                <NavLink name="delete" link="./" />
            </ul>
        </nav>
    )
}

export default Nav;