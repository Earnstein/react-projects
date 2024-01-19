import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, NavLink } from 'react-router-dom'
import { LogoS } from '../../assets/images'
import { socialMedia } from '../../constants'
import './Sidebar.scss'

const Sidebar = () => {
  return (
    <header className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
        <h2 alt="Einstein" className="sub-logo" >EarnStein</h2>
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/about"
          className="about-link"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/contact"
          className="contact-link"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        {
            socialMedia.map((link) => (
                <li key={link.id}>
                    <a 
                    href={link.href} 
                    target="_blank"
                    rel="noreferrer">
                        <FontAwesomeIcon icon={link.icon} color="4d4d4e"/>
                    </a>
                </li>
            ))
        }
      </ul>
    </header>
  )
}

export default Sidebar
