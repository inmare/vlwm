type PageData = {
	pageUrl: string;
	pageTitle: string;
	originalPageTitle?: string;
	originalTitle: string;
};

const PageDataName = new Map<keyof PageData, string>();
PageDataName.set('pageUrl', '원본 링크');
PageDataName.set('pageTitle', '제목');
PageDataName.set('originalPageTitle', '제목(중복 제외)');
PageDataName.set('originalTitle', '원 제목');

type SongData = {
	originalUrl: string;
	composer?: string;
	lyricist: string;
	singer: string;
	originalSong: string;
	arranger: string;
	chorus: string;
	vocaloidEditor: string;
	illustrator: string;
	videoProducer: string;
	engineering: string;
	mixing: string;
	mastering: string;
	pianist: string;
	guitarist: string;
	bassist: string;
	drummer: string;
	trumpeter: string;
	trombonist: string;
	altoSaxophonist: string;
	playerEtc: string;
};

const SongDataName = new Map<keyof SongData, string>();
SongDataName.set('originalUrl', '출처');
SongDataName.set('composer', '작곡');
SongDataName.set('originalSong', '원곡');
SongDataName.set('lyricist', '작사');
SongDataName.set('singer', '노래');
SongDataName.set('chorus', '코러스');
SongDataName.set('arranger', '편곡');
SongDataName.set('vocaloidEditor', '조교');
SongDataName.set('illustrator', '일러스트');
SongDataName.set('videoProducer', '영상');
SongDataName.set('mixing', '믹싱');
SongDataName.set('mastering', '마스터링');
SongDataName.set('engineering', '엔지니어링');
SongDataName.set('pianist', '피아노');
SongDataName.set('guitarist', '기타');
SongDataName.set('bassist', '베이스');
SongDataName.set('drummer', '드럼');
SongDataName.set('trumpeter', '트럼펫');
SongDataName.set('trombonist', '트럼본');
SongDataName.set('altoSaxophonist', '알토 색소폰');
SongDataName.set('playerEtc', '그 외');

type LyricData = {
	lyrics: string[];
	version?: string;
};

const LyricDataName = new Map<keyof LyricData, string>();
LyricDataName.set('lyrics', '가사');
LyricDataName.set('version', '버전');

type DbResult = {
	page: PageData;
	songs: SongData[];
	lyrics: LyricData[];
};

export {
	type PageData, PageDataName, type SongData, SongDataName, type LyricData, LyricDataName, type DbResult,
};
