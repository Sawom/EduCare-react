import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Bestcourses from '../Bestcourses/Bestcourses';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
const Bestseller = () => {
    const [sells , setSells] = useState([]);
    useEffect(()=>{
        fetch('./best.JSON')
        .then(res=> res.json())
        .then(data=> setSells(data))
    }, [])
    return (
        <Container >
            <br />
            <h1 className='App'>Our best selling courses</h1>
            <br />
            <Row xs={1} sm={1} md={2} lg={3} className="g-4 course" >
                {
                    sells.map((sell)=> <Bestcourses
                         key={sell.key}
                         sell={sell}
                    ></Bestcourses> )
                }
            </Row>
            <br />
            <Link to='/services' >
                <button  className='btn-regular App' >View all courses</button>
            </Link>
            <br /> <br />
        </Container>
        
    );
};

export default Bestseller;