import './Navbar.css'
import { Link } from "react-router-dom";
import sun from '../assets/sun.png'
import moon from '../assets/moon.png'

const Navbar = ({ theme, setTheme }) => {

  const toggle_mode = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  return (
    <div className='navbar'>

      <h3 className="logo">JUAMAYA</h3>
      <ul>
        <li> <Link to="/">Home </Link></li>
        <li> <Link to="/products">Products </Link></li>
        <li> <Link to="/Features">Features </Link></li>
        <li> <Link to="/About">About </Link></li>
        <li> <Link to="/Contact">Contact </Link></li>
      </ul>

      <img onClick={() => { toggle_mode() }} src={theme === 'light' ? moon : sun} alt="" className="toggle-icon" />
    </div>
  )
}

export default Navbar