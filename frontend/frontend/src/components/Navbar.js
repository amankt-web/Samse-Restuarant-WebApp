import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { GiHamburgerMenu } from 'react-icons/gi';
import restapiData from '../restapi.json'; 

const Navbar = () => {
  const [show, setShow] = useState(false);

  // Access the 'navbarLinks' array from the imported JSON data
  const navbarLinks = restapiData.data[0].navbarLinks;

  return (
    <nav>
      <div className="logo">Samse</div>
      <div className={show ? 'navLinks showmenu' : 'navLinks'}>
        <div className="links">
          {navbarLinks.map((element) => {
            return (
              <Link
                to={element.link}
                key={element.id}
                spy={true}
                smooth={true}
                duration={500}
              >
                {element.title}
              </Link>
            );
          })}
        </div>
        <button className="menuBtn">OUR MENU</button>
      </div>
      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
