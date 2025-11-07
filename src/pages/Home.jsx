// src/pages/Home.jsx
import { useEffect, useState, useContext } from 'react';
import supabase from '../supabaseClient';
import { SearchContext } from '../context/SearchContext';

import hero1 from '../assets/hero1.jpg';
import hero2 from '../assets/hero2.jpg';
import hero3 from '../assets/hero3.jpg';
import nailsBg from '../assets/nails-bg.jpg';
import glassesBg from '../assets/glasses-bg.jpg';
import gallery1 from '../assets/gallery1.jpg';
import gallery2 from '../assets/gallery2.jpg';
import gallery3 from '../assets/gallery3.jpg';
import gallery4 from '../assets/gallery4.jpg';

const Home = () => {
  const [products, setProducts] = useState([]);
  const { searchTerm } = useContext(SearchContext);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const heroImages = [hero1, hero2, hero3];
  const galleryImages = [gallery1, gallery2, gallery3, gallery4];
  const [currentBg, setCurrentBg] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const bgInterval = setInterval(() => setCurrentBg((prev) => (prev + 1) % heroImages.length), 4000);
    const slideInterval = setInterval(() => setCurrentSlide((prev) => (prev + 1) % galleryImages.length), 3500);
    return () => {
      clearInterval(bgInterval);
      clearInterval(slideInterval);
    };
  }, []);

  // 🎯 Inline styles for first hero (fully controlled)
  const heroContainerStyle = {
  height: isMobile ? '55vh' : '70vh',
  backgroundImage: `url(${heroImages[currentBg]})`,
  backgroundSize: isMobile ? 'cover' : '70%', // 👈 adjust zoom here
  backgroundPosition: isMobile ? 'center' : 'center 20%', // 👈 adjust focus area
  position: 'relative',
  backgroundRepeat: 'no-repeat', // 👈 add this line
  backgroundColor: 'black',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  marginBottom: '20px',
  transition: 'background-image 1s ease-in-out', // 👈 add this
};


  const heroOverlayStyle = {
    background: 'rgba(0, 0, 0, 0.55)',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    color: '#fff',
    paddingLeft: isMobile ? '20px' : '80px',
    paddingRight: '20px',
    textAlign: 'left',
    boxSizing: 'border-box',
  };

  const h2Style = {
    fontSize: isMobile ? '2rem' : '3.8rem',
    color: '#ffb6c1',
    fontWeight: 700,
    marginBottom: '15px',
    lineHeight: 1.2,
  };

  const pStyle = {
    fontSize: isMobile ? '1rem' : '1.3rem',
    color: '#f2f2f2',
    lineHeight: 1.6,
    maxWidth: isMobile ? '90%' : '550px',
    marginBottom: '20px',
  };

  const buttonStyle = {
    background: '#ff69b4',
    border: 'none',
    color: 'white',
    padding: isMobile ? '10px 20px' : '12px 25px',
    borderRadius: '30px',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'all .3s ease',
  };

  const goToCategory = (category) => {
    window.location.href = `/category/${category}`;
  };

  return (
    <div className="home-container">
      <div className="scroll-banner">
        <p>
          <strong>Bitchcraft Clawz</strong> — Nail the look. Slay with style. 💅✨
        </p>
      </div>

      {/* 🎯 First Hero Section */}
      <div style={heroContainerStyle}>
        <div style={heroOverlayStyle}>
          <div style={{ ...h2Style, lineHeight: 1.5 }}>
            <div>WELCOME</div>
             <div>to</div>
             <div>BITCHCRAFT</div>
             <div>Clawz</div>
          </div>

          <p style={pStyle}>
            Where art meets confidence.
          </p>
          <button
            style={buttonStyle}
            onMouseOver={(e) => (e.target.style.background = '#ff85c1')}
            onMouseOut={(e) => (e.target.style.background = '#ff69b4')}
            onClick={() => goToCategory('nails')}
          >
            Shop Now
          </button>
        </div>
      </div>

      {/* 💅 Shop Nails Section */}
      <div className="shop-section" style={{ backgroundImage: `url(${nailsBg})` }}>
        <div className="overlay">
          <h2>Shop Our Exclusive Nail Collection</h2>
          <button
            style={buttonStyle}
            onMouseOver={(e) => (e.target.style.background = '#ff85c1')}
            onMouseOut={(e) => (e.target.style.background = '#ff69b4')}
            onClick={() => goToCategory('nails')}
          >
            Shop Nails
          </button>
        </div>
      </div>

      {/* 😎 Shop Glasses Section */}
      <div className="shop-section" style={{ backgroundImage: `url(${glassesBg})` }}>
        <div className="overlay">
          <h2>Discover Luxury Glasses & Accessories</h2>
          <button
            style={buttonStyle}
            onMouseOver={(e) => (e.target.style.background = '#ff85c1')}
            onMouseOut={(e) => (e.target.style.background = '#ff69b4')}
            onClick={() => goToCategory('glasses')}
          >
            Shop Glasses
          </button>
        </div>
      </div>

      {/* 🖼️ Gallery Section */}
      <div className="gallery-section">
        <div className="gallery-slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {galleryImages.map((img, i) => (
            <div key={i} className="gallery-slide">
              <img src={img} alt={`Gallery ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <style jsx="true">{`
        .scroll-banner {
          background: linear-gradient(90deg, #000, #573848ff);
          color: white;
          padding: 10px 0;
          font-weight: bold;
          overflow: hidden;
          white-space: nowrap;
          position: relative;
        }

        .scroll-banner p {
          display: inline-block;
          padding-left: 100%;
          animation: scrollText 15s linear infinite;
        }

        @keyframes scrollText {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }

        .shop-section {
          height: 70vh;
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .overlay {
          background: rgba(0, 0, 0, 0.55);
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #fff;
          text-align: center;
        }

        .overlay h2 {
          font-size: 2rem;
          margin-bottom: 15px;
        }

        .gallery-section {
          overflow: hidden;
          width: 100%;
          height: 300px;
          margin-top: 50px;
        }

        .gallery-slider {
          display: flex;
          transition: transform 1s ease-in-out;
        }

        .gallery-slide {
          min-width: 100%;
        }

        .gallery-slide img {
          width: 100%;
          height: 300px;
          object-fit: cover;
        }

        @media (max-width: 768px) {
          .shop-section {
            height: 55vh;
          }
          .overlay h2 {
            font-size: 1.5rem;
          }
        }
          
      `}</style>
    </div>
  );
};

export default Home;
