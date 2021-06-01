import classes from './MainNavigation.module.css';

const MainNavigation = () => {

    return (
        <header className={classes.header}>
            <div className={classes.logo}>NextGroup</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Groups</Link>
                    </li>
                    <li>
                        <Link to='/new-group'>Add New Group</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;