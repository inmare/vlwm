import {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import '@scss/CategoryTitle.scss';

export default function CategoryTitle() {
	const [data, setData] = useState<any[]>([]);
	const {titleId: charType} = useParams();

	useEffect(() => {
		getPages();
	}, [charType]);

	async function getPages() {
		const response = await fetch(`/api/title/${charType}`);
		const pages = await response.json();
		setData(pages.pages);
	}

	return (
		<>
			<h1>분류:제목/{charType}</h1>
			<hr />
			<ul className='song-list'>
				{
					data.map((page: any, index: number) => (
						<li key={index}>
							<Link to={`/song/${page.pageTitle}`}>{page.pageTitle}</Link>
						</li>
					))
				}
			</ul>
		</>
	);
}
