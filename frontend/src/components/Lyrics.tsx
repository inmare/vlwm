import '@scss/Lyrics.scss';

export default function Lyrics({lyrics}: {lyrics: any[]}) {
	if (!lyrics) {
		return <p>Loading</p>;
	}

	return (
		<>
			<table className='lyrics-table'>
				<tbody>
					{lyrics[0].map((lyric: any, index: number) => (<tr key={index}>
						{index % 3 == 0 ? <th>{lyric}</th> : <td>{lyric}</td>}
					</tr>),
					)}
				</tbody>
			</table>
		</>
	);
}
