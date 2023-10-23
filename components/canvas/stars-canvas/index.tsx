import { Canvas } from '@react-three/fiber';
import { FC, Suspense } from 'react';
import Stars from '../stars';

const StarsCanvas: FC = () => {
	return (
		<div className="w-full h-auto absolute inset-0 z-[-1]">
			<Canvas camera={{ position: [0, 0, 1] }}>
				<Suspense fallback={null}>
					<Stars />
				</Suspense>
			</Canvas>
		</div>
	);
};

export default StarsCanvas;
