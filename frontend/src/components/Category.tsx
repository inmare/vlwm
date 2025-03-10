import {useEffect, useState} from 'react';
import '@scss/Category.scss';

export default function Category() {
	const [category, setCategory] = useState<string[]>([]);

	useEffect(() => {
		getTitle();
	}, []);

	async function getTitle() {
		const response = await fetch('api/title');
		const title = await response.json();
		setCategory(title);
	}

	return (
		<>
			<h1>분류:제목</h1>
			<div className='category-wrapper'>
				{
					category.map((value: string, index) => (
						<div key={index} className='card-wrapper'>
							<div className='category-card'><a href={`title/${value}`}>{value}</a></div>
						</div>
					))
				}
			</div>

		</>
	);
}
