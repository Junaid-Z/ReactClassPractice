import { mobiles } from './Data'
function Cards() {
	return (
		<div className="App">
			<header className="App-header">
				{mobiles.map((a, i) => {
					return (
						<div className='phoneCard' key={i}><div>{a.name}</div><div>{a.brand}</div><div>{a.price}</div></div>
					);
				})}
			</header>
		</div>
	)
}
export default Cards;