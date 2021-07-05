import { useLayoutEffect, useState } from 'react';

function useWindowSize() {
	const [ size, setSize ] = useState([ 0, 0 ]);
	useLayoutEffect(() => {
		function updateSize() {
			setSize([ window.innerWidth, window.innerHeight ]);
		}
		window.addEventListener('resize', updateSize);
		updateSize();
		return () => window.removeEventListener('resize', updateSize);
	}, []);
	return size;
}

function Resize() {
	const [ width, height ] = useWindowSize();
	return (
		<span>
			Window size: {width} x {height}
		</span>
	);
}

export default Resize;
