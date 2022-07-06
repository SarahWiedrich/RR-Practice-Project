import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

export default function About () {
    return (
        <Container>
            <Card border='info'>
                <Card.Header mb-0 card-body>About Us</Card.Header>
                <Card.Body>
                    <Card.Text>....text....</Card.Text>
                </Card.Body>
                <Card.Img style={{'width': '50%', 'margin': '0 auto'}} alt='landscape' variant='bottom' src='https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__480.jpg' />
            </Card>
        </Container>
    )
}