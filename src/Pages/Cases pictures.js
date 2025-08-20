import React from 'react';

function CasesPictures() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-white to-red-100 py-12">
			<div className="max-w-4xl mx-auto p-8 bg-white/80 rounded-3xl shadow-2xl border-2 border-red-100">
				<h1 className="text-4xl font-extrabold text-red-700 mb-6 text-center">Cases Pictures</h1>
				<p className="text-lg text-red-500 mb-8 text-center">See before and after pictures of our cases.</p>
				{/* Add case images here */}
			</div>
		</div>
	);
}

export default CasesPictures;
