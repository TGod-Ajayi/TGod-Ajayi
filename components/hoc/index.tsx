import { styles } from '@/components/styles';
import { staggerContainer } from '@/utils/motion';
import { motion } from 'framer-motion';
import { ComponentType } from 'react';

const SectionWrapper = (Component: ComponentType, idName: string) =>
	function HOC() {
		return (
			<motion.section
				variants={staggerContainer() as any}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.25 }}
				className={`${styles.padding} max-w-7.1xl mx-auto relative z-0`}
			>
				<span className="hash-span" id={idName}>
					&nbsp;
				</span>

				<Component />
			</motion.section>
		);
	};

export default SectionWrapper;
