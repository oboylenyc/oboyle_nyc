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
	{
		slug: 'aoc2024',
		title: 'AoC2024',
		summary: 'Advent of Code solutions focused on problem solving, iteration speed, and readable implementation choices.',
		description:
			'A project built around daily algorithmic exercises. It highlights disciplined implementation, debugging, and the ability to translate ambiguous problem statements into working code quickly.',
		repoUrl: 'https://github.com/oboylenyc/AoC2024',
		year: '2024',
		tags: ['Algorithms', 'Problem solving', 'Code practice'],
		featured: true,
	},
	{
		slug: 'polkadot-hackathon',
		title: 'PolkaDotHackathon',
		summary: 'Hackathon work produced for the Encode Polkadot Hackathon, with an emphasis on shipping under time constraints.',
		description:
			'A time-boxed build that reflects rapid prototyping, technical exploration, and delivery under hackathon conditions. Projects like this are useful signals for adaptability and execution speed.',
		repoUrl: 'https://github.com/oboylenyc/PolkaDotHackathon',
		year: '2021',
		tags: ['Hackathon', 'Web3', 'Rapid prototyping'],
		featured: true,
	},
];
