import classes from './GroupDetail.module.css';
import {Container, Row, Col} from 'react-bootstrap';

const GroupDetail = props => {
    return (
        <section className={classes.detail}> 
            <Container>
                <Row>
                    <Col md="6">
                        <img
                            src={props.image}
                            alt={props.title}
                        />
                    </Col>
                    <Col md="6">
                        <h1>{props.title}</h1>
                        <address>{props.address}</address>
                        <p>{props.description}</p>
                    </Col>
                </Row>
            </Container>    
        </section>
    );
};

export default GroupDetail;