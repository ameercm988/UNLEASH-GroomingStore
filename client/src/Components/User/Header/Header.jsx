import React from 'react'
import styles from './Header.module.css'
import MenuPopupState from './HamburgerButton';
import logo from "../../../Assets/Unleash+logo.png";
import {FaPhoneAlt, FaEnvelope, FaSearch, FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';

const Header = () => {
  return (
	<Grid container className='place-items-center'>
    <Grid item xs={12} sm={12} lg={12}>
        <header id="header">
		{/* <div className={styles['header-top']}> */}
		<div style={{display:'flex'}}>
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
				
				<li><Link to={'/'} className={styles['nav-link']} >HOME</Link></li>
				
				<li><Link to={'/appointments'} className={styles['nav-link']} >APPOINTMENTS</Link></li>
				
				<li><Link to={'/services'} className={styles['nav-link']} >SERVICES</Link></li>
				
				<li><a className={styles['nav-link']} >BLOG</a></li>
				<li><a className={styles['nav-link']} >CONTACT US</a></li>
			</ul>
			{/* <button><span></span>Buy now</button> */}
		</nav>
	</header>
    </Grid>
	</Grid>
  )
}

export default Header