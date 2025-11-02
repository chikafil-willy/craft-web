import React from "react";

const AboutUs = () => {
  return (
    <section
      style={{
        backgroundColor: "#0d0d0d",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        padding: "60px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          textAlign: "center",
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          borderRadius: "12px",
          padding: "40px 30px",
          backdropFilter: "blur(5px)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginBottom: "20px",
            color: "#f5a623",
          }}
        >
          About BitchCraft Clawz
        </h1>

        <p style={{ fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "15px" }}>
          Welcome to <strong>BitchCraft Clawz</strong> — where luxury meets bold
          confidence. Bitchcraftclawz was born from a love of beauty, self expression and pure Goddess energy. We started as a passion for creating unique nail art soon evolved into a brand that celebrates confidence, individuality, and feminine power. We specialize in high-end <strong>nails</strong> and{" "}
          <strong>glasses</strong> designed for men and women who know their worth and
          aren’t afraid to show it.
        </p>

        <p style={{ fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "15px" }}>
          At BitchCraftclawz, we believe beauty is power — and our products are
          crafted to help you own every room you walk into. Each collection is
          carefully curated to reflect sophistication, attitude, and originality.
        </p>

        <p style={{ fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "15px" }}>
          From premium press-on nails with flawless designs to statement glasses
          that redefine elegance — every piece is made to enhance your
          individuality and elevate your look effortlessly.
        </p>

        <p
          style={{
            fontStyle: "italic",
            fontSize: "1.2rem",
            marginTop: "25px",
            color: "#ffb6c1",
          }}
        >
          BitchCraftclawz — Where Luxury Meets Magic.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
