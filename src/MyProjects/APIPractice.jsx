import axios from "axios";
import { useEffect, useState } from "react";
import SMTable from "./Components/SMTable";
import Loading from "./Components/Loading";
export default function APIPractice() {
	let [data, setData] = useState()
	useEffect(() => {
		axios.get("https://jsonplaceholder.typicode.com/photos")
			.then((response) => { setData(response.data) })
			.catch((e) => { console.log(e) })
	}
	)
	return (
		<div style={{ overflow: 'auto' }}>
			{
				data ? <>
					<SMTable
						style={{ width: '100%' }}
						data={data} cols={[{ displayName: "ID", key: 'id' }, { displayName: "Title", key: 'title' }]}
						limit={5}
					/>
					{
						data.map((v, i) => {
							if (i < 5) {
								return (
									<div className="post" key={v.id}>
										<h1>Pic {v.id}</h1>
										<div>{v.title}</div>
										<div>
											<img src={v.url} alt="" />
										</div>
									</div>
								)
							}
						})
					}
				</>
					: <Loading />
			}
		</div>
	);
}