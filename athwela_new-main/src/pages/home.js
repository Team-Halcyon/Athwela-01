import React, { useState, useEffect } from 'react';
import '../styles/styles.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    {
      image: '/project-img2.jpeg',
      caption: 'Join us in supporting a brave child\'s fight against cancer. Your generous donation can provide life-saving treatments and hope for a brighter, healthier future. Together, we can make a difference.'
    },
    {
      image: '/project-img3.jpg',
      caption: 'Help us equip underprivileged students with essential school supplies. Your contribution can empower their education and pave the way for a brighter future. Together, let\'s make learning accessible for all.'
    },
    {
      image: '/project-img1.jpg',
      caption: 'Support our mission to provide nutritious meals for elderly residents in need. Your donation can bring comfort and nourishment to those who deserve our care. Together, let\'s make a difference.'
    }
  ];

  const showSlides = () => {
    if (slideIndex >= slides.length) {
      setSlideIndex(0);
    } else if (slideIndex < 0) {
      setSlideIndex(slides.length - 1);
    }
  };

  const nextSlide = () => {
    setSlideIndex(prevIndex => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setSlideIndex(prevIndex => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  useEffect(() => {
    showSlides();
  }, [slideIndex]);

  return (
    <div>
      <section className="home" id="home">
        <div className="home-text">
          <h1>Donate to make a<br />Difference!!!</h1>
          <p>
            We seamlessly connect generous donors with those in need,
            ensuring secure and easy donation. By celebrating the
            power of micro-donations, we turn small contributions into a
            powerful force for change, fostering a community where
            every act of generosity makes a significant impact.
          </p>
          <div className="buttons">
            <a href="login.html" className="btn">Start Fundraising</a>
            <a href="#projects" className="btn">Donate Now</a>
          </div>
        </div>

        <div className="slider-container">
          <div className="slider" style={{ transform: `translateX(${-slideIndex * 100}%)`, display: 'flex', transition: 'transform 0.5s ease-in-out' }}>
            {slides.map((slide, index) => (
              <div className="slide" key={index} style={{ minWidth: '100%', boxSizing: 'border-box' }}>
                <img src={slide.image} alt={`Slide ${index + 1}`} />
                <div className="caption">{slide.caption}</div>
              </div>
            ))}
          </div>
          <button className="prev" onClick={prevSlide}>&#10094;</button>
          <button className="next" onClick={nextSlide}>&#10095;</button>
        </div>
      </section>

      <section className="about" id="about">
        <section className="description">
          <div className="about-img">
            <img src="/about-img.webp" alt="What is අත්වැල" />
          </div>
          <div className="about-text">
            <h2>What is අත්වැල...?</h2>
            <p>
              We are a group of undergraduates at the Department of Computer Science and Engineering,
              University of Moratuwa. Driven by a shared commitment to social welfare, we've crafted
              this platform with one clear purpose: to extend a helping hand where it's needed most.
              From providing a lifeline to children's and adults' homes through dedicated registration
              processes ensuring authenticity, to rallying support for urgent medical needs with transparent
              fundraising and real-time tracking, every initiative is rooted in empathy and empowered by technology.
              Together, we're not just building a website; we're fostering hope,
              resilience, and a brighter tomorrow for all.
            </p>
          </div>
        </section>

        <section className="mission">
          <div className="mission-text">
            <h2>Our Mission</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil reiciendis incidunt veniam repudiandae,
              facere nesciunt ad, accusantium at unde, voluptates esse. Sunt consequuntur distinctio pariatur id, impedit sapiente veniam quidem?</p>
          </div>
          <div className="mission-img">
            <img src="/mission.jpg" alt="Our Mission" />
          </div>
        </section>

        <section>
          <div className="stats-bar">
            <img src="/statbar-img.jpg" alt="Background" />
            <div className="overlay">
              <div className="stat">
                <h2>11</h2>
                <p>Months</p>
              </div>
              <div className="stat">
                <h2>LKR 246,598.53</h2>
                <p>Donations Raised</p>
              </div>
              <div className="stat">
                <h2>298</h2>
                <p>Donors</p>
              </div>
              <div className="stat">
                <h2>51</h2>
                <p>Projects</p>
              </div>
              <div className="stat">
                <h2>2</h2>
                <p>Companies</p>
              </div>
            </div>
          </div>
        </section>

        <section className="project" id="projects">
          <div className="project-text">
            <h2>Find Our Projects You Care About</h2>
          </div>
          <div className="project-container">
                <Link to="/healthcare">
              <div className="image-container">
                <img src="/health.png" alt="Healthcare" />
                <div className="overlay-text"><b><h3>Healthcare</h3></b></div>
              </div>
              </Link>
            
              <div className="image-container">
                <img src="/disaster.png"/>
                <div className="overlay-text"><b><h3>Disaster Relief</h3></b></div>
              </div>
            
            <a href="children.html">
              <div className="image-container">
                <img src="/child.jpeg" alt="Children's Homes" />
                <div className="overlay-text"><b><h3>Children's Homes</h3></b></div>
              </div>
            </a>
            <a href="elders.html">
              <div className="image-container">
                <img src="/elder.jpeg" alt="Elders' Homes" />
                <div className="overlay-text"><b><h3>Elders' Homes</h3></b></div>
              </div>
            </a>
          </div>
        </section>

        <section className="review">
          <div className="title">
            <h2>What people are saying about our charity activities</h2>
          </div>

          <div className="customer-container">
            <div className="box">
              <h2>Dinara de Silva</h2>
              <img src="/customer1.jpg" alt="Dinara de Silva" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, nam dolores doloremque
                ad impedit beatae magnam aliquam ex fuga quis vero distinctio id,
                ea voluptatem temporibus optio pariatur, corrupti mollitia.
              </p>
            </div>
            <div className="box">
              <h2>Ramesh Perera</h2>
              <img src="/customer2.jpg" alt="Ramesh Perera" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, nam dolores doloremque
                ad impedit beatae magnam aliquam ex fuga quis vero distinctio id,
                ea voluptatem temporibus optio pariatur, corrupti mollitia.
              </p>
            </div>
            <div className="box">
              <h2>Amasha Fernando</h2>
              <img src="/customer3.jpg" alt="Amasha Fernando" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, nam dolores doloremque
                ad impedit beatae magnam aliquam ex fuga quis vero distinctio id,
                ea voluptatem temporibus optio pariatur, corrupti mollitia.
              </p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Home;
