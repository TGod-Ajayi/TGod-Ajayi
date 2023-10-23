import { FC } from 'react';
import technologies from './tech.data';
import { BallCanvas } from '../canvas';
import SectionWrapper from '../hoc';
const Tech: FC = () => {
	return (
		<div className="flex flex-row flex-wrap justify-center gap-10">
			{technologies.map((tech) => (
				<div key={tech.name} className="w-28 h-28">
					<BallCanvas icon={tech.icon} />
				</div>
			))}
		</div>
	);
};
export default SectionWrapper(Tech, 'tech');
