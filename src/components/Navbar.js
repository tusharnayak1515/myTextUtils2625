import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './navbar.module.css';

import moonImage from './moon.png';

const Navbar = ({mode, onModeChange}) => {

    let moonStyle;

    if(mode === "dark") {
        moonStyle = {
            filter: "invert(1)"
        }    
    }

    let isDarkMode;
    
    if(mode === "dark") {
        isDarkMode = true;
    }
    else {
        isDarkMode = false;
    }

    const [isShow, setIsShow] = useState(false);
    
    const onToggle = ()=> {
        const toggle = document.querySelector('ul');
        if(!isShow) {
            toggle.style.display = 'flex';
            setIsShow(true);
        }
        else {
            toggle.style.display = 'none';
            setIsShow(false);
        }
    }
    
    return (
        <nav id={styles.navbar} style={{backgroundColor: isDarkMode ? "black" : "white", borderBottom: isDarkMode ? "0.2vw solid white" : "0.2vw solid black"}} >

            <div id={styles.logo}>
                <h2 style={{color: !isDarkMode ? "black" : "white"}} className={isDarkMode ? `${styles.darkHead}` : ""}>TextUtils</h2>
                <div id={styles.toggle} onClick={onToggle} style={{border: isDarkMode ? "0.5vw solid white" : "0.2vw solid black"}}>
                    <span style={{backgroundColor: isDarkMode ? "white" : "black"}}></span>
                    <span style={{backgroundColor: isDarkMode ? "white" : "black"}}></span>
                    <span style={{backgroundColor: isDarkMode ? "white" : "black"}}></span>
                </div>
                <div id={styles.modeDiv_2}>
                    <img src={moonImage} alt="" onClick={onModeChange} id="mode" style={moonStyle} />
                </div>
            </div>

            <ul id="navLinks">
                <li><Link to='/' style={{color: !isDarkMode ? "black" : "white", border: mode === "light" ? "0.15vw solid black" : "0.15vw solid white"}}>Home</Link></li>
                <li><Link to='/about' style={{color: !isDarkMode ? "black" : "white",border: mode === "light" ? "0.15vw solid black" : "0.15vw solid white"}}>About</Link></li>
                <div id={styles.modeDiv}>
                <img src={moonImage} alt="" onClick={onModeChange} id="mode" style={moonStyle} />
                <label htmlFor="mode" onClick={onModeChange} style={{color: mode === "light" ? "black" : "white", fontWeight: "bold"}}>{mode === "light" ? "Dark Mode" : "Light Mode"}</label>
                </div>
            </ul>

        </nav>
    )
}

export default Navbar
