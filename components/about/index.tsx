import { FC } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import SectionWrapper from '../hoc';
import { fadeIn } from '@/utils/motion';
import services from './services.data';
import ServiceCard from './service-card';
const About: FC = () => {
	return (
		<>
			<motion.div>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>Overview.</h2>
			</motion.div>
			<motion.p variants={fadeIn('', '', 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
				I am a skilled software engineer with experience in TypeScript and JavaScript, and expertise in frameworks like React,Nodej.js and Three.js. I'm a quick learner and collaborate closely
				with clients to create efficient,scalable and responsive applications user-friendly solutions that solve real-world problems.Let&apos;s work together and bring your ideas to life
			</motion.p>
			<div className="mt-20 flex flex-wrap gap-10">
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(About, 'about');
