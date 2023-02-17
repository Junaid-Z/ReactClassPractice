import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function SMCard(props) {
	return (
		<Card style={{ width: '18rem', padding: "5px .5em 0px .5em", margin: "10px auto 0px auto" }}>
			<Card.Img variant="top" src={props.data.imageLink} />
			<Card.Body>
				<Card.Title>{props.data.title}</Card.Title>
				<Card.Text>
					{props.data.info}
				</Card.Text>
				<Button variant="primary">Go somewhere</Button>
			</Card.Body>
		</Card>
	);
}

export default SMCard;