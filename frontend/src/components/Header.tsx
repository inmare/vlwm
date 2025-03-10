import '@scss/Header.scss';
import {Link} from 'react-router-dom';

export default function Header() {
	return (
		<header>
			<div className='logo'>
				<Link to='/'>
					<span className='main-title'>vlwm</span>
				</Link>
				<span className='sub-title'>보카로 가사 위키 미러</span>
			</div>
		</header>
	);
}
