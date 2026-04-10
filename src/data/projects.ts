export type Project = {
	slug: string;
	title: string;
	summary: string;
	description: string;
	repoUrl: string;
	year: string;
	tags: string[];
	featured: boolean;
};

export const projects: Project[] = [
	{
		slug: 'public',
		title: 'public',
		summary: 'Portfolio-facing public files and experiments published as a lightweight shared repository.',
		description:
			'A general-purpose public repository used to publish and organize outward-facing work. It serves as a useful anchor for portfolio materials and small technical artifacts.',
		repoUrl: 'https://github.com/oboylenyc/public',
		year: '2026',
		tags: ['Python', 'Portfolio', 'Open source'],
		featured: true,
	},
];
