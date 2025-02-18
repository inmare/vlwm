type titleType = {
	link: string;
	title: string;
};

const hangulJaeum = [
	'ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ',
];

const jaeumList = hangulJaeum.map((jaeum, index) => ({link: `h${index + 1}`, title: jaeum}));

export const titleList: titleType[] = [
	...jaeumList,
	{
		link: 'latin',
		title: '라틴 문자',
	},
	{
		link: 'special',
		title: '특수 문자',
	},
] as const;
