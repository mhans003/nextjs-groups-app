import classes from './MainNavigation.module.css';
//Import Link component from Next JS.
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';

const MainNavigation = () => {

    return (
        <Navbar bg="light" expand="lg" className={classes.navContainer}>
            <Container>
                <Navbar.Brand className={classes.logo}><Link href='/'>NextGroup</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-end" style={{ width: "100%"}}>
                        <NavItem>
                            <NavLink><Link href='/'>All Groups</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link href='/new-group'>New Group</Link></NavLink>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Container> 
        </Navbar> 
    );
}

export default MainNavigation;