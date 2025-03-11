import {useEffect, useMemo, useState} from 'react';
import '@scss/Category.scss';

export default function Category() {
	const [category, setCategory] = useState<string[]>([]);
	const [isNarrow, setNarrow] = useState(false);

	useEffect(() => {
		const updateIsNarrow = () => {
			const narrow = (window.innerWidth > 700);
			setNarrow(narrow);
		};

		window.addEventListener('resize', updateIsNarrow);
		updateIsNarrow();

		getTitle();

		return () => {
			window.removeEventListener('resize', updateIsNarrow);
		};
	}, []);

	async function getTitle() {
		const response = await fetch('api/title');
		const title = await response.json();
		setCategory(title);
	}

	const arrangeCategory = useMemo(() => {
		const sliceAmount = isNarrow ? 4 : 2;
		const cardRow = [];

		for (let i = 0; i < category.length; i += sliceAmount) {
			const slicedCategory = category.slice(i, i + sliceAmount);
			const cards = (
				<div key={i} className='card-row' style={{zIndex: Math.trunc(i / sliceAmount)}}>
					{
						slicedCategory.map((value, index) => (
							<div key={i + index} className='card-wrapper'>
								<a href={`title/${value}`}>
									<div className='card'>
										{value}
									</div>
								</a>
							</div>
						))
					}
				</div>
			);

			cardRow.push(cards);
		}

		return cardRow;
	}, [category, isNarrow]);

	return (
		<>
			<h1>분류:제목</h1>
			<hr />
			<div className='category-wrapper'>
				{arrangeCategory}
			</div>
			<div className='row-end'></div>
		</>
	);
}
