import {type SongData, SongDataName} from '@ts/dbType';

export default function InfoTable({songs}: {songs: SongData[] | undefined}) {
	if (!songs) {
		return <p>Loading</p>;
	}

	return (
		<>

			{songs.map((song: SongData, songIndex: number) => (
				<table key={songIndex}>
					<tbody>
						{Object.entries(song).map(([key, value], index: number) => {
							if (value !== null) {
								return (
									<tr key={index}>
										<th>{SongDataName.get(key as keyof SongData)}</th>
										<td>{value}</td>
									</tr>
								);
							}
						})}
					</tbody>
				</table>
			))}
		</>
	);
}
