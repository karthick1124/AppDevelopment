import React from 'react';
import './Banner.css';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className='banner'>
      <div className='banner-section banner-left' id='b1'>
        <img src="https://i.ytimg.com/vi/P5W80RdKfsc/hqdefault.jpg" alt="Experience 1" className='b-img'/>
        <div className='banner-content'>
          <h2>Explore New Experiences</h2>
          <p>Discover amazing stories and insights from people all over the world. Share your own experiences and grow your knowledge base.</p>
          <ul className='banner-features'>
            <li>Connect with diverse communities</li>
            <li>Learn from personal stories and case studies</li>
            <li>Engage in interactive discussions</li>
          </ul>
            <button className='banner-button'><Link to="/content" style={{ textDecoration: 'none', color: 'inherit' }}>Learn More</Link></button>
        </div>
      </div>
      <div className='banner-section banner-right' id='b2'>
        <img src="https://img.freepik.com/premium-photo/magic-knowledge-hd-8k-wallpaper-stock-photographic-image_890746-31424.jpg" alt="Experience 2" className='b-img'/>
        <div className='banner-content'>
          <h2>Share Your Knowledge</h2>
          <p>Join a community of learners and educators. Share your expertise and help others on their journey.</p>
          <ul className='banner-features'>
            <li>Create and share educational content</li>
            <li>Gain feedback and insights from peers</li>
            <li>Access exclusive resources and tools</li>
          </ul>
          <button className='banner-button' ><Link to="/post" style={{ textDecoration: 'none', color: 'inherit' }}>Get Started</Link></button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
