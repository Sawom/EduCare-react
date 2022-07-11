import React, { useEffect, useState } from 'react';
import { Row,Container } from 'react-bootstrap';
import Singlecourse from '../Singlecourse/Singlecourse';
import './Courses.css';
const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [display, setDisplay] = useState([]);
    useEffect(()=>{
        fetch('./allData.JSON')
        .then(res => res.json())
        .then(data => {
            setCourses(data);
            setDisplay(data);
        } );
    },[]);
    // searching function
    const handleSearch = (event)=>{
        const search = event.target.value;
        const matched = courses.filter((product)=> product.name
        .toLowerCase().includes(search.toLowerCase()) );
        setDisplay(matched);
    }
    return (
        <Container  >
            {/* search course */}
            <div className='searchPosition' >
                <br />
                <h4>Our services is to provide best online courses at least price.</h4>
                <br />
                <input onChange={handleSearch} placeholder=' Search course here ' type="text" />
                <br /><br />
            </div>
            {/* get all courses */}
            <Row xs={1} sm={1} md={2} lg={3} className="g-4 course" >
                    {
                        display.map((course)=> <Singlecourse
                            key={course.key}
                            course={course} 
                        ></Singlecourse> )
                    }
            </Row>
            <br /> 
        </Container>
    );
}
export default Courses;