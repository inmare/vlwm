export default function InfoTable({songs}: {songs: any}) {
	if (!songs) {
		return <p>Loading</p>;
	}

	return <>
		<table>
			<tbody>
				{Object.entries(songs[0]).map(([key, value]: any, index: number) => {
					if (key !== 'id' && key !== 'page_id' && value !== null) {
						return (
							<tr key={index}>
								<th>{key}</th>
								<td>{value}</td>
							</tr>
						);
					}
				})}
			</tbody>
		</table>
	</>;
}
