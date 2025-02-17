import {useState, useEffect} from 'react';
import '@scss/App.scss';

const url = 'https://raw.githubusercontent.com/inmare/vocaloid-wiki-data/refs/heads/main/h1/%EA%B0%80.json';

function App() {
	const [data, setData] = useState<any>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(url).then(async response => response.json()).then(data => {
			setData(data);
			setLoading(false);
		});
	}, []);

	return (
		<>
			<h1>{loading ? 'Loading...' : data.page}</h1>
			<table>
				<tr>
					<th>제목</th>
					<td>{loading ? '' : data.title}</td>
				</tr>
				<tr>
					<th>출처</th>
					<td>{loading ? '' : <a href={data.songLink}>{data.songLink}</a>}</td>
				</tr>
				<tr>
					<th>작곡</th>
					<td>{loading ? '' : data.composer}</td>
				</tr>
				<tr>
					<th>작사</th>
					<td>{loading ? '' : data.lyricist}</td>
				</tr>
				<tr>
					<th>노래</th>
					<td>{loading ? '' : data.singer}</td>
				</tr>
			</table>
		</>
	);
}

export default App;
