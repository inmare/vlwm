import {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import InfoTable from './InfoTable';
import Lyrics from './Lyrics';

export default function CategoryTitle() {
	const [data, setData] = useState([]);
	const {songTitle} = useParams();

	useEffect(() => {
		getSong();
	}, [songTitle]);

	async function getSong() {
		const response = await fetch(`/api/song/${songTitle}`);
		const song = await response.json();
		// console.log(song.songs);
		setData(song);
	}

	return (
		<>
			<h1>{songTitle}</h1>
			<InfoTable songs={data.songs}/>
			<Lyrics lyrics={data.lyrics}/>
		</>
	);
}
