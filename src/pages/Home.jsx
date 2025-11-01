// src/pages/Home.jsx
import { useEffect, useState, useContext } from 'react';
import supabase from '../supabaseClient';
import ProductCard from '../components/ProductCard';
import { SearchContext } from '../context/SearchContext';

const Home = () => {
  const [products, setProducts] = useState([]);
  const { searchTerm } = useContext(SearchContext);

  const tables = ['shirts_and_polos', 'trousers', 'caps', 'jewelries', 'shoes'];

  const fetchFromTable = async (table) => {
    const { data, error } = await supabase
      .from(table)
      .select('*')
      .order('created_at', { ascending: false })
      .limit(2);

    if (error) {
      console.error(`Error fetching from ${table}:`, error.message);
      return [];
    }

    return data.map((item) => ({ ...item, _category: table }));
  };

  useEffect(() => {
    const fetchAll = async () => {
      const allResults = await Promise.all(tables.map(fetchFromTable));
      const combined = allResults.flat();
      const shuffled = combined.sort(() => Math.random() - 0.5);
      setProducts(shuffled);
    };

    fetchAll();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Background images for hero and sections
  const heroImages = [
    'https://vnwhmwwknjuzosarlump.supabase.co/storage/v1/object/public/images/IMG-20251024-WA0000.jpg',
    'https://vnwhmwwknjuzosarlump.supabase.co/storage/v1/object/public/images/IMG-20251024-WA0004.jpg',
    'https://vnwhmwwknjuzosarlump.supabase.co/storage/v1/object/public/images/IMG-20251024-WA0005.jpg',
  ];

  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const galleryImages = [
    'https://images.unsplash.com/photo-1587300003388-59208cc962cb',
    'https://images.unsplash.com/photo-1596464716121-3b4b62a9e2e6',
    'https://images.unsplash.com/photo-1612817159949-1da3c2b4df07',
    'https://images.unsplash.com/photo-1596464716121-3b4b62a9e2e7',
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    }, 3500);
    return () => clearInterval(slideInterval);
  }, []);

  // Simple navigation using window.location (since no useNavigate)
  const goToCategory = (category) => {
    window.location.href = `/category/${category}`;
  };

  return (
    <div className="home-container">
      {/* 🌀 Scrolling message */}
      <div className="scroll-banner">
        <p>
          <strong>Bitchcraft Clawz</strong> — Nail the look. Slay with style. 💅✨
        </p>
      </div>

      {/* 💅 Hero Section */}
      <div
        className="hero-section"
        style={{
          backgroundImage: `url(${heroImages[currentBg]})`,
        }}
      >
        <div className="overlay">
          <div className="welcome-message">
            <h2>Welcome to Bitchcraft Clawz</h2>
            <p>
              Where art meets confidence — your one-stop destination for flawless nails,
              bold accessories, and unmatched elegance. Be bold, be flawless, be *you*.
            </p>
          </div>
        </div>
      </div>

      {/* 💅 Shop Nails Section */}
      <div
        className="shop-section"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1612817159949-1da3c2b4df07)',
        }}
      >
        <div className="overlay">
          <h2>Shop Our Exclusive Nail Collection</h2>
          <button onClick={() => goToCategory('nails')}>Shop Nails</button>
        </div>
      </div>

      {/* 👓 Shop Glasses Section */}
      <div
        className="shop-section"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1587300003388-59208cc962cb)',
        }}
      >
        <div className="overlay">
          <h2>Discover Luxury Glasses & Accessories</h2>
          <button onClick={() => goToCategory('glasses')}>Shop Glasses</button>
        </div>
      </div>

      {/* 🖼️ Swipeable Gallery */}
      <div className="gallery-section">
        <div
          className="gallery-slider"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {galleryImages.map((img, i) => (
            <div key={i} className="gallery-slide">
              <img src={img} alt={`Gallery ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {/* 🎨 Styles */}
      <style jsx="true">{`
        .scroll-banner {
          background: linear-gradient(90deg, #000, #ff69b4);
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
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .hero-section,
        .shop-section {
          height: 70vh;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          position: relative;
          transition: background-image 1s ease-in-out;
          display: flex;
          align-items: center;
          justify-content: center;
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
          padding: 0 15px;
        }

        .overlay h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .overlay button {
          background: #ff69b4;
          border: none;
          color: white;
          padding: 12px 25px;
          border-radius: 30px;
          font-weight: bold;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .overlay button:hover {
          background: #ff85c1;
          transform: scale(1.05);
        }

        .gallery-section {
          overflow: hidden;
          width: 100%;
          position: relative;
          height: 300px;
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
          .hero-section,
          .shop-section {
            height: 55vh;
          }

          .overlay h2 {
            font-size: 1.5rem;
          }

          .overlay button {
            padding: 10px 20px;
            font-size: 0.9rem;
          }

          .gallery-section {
            height: 200px;
          }

          .gallery-slide img {
            height: 200px;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
