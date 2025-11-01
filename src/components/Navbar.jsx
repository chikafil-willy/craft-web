import React, { useState } from "react";
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

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      {/* LEFT SIDE - LOGO */}
      <div className="navbar-left">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>

      {/* RIGHT SIDE - DESKTOP */}
      <div className="navbar-right desktop-only">
        <Link to="/" className="nav-link">Home</Link>
        <CategoryDropdown />
        <Link to="/about" className="nav-link">About Us</Link>

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

      {/* MOBILE VIEW */}
      <div className="navbar-right mobile-only">
        {/* Search bar beside hamburger */}
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

        {/* Hamburger / Close icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          {menuOpen ? <MdClose size={25} /> : <MdMenu size={25} />}
        </button>

        {/* Cart Icon */}
        <Link to="/cart" className="cart-link">
          <MdShoppingCart size={22} />
          <span className="cart-count">{cartItemCount}</span>
        </Link>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {menuOpen && (
        <div className="mobile-menu">
          <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <CategoryDropdown />
          <Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>
            About Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
