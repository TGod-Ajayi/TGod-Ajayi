'use client';

import { OrbitControls, Preload } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { FC, Suspense, useEffect, useState } from 'react';
import Computers from '../computers';
import CanvasLoader from '../loader';

const ComputersCanvas: FC = () => {
	const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
		const mediaQuery = window.matchMedia('(max-width: 500px)');
		setIsMobile(mediaQuery.matches);
		const handleMediaQueryChange = (event: MediaQueryListEvent) => {
			setIsMobile(event.matches);
		};
		mediaQuery.addEventListener('change', handleMediaQueryChange);
		return () => mediaQuery.removeEventListener('change', handleMediaQueryChange);
	}, []);
	return (
		<Canvas frameloop="demand" shadows camera={{ position: [20, 3, 5], fov: 25 }} gl={{ preserveDrawingBuffer: true }}>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
				<Computers isMobile={isMobile} />
			</Suspense>
			<Preload all />
		</Canvas>
	);
};

export default ComputersCanvas;
