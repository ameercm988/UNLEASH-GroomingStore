import React from 'react'
import styles from './Header.module.css'
import MenuPopupState from './HamburgerButton';
import logo from "../../../Assets/Unleash+logo.png";
import {FaPhoneAlt, FaHamburger, FaEnvelope, FaSearch, FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
        <header id="header">
		{/* <div className={styles['header-top']}> */}
		<div style={{display:'flex',marginRight:'900px'}}>
		<h4><FaPhoneAlt/> +91 9XXXXXXXX1</h4>
		<h4><FaEnvelope/> unleash.com</h4>
		</div>
		<div className={styles['details']}>
			{/* <span><FaUserAlt/></span> */}
			<div>
			<span><FaFacebook/></span>
			<span><FaTwitter/></span>
			<span><FaInstagram/></span>
			</div>
		</div>	
		<div className={styles['user-details']}>
			{/* <span><FaUserAlt/></span> */}
			<div>
			<span><FaSearch/></span>
			{/* <span><FaHamburger/></span> */}
			<span><MenuPopupState/></span>
			</div>
		</div>	
		{/* </div> */}
		<nav id="nav-bar">
		<img src={logo}/>
			<ul>
				<Link to={'/'}>
				<li><a className={styles['nav-link']} href="#speed">HOME</a></li>
				</Link>
				<li><a className={styles['nav-link']} href="#display">APPOINTMENTS</a></li>
				<li><a className={styles['nav-link']} href="#camera">SERVICES</a></li>
				<li><a className={styles['nav-link']} href="#design">BLOG</a></li>
				<li><a className={styles['nav-link']} href="#oxygenos">CONTACT US</a></li>
			</ul>
			{/* <button><span></span>Buy now</button> */}
		</nav>
	</header>
    </>
  )
}

export default Header