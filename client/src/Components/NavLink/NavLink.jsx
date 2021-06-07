// <NavLink name="" link="./" />

import './NavLink.min.css';

function NavLink(props) {

    return (
        <li className={`menu__item menu__item--${props.name}`}>
            <a className="menu__link" href={`${props.link}`}>{props.name}</a>
        </li>
    )
}

export default NavLink;