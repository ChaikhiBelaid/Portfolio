import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
function Footer() {
    return (
        <footer>
            <Container className="Footer-bootom">
                <Row>
                    <Col className="text-center py-3">Copyright &copy;BelaidChaikhi</Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;
