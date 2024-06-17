import '../css/Header.css'

// validando as propriedades
import Proptypes from 'prop-types'

const Header = (props) => {
    const hideMenu = props.hideMenu


    return (
        <header className='header'>
            {hideMenu ? null : (
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">Sobre</a></li>
                </ul>
            )}
            {props.name}
        </header >
    )
}

// validando as propriedades
Header.prototype = {
    hideMenu: Proptypes.bool,
    name: Proptypes.string
}


export default Header