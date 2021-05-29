// Links need text for screen readers
import React  from 'react';
import './Nav.css';

function Content() {
    return (
        <nav className="nav">
            <ul className="nav__menu menu">
                <li className="menu__item menu__item--1"><a className="menu__link" href="./">save</a></li>
                <li className="menu__item menu__item--2"><a className="menu__link" href="./">back</a></li>
                <li className="menu__item menu__item--3"><a className="menu__link" href="./">next</a></li>
                <li className="menu__item menu__item--4"><a className="menu__link" href="./">delete</a></li>
            </ul>
        </nav>
    )
}

export default Content;