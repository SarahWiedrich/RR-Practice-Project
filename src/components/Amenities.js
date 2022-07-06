import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'

export default function Amenities(props) {
    const displayAmenities = props.amenities.map((eachAmenitie) => {
        return <ListGroup.Item action variant="light">{eachAmenitie}</ListGroup.Item>
    })

    return (
       <Container>
        <Card>
            <Card.Body>
                <Card.Title>Our Amenities</Card.Title>
                <Card.Text>Check out our Amenities!</Card.Text>
            </Card.Body>
        </Card>
        <ListGroup>
            {displayAmenities}
        </ListGroup>
       </Container>
    )
}