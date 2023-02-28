import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function SMCard(props) {
	let nav = useNavigate();
	return (
		<Card className='myCard' style={{ width: '18rem', padding: "5px .5em 0px .5em", margin: "10px auto 0px auto" }}>
			<Card.Img variant="top" src={props.data.imageLink} />
			<Card.Body>
				<Card.Title>{props.data.title}</Card.Title>
				<Card.Text>
					{props.data.info}
				</Card.Text>
				<Button className='myCardBtn' variant="primary" onClick={() => {
					nav(`/ECommerceAPI/${props.data.title}`)
				}}>Details</Button>
			</Card.Body>
		</Card>
	);
}

export default SMCard;