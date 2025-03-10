import {Outlet} from 'react-router-dom';
import Header from './Header';
import '@scss/main.scss';
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
			<div style={{height: `${height - 100}px`}}>
				<Header/>
				<main >
					<div className='wrapper'>
						<Outlet/>
					</div>
				</main>
			</div>
		</>
	);
}
