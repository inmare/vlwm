import '@scss/App.scss';
import {Link} from 'react-router-dom';

export default function App() {
	return (
		<>
			<h1>분류 보기</h1>
			<ul>
				<li>
					<Link to='/title'>한글 자모</Link>
				</li>
			</ul>
		</>
	);
}
