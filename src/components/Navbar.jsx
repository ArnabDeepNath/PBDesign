import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.pageYOffset > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <div className="w-full px-4 py-8 bg-gray-50 flex justify-end">
        <div className="links flex gap-10 items-center">
          {['Service', 'Team', 'Portfolio', 'About us', 'Connect Now'].map(
            (item, index) => (
              <a
                key={index}
                className={`capitalize text-lg font-light font-[lato] cursor-pointer  ${
                  index === 4 &&
                  'ml-32 border-solid border-2 border-zinc-400 rounded-3xl px-8 py-2'
                }`}
                style={{ position: 'relative' }}>
                <h1>{item}</h1>
                <span className="bg-zinc-400" />
              </a>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
