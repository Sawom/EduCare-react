import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Link, useParams } from 'react-router-dom';
const Coursedetails = () => {
    const { courseid } = useParams();
    const[course,setCourse] = useState({});
    useEffect(()=>{
        fetch(`http://localhost:3333/list/${courseid}`)
        .then(data=> data.json())
        .then(data => setCourse(data))
    }, [])
    return (
        <Container >
            <br />
            <h3>Details of Course id: {courseid} </h3>
            <h5>Name: {course.name} </h5>
            <img src={course.img} width='70%' alt="" srcset="" /> <br /><br />
            <h5>{course.enrolled} people enrolled this course.</h5>
            <h5>Total videos: {course.videos} </h5>
            <h5>Course duration {course.hours} hours </h5>
            <h5> Exercise: {course.exercise}</h5>
            <h5>Total {course.test} tests </h5>
            <h5>Price only {course.price} Taka </h5>
            <h5>About course:</h5>
            <p>{course.about}</p>
            <Link to='/services' >
                <button  className='btn-regular App' >View all courses</button>
            </Link>
            <br /> <br />
        </Container>
    );
};
export default Coursedetails;