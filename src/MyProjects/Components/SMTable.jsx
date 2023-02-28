function SMTable(props) {
	let { style, data, setSelectedRow, cols, limit } = props;
	return (
		<table style={style}>
			<thead>
				<tr>
					{cols.map((col, i) => {
						return (<th key={i}>{col.displayName}</th>)
					})}
				</tr>
			</thead>
			<tbody>
				{
					data.map((value, rI) => {
						if (rI < (limit ? limit : Infinity)) {
							return (
								<tr key={rI} onClick={setSelectedRow ? () => {
									setSelectedRow(rI);
									console.log(rI)
								} : (() => { })}>
									{cols.map((col, cI) => {
										return (<td key={cI}>{value[col.key]}</td>)
									})}
								</tr>
							)
						}
					})
				}
			</tbody>
		</table>
	)
}
export default SMTable;