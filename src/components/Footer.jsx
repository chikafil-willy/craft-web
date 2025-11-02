import React from "react";
import whatsappLogo from "../assets/whatsapp.png";
import instagramLogo from "../assets/instagram.png";
import logo from "../assets/logo.png"; // ✅ make sure this path is correct

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#302e2e",
        textAlign: "center",
        padding: "2rem 0 1rem 0",
        borderTop: "1px solid #444",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
      }}
    >
      {/* 🪞 Logo Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={logo}
          alt="BitchCraft Logo"
          style={{
            width: "90px",
            height: "90px",
            objectFit: "contain",
            borderRadius: "50%",
          }}
        />
      </div>

      {/* 🌐 Social Icons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1.2rem",
          marginTop: "0.8rem",
        }}
      >
        <a
          href="https://wa.me/2348085753930"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={whatsappLogo}
            alt="WhatsApp"
            style={{
              width: "30px",
              height: "30px",
              objectFit: "contain",
              borderRadius: "50%",
              cursor: "pointer",
              transition: "transform 0.3s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </a>

        <a
          href="https://www.instagram.com/bitchcraftsclawz?igsh=ZDBkN2pyZWhnaTZw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={instagramLogo}
            alt="Instagram"
            style={{
              width: "30px",
              height: "30px",
              objectFit: "contain",
              borderRadius: "50%",
              cursor: "pointer",
              transition: "transform 0.3s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </a>
      </div>

      {/* 📧 Contact Info */}
      <p
        style={{
          color: "#f5a623",
          fontWeight: "500",
          margin: "0.5rem 0 0",
        }}
      >
        📧 bitchcraftclawz@yahoo.com
      </p>

      <p
        style={{
          fontSize: "0.9rem",
          color: "#c0a5a5ff",
          margin: "0.3rem 0",
        }}
      >
        © 2025 BitchCraftClawz. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
