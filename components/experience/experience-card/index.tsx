import { FC } from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import { IExperienceCardProps } from './experience-card.types';
const ExperienceCard: FC<IExperienceCardProps> = ({ title, points, companyName, icon, date, iconBg }) => {
	return (
		<VerticalTimelineElement
			contentStyle={{ background: '#1d1836', color: '#fff' }}
			contentArrowStyle={{ borderRight: '7px solid #232631' }}
			date={date}
			iconStyle={{ background: iconBg }}
			icon={
				<div className="flex justify-center items-center w-full h-full">
					<img src={icon} alt={companyName} className="w-[60%] h-[60%] object-contain" />
				</div>
			}
		>
			<div>
				<h3 className="text-white text-[24px] font-bold">{title}</h3>
				<p className="text-secondary text-16px font-semibold" style={{ margin: 0 }}>
					{companyName}
				</p>
			</div>
			<ul className="mt-5 list-disc ml-5 space-y-2">
				{points.map((point) => (
					<li key={point} className="text-white-100 text-[14px] pl-1 tracking-wider">
						{point}
					</li>
				))}
			</ul>
		</VerticalTimelineElement>
	);
};

export default ExperienceCard;
