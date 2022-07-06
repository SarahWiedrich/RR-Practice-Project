import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'

export default function Pricing(props) {
    const displayPricing = props.pricing.map((eachPrice) => {
        return <ListGroup.Item action variant="light">{eachPrice}</ListGroup.Item>
    })

    return (
       <Container>
        <Card>
            <Card.Body>
                <Card.Title>Site Options</Card.Title>
                <Card.Text>Pricies</Card.Text>
            </Card.Body>
        </Card>
        <ListGroup>
            {displayPricing}
        </ListGroup>
       </Container>
    )
}
