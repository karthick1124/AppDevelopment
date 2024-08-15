import React, { useState, useEffect } from 'react';
import './Testimonials.css';

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Mock fetch function to simulate API call
    const fetchTestimonials = async () => {
      // Replace this with your actual API call
      const data = [
        { id: 1, text: "This app has changed how I share my travel experiences!", author: "Alex D.", image: "https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129416.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1720828800&semt=ais_user" },
        { id: 2, text: "A wonderful platform to connect with like-minded people.", author: "Jamie L.", image: "https://www.shutterstock.com/image-photo/portrait-handsome-smiling-young-man-260nw-1814606621.jpg" },
      ];
      setTestimonials(data);
    };
    
    fetchTestimonials();
  }, []);

  return (
    <section className="testimonials">
      <h2>What Our Users Say</h2>
      <div className="testimonial-list">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-item">
            <div className="testimonial-image-container">
              <img src={testimonial.image} alt={testimonial.author} className="testimonial-image" />
            </div>
            <p className="testimonial-text">"{testimonial.text}"</p>
            <span className="testimonial-author">- {testimonial.author}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
