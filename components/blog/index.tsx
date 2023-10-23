import { FC } from 'react';
import SectionWrapper from '../hoc';
import { styles } from '../styles';
import { motion } from 'framer-motion';
import BlogCard from './blog-card';
import { textVariant } from '@/utils/motion';
import blogData from './blog.data';
const Blog: FC = () => {
	return (
		<div className="mt-12 bg-black-100 rounded=[20px]">
			<div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
				<motion.div variants={textVariant()}>
					<p className={styles.sectionSubText}>What I Write About</p>
					<h2 className={styles.sectionHeadText}>My Blog</h2>
				</motion.div>
			</div>
			<div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
				{blogData.map((testimonial, index) => (
					<BlogCard key={testimonial.name} index={index} {...testimonial} />
				))}
			</div>
		</div>
	);
};

export default SectionWrapper(Blog, 'blog');
