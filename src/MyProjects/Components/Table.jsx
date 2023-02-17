function Table(props) {
	let fields = Object.keys(props.data[0]);
	return (
		<table style={props.style}>
			<thead>
				<tr>
					{fields.map((heading, i) => {
						return (<th key={i}>{heading}</th>)
					})}
				</tr>
			</thead>
			<tbody>
				{
					props.data.map((value, rI) => {
						return (
							<tr key={rI} onClick={() => {
								props.setSelectedRow(rI);
								console.log(rI)
							}}>
								{fields.map((field, cI) => {
									return (<td key={cI}>{value[field]}</td>)
								})}
							</tr>
						)
					})
				}
			</tbody>
		</table>
	)
}
export default Table;