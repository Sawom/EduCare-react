import React from 'react';
import './Singlecourse.css'
import { Card, Col } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
const Singlecourse = (props) => {
    const{key,name,img,price,enrolled} = props.course;
    const url = `/courseinfo/${key}` ;
    let history = useHistory();
    const handleButton = ()=>{
        history.push(url);
    }
    return (
        <Col>
            <Card className='cardStyles'  >
            <Card.Title  >{name} </Card.Title>
            <Card.Img height='200px' variant="top" src={img} />
                <Card.Body>
                    <h6>Price: {price} taka  </h6>
                    <h6>{enrolled} people has enrolled this course</h6>
                    <button  onClick={handleButton} className='btn-regular' > View details</button> <br /> 
                    <Link to='/placeorder' >
                        <button className='btn-regular' >Order Course</button>
                    </Link>
                </Card.Body>
            </Card>
        </Col> 
    );
};
export default Singlecourse;