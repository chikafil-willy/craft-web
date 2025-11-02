import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  MdSearch,
  MdShoppingCart,
  MdMenu,
  MdClose,
  MdClear,
} from "react-icons/md";
import logo from "../assets/logo.png";
import CategoryDropdown from "./CategoryDropdown";
import { useCart } from "../context/CartContext";
import { useSearch } from "../context/SearchContext";

const Navbar = () => {
  const { cart } = useCart();
  const { searchTerm, setSearchTerm } = useSearch();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  // 🧩 Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className="navbar">
      {/* LEFT SIDE - LOGO */}
      <div className="navbar-left">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>

      {/* RIGHT SIDE - DESKTOP VIEW */}
      <div className="navbar-right desktop-only">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <CategoryDropdown />
        <Link to="/about" className="nav-link">
          About Us
        </Link>

        {/* SEARCH BAR */}
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button className="search-btn" onClick={() => setSearchTerm("")}>
              <MdClear size={18} />
            </button>
          )}
          <button className="search-btn">
            <MdSearch size={20} />
          </button>
        </div>

        {/* CART ICON */}
        <Link to="/cart" className="cart-link">
          <MdShoppingCart size={22} />
          <span className="cart-count">{cartItemCount}</span>
        </Link>
      </div>

      {/* RIGHT SIDE - MOBILE VIEW */}
      <div className="navbar-right mobile-only">
        {/* Search beside hamburger */}
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button className="search-btn" onClick={() => setSearchTerm("")}>
              <MdClear size={18} />
            </button>
          )}
          <button className="search-btn">
            <MdSearch size={20} />
          </button>
        </div>

        {/* Hamburger / Close */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
         {menuOpen ? (
          <MdClose size={25} color="white" />
            ) : (
            <MdMenu size={25} color="white" />
            )}
</button>

        {/* Cart icon */}
        <Link to="/cart" className="cart-link">
          <MdShoppingCart size={22} />
          <span className="cart-count">{cartItemCount}</span>
        </Link>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {menuOpen && (
        <div className="mobile-menu" ref={menuRef}>
          <Link
            to="/"
            className="mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/category/Nails"
            className="mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            Nails
          </Link>
          <Link
            to="/category/Glasses"
            className="mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            Glasses
          </Link>
          <Link
            to="/about"
            className="mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </Link>
        </div>
      )}

      {/* INLINE MOBILE MENU STYLES */}
      <style jsx="true">{`
        .mobile-menu {
          position: absolute;
          top: 70px;
          right: 15px;
          background: black;
          border-radius: 10px;
          padding: 16px 20px;
          width: 170px;
          display: flex;
          flex-direction: column;
          gap: 18px;
          z-index: 999;
          animation: slideDown 0.3s ease;
        }

        .mobile-link {
          color: white;
          text-decoration: none;
          font-size: 16px;
          font-weight: 500;
        }

        .mobile-link:hover {
          text-decoration: underline;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* RESPONSIVE HANDLING */
        @media (max-width: 768px) {
          .desktop-only {
            display: none;
          }
        }

        @media (min-width: 769px) {
          .mobile-only {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
