import { Nav, NavLink, NavIcon, Bars } from "./NavbarElements";

const Navbar = ({ toggle }) => (
    <>
        <Nav>
            <NavLink to="/">Pizza</NavLink>

            <NavIcon onClick={toggle}>
                <p>Menu</p>
                <Bars />
            </NavIcon>
        </Nav>
    </>
);

export default Navbar;
