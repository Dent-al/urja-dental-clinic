import React from 'react';

const teamMembers = [
	{
		name: 'Dr. Shikha',
		role: 'Chief Dentist & Implantologist',
		desc: 'Expert in advanced dental implants and smile design.',
		img: 'https://randomuser.me/api/portraits/women/44.jpg',
	},
	{
		name: 'Dr. Rahul',
		role: 'Orthodontist',
		desc: 'Specialist in braces, Invisalign, and pediatric dentistry.',
		img: 'https://randomuser.me/api/portraits/men/46.jpg',
	},
	{
		name: 'Dr. Priya',
		role: 'Cosmetic Dentist',
		desc: 'Porcelain veneers and teeth whitening expert.',
		img: 'https://randomuser.me/api/portraits/women/47.jpg',
	},
	{
		name: 'Dr. Aman',
		role: 'Endodontist',
		desc: 'Painless root canal and restorative dentistry specialist.',
		img: 'https://randomuser.me/api/portraits/men/48.jpg',
	},
];

const OurTeam = () => (
	<div className="min-h-screen bg-gradient-to-br from-cyan-100 via-blue-50 to-purple-100 py-12">
		<h2 className="text-4xl font-bold text-red-700 text-center mb-10">Introducing Our Team</h2>
		<div className="flex flex-wrap justify-center gap-8 border-2 border-red-100">
			{teamMembers.map((member) => (
				<div
					key={member.name}
					className="group w-72 bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border-2 hover:border-cyan-400 relative"
					style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}
				>
					<img src={member.img} alt={member.name} className="w-24 h-24 rounded-full mb-4 border-4 border-blue-200 group-hover:border-cyan-400 transition-all duration-300" />
					<h3 className="text-xl font-bold text-blue-800 mb-1">{member.name}</h3>
					<p className="text-md font-semibold text-blue-600 mb-2">{member.role}</p>
					<p className="text-gray-700 text-center mb-2">{member.desc}</p>
					<div className="absolute inset-0 rounded-2xl pointer-events-none group-hover:shadow-[0_0_32px_8px_rgba(0,212,255,0.5)] transition-all duration-300"></div>
				</div>
			))}
		</div>
	</div>
);

export default OurTeam;
