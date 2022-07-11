import React from 'react';
import Container from 'react-bootstrap/Container';
import notfound  from '../../images/notfound.gif';
const Notfound = () => {
    return (
        <Container>
            <br /> 
            <img src={notfound } width="100%" alt="" srcset="" />
            <br /> 
        </Container>
    );
};
export default Notfound;