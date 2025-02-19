import {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import {type DbResult} from '@ts/dbType';
import InfoTable from './InfoTable';
import Lyrics from './Lyrics';

export default function CategoryTitle() {
	const [data, setData] = useState<DbResult | undefined>();
	const [player, setPlayer] = useState('');
	const {songTitle} = useParams();

	useEffect(() => {
		getSong();
	}, [songTitle]);

	async function getSong() {
		const response = await fetch(`/api/song/${songTitle}`);
		const song = await response.json();
		setData(song);
		const originalUrl = song.songs[0].originalUrl;
		const url = new URL(originalUrl);
		let link;
		if (url.hostname.includes('youtube')) {
			const id = url.searchParams.get('v');
			link = `https://www.youtube.com/embed/${id}`;
		} else if (url.hostname.includes('nicovideo')) {
			link = `https://embed.nicovideo.jp${url.pathname}`;
		}

		setPlayer(link);
		// TODO: 현재 니코동 플레이어는 재생이 안되는 에러가 있는데 이게 단순히 test 서버라서 그런지 체크 필요
	}

	return (
		<>
			<h1>{data?.page.pageTitle}</h1>
			<p>{data?.page.originalTitle}</p>
			<iframe src={player} allow='autoplay; encrypted-media;' allowFullScreen='allowfullscreen' frameBorder='0' scrolling='no'></iframe>
			<p>
				<a href={'http://vocaro.wikidot.com/' + data?.page.pageUrl} target='_blank'>원본 링크</a>
			</p>
			<InfoTable songs={data?.songs}/>
			<Lyrics lyrics={data?.lyrics}/>
		</>
	);
}
