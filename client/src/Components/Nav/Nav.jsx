// Links need text for screen readers
import { useState } from 'react';
import './Nav.css';

function Nav() {
    const [navSide, setNavSide] = useState("right");

    const changeSide = () => {
        setNavSide(!navSide);
    };

    return (
        <nav className="nav">
            <ul className={`nav__menu menu menu--${navSide ? "right" : "left"}`} onClick={changeSide}>
                <li className="menu__item menu__item--save"><a className="menu__link" href="./">save</a></li>
                <li className="menu__item menu__item--back"><a className="menu__link" href="./">back</a></li>
                <li className="menu__item menu__item--next"><a className="menu__link" href="./">next</a></li>
                <li className="menu__item menu__item--delete"><a className="menu__link" href="./">delete</a></li>
            </ul>
        </nav>
    )
}

export default Nav;