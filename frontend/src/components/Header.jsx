const Header = () => {
  return (
    <div
      style={{
        padding: "22px 40px 10px 40px",
        background: "#f5f6fa",
        borderBottom: "1px solid #e2e8f0",
      }}
    >
      <p
        style={{
          fontSize: "13px",
          color: "#94a3b8",
          marginBottom: "4px",
        }}
      >
        Dashboard
      </p>

      <h1
        style={{
          fontSize: "26px",
          fontWeight: "700",
          color: "#1e293b",
        }}
      >
        System Monitoring Dashboard
      </h1>
    </div>
  );
};

export default Header;