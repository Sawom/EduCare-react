import React, { useEffect, useState } from 'react';
import Homecourse from '../Homecourse/Homecourse';
import {  Col, Row} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import img1 from '../../images/img1.png';
const Home = () => {
    const [homes,setHomes] = useState([]);
    useEffect(()=>{
        fetch('./home.JSON')
        .then(res=> res.json())
        .then(data=> setHomes(data))
    },[])
    
    return (
        <div>
            {/* image and text */}
            <Container fluid>
                <Row className='backgroundColor' >
                    <Col className='col-12 col-lg-6 col-md-6' >
                    <img className="img-fluid" src={img1} alt="" srcset="" />
                    <br /> <br />
                    </Col>
                    
                    <Col className='col-12 col-lg-6 col-md-6' >
                    <h3> Join Online Live Class </h3>
                    <h3>From Any Corner of the World</h3>
                    <h4>Start Learning With Us</h4>
                    <br /> 
                    </Col>
                    
                </Row>
            </Container>
            {/* services */}
            <br /><br />
            <Container>
            <div  className='text-left m-6' >
                <h2>Our services:</h2>
                <h3>Our services is to provide best online courses.</h3>
            </div> 
            {/* showing home 4 courses */}
            <Row xs={1} sm={1} md={2} lg={3} className="g-4 course " > 
                    {
                 homes.map(home => <Homecourse
                     key={home.key}
                    home={home}
                ></Homecourse> )
                    }
            </Row >
            <br /> 
            <div className='App' >
                <Link to='/services' >
                <button  className='btn-regular App' >View all courses</button>
                </Link>
            </div>
            <br />    
            </Container>
            <br /><br />
        </div> 
    );
};
export default Home;