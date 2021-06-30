import GroupItem from './GroupItem';
import classes from './GroupList.module.css';
import {Container, Row, Col} from 'react-bootstrap';

const GroupList = props => {
    return (
        <ul className={classes.list}>
            <Container>
                <Row>
                    {props.groups.map(group => (
                        <Col md="6">
                            <GroupItem
                                key={group.id}
                                id={group.id}
                                image={group.image}
                                title={group.title}
                                address={group.address}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </ul>
    );
}

export default GroupList;