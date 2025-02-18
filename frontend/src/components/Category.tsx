import {titleList} from '@ts/titleType';

export default function Category() {
	return (<>
		<ul>
			{titleList.map((title, index) => (
				<li key={index}>
					<a href={'/title' + `/${title.link}`}>{title.title}</a>
				</li>
			))}
		</ul>
	</>);
}
