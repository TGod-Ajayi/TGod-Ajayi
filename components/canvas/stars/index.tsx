import { useRef } from 'react';
import * as random from 'maath/random';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

const Stars = () => {
	const ref = useRef<any>(null);
	const sphere: any = random.inSphere(new Float32Array(5000), { radius: 1.2 });
	useFrame((_, delta) => {
		ref.current.rotation.x += delta / 10;
		ref.current.rotation.y += delta / 15;
	});
	return (
		<group rotation={[0, 0, Math.PI / 4]}>
			<Points ref={ref} positions={sphere} stride={3} frustumCulled>
				<PointMaterial transparent color="#f272c8" size={0.002} sizeAttenuation={true} depthWrite={false} />
			</Points>
		</group>
	);
};

export default Stars;
