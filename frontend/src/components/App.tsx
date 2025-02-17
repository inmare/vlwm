import '@scss/App.scss';

function App() {
	const titleList = [
		{
			link: 'h1',
			title: 'ㄱ',
		},
		{
			link: 'h2',
			title: 'ㄴ',
		},
		{
			link: 'h3',
			title: 'ㄷ',
		},
		{
			link: 'h4',
			title: 'ㄹ',
		},
		{
			link: 'h5',
			title: 'ㅁ',
		},
		{
			link: 'h6',
			title: 'ㅂ',
		},
		{
			link: 'h7',
			title: 'ㅅ',
		},
		{
			link: 'h8',
			title: 'ㅇ',
		},
		{
			link: 'h9',
			title: 'ㅈ',
		},
		{
			link: 'h10',
			title: 'ㅊ',
		},
		{
			link: 'h11',
			title: 'ㅋ',
		},
		{
			link: 'h12',
			title: 'ㅌ',
		},
		{
			link: 'h13',
			title: 'ㅍ',
		},
		{
			link: 'h14',
			title: 'ㅎ',
		},
		{
			link: 'latin',
			title: '라틴 문자',
		},
		{
			link: 'special',
			title: '특수 문자',
		},
	];

	return (<>
		<ul>
			{titleList.map((title, index) => <li key={index}><a href={'/title/' + title.link}>{title.title}</a></li>)}
		</ul>
	</>);
}

export default App;
