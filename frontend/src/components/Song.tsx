import {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import InfoTable from './InfoTable';
import Lyrics from './Lyrics';

export default function CategoryTitle() {
	const [data, setData] = useState([]);
	const [player, setPlayer] = useState('');
	const {songTitle} = useParams();

	useEffect(() => {
		getSong();
	}, [songTitle]);

	async function getSong() {
		const response = await fetch(`/api/song/${songTitle}`);
		const song = await response.json();
		setData(song);
		// console.log(song.songs);
		const originalUrl = song.songs[0].originalUrl;
		const url = new URL(originalUrl);
		let id;
		for (const value of url.searchParams.values()) {
			id = value;
		}

		const query = `byPv?pvService=Youtube&pvId=${id}&fields=PVs`;
		const vocadbResponse = await fetch('/vocadb/' + query);
		const vocadbResult = await vocadbResponse.json();

		for (const pv of vocadbResult.pvs) {
			if (pv.service == 'Youtube' && pv.pvType == 'Original') {
				const pvId = pv.pvId;
				setPlayer(`https://www.youtube.com/embed/${pvId}?feature=oembed`);
				break;
			}
		}
	}

	return (
		<>
			<h1>{songTitle}</h1>
			<iframe src={player} allowFullScreen={true} frameborder='0'></iframe>
			<InfoTable songs={data.songs}/>
			<Lyrics lyrics={data.lyrics}/>
		</>
	);
}
