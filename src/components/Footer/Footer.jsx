import React, { useEffect, useState } from 'react';
import classes from './Footer.module.scss';
import logo from '../../assets/Logo.png'
import { Link } from 'react-router-dom';


export default function Footer() {

  const [navigate, setNavigate] = useState(false);

  useEffect(() => {
    if (navigate) {
      location = "https://www.facebook.com/EINagy";
    }
  }, [navigate]);

  return (
    
    <footer className={`${classes.Footer}`}>
      <div className={classes.footerTop}>
      <Link to={'/'}>
      <div className={classes.logo}>
        <img src={logo} alt="Recipe" className='h-10'/>
        <span>Recipe</span>
      </div>
      </Link>
      <span className={classes.route}>Route</span>
      </div>
      <hr />
      <p>© 2025  <span className={classes.link} onClick={() => setNavigate(true)}>
          Nagy Osama™
        </span>. All Rights Reserved.</p>
    </footer>
  );
}

