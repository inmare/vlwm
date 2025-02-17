import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

export default function Category() {
	const [data, setData] = useState<any[]>([]);
	const {titleId} = useParams();

	useEffect(() => {
		getPages();
	}, [titleId]);

	async function getPages() {
		const response = await fetch('/api/title/' + titleId);
		const pages = await response.json();
		setData(pages.pages);
	}

	return (
		<>
			<ul>
				{
					data.map((page: any, index: number) => (
						<li key={index}>{page.pageTitle}</li>
					))
				}
			</ul>
		</>
	);
}
