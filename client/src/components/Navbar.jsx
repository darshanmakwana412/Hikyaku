import { BsPlus, BsGearFill } from 'react-icons/bs';
import { GoSignIn } from 'react-icons/go';
import useDarkMode from '../hooks/useDarkMode';
import { FaMoon, FaSun, FaPowerOff, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { TbLogin } from 'react-icons/tb';
import { CgProfile } from 'react-icons/cg';
import { BsInboxesFill } from 'react-icons/bs'

const Navbar = () => {

  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = ()=> {
      logout()
  }

  return (
    <div className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-white dark:bg-gray-900 shadow-lg">

        <Link to="/"><NavbarIcon icon={<FaHome size="28" />} text="Home"/></Link>            
        <Divider />
        <NavbarIcon icon={<BsPlus size="32" />} text="Create Ukiyo"/>
        <NavbarIcon icon={<BsInboxesFill size="20" />} />
        <NavbarIcon icon={<CgProfile size="26" />} text="My Profile"/>
        <Divider />
        <NavbarIcon icon={<BsGearFill size="22" />} text="Settings"/>
        { user && (
          <div onClick={handleClick}>
            <NavbarIcon icon={<FaPowerOff size="22"/>}  text="Logout"/>
          </div>
        )}
        { !user && ( 
          <div>
            <Link to="/login"><NavbarIcon icon={<TbLogin size="22" />} text="Login"/></Link>
            <Link to="/signup"><NavbarIcon icon={<GoSignIn size="22" />} text="Signup"/></Link>
          </div>
        )}
        <ThemeIcon />
        
    </div>
  );
};

const NavbarIcon = ({ icon, text = 'tooltip 💡' }) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
);

const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <span onClick={handleMode}>
      {darkTheme ? (
        <NavbarIcon icon={<FaSun size="22" />} text="Light Mode"/>
      ) : (
        <NavbarIcon icon={<FaMoon size="22" />} text="Dark Mode"/>
      )}
    </span>
  );
};


const Divider = () => <hr className="sidebar-hr" />;

export default Navbar;