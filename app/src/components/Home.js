import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import {presentation} from '../ressources'
function Home() {
    return (
        <div>
           
           
           <Row>
                <Col md={6}>
                    <Image src={presentation.image} alt="Belaid image" fluid/>
                </Col>

                <Col md={6}>
                    <h1 className='text-center my-4'>Presentation</h1>
                    <p>{presentation.text}</p>
                    <h1 className='text-center my-5'>Contacts</h1>
                    <Row className="text-center my-5 p-3">
                       
                        <Col md={4} className="h1 "><a href={presentation.fb}><i className="text-info fab fa-facebook-f"></i></a></Col>
                        <Col md={4} className="h1 "><a href={presentation.gh}><i className="fab fa-github"></i></a></Col>
                        <Col md={4} className="h1 "><a href={presentation.in}><i className="text-info fab fa-linkedin"></i></a></Col>

                    </Row>
                </Col>
           </Row>
        </div>
    )
}

export default Home
