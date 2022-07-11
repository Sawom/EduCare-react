import React from 'react';
import {  Card, Col } from 'react-bootstrap';
const Bestcourses = (props) => {
    const{key,name,img,price,enrolled} = props.sell;
    return (  
        <Col>
            <Card className='cardStyles'  >
            <Card.Title  >{name}</Card.Title>
            <Card.Img height='200px' variant="top" src={img} />
                <Card.Body>
                    <h6>Price: {price} taka  </h6>
                    <h6>{enrolled} people has enrolled this course</h6>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Bestcourses;