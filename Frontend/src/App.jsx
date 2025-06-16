import React, { useState } from 'react';
import './App.css';
import Footer from './Footer';
import AboutDeveloper from './AboutDeveloper';

const App = () => {
  const [showMore, setShowMore] = useState(false); // For Cards
  const [showMoreTestimonials, setShowMoreTestimonials] = useState(false); // For Testimonials

  const handleReadMore = () => {
    setShowMore(!showMore);
  };

  const handleReadMoreTestimonials = () => {
    setShowMoreTestimonials(!showMoreTestimonials);
  };

  return (
    <div className="main-section">

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ position: 'static' }}>
        <div className="container-fluid d-flex align-items-center">
          <a className="navbar-brand" href="#">
            <i className="bi bi-house-door-fill"></i> Interior Shop
          </a>
          <div className="flex-grow-1 d-flex justify-content-center">
            <ul className="navbar-nav d-flex flex-row justify-content-evenly w-50">
              <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Services</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Products</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
            </ul>
          </div>
          <div className="d-flex">
            <button className="btn btn-outline-light me-2">Login</button>
            <button className="btn btn-warning">Sign Up</button>
          </div>
        </div>
      </nav>

      {/* Improved Carousel Section */}
      <div className="carousel-section">
        <div className="container-fluid px-0">
          <div id="interiorCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img 
                  src="/images/_Luxurious Modern Living Room Design with and Statement Lighting_.jpg" 
                  className="d-block w-100 img-fluid" 
                  alt="Room 1"
                  loading="eager"
                />
              </div>
              <div className="carousel-item">
                <img 
                  src="/images/Tv unit area.jpg" 
                  className="d-block w-100 img-fluid" 
                  alt="Room 2"
                  loading="eager"
                />
              </div>
              <div className="carousel-item">
                <img 
                  src="/images/97a32626-3b90-4de4-bfd4-0b6ef7c96b90.jpg" 
                  className="d-block w-100 img-fluid" 
                  alt="Room 3"
                  loading="eager"
                />
              </div>
              <div className="carousel-item">
                <img 
                  src="/images/97a32626-3b90-4de4-bfd4-0b6ef7c96b90.jpg" 
                  className="d-block w-100 img-fluid" 
                  alt="Room 4"
                  loading="eager"
                />
              </div>
              <div className="carousel-item">
                <img 
                  src="/images/97a32626-3b90-4de4-bfd4-0b6ef7c96b90.jpg" 
                  className="d-block w-100 img-fluid" 
                  alt="Room 5"
                  loading="eager"
                />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#interiorCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#interiorCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Your Original Trending Section */}
      <div className="trending-section">
        <h2>TRENDING</h2>
      </div>

      {/* Your Original Card Section - COMPLETELY PRESERVED */}
      <div className="card-section py-5">
        <div className="container">
          <div className="row justify-content-center">

            {/* Card 1 */}
            <div className="col-md-4 mb-4">
              <div className="card custom-card h-100">
                <img src="/images/_Luxurious Modern Living Room Design with and Statement Lighting_.jpg" className="card-img-top" alt="Design 1" />
                <div className="card-body">
                  <h5 className="card-title">Modern Living Room</h5>
                  <p className="card-text">Elegant and stylish living room interior to make your space cozy.</p>
                  <button className="btn btn-primary">View More</button>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4 mb-4">
              <div className="card custom-card h-100">
                <img src="/images/Amazing Modular Kitchen Ideas🤩.jpg" className="card-img-top" alt="Design 2" />
                <div className="card-body">
                  <h5 className="card-title">Luxury Bedroom</h5>
                  <p className="card-text">Transform your bedroom into a luxurious retreat with our designs.</p>
                  <button className="btn btn-primary">View More</button>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4 mb-4">
              <div className="card custom-card h-100">
                <img src="/images/97a32626-3b90-4de4-bfd4-0b6ef7c96b90.jpg" className="card-img-top" alt="Design 3" />
                <div className="card-body">
                  <h5 className="card-title">Stylish Kitchen</h5>
                  <p className="card-text">Modern and functional kitchen spaces designed for every home.</p>
                  <button className="btn btn-primary">View More</button>
                </div>
              </div>
            </div>

            {/* Extra Cards if showMore */}
            {showMore && (
              <>
                {/* Card 4 */}
                <div className="col-md-4 mb-4">
                  <div className="card custom-card h-100">
                    <img src="/images/487148c5-418d-43c8-801f-798383cc9058.jpg" className="card-img-top" alt="Design 4" />
                    <div className="card-body">
                      <h5 className="card-title">Elegant Dining Area</h5>
                      <p className="card-text">Bring class and functionality to your dining space with our designs.</p>
                      <button className="btn btn-primary">View More</button>
                    </div>
                  </div>
                </div>

                {/* Card 5 */}
                <div className="col-md-4 mb-4">
                  <div className="card custom-card h-100">
                    <img src="/images/Amazing Modular Kitchen Ideas🤩.jpg" className="card-img-top" alt="Design 5" />
                    <div className="card-body">
                      <h5 className="card-title">Chic Office Setup</h5>
                      <p className="card-text">Create a productive environment with our sleek office interior solutions.</p>
                      <button className="btn btn-primary">View More</button>
                    </div>
                  </div>
                </div>

                {/* Card 6 */}
                <div className="col-md-4 mb-4">
                  <div className="card custom-card h-100">
                    <img src="/images/b511a414-23f8-4405-b0a3-c6360f4163aa.jpg" className="card-img-top" alt="Design 6" />
                    <div className="card-body">
                      <h5 className="card-title">Cozy Study Corner</h5>
                      <p className="card-text">Design a warm and inviting study space perfect for focus and creativity.</p>
                      <button className="btn btn-primary">View More</button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Read More / Show Less Button for Cards */}
          <div className="text-center mt-4">
            <button className="btn btn-outline-info" onClick={handleReadMore}>
              {showMore ? 'Show Less' : 'Read More'}
            </button>
          </div>
        </div>
      </div>

      {/* Your Original Testimonials Section - COMPLETELY PRESERVED */}
      <div className="testimonials-section py-5">
        <div className="container text-center">
          <h2 className="section-title mb-4" style={{ color: '#07eeff' }}>What Our Clients Say</h2>
          <div className="row justify-content-center">

            {/* Testimonials 1 - 6 */}
            <div className="col-md-4 mb-4"><div className="testimonial-card p-4"><p>"Amazing service! The interior design transformed my house beautifully."</p><h5>Rahul Sharma</h5></div></div>
            <div className="col-md-4 mb-4"><div className="testimonial-card p-4"><p>"Creative ideas and professional execution. Highly recommended!"</p><h5>Anita Verma</h5></div></div>
            <div className="col-md-4 mb-4"><div className="testimonial-card p-4"><p>"They made my dream kitchen a reality. Very happy with the results!"</p><h5>Karan Joshi</h5></div></div>
            <div className="col-md-4 mb-4"><div className="testimonial-card p-4"><p>"Their team was so professional and understood my needs perfectly."</p><h5>Meera Singh</h5></div></div>
            <div className="col-md-4 mb-4"><div className="testimonial-card p-4"><p>"Loved the design suggestions! My living room looks fantastic now."</p><h5>Vikram Patel</h5></div></div>
            <div className="col-md-4 mb-4"><div className="testimonial-card p-4"><p>"Excellent service from start to finish. Highly professional team!"</p><h5>Sneha Kapoor</h5></div></div>

            {/* Extra Testimonials 7 - 9 */}
            {showMoreTestimonials && (
              <>
                <div className="col-md-4 mb-4"><div className="testimonial-card p-4"><p>"Affordable and trendy designs. My office space looks modern and refreshing now!"</p><h5>Arjun Mehta</h5></div></div>
                <div className="col-md-4 mb-4"><div className="testimonial-card p-4"><p>"Impressed by their timely delivery and attention to detail. Would recommend to everyone."</p><h5>Pooja Desai</h5></div></div>
                <div className="col-md-4 mb-4"><div className="testimonial-card p-4"><p>"They transformed our restaurant's ambiance — customers are loving the new vibe!"</p><h5>Ramesh Choudhary</h5></div></div>
              </>
            )}
          </div>

          {/* Read More / Show Less Button for Testimonials */}
          <div className="text-center mt-4">
            <button className="btn btn-outline-info" onClick={handleReadMoreTestimonials}>
              {showMoreTestimonials ? 'Show Less' : 'Read More'}
            </button>
          </div>
        </div>
      </div>

      <Footer />
      <AboutDeveloper />
    </div>
  );
};

export default App;