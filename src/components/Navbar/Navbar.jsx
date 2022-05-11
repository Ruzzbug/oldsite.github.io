import { styled } from '@mui/system';
import palette from '../../palette';
import { NavbarLink, Header, HeaderLogo, HeaderNav } from './NavStyles';

function Navbar() {
  return (
    <Header>
      <HeaderLogo>
        <a href="/">LOGO</a>
      </HeaderLogo>
      <HeaderNav>
        {/* IF SWAPPED TO BROWSER ROUTER REMOVE #s */}
        <NavbarLink href="../Home">Home</NavbarLink>
        <NavbarLink href="../About">About</NavbarLink>
        <NavbarLink href="../Portfolio">Portfolio</NavbarLink>
        <NavbarLink href="../Resume">Resume</NavbarLink>
        <NavbarLink href="../Timeline">Timeline</NavbarLink>
      </HeaderNav>
    </Header>
  );
}

export default Navbar;