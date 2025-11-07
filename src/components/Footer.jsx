import React from "react";
import whatsappLogo from "../assets/whatsapp.png";
import instagramLogo from "../assets/instagram.png";
import logo from "../assets/logo.png";

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
      {/* 🪞 Logo */}
      <div>
        <img
          src={logo}
          alt="BitchCraftClawz Logo"
          style={{
            width: "90px",
            height: "90px",
            objectFit: "contain",
            borderRadius: "10px",
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
          marginTop: "0.5rem",
        }}
      >
        <a
          href="https://wa.me/08085753930"
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

      {/* 📧 Contact + Policies */}
      <p
        style={{
          color: "#f5a623",
          fontWeight: "500",
          margin: "0.5rem 0 0",
          fontSize: "0.95rem",
        }}
      >
        📧 mistresssharon224@yahoo.com &nbsp; | &nbsp;
        <a
          href="/policy"
          style={{
            color: "#f5a623",
            textDecoration: "none",
            transition: "color 0.3s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.color = "#fff")}
          onMouseOut={(e) => (e.currentTarget.style.color = "#f5a623")}
        >
          Policies
        </a>
      </p>

      {/* ⚖️ Copyright */}
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
