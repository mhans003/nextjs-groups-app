import classes from './MainNavigation.module.css';
//Import Link component from Next JS.
import Link from 'next/link';

const MainNavigation = () => {

    return (
        <header className={classes.header}>
            <div className={classes.logo}>NextGroup</div>
            <nav>
                <ul>
                    <li>
                        <Link href='/'>All Groups</Link>
                    </li>
                    <li>
                        <Link href='/new-group'>Add New Group</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;