import {Link} from 'react-router-dom';

export default function Header() {
	return (
		<header>
			<h1>
				<Link to='/'>보컬로이드 가사 위키 미러</Link>
			</h1>
			<p>
				<Link to='/title'>한글 자모</Link>
			</p>
		</header>
	);
}
