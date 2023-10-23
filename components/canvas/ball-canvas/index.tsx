import { FC, Suspense } from 'react';
import { IBallCanvasProps } from './ball-canvas.types';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';
import Ball from '../ball';
import CanvasLoader from '../loader';
const BallCanvas: FC<IBallCanvasProps> = ({ icon }) => {
	return (
		<Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls enableZoom={false} />
				<Ball imageUri={icon} />
			</Suspense>
			<Preload all />
		</Canvas>
	);
};

export default BallCanvas;
