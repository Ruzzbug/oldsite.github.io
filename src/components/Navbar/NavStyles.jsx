import { styled } from '@mui/system';
import palette from '../../palette';

export const Header = styled("div")`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    z-index: 1000;
    box-sizing: border-box;
    width: 100%;
    height: 5.7rem;
    padding: 0 calc(50% - 42.39583rem);
    background: ${palette.primaryDark};
    box-shadow: 0 -2rem 1rem 2rem rgb(0 0 0 / 10%);
    transform: translateZ(1px);
`;

export const HeaderLogo = styled("div")`
    flex: 0 0 auto;
    position: relative;
    z-index: 2;
    display: block;
    margin: 0 auto 0 2.3rem;
    color: ${palette.tertiaryLight};
    text-decoration: none;
    font-size: 1.4rem;
    line-height: 3.4rem;
`;
export const HeaderNav = styled("div")`
    display: flex;
    flex: 0 0 33.22917rem;
    flex-direction: row;
    margin: 0 2.29167rem 0 0;
`; 

export const NavbarLink = styled("a")`
    flex: 0 0 auto;
    display: block;
    padding: 0.25rem 0 0;
    border-bottom: 0.25rem solid transparent;
    text-decoration: none;
    color: ${palette.primaryText};
    font-size: 1.375rem;
    font-weight: 700;
    line-height: 2rem;
    transition: color .1s ease-out;
    margin: 0 1rem;
    &:hover{
        color: ${palette.primary};
        border-bottom:.31rem solid ${palette.secondary};
    }
`;

