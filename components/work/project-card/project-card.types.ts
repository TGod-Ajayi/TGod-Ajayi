export interface IProjectCardProps {
	name: string;
	description: string;
	isLive: boolean;
	isOpenSource: boolean;
	liveLink: string;
	tags: {
		name: string;
		color: string;
	}[];
	image: string;
	source_code_link: string;
	index: number;
}
