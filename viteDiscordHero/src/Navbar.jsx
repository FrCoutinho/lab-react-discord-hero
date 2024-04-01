import discordLogo from './assets/discord-logo-white.png'
import menuIcon from './assets/menu-icon.png'

function Navbar() {
    return (
        <nav>
            <img
            id= "nav-img"
            src={discordLogo}
            alt="Discord Logo"
            />  
            <img src={menuIcon} 
            alt="menuIcon" />
        </nav>
    );
}

export default Navbar;