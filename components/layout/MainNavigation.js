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
        <Navbar expand="md" className={classes.navContainer}>
            <Container>
                <Navbar.Brand className={[classes.logo, classes.navigationLink]}><Link href='/'>NextGroup</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ border: "none" }}>
                    <i className="fas fa-chevron-down" style={{ color: "#fff"}}></i>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-end" style={{ width: "100%"}}>
                        <NavItem>
                            <NavLink className={[classes.navigationItem, classes.navigationLink]}>
                                <Link href='/'>All Groups</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={[classes.navigationItem, classes.navigationLink]} title="Add New Group">
                                <Link href='/new-group'>
                                    <i className="fal fa-plus-circle" style={{ fontSize: "2rem" }}></i>
                                </Link>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Container> 
        </Navbar> 
    );
}

export default MainNavigation;