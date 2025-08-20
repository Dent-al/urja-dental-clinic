import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ToothIcon } from "../assets/tooth icon.svg";
import highlight1 from '../assets/highlight1.png';
import highlight2 from '../assets/highlight2.png';
import highlight3 from '../assets/highlight3.png';
import highlight4 from '../assets/highlight4.png';
import highlight5 from '../assets/highlight5.png';
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";



    <div className="fixed top-1/3 left-0 flex flex-col space-y-3 p-2 z-50">
      <a
        href="https://instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-r-2xl shadow-lg 
                   transform transition-transform hover:scale-110 duration-300"
      >
        <FaInstagram size={24} />
      </a>
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-r-2xl shadow-lg 
                   transform transition-transform hover:scale-110 duration-300"
      >
        <FaWhatsapp size={24} />
      </a>
      <a
        href="https://youtube.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-r-2xl shadow-lg 
                   transform transition-transform hover:scale-110 duration-300"
      >
        <FaYoutube size={24} />
      </a>
    </div>
  
  

// ProblemSlider component
const problems = [
	{
		title: "Adding Bone to the Socket",
		bullets: ["Tooth loss.", "Loose tooth.", "Failed previous implants.", "Shrinking gums."]
	},
	{
		title: "Bad Breath",
		bullets: ["Unpleasant smell from mouth.", "Dry mouth.", "Sour taste.", "White or coated tongue."]
	},
	{
		title: "Burning Mouth",
		bullets: ["Burning sensation in mouth.", "Dryness.", "Taste changes."]
	},
	{
		title: "Complete Denture",
		bullets: ["Missing all teeth.", "Difficulty eating.", "Loose dentures."]
	},
	{
		title: "Biting Down Hard",
		bullets: ["Pain when biting.", "Cracked tooth.", "Jaw discomfort."]
	},
// ...existing code...
	{
		title: "Facial Twitch",
		bullets: ["Muscle spasms.", "Facial discomfort."]
	},
	{
		title: "Mouth Breathing in Kids",
		bullets: ["Breathing through mouth.", "Snoring.", "Dental issues."]
	},
	{
		title: "Front Tooth Gap",
		bullets: ["Gap between teeth.", "Smile correction."]
	},
	{
		title: "Gum Treatment",
		bullets: ["Bleeding gums.", "Swelling.", "Gum recession."]
	},
	{
		title: "Diabetic Mouth Changes",
		bullets: ["Dry mouth.", "Gum disease.", "Delayed healing."]
	},
	{
		title: "Lump on the Facial Nerve",
		bullets: ["Swelling.", "Numbness.", "Pain."]
	},
	{
		title: "Loud Sleeping",
		bullets: ["Snoring.", "Sleep apnea."]
	},
	{
		title: "Mouth Guard for Sports",
		bullets: ["Protect teeth.", "Custom fit."]
	},
	{
		title: "Missing Front Tooth",
		bullets: ["Gap in smile.", "Tooth replacement."]
	},
	{
		title: "Mouth Ulcer",
		bullets: ["Painful sore.", "Redness.", "Difficulty eating."]
	},
	{
		title: "Mouth Red Patch",
		bullets: ["Red area in mouth.", "Check for infection."]
	},
	{
		title: "Mouth Infection",
		bullets: ["Swelling.", "Pain.", "Pus formation."]
	},
	{
		title: "Mouth Cancer",
		bullets: ["Non-healing ulcer.", "Bleeding.", "Lump formation."]
	},
	{
		title: "Mouth Care After Cancer",
		bullets: ["Oral hygiene.", "Regular checkups."]
	},
	{
		title: "One Sided Facial Weakness",
		bullets: ["Drooping.", "Difficulty smiling."]
	},
	{
		title: "Partial Tooth Cap",
		bullets: ["Broken tooth.", "Cap placement."]
	},
	{
		title: "Producing Too Much Saliva",
		bullets: ["Drooling.", "Difficulty swallowing."]
	},
	{
		title: "Pain in the Jaw Joint",
		bullets: ["Jaw pain.", "Clicking sound.", "Difficulty opening mouth."]
	},
	{
		title: "Root Canal Treatment",
		bullets: ["Tooth pain.", "Infection removal."]
	},
	{
		title: "Ringing Sound in Ears",
		bullets: ["Tinnitus.", "Jaw joint issues."]
	},
	{
		title: "Re-Root Canal Treatment",
		bullets: ["Failed root canal.", "Retreatment."]
	},
	{
		title: "Removable Teeth",
		bullets: ["Partial denture.", "Tooth replacement."]
	},
	{
		title: "Split Lip",
		bullets: ["Injury.", "Bleeding."]
	},
	{
		title: "Smoking Habit",
		bullets: ["Stained teeth.", "Gum disease."]
	},
	{
		title: "Stone in the Saliva Gland",
		bullets: ["Swelling.", "Pain."]
	},
	{
		title: "Smile Makeover",
		bullets: ["Cosmetic treatment.", "Whitening.", "Veneers."]
	},
	{
		title: "Severe Gum Infection",
		bullets: ["Swelling.", "Pus formation.", "Pain."]
	},
	{
		title: "Tight Tongue Skin",
		bullets: ["Difficulty speaking.", "Tongue tie."]
	},
	{
		title: "Teeth Present at Birth",
		bullets: ["Natal teeth.", "Care for infants."]
	},
	{
		title: "Tongue Pushing",
		bullets: ["Speech issues.", "Dental alignment."]
	},
	{
		title: "Trapped Back Tooth",
		bullets: ["Impacted tooth.", "Pain."]
	},
	{
		title: "Tooth Crown",
		bullets: ["Broken tooth.", "Crown placement."]
	},
	{
		title: "Tooth Wear",
		bullets: ["Worn teeth.", "Sensitivity."]
	},
	{
		title: "Tooth Rescue Treatment",
		bullets: ["Accidental loss.", "Immediate care."]
	},
	{
		title: "Tooth Removal",
		bullets: ["Extraction.", "Pain relief."]
	},
	{
		title: "Teeth Whitening",
		bullets: ["Stained teeth.", "Whitening options."]
	},
	{
		title: "Thin Shells for Teeth",
		bullets: ["Veneers.", "Smile design."]
	},
	{
		title: "Teeth Cleaning & Polishing",
		bullets: ["Plaque removal.", "Shiny teeth."]
	},
	{
		title: "Tooth Replacement",
		bullets: ["Missing teeth.", "Implants.", "Dentures."]
	},
	{
		title: "Tooth is Stuck",
		bullets: ["Impacted tooth.", "Pain.", "Difficulty eating."]
	},
	{
		title: "Thumb Sucking",
		bullets: ["Habit in kids.", "Dental changes."]
	},
	{
		title: "Teeth Protector for Night",
		bullets: ["Night guard.", "Teeth grinding."]
	}
];
// ...existing code...

// Placeholder image for problems
const problemPlaceholder = 'https://via.placeholder.com/80x60?text=Image';

function ProblemSlider() {
	const [current, setCurrent] = React.useState(0);
	const visible = 3;
	const total = problems.length;
	const next = () => setCurrent((c) => (c + visible < total ? c + 1 : c));
	const prev = () => setCurrent((c) => (c > 0 ? c - 1 : c));
	const goTo = (idx) => setCurrent(idx);
	return (
		<div className="w-full flex flex-col items-center">
			<div className="flex items-center justify-center gap-4 w-full">
				<button onClick={prev} className="bg-white border border-gray-300 text-blue-700 rounded-full p-3 shadow-lg hover:bg-blue-100 transition">
					&#8592;
				</button>
				<div className="flex gap-8">
					{problems.slice(current, current + visible).map((problem, idx) => (
						<div key={problem.title} className="bg-white rounded-2xl shadow-xl px-6 py-8 w-[278px] h-[360px] flex flex-col justify-between border border-gray-100 transition-transform duration-300 hover:scale-105" style={{ boxShadow: '0 4px 24px 0px rgba(0,0,255,0.08), 0 0 32px 0px rgba(255,0,0,0.10)' }}>
							<img src={problemPlaceholder} alt="Problem" className="mx-auto mb-2 w-20 h-16 object-contain" />
							<h3 className="text-lg font-bold text-blue-700 mb-2 text-center">{problem.title}</h3>
							<ul className="text-gray-700 text-left mb-6 list-disc list-inside">
								{problem.bullets.map((b, i) => <li key={i}>{b}</li>)}
							</ul>
							<button className="w-full py-3 rounded-full bg-red-500 text-white font-bold shadow-lg hover:bg-white hover:text-red-600 border-2 border-red-500 hover:scale-105 transition-transform text-lg mt-auto">
								&#8595; Know more 
							</button>
						</div>
					))}
				</div>
				<button onClick={next} className="bg-white border border-gray-300 text-blue-700 rounded-full p-3 shadow-lg hover:bg-blue-100 transition">
					&#8594;
				</button>
			</div>
			<div className="flex justify-center mt-8 gap-2">
				{Array.from({ length: total - visible + 1 }).map((_, idx) => (
					<button
						key={idx}
						onClick={() => goTo(idx)}
						className={`w-3 h-3 rounded-full ${current === idx ? 'bg-blue-500' : 'bg-gray-300'} transition`}
						aria-label={`Go to slide ${idx + 1}`}
					/>
				))}
			</div>
		</div>
	);
}



const floatingStyles = [
	{ top: 40, left: 60, animation: 'float1 6s ease-in-out infinite' },
	{ top: 120, right: 80, animation: 'float2 7s ease-in-out infinite' },
	{ bottom: 60, left: 120, animation: 'float3 8s ease-in-out infinite' },
];

const Home = () => (
	<div className="w-full min-h-screen flex flex-col items-center bg-gradient-to-br from-blue-100 via-white to-red-100 relative overflow-hidden">
		{/* Floating Tooth Icons Animation */}
			{floatingStyles.map((style, idx) => (
				<div
					key={idx}
					style={{ position: 'absolute', ...style, zIndex: 1, width: 64 + idx * 12, height: 64 + idx * 12 }}
				>
					<ToothIcon style={{ width: '100%', height: '100%' }} />
				</div>
			))}

				{/* ...existing code... */}

	{/* ...existing code... */}
		<div className="flex flex-col items-center justify-center h-[60vh] w-full z-10 relative">
			<h1 className="text-4xl md:text-5xl font-extrabold text-red-700 mb-4 text-center drop-shadow-lg">
				Book Your Appointment at<br />Urja Multispeciality Dental Clinic
			</h1>
			<p className="text-lg md:text-xl text-gray-700 mb-8 text-center max-w-xl">
				Experience world-class dental care with advanced technology and compassionate professionals.
			</p>
			<Link to="/Pages/Book%20Online" className="px-8 py-4 rounded-full bg-gradient-to-r from-red-500 to-blue-500 text-white font-bold shadow-lg hover:bg-white hover:text-red-600 border-2 border-red-500 transition text-lg">
				Book Appointment
			</Link>
		</div>

		{/* Highlights Section */}
		<section style={{ width: '100%', padding: '48px 0', background: 'white', marginTop: '32px' }}>
		  <h2
		    style={{
		      textAlign: 'center',
		      fontWeight: 'bold',
		      fontSize: '3rem',
		      marginBottom: '32px',
		      color: '#222',
		      textShadow: '2px 2px 8px #ccc',
		    }}
		  >
		    HIGHLIGHTS OF OUR CLINIC
		  </h2>
		  <div
		    style={{
		      display: 'flex',
		      flexDirection: 'row',
		      alignItems: 'flex-start',
		      gap: '48px',
		      overflowX: 'auto',
		      padding: '16px 32px',
		      background: 'white',
		    }}
		  >
		    {[
		      {
		        img: highlight1,
		        text: 'Hi-tech dentistry',
		      },
		      {
		        img: highlight2,
		        text: 'Super specialized team of dentists',
		      },
		      {
		        img: highlight3,
		        text: 'International standards of sterilization',
		      },
		      {
		        img: highlight4,
		        text: 'Dental tourism',
		      },
		      {
		        img: highlight5,
		        text: '10000+ satisfied patients',
		      },
		    ].map((highlight, idx) => (
		      <div
		        key={idx}
		        style={{
		          display: 'flex',
		          flexDirection: 'column',
		          alignItems: 'center',
		          minWidth: '180px',
		        }}
		      >
		        <div
		          style={{
		            width: '140px',
		            height: '140px',
		            borderRadius: '50%',
		            background: 'white',
		            boxShadow: '0 4px 24px 0 rgba(255,0,0,0.08)',
		            display: 'flex',
		            alignItems: 'center',
		            justifyContent: 'center',
		            marginBottom: '16px',
		            border: '6px solid #fff',
		          }}
		        >
		          <img
		            src={highlight.img}
		            alt={highlight.text}
		            style={{
		              width: '120px',
		              height: '120px',
		              borderRadius: '50%',
		              objectFit: 'cover',
		              background: '#fff',
		            }}
		          />
		        </div>
		        <div
		          style={{
		            textAlign: 'center',
		            fontWeight: 'bold',
		            color: '#e53935',
		            fontSize: '1.25rem',
		            marginTop: '8px',
		            lineHeight: '1.2',
		          }}
		        >
		          {highlight.text}
		        </div>
		      </div>
		    ))}
		  </div>
		</section>

	{/* ...existing code... */}

		{/* Problem Slider Section */}
		<section className="w-full py-16 flex flex-col items-center bg-white">
			 <h2 className="text-5xl md:text-6xl font-extrabold text-blue-700 mb-10 text-center drop-shadow-lg tracking-wide">Common Dental Problems</h2>
			<ProblemSlider />
		</section>

	{/* ...existing code... */}

			{/* Our Services Section */}
			<section className="w-full py-16 flex flex-col items-center bg-white">
				<h2 className="text-5xl md:text-6xl font-extrabold text-red-700 mb-10 text-center drop-shadow-lg tracking-wide">Our Services</h2>
				<ServicesSlider />
			</section>

	{/* ...existing code... */}

			{/* Stats Strip Section - now below Our Services, outlined circles and red text box */}
			<section className="w-full py-10 bg-gradient-to-r from-red-100 via-white to-red-100 flex flex-col items-center">
				<div className="flex flex-wrap justify-center gap-16 w-full max-w-5xl">
					{[
						{ label: 'Years of experience', value: 15 },
						{ label: 'Smiling clients', value: 15000 },
						{ label: 'Master certifications', value: 20 },
						{ label: 'Happy staff', value: 20 },
					].map((stat, idx) => (
								<div key={stat.label} className="flex flex-col items-center group">
									<div className="flex items-center justify-center w-40 h-40 rounded-full border-4 border-red-500 bg-white text-red-600 text-4xl font-extrabold shadow-xl mb-2 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_48px_16px_#e53e3e,0_0_0_8px_#fff]">
										<AnimatedCount end={stat.value} />
									</div>
									<span className="text-xl font-bold text-white mt-2 text-center px-4 py-2 rounded-lg bg-red-600 shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_32px_8px_#e53e3e]">
										{stat.label}
									</span>
						</div>
					))}
				</div>
			</section>

			{/* Testimonial Section - now truly after stats strip */}
			<section className="w-full py-16 flex flex-col items-center bg-white">
				<h2 className="text-5xl md:text-6xl font-extrabold text-red-700 mb-10 text-center drop-shadow-lg tracking-wide">Happy Patients</h2>
				<div className="flex flex-wrap justify-center gap-8 w-full max-w-5xl">
					{/* Example testimonials, replace with real data as needed */}
					<a href="https://maps.app.goo.gl/5qStBm9jx6mUjY3z8" target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl shadow-xl px-8 py-6 w-[340px] flex flex-col items-center border border-gray-100 hover:shadow-2xl transition">
						<div className="flex items-center gap-2 mb-2">
							<span className="bg-purple-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center text-xl">V</span>
							<span className="font-bold text-gray-800">Vikas Kumar</span>
							<span className="text-yellow-500 ml-2">★★★★★</span>
							<span className="text-gray-500 text-xs ml-2">2 months ago</span>
						</div>
						<p className="text-lg text-gray-700 text-center mb-4">I recently got my multiple tooth fillings done at, Urja Dental Clinic and I'm extremely happy and satisfied with the entire experience! The team is highly professional, caring and made sure I was comfortable throughout the procedure.</p>
					</a>
					<a href="https://maps.app.goo.gl/5qStBm9jx6mUjY3z8" target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl shadow-xl px-8 py-6 w-[340px] flex flex-col items-center border border-gray-100 hover:shadow-2xl transition">
						<div className="flex items-center gap-2 mb-2">
							<span className="bg-green-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center text-xl">R</span>
							<span className="font-bold text-gray-800">Ruchika Malpa</span>
							<span className="text-yellow-500 ml-2">★★★★★</span>
							<span className="text-gray-500 text-xs ml-2">6 days ago</span>
							<span className="bg-gray-200 text-xs text-gray-700 px-2 py-1 rounded ml-2">NEW</span>
						</div>
						<p className="text-lg text-gray-700 text-center mb-4">Excellent dental care! The clinic is clean, well-equipped, and the staff is very friendly. Dr. explains everything clearly and makes the treatment comfortable and painless. Highly recommended!</p>
					</a>
					<a href="https://maps.app.goo.gl/5qStBm9jx6mUjY3z8" target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl shadow-xl px-8 py-6 w-[340px] flex flex-col items-center border border-gray-100 hover:shadow-2xl transition">
						<div className="flex items-center gap-2 mb-2">
							<span className="bg-gray-500 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center text-xl">T</span>
							<span className="font-bold text-gray-800">Sanju Sood</span>
							<span className="text-yellow-500 ml-2">★★★★★</span>
							<span className="text-gray-500 text-xs ml-2">3 weeks ago</span>
							<span className="bg-gray-200 text-xs text-gray-700 px-2 py-1 rounded ml-2">NEW</span>
						</div>
						<p className="text-lg text-gray-700 text-center mb-4">I had an amazing experience at Urja Multispeciality Dental Clinic, Mohali. The team of specialists is highly skilled, professional, and truly dedicated to patient care. From the moment I walked in, I was greeted with warmth, and the clinic’s hygiene standards were top-notch.</p>
					</a>
				</div>
			</section>

			{/* Simple keyframes for floating animation */}
			<style>{`
				@keyframes float1 {
					0% { transform: translateY(0); }
					50% { transform: translateY(-30px); }
					100% { transform: translateY(0); }
				}
				@keyframes float2 {
					0% { transform: translateY(0); }
					50% { transform: translateY(-40px); }
					100% { transform: translateY(0); }
				}
				@keyframes float3 {
					0% { transform: translateY(0); }
					50% { transform: translateY(-20px); }
					100% { transform: translateY(0); }
				}
			`}</style>
	</div>
);

// Service data
const services = [
	"Painless Canal Treatment",
	"Proclain teeth Veeners",
	"Braces treatment",
	"Dental tooth Implant",
	"Invisalign",
	"Teeth whitening Treatment",
	"Dentures",
	"Teeth Cleaning",
	"Full Mouth Dental Crown",
	"Tooth Removal",
	"Smile Makeover",
	"Anti Snoring",
	"Kids Dentistry",
	"Tooth filling",
	"Diamond on tooth"
];

// Placeholder image for services
const servicePlaceholder = 'https://via.placeholder.com/80x60?text=Service';

function ServicesSlider() {
	const [current, setCurrent] = React.useState(0);
	const visible = 4;
	const total = services.length;
	const next = () => setCurrent((c) => (c + visible < total ? c + 1 : c));
	const prev = () => setCurrent((c) => (c > 0 ? c - 1 : c));
	const goTo = (idx) => setCurrent(idx);
	return (
		<div className="w-full flex flex-col items-center">
			<div className="flex items-center justify-center gap-4 w-full">
				<button onClick={prev} className="bg-white border border-gray-300 text-red-700 rounded-full p-3 shadow-lg hover:bg-red-100 transition">
					&#8592;
				</button>
				<div className="flex gap-8">
								{services.slice(current, current + visible).map((service, idx) => (
									<div key={service} className="bg-white rounded-2xl shadow-xl px-6 py-8 w-[278px] h-[360px] flex flex-col justify-between border border-gray-100 transition-transform duration-300 hover:scale-105" style={{ boxShadow: '0 4px 24px 0px rgba(255,0,0,0.08), 0 0 32px 0px rgba(0,0,255,0.10)' }}>
										<img src={servicePlaceholder} alt="Service" className="mx-auto mb-2 w-20 h-16 object-contain" />
										<h3 className="text-lg font-bold text-red-700 mb-2 text-center">{service}</h3>
																										<button className="w-full py-3 rounded-full bg-red-500 text-white font-bold shadow-lg hover:bg-white hover:text-red-600 border-2 border-red-500 hover:scale-105 transition-transform text-lg mt-auto">
																											Consult Now
																										</button>
									</div>
								))}
				</div>
				<button onClick={next} className="bg-white border border-gray-300 text-red-700 rounded-full p-3 shadow-lg hover:bg-red-100 transition">
					&#8594;
				</button>
			</div>
			<div className="flex justify-center mt-8 gap-2">
				{Array.from({ length: total - visible + 1 }).map((_, idx) => (
					<button
						key={idx}
						onClick={() => goTo(idx)}
						className={`w-3 h-3 rounded-full ${current === idx ? 'bg-red-500' : 'bg-gray-300'} transition`}
						aria-label={`Go to slide ${idx + 1}`}
					/>
				))}
			</div>
		</div>
	);
}

// Animated counting component
function AnimatedCount({ end, className }) {
	const [count, setCount] = React.useState(0);
	React.useEffect(() => {
		let start = 0;
		const duration = 1200;
		const increment = end > 1000 ? Math.ceil(end / 60) : 1;
		const stepTime = Math.max(Math.floor(duration / end), 20);
		const timer = setInterval(() => {
			start += increment;
			if (start >= end) {
				setCount(end);
				clearInterval(timer);
			} else {
				setCount(start);
			}
		}, stepTime);
		return () => clearInterval(timer);
	}, [end]);
	return <div className={className}>{count}{end >= 10000 ? '+' : ''}</div>;
}

export default Home;
