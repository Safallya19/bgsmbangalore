import React, { useState } from 'react';
import './Welcome.css';
import ImageModal from './ImageModal';

export default function Welcome({ onRegisterClick }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageAlt, setImageAlt] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    { src: require('./assets/tulsi-vivah.jpg'), alt: 'Tulsi Vivah Main Celebration' },
    { src: require('./assets/tulsi-vivah-2.jpg'), alt: 'Tulsi Vivah Devotees' },
    { src: require('./assets/tulsi-vivah-3.jpg'), alt: 'Tulsi Vivah Ceremony' }
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(timer);
  }, []);

  const handlePrevImage = () => {
    setCurrentImageIndex(prevIndex => 
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex(prevIndex => 
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="welcome-container">
      <header className="main-header">
        <div className="logo-container">
          <img src={require('./assets/bgsm.png')} alt="BGSM Logo" className="main-logo" />
        </div>
        <nav className="main-nav">
          <a 
            href="https://www.facebook.com/profile.php?id=61580862766074" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-button facebook-button"
          >
            <i className="fab fa-facebook-f"></i> Follow us
          </a>
          <button onClick={onRegisterClick} className="register-button">
            Register Now
          </button>
        </nav>
      </header>

      <main className="main-content">
        <section className="hero-section">
          <h1>Welcome to Bengaluru BGSM Unit</h1>
          <p className="subtitle">A Center for Spiritual Knowledge and Divine Love</p>
        </section>

        <section className="content-section">
          <h2 className="section-title">Gallery</h2>
          <div className="content-grid">
            <div className="content-card image-card">
              <div className="tulsi-vivah-gallery">
                <div className="gallery-main">
                  <button className="gallery-nav prev" onClick={handlePrevImage}>❮</button>
                  <img 
                    src={galleryImages[currentImageIndex].src} 
                    alt={galleryImages[currentImageIndex].alt} 
                    className="main-image" 
                    onClick={() => {
                      setSelectedImage(galleryImages[currentImageIndex].src);
                      setImageAlt(galleryImages[currentImageIndex].alt);
                    }}
                  />
                  <button className="gallery-nav next" onClick={handleNextImage}>❯</button>
                </div>
                <div className="gallery-dots">
                  {galleryImages.map((_, index) => (
                    <span 
                      key={index} 
                      className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
              </div>
              <div className="card-content">
                <h3>तुलसी विवाह</h3>
                <p>Tulsi Vivah Celebrations</p>
                <p className="event-date">Dev Uthani Ekadashi</p>
                <a href="#festivals" className="learn-more">View Gallery</a>
              </div>
            </div>

            <div className="content-card image-card">
              <div className="image-wrapper">
                <img src={require('./assets/bgsm.png')} alt="BGSM Activities" />
              </div>
              <div className="card-content">
                <h3>BGSM Activities</h3>
                <p>Spiritual Programs & Events</p>
                <a href="#activities" className="learn-more">Learn More</a>
              </div>
            </div>
          </div>
        </section>

        <section className="founder-section">
          <div className="founder-content">
            <h2>Our Founder</h2>
          <div id="founder-devi" className="founder-card">
            <div className="founder-image">
              <img src={require('./assets/devi-ji.jpg')} alt="Devi Ji" />
              </div>
              <div className="founder-info">
                <h3>Pujaniya Raseshwari Devi Ji</h3>
                <h4>Founder, BGSM</h4>
                <div className="founder-description">
                  <p>
                    Devi ji was born into a family devoted to their Guru, where service to him was central. 
                    From birth, her life revolved around this divine commitment, with her parents providing 
                    a solid example through their unwavering dedication.
                  </p>
                  <p>
                    Her education and upbringing were shaped by the Guru's teachings and the spirit of service. 
                    At just 21 days old, Shri Maharaj Ji prophesied that she would spread Shri Krishna Bhakti 
                    across the world. This prophecy became the cornerstone of her life.
                  </p>
                  <p>
                    Guided by her parents' genuine conduct and steadfast care, she grew up with an unshakable 
                    faith in her mission to serve and preach. Her unique persona is about a devotee, a preacher, 
                    a guide, a motivator rolled into one.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div id="founder-swami" className="founder-card swami-section">
            <div className="founder-image">
              <img src={require('./assets/swami-ji.jpg')} alt="Swami Yugal Sharan" />
            </div>
            <div className="founder-info">
              <h3>Swami Yugal Sharan</h3>
              <h4>Co-Founder, BGSM</h4>
              <div className="founder-description">
                <p>
                  Life's journey often surprises us with unexpected turns, leading to places we never 
                  envisioned. Swami Yugal Sharan's story is a compelling example, depicting his 
                  transformation from a scientist to a monk through spiritual awakening.
                </p>
                <p>
                  As a philosopher, visionary, and spiritual leader, he co-founded the Braj Gopika 
                  Seva Mission (BGSM), embodying the profound changes that come from deep inner 
                  reflection and devotion.
                </p>
                <p>
                  "You will spread my name and message to every corner of the world." This was the 
                  instruction from Swami Ji's Guru when he took sanyasa. Swami Yugal Sharan's path 
                  demonstrates the powerful impact a spiritual journey can have on one's life and 
                  the world around them.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="quote-section">
          <blockquote>
            "This recognition highlights his exceptional contribution to spiritual thought 
            and his role in harmonizing diverse philosophical traditions."
          </blockquote>
        </section>

        <section className="contact-section">
          <h2>Contact Us</h2>
          <div className="contact-grid">
            <div className="contact-card">
              <h3>Krishna Didi</h3>
              <div className="contact-info">
                <p className="contact-role">Program Coordinator</p>
                <p className="contact-divider">•</p>
                <p className="contact-email">krishna.didi@bgsm.org</p>
              </div>
            </div>
            <div className="contact-card">
              <h3>Chetana Didi</h3>
              <div className="contact-info">
                <p className="contact-role">Administrative Head</p>
                <p className="contact-divider">•</p>
                <p className="contact-email">chetana.didi@bgsm.org</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="main-footer">
        <div className="footer-content">
          <p>© 2025 All Rights Reserved.</p>
        </div>
      </footer>

      <ImageModal 
        image={selectedImage}
        alt={imageAlt}
        onClose={() => {
          setSelectedImage(null);
          setImageAlt('');
        }}
        onNext={() => {
          const nextIndex = (currentImageIndex + 1) % galleryImages.length;
          setCurrentImageIndex(nextIndex);
          setSelectedImage(galleryImages[nextIndex].src);
          setImageAlt(galleryImages[nextIndex].alt);
        }}
        onPrevious={() => {
          const prevIndex = currentImageIndex === 0 ? galleryImages.length - 1 : currentImageIndex - 1;
          setCurrentImageIndex(prevIndex);
          setSelectedImage(galleryImages[prevIndex].src);
          setImageAlt(galleryImages[prevIndex].alt);
        }}
        hasNext={true}
        hasPrevious={true}
      />
    </div>
  );
}
