import {Outlet, Link} from 'react-router-dom';
import '@scss/Layout.scss';
import {useState, useEffect} from 'react';

export default function Layout() {
	const [height, setHeight] = useState(0);

	useEffect(() => {
		const updateHeight = () => {
			setHeight(globalThis.innerHeight);
		};

		window.addEventListener('resize', updateHeight);

		updateHeight();
	}, []);

	return (
		<>
			<div style={{height: `${height}px`}} className='wrapper'>
				<header>
					<div className='logo'>
						<Link to='/'>
							<span className='main-title'>vlwm</span>
						</Link>
						<span className='sub-title'>보카로 가사 위키 미러</span>
					</div>
				</header>
				<main >
					<div className='main-wrapper'>
						<Outlet/>
					</div>
				</main>
			</div>
		</>
	);
}
