import React, { useState } from 'react';
import { FaUser, FaPhone, FaCalendarAlt, FaClock } from 'react-icons/fa';

const clinicOpen = 10; // 10am
const clinicClose = 20; // 8pm

function getTimeSlots() {
	const slots = [];
	for (let hour = clinicOpen; hour < clinicClose; hour++) {
		slots.push(`${hour}:00`);
		slots.push(`${hour}:30`);
	}
	return slots;
}

const BookOnline = () => {
	const [date, setDate] = useState('');
	const [time, setTime] = useState('');
		const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [success, setSuccess] = useState(false);
	const [step, setStep] = useState(1);

	const handleSubmit = (e) => {
		e.preventDefault();
		setSuccess(true);
		setStep(2);
		setTimeout(() => {
			setSuccess(false);
			setStep(1);
			setDate(''); setTime(''); setName(''); setPhone('');
		}, 3000);
	};

	return (
			<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-red-100 py-12 animate-fadeIn">
			<div className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-center gap-8">
				{/* Illustration */}
				<div className="hidden md:flex flex-col items-center justify-center flex-1">
					<img src="https://cdn.pixabay.com/photo/2017/01/31/13/14/tooth-2029367_1280.png" alt="Dental Illustration" className="w-80 h-80 object-contain drop-shadow-xl" />
					<p className="mt-4 text-lg text-blue-700 font-semibold text-center">Professional Care. Modern Technology. Trusted Team.</p>
				</div>
				{/* Booking Card */}
					<form onSubmit={handleSubmit} className="flex-1 w-full bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-10 flex flex-col gap-8 animate-bounceIn border-2 border-red-100">
					<div className="flex items-center justify-center gap-4 mb-4">
							<span className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 1 ? 'bg-red-500 text-white' : 'bg-red-100 text-red-500'} font-bold`}>1</span>
							<span className="font-bold text-red-700">Fill Details</span>
							<span className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 2 ? 'bg-green-500 text-white' : 'bg-red-100 text-red-500'} font-bold`}>2</span>
							<span className="font-bold text-red-700">Confirmation</span>
					</div>
					{step === 1 && <>
						<h2 className="text-4xl font-extrabold text-red-700 text-center mb-2">Book Your Appointment</h2>
						<div className="flex flex-col gap-4">
							<div className="relative">
								<FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400 text-lg" />
								<input type="text" required value={name} onChange={e => setName(e.target.value)} className="pl-10 pr-4 py-3 rounded-xl border border-red-200 focus:outline-none focus:ring-2 focus:ring-red-400 transition w-full" placeholder="Your Name" />
							</div>
							<div className="relative">
								<FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400 text-lg" />
								<input type="tel" required value={phone} onChange={e => setPhone(e.target.value)} className="pl-10 pr-4 py-3 rounded-xl border border-red-200 focus:outline-none focus:ring-2 focus:ring-red-400 transition w-full" placeholder="Your Phone Number" />
							</div>
							<div className="relative">
								<FaCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400 text-lg" />
								<input type="date" required value={date} onChange={e => setDate(e.target.value)} className="pl-10 pr-4 py-3 rounded-xl border border-red-200 focus:outline-none focus:ring-2 focus:ring-red-400 transition w-full" min={new Date().toISOString().split('T')[0]} />
							</div>
							<div className="relative">
								<FaClock className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400 text-lg" />
								<select required value={time} onChange={e => setTime(e.target.value)} className="pl-10 pr-4 py-3 rounded-xl border border-red-200 focus:outline-none focus:ring-2 focus:ring-red-400 transition w-full">
									<option value="">Select Time</option>
									{getTimeSlots().map(slot => (
										<option key={slot} value={slot}>{slot}</option>
									))}
								</select>
							</div>
						</div>
						<button type="submit" className="w-full py-3 rounded-full bg-gradient-to-r from-red-500 to-white text-white font-bold shadow-lg hover:scale-105 hover:bg-white hover:text-red-600 border-2 border-red-500 transition-transform text-lg mt-4">Book Appointment</button>
					</>}
					{step === 2 && (
						<div className="flex flex-col items-center justify-center gap-4 py-12">
							<svg width="80" height="80" fill="none" viewBox="0 0 24 24" stroke="green" strokeWidth="2"><circle cx="12" cy="12" r="10" stroke="green" strokeWidth="2" fill="#e6ffe6" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 12l2 2 4-4" /></svg>
							<h3 className="text-2xl font-bold text-green-600">Appointment Booked!</h3>
							<p className="text-red-700 text-center">Thank you for booking. Our team will contact you soon.</p>
						</div>
					)}
				</form>
			</div>
			{/* Animations */}
			<style>{`
				@keyframes fadeIn { 0% { opacity: 0; } 100% { opacity: 1; } }
				.animate-fadeIn { animation: fadeIn 1s ease; }
				@keyframes bounceIn { 0% { transform: scale(0.8); opacity: 0; } 60% { transform: scale(1.05); opacity: 1; } 100% { transform: scale(1); opacity: 1; } }
				.animate-bounceIn { animation: bounceIn 1s cubic-bezier(0.23, 1, 0.32, 1) both; }
			`}</style>
		</div>
	);
};

export default BookOnline;
