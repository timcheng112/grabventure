function Header({ name }) {
  return (
    <div>
      <div
        style={{
          background: "linear-gradient(to right, #30c196, #229cc2)",
          height: "150px",
          color: "white",
          fontSize: "30px",
          textAlign: "justify",
          paddingTop: "50px",
          paddingLeft: "40px",
        }}
      >
        {name}
      </div>
    </div>
  );
}
export default Header;
