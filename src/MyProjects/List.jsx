import { mobiles } from "./Data/Data";
function List() {
	return (
		<div className="App">
			<header className="App-header">
				<ul className="mobileList">
					<li><div className='column heading'>Name</div>:<div className='column heading'>Brand</div>:<div className='column heading'>Price</div></li>
					{mobiles.map((a, i) => {
						return (
							<li key={i}><div className='column'>{a.name}</div>:<div className='column'>{a.brand}</div>: <div className="column">{a.price}</div></li>
						);
					})}
				</ul>
			</header>
		</div>
	);
}
export default List;