import { Link } from 'react-router-dom'
import Logo from '../assets/images/logo.png'

const Header = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="Pokemon Logo" />
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/pokemon">Pokémon</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
