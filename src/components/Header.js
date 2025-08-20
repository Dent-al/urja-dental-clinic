import React, { useState } from 'react';
import './Header.css';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

const menuItems = [
	{ label: 'Home', path: '/' },
	{ label: 'Our Team', path: '/our-team' },
	{ label: 'Services', path: '/services' },
	{ label: 'Holistic Dentist', path: '/holistic-dentist' },
	{ label: 'Happy Patients', path: '/happy-patients' },
	{ label: 'Clinic Tour', path: '/clinic-tour' },
	{ label: 'Dental Tourism', path: '/dental-tourism' },
	{ label: 'Cases Pictures', path: '/cases-pictures' },
	{ label: 'Book Online', path: '/book-online' },
];

function Header() {
	const [menuOpen, setMenuOpen] = useState(false);
		return (
			<header className="glass-header">
								<div className="brand flex items-center justify-start gap-4">
									<img src={logo} alt="Urja Dental Clinic Logo" className="brand-logo" style={{ width: '120px', height: '120px', minWidth: '120px', minHeight: '120px' }} />
									<div className="flex flex-col justify-center">
										<span className="brand-name" style={{ fontSize: '2.1rem', fontWeight: 'bold', color: '#b71c1c', lineHeight: '1.1', whiteSpace: 'nowrap' }}>
											Urja Multispeciality<br />
											<span style={{ fontSize: '1.6rem', color: '#d32f2f', fontWeight: '600' }}>Dental Clinic</span>
										</span>
										<span className="brand-phone" style={{ fontSize: '1.1rem', color: '#333', marginTop: '0.2rem', fontWeight: '500' }}>
											📞 8699969619
										</span>
									</div>
								</div>
						<nav className={`nav-menu ${menuOpen ? 'open' : ''}`} style={{ fontSize: '1rem' }}>
							{menuItems.map((item) => (
								<Link key={item.label} to={item.path} className="nav-link" onClick={() => setMenuOpen(false)}>
									{item.label}
								</Link>
							))}
						</nav>
				<button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
					<span className="menu-icon">☰</span>
				</button>
			</header>
		);
}

export default Header;
