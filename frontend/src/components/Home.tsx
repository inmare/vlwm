import {Link} from 'react-router-dom';

export default function Home() {
	return (
		<>
			<h1>분류 보기</h1>
			<ul>
				<li>
					<Link to='/title'>제목</Link>
				</li>
			</ul>
		</>
	);
}
