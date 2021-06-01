import { useRouter } from 'next/router';

import Card from '../ui/Card';
import classes from './GroupItem.module.css';

const GroupItem = props => {
    //Use next router object to create links to page details.
    const router = useRouter();

    console.log(props.id);

    //Show the details for a particular group.
    const handleShowDetails = () => {
        //Use the router object to dynamically create and navigate to a new URL for this group.
        router.push(`/${props.id}`);
    }

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                </div>
                <div className={classes.actions}>
                    <button onClick={handleShowDetails}>Show Details</button>
                </div>
            </Card>
        </li>
    );
}

export default GroupItem;