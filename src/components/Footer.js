import React from 'react';

const Footer = () => (
		<footer className="w-full bg-gradient-to-r from-white to-red-500 py-8 px-4 flex flex-col md:flex-row items-center justify-between gap-8">
		<div className="flex-1 flex flex-col items-center md:items-start">
			<h2 className="text-2xl font-bold text-red-600 mb-2">SSS (Bay Shop) - 74, Sec - 60</h2>
			<h3 className="text-xl font-semibold text-red-600 mb-2">Mohali - 160062</h3>
			<p className="text-lg font-bold text-red-700 mb-2">Phone No +91-8699969619</p>
			<p className="text-xs text-red-400 mt-2">©2024 Urja Multispeciality Dental Clinic. All Rights Reserved.</p>
		</div>
		<div className="flex-1 flex items-center justify-center">
			<a href="https://www.google.com/maps/place/Urja+Dental+Clinic+-+Dental+Implants+%26+Cosmetic+Dentistry/@30.7092467,76.7196521,17z/data=!3m1!4b1!4m6!3m5!1s0x390fee8620233e77:0x4c75775a5312d801!8m2!3d30.7092421!4d76.722227!16s%2Fg%2F11c49cf_pn?hl=en&entry=ttu&g_ep=EgoyMDI1MDgxNy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
				<iframe
					title="Urja Dental Clinic Location"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.123456789!2d76.707!3d30.704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fedc1e1e1e1e1%3A0x123456789abcdef!2sUrja%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1692345678901!5m2!1sen!2sin"
					width="220"
					height="180"
					style={{ border: 0, borderRadius: '12px' }}
					allowFullScreen=""
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				></iframe>
			</a>
		</div>
		<div className="flex-1 flex flex-col items-center md:items-end gap-4">
			<div className="flex gap-4 mb-4">
				<a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-800 hover:text-pink-500"><i className="fab fa-instagram" /></a>
				<a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-800 hover:text-blue-600"><i className="fab fa-facebook" /></a>
				<a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-800 hover:text-red-600"><i className="fab fa-youtube" /></a>
				<a href="https://wa.me/918699969619" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-800 hover:text-green-500"><i className="fab fa-whatsapp" /></a>
			</div>
			<a href="#book-online" className="px-8 py-3 rounded-full bg-red-600 text-white font-bold shadow-lg hover:bg-white hover:text-red-600 border-2 border-red-600 transition text-center">Book an appointment</a>
		</div>
	</footer>
);

export default Footer;
