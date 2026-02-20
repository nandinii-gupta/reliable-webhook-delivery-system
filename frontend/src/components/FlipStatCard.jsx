import { useState } from "react";

const FlipStatCard = ({ color, icon, title, value, backData }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      style={{
        perspective: "1000px",
        cursor: "pointer",
        height: "120px",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          transition: "transform 0.6s ease",
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            background: "#ffffff",
            borderRadius: "16px",
            padding: "20px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              background: color,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
              color: "#fff",
              fontWeight: "600",
            }}
          >
            {icon}
          </div>

          <div>
            <p
              style={{
                fontSize: "14px",
                color: "#64748b",
                marginBottom: "4px",
                fontWeight: 500,
              }}
            >
              {title}
            </p>
            <h2
              style={{
                fontSize: "28px",
                fontWeight: "700",
                color: "#0f172a",
              }}
            >
              {value}
            </h2>
          </div>
        </div>

        {/* Back */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            background: "#0f172a",
            color: "#fff",
            borderRadius: "16px",
            padding: "20px",
            transform: "rotateY(180deg)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "6px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
          }}
        >
          {backData.map((item, index) => (
            <span
              key={index}
              style={{
                fontSize: "14px",
                opacity: 0.9,
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlipStatCard;