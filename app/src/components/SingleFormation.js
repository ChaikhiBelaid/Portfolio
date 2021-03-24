import React from 'react'
import {formations} from "../ressources"
import { ListGroup, ListGroupItem,Col,Row,Button } from 'react-bootstrap'
import {Link} from "react-router-dom"
function SingleFormation({match}) {
    const id=match.params.id
    const formation = formations.filter(p=>p.id===id)[0]
    console.log(formation)
    return (
        <div>
            <div className="text-left"><Button className="btn btn-light"><Link to='/Formation & Certification'>Go back</Link></Button></div>
            <h1 className="text-lg-center">Semester 1 Programm (september to fabruary)</h1>
            
           
        </div>
    )
}

export default SingleFormation;
