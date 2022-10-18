import React from 'react'
import styles from './Header.module.css'
// import logo from '../../../Assets/Unleash+logo.png'
import logo from "../../../Assets/Unleash+logo.png";
import {FaPhoneAlt, FaUserAlt, FaShoppingBag, FaHamburger, FaEnvelope} from 'react-icons/fa'

const Header = () => {
  return (
    <>
        <header id="header">
		{/* <div className={styles['header-top']}> */}
		<div style={{display:'flex'}}>
		<h4><FaPhoneAlt/> +91 9XXXXXXXX1</h4>
		<h4><FaEnvelope/> unleash.com</h4>
		</div>
		<div className={styles['user-details']}>
			<span><FaUserAlt/></span>
			<span><FaShoppingBag/></span>
			<span><FaHamburger/></span>
		</div>	
		{/* </div> */}
		<nav id="nav-bar">
		<img src={logo}/>
			<ul>
				<li><a className={styles['nav-link']} href="#speed">HOME</a></li>
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