import React from 'react'
import { Row, Col, Image,Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import {Link} from "react-router-dom"
import {formations} from '../ressources'
function Formation() {
    return (
        <div>
            <h1 className="text-lg-center">Formation</h1>
            {formations.map(form=>
            <Row key={form.id} className="py-5">
                <Col md={6}>
                    <Image src={form.school_image} alt="ECC image" fluid/>
                </Col>

                <Col md={6} className="column-formation">
                   <h1 className="text-lg-center card-text">{form.date}</h1>
                    <Card>
                        <ListGroup >
                            <ListGroupItem>
                                <Row>
                                    <Col>Level:</Col>
                                    <Col className="text-info">{form.Level}</Col>
                                </Row>
                            </ListGroupItem>
                           
                            <ListGroupItem>
                                <Row>
                                    <Col>Field:</Col>
                                    <Col className="text-info">{form.Field}</Col>
                                </Row>
                            </ListGroupItem>

                            <ListGroupItem>
                                <Row>
                                    <Col>school:</Col>
                                    <a href={form.Link_school}><Col className="text-info">{form.school}</Col></a>
                                </Row>
                            </ListGroupItem>
                        </ListGroup>
                    </Card>
                    <div className='text-center py-2'><Button className='btn btn-info '><Link to={`/Formation/${form.id}`}> for more info </Link></Button></div>
                    
                </Col>
           </Row>
            )}
            
        </div>
    )
}

export default Formation
