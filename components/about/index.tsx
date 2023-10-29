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
			<motion.p variants={fadeIn('', '', 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-6xl leading-[30px]">
				I'm an experienced software engineer with a first-class honors degree in Computer Science and almost a decade in the industry. My expertise spans a wide range of technologies,
				including React, React-Native, NextJs, Angular, NestJs, Nodejs, GraphQL, Redux, and Redis, with a core focus on JavaScript and TypeScript. I excel in frontend development, utilizing
				tools like chakra-ui and material-ui to create visually compelling and responsive applications. In the backend, I have experience with C# & .Net, Nodejs & Express, and Nestjs,
				including REST and GraphQL. I'm proficient in cloud computing, working with AWS and Azure, and I'm skilled in database management, working with both relational (Postgres & MySQL) and
				non-relational (MongoDB and Firebase) databases. My work is characterized by clean, maintainable code, thorough testing, and a dedication to staying up-to-date with the latest
				technologies. As a collaborative leader and quick learner, I'm committed to solving real-world problems. Let's work together to bring your ideas to life.
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
