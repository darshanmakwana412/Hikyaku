import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-white dark:bg-gray-900 shadow-lg">
                    
        <NavbarIcon icon={<FaFire size="28" />} />
        <Divider />
        <NavbarIcon icon={<BsPlus size="32" />} />
        <NavbarIcon icon={<BsFillLightningFill size="20" />} />
        <NavbarIcon icon={<FaPoo size="20" />} />
        <Divider />
        <NavbarIcon icon={<BsGearFill size="22" />} />
        
    </div>
  );
};

const NavbarIcon = ({ icon, text = 'tooltip 💡' }) => (
  <div className="sidebar-icon group">
    {icon}
    <span class="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
);


const Divider = () => <hr className="sidebar-hr" />;

export default Navbar;