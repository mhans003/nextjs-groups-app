import GroupItem from './GroupItem';
import classes from './GroupList.module.css';

const GroupList = props => {
    return (
        <ul className={classes.list}>
            {props.groups.map(group => (
                <GroupItem
                    key={group.id}
                    id={group.id}
                    image={group.image}
                    title={group.title}
                    address={group.address}
                />
            ))}
        </ul>
    );
}

export default GroupList;