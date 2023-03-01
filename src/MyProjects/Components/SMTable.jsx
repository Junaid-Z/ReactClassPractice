import { useState } from "react";
import SMInput from "./SMInput";
function SMTable(props) {
	let { style, data, setSelectedRow, cols, limit } = props;
	let [searchTerm, setSearchTerm] = useState();
	let [searchCat, setSearchCat] = useState('*');
	function filterRow(row, cols, term = "", searchCat) {
		let accept = false;
		if (searchCat === '*') {
			cols.map((col) => {
				if (JSON.stringify(row[col.key]).toLowerCase().indexOf(term.toLowerCase()) !== -1) {
					accept = true;
				}
			})
		}
		else {
			if (JSON.stringify(row[searchCat]).toLowerCase().indexOf(term.toLowerCase()) !== -1) {
				accept = true;
			}
		}
		console.log(accept)
		return accept;
	}
	return (
		<>
			<div className="tableFilter">
				<SMInput type="text" placeholder="search" setValue={setSearchTerm} value={searchTerm} label='Search' />
				<select className="filterDropdown" name="Search BY" value={searchCat} onChange={(e) => { setSearchCat(() => { return e.target.value }) }}>
					<option value={'*'}></option>
					{
						cols.map((v, i) => {
							return (<option key={i} value={v.key}>{v.displayName}</option>);
						})
					}
				</select>
			</div>
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
							if ((rI < (limit ? limit : Infinity)) && filterRow(value, cols, searchTerm, searchCat)) {
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
		</>
	)
}
export default SMTable;