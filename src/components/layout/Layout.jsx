import { Outlet } from 'react-router-dom';
import { useMobileNav } from '../../hooks/useMobileNav';
import Navbar from './Navbar';
import InfoBar from './InfoBar';
import Footer from './Footer';
import ScrollToHash from './ScrollToHash';

export default function Layout() {
  const { menuOpen, toggleMenu, closeMenu } = useMobileNav();

  return (
    <>
      <ScrollToHash />
      <div
        className={`menu-overlay${menuOpen ? ' active' : ''}`}
        onClick={closeMenu}
        role="presentation"
      />
      <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} closeMenu={closeMenu} />
      <InfoBar />
      <Outlet />
      <Footer />
    </>
  );
}
