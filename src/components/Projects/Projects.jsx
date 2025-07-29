import React, { useRef, useEffect } from 'react';
import './Projects.css';

import ArsiImg from '../../assets/Arsi.png';
import BridgeworkImg from '../../assets/Bridgework.png';
import ExpresswayImg from '../../assets/Express way road work.png';
import GravelRoadImg from '../../assets/Gravel road.png';

const cards = [
  { img: ArsiImg, title: 'B+G+4 Negele Arsi Administration office pictures', link: '/projects/arsi' },
  { img: GravelRoadImg, title: 'Gravel Roads', link: '/projects/gravel' },
  { img: BridgeworkImg, title: 'Bridge work', link: '/projects/bridge' },
  { img: ExpresswayImg, title: 'Expressway Road work', link: '/projects/expressway' },
];

const Projects = () => {
  const scrollRef = useRef(null);
  const leftArrowRef = useRef(null);
  const rightArrowRef = useRef(null);
  let hideTimeout = null;

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -320 : 320,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const scrollWrapper = scrollRef.current;
    const leftArrow = leftArrowRef.current;
    const rightArrow = rightArrowRef.current;

    const onScroll = () => {
      // Hide arrows
      leftArrow.style.opacity = '0';
      rightArrow.style.opacity = '0';

      // Clear any previous timeout
      if (hideTimeout) clearTimeout(hideTimeout);

      // Show arrows after 1s of no scroll
      hideTimeout = setTimeout(() => {
        leftArrow.style.opacity = '1';
        rightArrow.style.opacity = '1';
      }, 1000);
    };

    if (scrollWrapper) {
      scrollWrapper.addEventListener('scroll', onScroll);
    }

    return () => {
      if (scrollWrapper) {
        scrollWrapper.removeEventListener('scroll', onScroll);
      }
      if (hideTimeout) clearTimeout(hideTimeout);
    };
  }, []);

  return (
    <div className="projects-wrapper">
      <div className="carousel-wrapper">
        <div className="carousel-arrow left" ref={leftArrowRef} onClick={() => scroll('left')}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </div>

        <div className="card-scroll-wrapper" ref={scrollRef}>
          <div className="card-container">
            {cards.map((card, index) => (
              <div className="card" key={index}>
                <div className="card-image">
                  <img src={card.img} alt={card.title} />
                  <div className="overlay">
                    <h3>{card.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="carousel-arrow right" ref={rightArrowRef} onClick={() => scroll('right')}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Projects;
