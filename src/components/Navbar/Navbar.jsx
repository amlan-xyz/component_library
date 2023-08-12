import { useState } from 'react'
import './style.css'

import {FaBars,FaXmark} from 'react-icons/fa6'
import { NavLink } from 'react-router-dom';

export function Navbar(){
	const [active,setActive]=useState(false);

	const handleActive=()=>{
		setActive(!active);
	}

	return(
		<nav className={active===true?'active':''}>
			<header className="nav_logo">Logo</header>
			<ul className="nav_list">
				<NavLink to='/layout' className="nav_item">Layout</NavLink>
				<NavLink to='/cards' className="nav_item">Cards</NavLink>
				<NavLink to='/layout' className="nav_item">Layout</NavLink>
				<NavLink to='/layout' className="nav_item">Layout</NavLink>
				<NavLink to='/layout' className="nav_item">Layout</NavLink>
			</ul>
			<div className="mobile_nav_btn">
				<span onClick={handleActive} id='menu-outline' className='mobile_nav_icon '><FaBars/></span>
				<span onClick={handleActive}  id='close-outline' className="mobile_nav_icon "><FaXmark/></span>
			</div>
		</nav>	
	)
	
}